from __future__ import annotations

import html
from pathlib import Path

from lxml import etree
from lxml import html as lxml_html
from reportlab.lib import colors
from reportlab.lib.enums import TA_CENTER, TA_LEFT
from reportlab.lib.pagesizes import A4
from reportlab.lib.styles import ParagraphStyle, getSampleStyleSheet
from reportlab.lib.units import mm
from reportlab.pdfbase import pdfmetrics
from reportlab.pdfbase.ttfonts import TTFont
from reportlab.platypus import (
    HRFlowable,
    Image,
    PageBreak,
    Paragraph,
    SimpleDocTemplate,
    Spacer,
    Table,
    TableStyle,
)


ROOT = Path(__file__).resolve().parents[1]
HTML_PATH = ROOT / "letture" / "la-meraviglia-del-dna.html"
IMAGE_PATH = ROOT / "assets" / "reading-meraviglia-dna.webp"
OUTPUT_PATH = ROOT / "downloads" / "la-meraviglia-del-dna-a1-c1.pdf"

PAGE_WIDTH, PAGE_HEIGHT = A4
TEAL = colors.HexColor("#155F4D")
TEAL_LIGHT = colors.HexColor("#E8F4EF")
INK = colors.HexColor("#231D17")
MUTED = colors.HexColor("#6F6255")
CREAM = colors.HexColor("#FFF7ED")
CORAL = colors.HexColor("#C9654A")
LINE = colors.HexColor("#D7C4AE")


def register_fonts() -> tuple[str, str, str]:
    font_dir = Path("C:/Windows/Fonts")
    fonts = {
        "DnaBody": font_dir / "arial.ttf",
        "DnaBodyBold": font_dir / "arialbd.ttf",
        "DnaTitle": font_dir / "georgia.ttf",
    }
    if all(path.exists() for path in fonts.values()):
        for name, path in fonts.items():
            pdfmetrics.registerFont(TTFont(name, str(path)))
        return "DnaBody", "DnaBodyBold", "DnaTitle"
    return "Helvetica", "Helvetica-Bold", "Times-Roman"


BODY_FONT, BOLD_FONT, TITLE_FONT = register_fonts()


def clean_text(value: str) -> str:
    replacements = {
        "\u2013": "-",
        "\u2014": "-",
        "\u2011": "-",
        "\u2192": "->",
        "\u00d7": "x",
        "\u00b2": "^2",
        "\u00c5": "A",
    }
    for source, target in replacements.items():
        value = value.replace(source, target)
    return " ".join(value.split())


def text_of(node: etree._Element) -> str:
    return clean_text(" ".join(node.itertext()))


def ptext(value: str) -> str:
    return html.escape(clean_text(value), quote=False)


def make_styles():
    styles = getSampleStyleSheet()
    return {
        "cover_kicker": ParagraphStyle(
            "CoverKicker",
            parent=styles["Normal"],
            fontName=BOLD_FONT,
            fontSize=9,
            leading=12,
            textColor=CORAL,
            alignment=TA_CENTER,
            spaceAfter=7,
        ),
        "cover_title": ParagraphStyle(
            "CoverTitle",
            parent=styles["Title"],
            fontName=TITLE_FONT,
            fontSize=31,
            leading=36,
            textColor=INK,
            alignment=TA_CENTER,
            spaceAfter=10,
        ),
        "cover_subtitle": ParagraphStyle(
            "CoverSubtitle",
            parent=styles["Normal"],
            fontName=BODY_FONT,
            fontSize=13,
            leading=19,
            textColor=MUTED,
            alignment=TA_CENTER,
            spaceAfter=14,
        ),
        "level": ParagraphStyle(
            "Level",
            parent=styles["Heading1"],
            fontName=TITLE_FONT,
            fontSize=23,
            leading=28,
            textColor=INK,
            spaceAfter=6,
        ),
        "grammar": ParagraphStyle(
            "Grammar",
            parent=styles["Normal"],
            fontName=BOLD_FONT,
            fontSize=9,
            leading=12,
            textColor=TEAL,
            spaceAfter=12,
        ),
        "body": ParagraphStyle(
            "Body",
            parent=styles["BodyText"],
            fontName=BODY_FONT,
            fontSize=10.2,
            leading=15.3,
            textColor=INK,
            spaceAfter=8,
            allowWidows=0,
            allowOrphans=0,
        ),
        "box_title": ParagraphStyle(
            "BoxTitle",
            parent=styles["Heading3"],
            fontName=BOLD_FONT,
            fontSize=10,
            leading=13,
            textColor=TEAL,
            spaceAfter=4,
        ),
        "box_body": ParagraphStyle(
            "BoxBody",
            parent=styles["BodyText"],
            fontName=BODY_FONT,
            fontSize=9.2,
            leading=13.5,
            textColor=INK,
        ),
        "question": ParagraphStyle(
            "Question",
            parent=styles["BodyText"],
            fontName=BODY_FONT,
            fontSize=10,
            leading=15,
            textColor=INK,
        ),
        "sources_title": ParagraphStyle(
            "SourcesTitle",
            parent=styles["Heading1"],
            fontName=TITLE_FONT,
            fontSize=22,
            leading=27,
            textColor=INK,
            spaceAfter=12,
        ),
        "source": ParagraphStyle(
            "Source",
            parent=styles["BodyText"],
            fontName=BODY_FONT,
            fontSize=8.8,
            leading=13,
            textColor=INK,
            leftIndent=14,
            firstLineIndent=-14,
            spaceAfter=8,
        ),
    }


STYLES = make_styles()


def draw_page(canvas, doc):
    canvas.saveState()
    canvas.setStrokeColor(LINE)
    canvas.setLineWidth(0.45)
    canvas.line(18 * mm, 16 * mm, PAGE_WIDTH - 18 * mm, 16 * mm)
    canvas.setFont(BODY_FONT, 7.5)
    canvas.setFillColor(MUTED)
    canvas.drawString(18 * mm, 10.5 * mm, "Italiano con Martin - La meraviglia del DNA")
    canvas.drawRightString(PAGE_WIDTH - 18 * mm, 10.5 * mm, f"Pagina {doc.page}")
    canvas.restoreState()


def info_box(title: str, content: str):
    body = [
        Paragraph(ptext(title), STYLES["box_title"]),
        Paragraph(ptext(content), STYLES["box_body"]),
    ]
    table = Table([[body]], colWidths=[165 * mm])
    table.setStyle(
        TableStyle(
            [
                ("BACKGROUND", (0, 0), (-1, -1), CREAM),
                ("BOX", (0, 0), (-1, -1), 0.7, LINE),
                ("LEFTPADDING", (0, 0), (-1, -1), 12),
                ("RIGHTPADDING", (0, 0), (-1, -1), 12),
                ("TOPPADDING", (0, 0), (-1, -1), 10),
                ("BOTTOMPADDING", (0, 0), (-1, -1), 10),
            ]
        )
    )
    return table


def question_box(question: str):
    content = [
        Paragraph("DOMANDA IN ITALIANO", STYLES["box_title"]),
        Paragraph(ptext(question), STYLES["question"]),
        Spacer(1, 8),
        HRFlowable(width="100%", thickness=0.5, color=LINE),
        Spacer(1, 18),
        HRFlowable(width="100%", thickness=0.5, color=LINE),
        Spacer(1, 18),
        HRFlowable(width="100%", thickness=0.5, color=LINE),
    ]
    table = Table([[content]], colWidths=[165 * mm])
    table.setStyle(
        TableStyle(
            [
                ("BACKGROUND", (0, 0), (-1, -1), TEAL_LIGHT),
                ("BOX", (0, 0), (-1, -1), 0.8, TEAL),
                ("LEFTPADDING", (0, 0), (-1, -1), 12),
                ("RIGHTPADDING", (0, 0), (-1, -1), 12),
                ("TOPPADDING", (0, 0), (-1, -1), 11),
                ("BOTTOMPADDING", (0, 0), (-1, -1), 11),
            ]
        )
    )
    return table


def build_story(tree):
    story = []
    story.append(Spacer(1, 7 * mm))
    story.append(Paragraph("LETTURA SCIENTIFICA GRADUATA A1-C1", STYLES["cover_kicker"]))
    story.append(Paragraph("La meraviglia del DNA", STYLES["cover_title"]))
    story.append(
        Paragraph(
            "Due metri di DNA in un nucleo minuscolo: come la vita piega, copia, corregge e legge la sua biblioteca.",
            STYLES["cover_subtitle"],
        )
    )
    hero = Image(str(IMAGE_PATH), width=166 * mm, height=93.375 * mm)
    hero.hAlign = "CENTER"
    story.append(hero)
    story.append(Spacer(1, 7 * mm))
    story.append(
        info_box(
            "Come usare questo PDF",
            "Scegli il tuo livello, leggi il testo e rispondi alla domanda finale in italiano. Sul sito puoi anche scrivere e salvare la risposta nel browser.",
        )
    )
    story.append(Spacer(1, 6 * mm))
    story.append(Paragraph("A1  |  A2  |  B1  |  B2  |  C1", STYLES["cover_subtitle"]))

    for level in ("a1", "a2", "b1", "b2", "c1"):
        article = tree.xpath(f"//article[@id='{level}']")[0]
        story.append(PageBreak())
        title = text_of(article.xpath("./header/div/h2")[0])
        grammar = text_of(article.xpath("./header/p")[0])
        story.append(Paragraph(ptext(title), STYLES["level"]))
        story.append(Paragraph(ptext(grammar).upper(), STYLES["grammar"]))
        story.append(HRFlowable(width="100%", thickness=1.2, color=CORAL, spaceAfter=12))

        for paragraph in article.xpath(".//div[contains(@class,'story-text')]/p"):
            story.append(Paragraph(ptext(text_of(paragraph)), STYLES["body"]))

        story.append(Spacer(1, 4 * mm))
        for box in article.xpath(".//div[contains(@class,'learning-grid')]/div"):
            box_title = text_of(box.xpath("./h3")[0])
            parts = []
            for node in box.xpath("./p|./ol"):
                if node.tag == "ol":
                    parts.extend(f"{index}. {text_of(li)}" for index, li in enumerate(node.xpath("./li"), 1))
                else:
                    parts.append(text_of(node))
            story.append(info_box(box_title, "  ".join(parts)))
            story.append(Spacer(1, 3 * mm))

        question = text_of(article.xpath(".//form//label")[0])
        story.append(Spacer(1, 2 * mm))
        story.append(question_box(question))

    story.append(PageBreak())
    sources = tree.xpath("//section[@id='riferimenti']")[0]
    story.append(Paragraph("Riferimenti scientifici", STYLES["sources_title"]))
    intro = text_of(sources.xpath("./p")[0])
    story.append(Paragraph(ptext(intro), STYLES["body"]))
    for index, item in enumerate(sources.xpath(".//ol/li"), 1):
        label = text_of(item)
        link = item.xpath(".//a/@href")
        if link:
            rendered = f"{index}. {ptext(label)}<br/><link href=\"{html.escape(link[0], quote=True)}\" color=\"#155F4D\">{html.escape(link[0])}</link>"
        else:
            rendered = f"{index}. {ptext(label)}"
        story.append(Paragraph(rendered, STYLES["source"]))
    return story


def main():
    OUTPUT_PATH.parent.mkdir(parents=True, exist_ok=True)
    parser = lxml_html.HTMLParser(encoding="utf-8")
    tree = lxml_html.parse(str(HTML_PATH), parser)
    document = SimpleDocTemplate(
        str(OUTPUT_PATH),
        pagesize=A4,
        rightMargin=22 * mm,
        leftMargin=22 * mm,
        topMargin=18 * mm,
        bottomMargin=22 * mm,
        title="La meraviglia del DNA - lettura graduata A1-C1",
        author="Martin Modena - Italiano con Martin",
        subject="Lettura scientifica graduata di italiano A1-C1",
    )
    document.build(build_story(tree), onFirstPage=draw_page, onLaterPages=draw_page)
    print(OUTPUT_PATH)


if __name__ == "__main__":
    main()
