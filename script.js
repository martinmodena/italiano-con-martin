(function () {
  const header = document.querySelector('.site-header');
  const nav = header?.querySelector('nav');
  const navWrap = header?.querySelector('.nav-wrap');
  const year = document.querySelector('#year');
  const languageNames = {
    it: 'Italiano', en: 'English', es: 'Español', fr: 'Français',
    cs: 'Čeština', pl: 'Polski', tr: 'Türkçe', de: 'Deutsch', ja: '日本語'
  };
  const languageFlags = { it: '🇮🇹', en: '🇬🇧', es: '🇪🇸', fr: '🇫🇷', cs: '🇨🇿', pl: '🇵🇱', tr: '🇹🇷', de: '🇩🇪', ja: '🇯🇵' };
  const languagePaths = { it: '', en: 'en', es: 'es', fr: 'fr', cs: 'cs', pl: 'pl', tr: 'tr', de: 'de', ja: 'ja' };
  const homeTranslations = {
    it: {
      title: 'Italiano con Martin | Lezioni online individuali a 10€',
      description: 'Lezioni individuali di italiano online con Martin a 10€: conversazione reale, grammatica chiara, materiali gratuiti e percorso personalizzato A1-C1.',
      nav: ['Letture', 'Grammatica', 'Prenota'],
      menuOpen: 'Apri il menu',
      menuClose: 'Chiudi il menu',
      languageLabel: 'Lingua',
      kicker: 'Lezioni individuali online · A1-C1',
      eyebrow: 'Italiano per stranieri',
      h1: 'Parla italiano con più sicurezza, una lezione alla volta.',
      lead: 'Ciao, sono Martin, insegnante madrelingua italiano. Le lezioni sono individuali, pratiche e costruite sul tuo livello: conversazione reale, grammatica chiara e materiali per continuare a studiare.',
      offers: ['1:1 online', '10€ a lezione', 'A1-C1'],
      primaryCta: 'Prenota su Preply',
      whatsappCta: 'Scrivimi su WhatsApp',
      whatsappText: 'Ciao Martin, vorrei informazioni sulle lezioni di italiano.',
      actionNote: 'Scegli Preply per prenotare subito, oppure scrivimi se vuoi capire prima il percorso giusto.',
      trust: ['✓ Lezione individuale', '✓ Conversazione reale', '✓ Percorso personalizzato'],
      badgeName: 'Martin Modena',
      badgeRole: 'Insegnante madrelingua',
      proof: [
        ['Insegnante madrelingua', 'Italiano naturale, chiaro e pratico.'],
        ['Lezioni 1:1 online', 'Obiettivi, interessi e ritmo personali.'],
        ['Materiali inclusi', 'Grammatica e letture graduate gratuite.']
      ],
      pathEyebrow: 'Percorso rapido',
      pathTitle: 'Scegli il tuo livello.',
      pathIntro: 'Parti da una lezione o da una favola. Poi portiamo dubbi, parole nuove ed errori nella conversazione.',
      levels: [
        ['Prime basi', 'Frasi semplici, verbi essenziali e dialoghi quotidiani.'],
        ['Più autonomia', 'Passato, futuro, modali e conversazioni pratiche.'],
        ['Più naturalezza', 'Opinioni, racconti e frasi più ricche.'],
        ['Più precisione', 'Congiuntivo, ipotesi e sfumature utili.'],
        ['Più stile', 'Registro, discorso indiretto e italiano avanzato.']
      ],
      resourcesEyebrow: 'Materiali gratuiti',
      resourcesTitle: 'Studia gratis, poi porta tutto in conversazione.',
      resourcesIntro: 'Usa le risorse del sito per prepararti. In lezione trasformiamo regole, storie e parole nuove in italiano parlato.',
      cards: [
        ['A1-C1', 'Grammatica interattiva', 'Regole chiare, esempi reali ed esercizi con feedback immediato.', 'Vai alla grammatica →'],
        ['Favole A1-C1', 'Favole graduate', 'Storie classiche in cinque livelli, con lessico, domande e illustrazioni.', 'Leggi le favole →'],
        ['Letture graduate', 'Articoli per parlare', 'Scienza, tecnologia, cultura e storia in più livelli, con lessico e domande.', 'Apri la biblioteca →']
      ],
      finalEyebrow: 'Facciamo il primo passo',
      finalTitle: 'Vuoi una lezione individuale a 10€?',
      finalText: 'Prenota su Preply o scrivimi su WhatsApp: in pochi messaggi troviamo il punto di partenza giusto.',
      footerText: 'Lezioni online individuali a 10€, letture graduate e grammatica.'
    },
    en: {
      title: 'Italiano con Martin | Private online Italian lessons for €10',
      description: 'Private online Italian lessons with Martin for €10: real conversation, clear grammar, free materials and a personal A1-C1 path.',
      nav: ['Readings', 'Grammar', 'Book'],
      menuOpen: 'Open menu',
      menuClose: 'Close menu',
      languageLabel: 'Language',
      kicker: 'Private online lessons · A1-C1',
      eyebrow: 'Italian for international students',
      h1: 'Speak Italian with more confidence, one lesson at a time.',
      lead: 'Hi, I’m Martin, a native Italian teacher. Lessons are private, practical and built around your level: real conversation, clear grammar and materials to keep studying.',
      offers: ['1:1 online', '€10 per lesson', 'A1-C1'],
      primaryCta: 'Book on Preply',
      whatsappCta: 'Message me on WhatsApp',
      whatsappText: 'Hi Martin, I would like information about Italian lessons.',
      actionNote: 'Book directly on Preply, or message me first if you want to choose the right path.',
      trust: ['✓ Private lesson', '✓ Real conversation', '✓ Personal path'],
      badgeName: 'Martin Modena',
      badgeRole: 'Native Italian teacher',
      proof: [
        ['Native teacher', 'Natural, clear and practical Italian.'],
        ['1:1 online lessons', 'Personal goals, interests and pace.'],
        ['Materials included', 'Free grammar and graded readings.']
      ],
      pathEyebrow: 'Quick path',
      pathTitle: 'Choose your level.',
      pathIntro: 'Start from a lesson or a story. Then we bring doubts, new words and mistakes into conversation.',
      levels: [
        ['First steps', 'Simple sentences, essential verbs and everyday dialogues.'],
        ['More independence', 'Past, future, modal verbs and practical conversations.'],
        ['More natural speech', 'Opinions, stories and richer sentences.'],
        ['More precision', 'Subjunctive, hypotheses and useful nuances.'],
        ['More style', 'Register, indirect speech and advanced Italian.']
      ],
      resourcesEyebrow: 'Free materials',
      resourcesTitle: 'Study for free, then bring everything into conversation.',
      resourcesIntro: 'Use the site resources to prepare. In class we turn rules, stories and new words into spoken Italian.',
      cards: [
        ['A1-C1', 'Interactive grammar', 'Clear rules, real examples and exercises with instant feedback.', 'Go to grammar →'],
        ['A1-C1 stories', 'Graded stories', 'Classic stories in five levels, with vocabulary, questions and illustrations.', 'Read the stories →'],
        ['Graded readings', 'Articles for speaking', 'Science, technology, culture and history in several levels, with vocabulary and questions.', 'Open the library →']
      ],
      finalEyebrow: 'Take the first step',
      finalTitle: 'Would you like a private lesson for €10?',
      finalText: 'Book on Preply or message me on WhatsApp: in a few messages we will find the right starting point.',
      footerText: 'Private online lessons for €10, graded readings and grammar.'
    },
    es: {
      title: 'Italiano con Martin | Clases individuales online de italiano por 10€',
      description: 'Clases individuales online de italiano con Martin por 10€: conversación real, gramática clara, materiales gratuitos y un camino personalizado A1-C1.',
      nav: ['Lecturas', 'Gramática', 'Reservar'],
      menuOpen: 'Abrir menú',
      menuClose: 'Cerrar menú',
      languageLabel: 'Idioma',
      kicker: 'Clases individuales online · A1-C1',
      eyebrow: 'Italiano para extranjeros',
      h1: 'Habla italiano con más seguridad, una clase a la vez.',
      lead: 'Hola, soy Martin, profesor nativo de italiano. Las clases son individuales, prácticas y adaptadas a tu nivel: conversación real, gramática clara y materiales para seguir estudiando.',
      offers: ['1:1 online', '10€ por clase', 'A1-C1'],
      primaryCta: 'Reservar en Preply',
      whatsappCta: 'Escríbeme por WhatsApp',
      whatsappText: 'Hola Martin, quisiera información sobre las clases de italiano.',
      actionNote: 'Reserva directamente en Preply o escríbeme primero si quieres elegir el camino adecuado.',
      trust: ['✓ Clase individual', '✓ Conversación real', '✓ Camino personalizado'],
      badgeName: 'Martin Modena',
      badgeRole: 'Profesor nativo',
      proof: [
        ['Profesor nativo', 'Italiano natural, claro y práctico.'],
        ['Clases 1:1 online', 'Objetivos, intereses y ritmo personales.'],
        ['Materiales incluidos', 'Gramática y lecturas graduadas gratis.']
      ],
      pathEyebrow: 'Ruta rápida',
      pathTitle: 'Elige tu nivel.',
      pathIntro: 'Empieza con una lección o una historia. Después llevamos dudas, palabras nuevas y errores a la conversación.',
      levels: [
        ['Primeras bases', 'Frases simples, verbos esenciales y diálogos cotidianos.'],
        ['Más autonomía', 'Pasado, futuro, verbos modales y conversaciones prácticas.'],
        ['Más naturalidad', 'Opiniones, relatos y frases más ricas.'],
        ['Más precisión', 'Subjuntivo, hipótesis y matices útiles.'],
        ['Más estilo', 'Registro, discurso indirecto e italiano avanzado.']
      ],
      resourcesEyebrow: 'Materiales gratuitos',
      resourcesTitle: 'Estudia gratis y luego tráelo todo a la conversación.',
      resourcesIntro: 'Usa los recursos del sitio para prepararte. En clase transformamos reglas, historias y palabras nuevas en italiano hablado.',
      cards: [
        ['A1-C1', 'Gramática interactiva', 'Reglas claras, ejemplos reales y ejercicios con feedback inmediato.', 'Ir a gramática →'],
        ['Historias A1-C1', 'Historias graduadas', 'Historias clásicas en cinco niveles, con vocabulario, preguntas e ilustraciones.', 'Leer las historias →'],
        ['Lecturas graduadas', 'Artículos para hablar', 'Ciencia, tecnología, cultura e historia en varios niveles, con vocabulario y preguntas.', 'Abrir la biblioteca →']
      ],
      finalEyebrow: 'Demos el primer paso',
      finalTitle: '¿Quieres una clase individual por 10€?',
      finalText: 'Reserva en Preply o escríbeme por WhatsApp: en pocos mensajes encontraremos el punto de partida adecuado.',
      footerText: 'Clases individuales online por 10€, lecturas graduadas y gramática.'
    },
    fr: {
      title: 'Italiano con Martin | Cours particuliers d’italien en ligne à 10€',
      description: 'Cours particuliers d’italien en ligne avec Martin à 10€ : conversation réelle, grammaire claire, ressources gratuites et parcours A1-C1 personnalisé.',
      nav: ['Lectures', 'Grammaire', 'Réserver'],
      menuOpen: 'Ouvrir le menu',
      menuClose: 'Fermer le menu',
      languageLabel: 'Langue',
      kicker: 'Cours particuliers en ligne · A1-C1',
      eyebrow: 'Italien pour étrangers',
      h1: 'Parle italien avec plus de confiance, un cours après l’autre.',
      lead: 'Bonjour, je suis Martin, professeur natif d’italien. Les cours sont individuels, pratiques et adaptés à ton niveau : conversation réelle, grammaire claire et ressources pour continuer à étudier.',
      offers: ['1:1 en ligne', '10€ par cours', 'A1-C1'],
      primaryCta: 'Réserver sur Preply',
      whatsappCta: 'M’écrire sur WhatsApp',
      whatsappText: 'Bonjour Martin, je voudrais des informations sur les cours d’italien.',
      actionNote: 'Réserve directement sur Preply, ou écris-moi d’abord si tu veux choisir le bon parcours.',
      trust: ['✓ Cours individuel', '✓ Conversation réelle', '✓ Parcours personnalisé'],
      badgeName: 'Martin Modena',
      badgeRole: 'Professeur natif',
      proof: [
        ['Professeur natif', 'Un italien naturel, clair et pratique.'],
        ['Cours 1:1 en ligne', 'Objectifs, intérêts et rythme personnels.'],
        ['Ressources incluses', 'Grammaire et lectures graduées gratuites.']
      ],
      pathEyebrow: 'Parcours rapide',
      pathTitle: 'Choisis ton niveau.',
      pathIntro: 'Commence par une leçon ou une histoire. Ensuite, nous transformons les doutes, les mots nouveaux et les erreurs en conversation.',
      levels: [
        ['Premières bases', 'Phrases simples, verbes essentiels et dialogues quotidiens.'],
        ['Plus d’autonomie', 'Passé, futur, verbes modaux et conversations pratiques.'],
        ['Plus de naturel', 'Opinions, récits et phrases plus riches.'],
        ['Plus de précision', 'Subjonctif, hypothèses et nuances utiles.'],
        ['Plus de style', 'Registre, discours indirect et italien avancé.']
      ],
      resourcesEyebrow: 'Ressources gratuites',
      resourcesTitle: 'Étudie gratuitement, puis apporte tout en conversation.',
      resourcesIntro: 'Utilise les ressources du site pour te préparer. En cours, nous transformons règles, histoires et mots nouveaux en italien parlé.',
      cards: [
        ['A1-C1', 'Grammaire interactive', 'Règles claires, exemples réels et exercices avec correction immédiate.', 'Aller à la grammaire →'],
        ['Histoires A1-C1', 'Histoires graduées', 'Histoires classiques en cinq niveaux, avec vocabulaire, questions et illustrations.', 'Lire les histoires →'],
        ['Lectures graduées', 'Articles pour parler', 'Science, technologie, culture et histoire en plusieurs niveaux, avec vocabulaire et questions.', 'Ouvrir la bibliothèque →']
      ],
      finalEyebrow: 'Faisons le premier pas',
      finalTitle: 'Tu veux un cours individuel à 10€ ?',
      finalText: 'Réserve sur Preply ou écris-moi sur WhatsApp : en quelques messages, nous trouverons le bon point de départ.',
      footerText: 'Cours particuliers en ligne à 10€, lectures graduées et grammaire.'
    },
    cs: {
      title: 'Italiano con Martin | Individuální online lekce italštiny za 10€',
      description: 'Individuální online lekce italštiny s Martinem za 10€: skutečná konverzace, jasná gramatika, materiály zdarma a osobní cesta A1-C1.',
      nav: ['Čtení', 'Gramatika', 'Rezervovat'],
      menuOpen: 'Otevřít menu',
      menuClose: 'Zavřít menu',
      languageLabel: 'Jazyk',
      kicker: 'Individuální online lekce · A1-C1',
      eyebrow: 'Italština pro cizince',
      h1: 'Mluv italsky jistěji, lekci za lekcí.',
      lead: 'Ahoj, jsem Martin, rodilý učitel italštiny. Lekce jsou individuální, praktické a postavené podle tvé úrovně: skutečná konverzace, jasná gramatika a materiály pro další studium.',
      offers: ['1:1 online', '10€ za lekci', 'A1-C1'],
      primaryCta: 'Rezervovat na Preply',
      whatsappCta: 'Napsat na WhatsApp',
      whatsappText: 'Ahoj Martine, chtěl/a bych informace o lekcích italštiny.',
      actionNote: 'Rezervuj si lekci na Preply, nebo mi nejdřív napiš a společně vybereme správnou cestu.',
      trust: ['✓ Individuální lekce', '✓ Skutečná konverzace', '✓ Osobní cesta'],
      badgeName: 'Martin Modena',
      badgeRole: 'Rodilý učitel',
      proof: [
        ['Rodilý učitel', 'Přirozená, jasná a praktická italština.'],
        ['Online lekce 1:1', 'Osobní cíle, zájmy a tempo.'],
        ['Materiály v ceně', 'Gramatika a odstupňovaná čtení zdarma.']
      ],
      pathEyebrow: 'Rychlá cesta',
      pathTitle: 'Vyber si úroveň.',
      pathIntro: 'Začni lekcí nebo příběhem. Potom přeneseme otázky, nová slova a chyby do konverzace.',
      levels: [
        ['První základy', 'Jednoduché věty, základní slovesa a každodenní dialogy.'],
        ['Větší samostatnost', 'Minulost, budoucnost, modální slovesa a praktické rozhovory.'],
        ['Přirozenější projev', 'Názory, vyprávění a bohatší věty.'],
        ['Větší přesnost', 'Konjunktiv, hypotézy a užitečné odstíny významu.'],
        ['Více stylu', 'Registr, nepřímá řeč a pokročilá italština.']
      ],
      resourcesEyebrow: 'Materiály zdarma',
      resourcesTitle: 'Studuj zdarma a potom vše přenes do konverzace.',
      resourcesIntro: 'Použij materiály na webu k přípravě. V lekci proměníme pravidla, příběhy a nová slova v mluvenou italštinu.',
      cards: [
        ['A1-C1', 'Interaktivní gramatika', 'Jasná pravidla, reálné příklady a cvičení s okamžitou zpětnou vazbou.', 'Jít na gramatiku →'],
        ['Příběhy A1-C1', 'Odstupňované příběhy', 'Klasické příběhy v pěti úrovních, se slovní zásobou, otázkami a ilustracemi.', 'Číst příběhy →'],
        ['Odstupňovaná čtení', 'Články pro mluvení', 'Věda, technologie, kultura a historie v několika úrovních, se slovní zásobou a otázkami.', 'Otevřít knihovnu →']
      ],
      finalEyebrow: 'Udělejme první krok',
      finalTitle: 'Chceš individuální lekci za 10€?',
      finalText: 'Rezervuj na Preply nebo mi napiš na WhatsApp: v pár zprávách najdeme správný začátek.',
      footerText: 'Individuální online lekce za 10€, odstupňovaná čtení a gramatika.'
    },
    pl: {
      title: 'Italiano con Martin | Indywidualne lekcje włoskiego online za 10€',
      description: 'Indywidualne lekcje włoskiego online z Martinem za 10€: prawdziwa rozmowa, jasna gramatyka, darmowe materiały i osobista ścieżka A1-C1.',
      nav: ['Czytanki', 'Gramatyka', 'Zarezerwuj'],
      menuOpen: 'Otwórz menu',
      menuClose: 'Zamknij menu',
      languageLabel: 'Język',
      kicker: 'Indywidualne lekcje online · A1-C1',
      eyebrow: 'Włoski dla obcokrajowców',
      h1: 'Mów po włosku pewniej, lekcja po lekcji.',
      lead: 'Cześć, jestem Martin, rodzimy nauczyciel włoskiego. Lekcje są indywidualne, praktyczne i dopasowane do twojego poziomu: prawdziwa rozmowa, jasna gramatyka i materiały do dalszej nauki.',
      offers: ['1:1 online', '10€ za lekcję', 'A1-C1'],
      primaryCta: 'Zarezerwuj na Preply',
      whatsappCta: 'Napisz na WhatsApp',
      whatsappText: 'Cześć Martin, chciał(a)bym informacje o lekcjach włoskiego.',
      actionNote: 'Zarezerwuj od razu na Preply albo napisz najpierw, jeśli chcesz dobrać właściwą ścieżkę.',
      trust: ['✓ Lekcja indywidualna', '✓ Prawdziwa rozmowa', '✓ Osobista ścieżka'],
      badgeName: 'Martin Modena',
      badgeRole: 'Rodzimy nauczyciel',
      proof: [
        ['Rodzimy nauczyciel', 'Naturalny, jasny i praktyczny włoski.'],
        ['Lekcje 1:1 online', 'Osobiste cele, zainteresowania i tempo.'],
        ['Materiały w cenie', 'Darmowa gramatyka i czytanki poziomowane.']
      ],
      pathEyebrow: 'Szybka ścieżka',
      pathTitle: 'Wybierz swój poziom.',
      pathIntro: 'Zacznij od lekcji lub historii. Potem przeniesiemy pytania, nowe słowa i błędy do rozmowy.',
      levels: [
        ['Pierwsze podstawy', 'Proste zdania, najważniejsze czasowniki i codzienne dialogi.'],
        ['Więcej samodzielności', 'Przeszłość, przyszłość, czasowniki modalne i praktyczne rozmowy.'],
        ['Więcej naturalności', 'Opinie, opowieści i bogatsze zdania.'],
        ['Więcej precyzji', 'Tryb łączący, hipotezy i przydatne niuanse.'],
        ['Więcej stylu', 'Rejestr, mowa zależna i zaawansowany włoski.']
      ],
      resourcesEyebrow: 'Materiały darmowe',
      resourcesTitle: 'Ucz się za darmo, a potem przenieś wszystko do rozmowy.',
      resourcesIntro: 'Korzystaj z materiałów na stronie, aby się przygotować. Na lekcji zamieniamy zasady, historie i nowe słowa w mówiony włoski.',
      cards: [
        ['A1-C1', 'Gramatyka interaktywna', 'Jasne zasady, prawdziwe przykłady i ćwiczenia z natychmiastową informacją zwrotną.', 'Przejdź do gramatyki →'],
        ['Historie A1-C1', 'Historie poziomowane', 'Klasyczne historie w pięciu poziomach, ze słownictwem, pytaniami i ilustracjami.', 'Czytaj historie →'],
        ['Czytanki poziomowane', 'Artykuły do rozmowy', 'Nauka, technologia, kultura i historia na kilku poziomach, ze słownictwem i pytaniami.', 'Otwórz bibliotekę →']
      ],
      finalEyebrow: 'Zróbmy pierwszy krok',
      finalTitle: 'Chcesz indywidualną lekcję za 10€?',
      finalText: 'Zarezerwuj na Preply albo napisz na WhatsApp: w kilku wiadomościach znajdziemy dobry punkt startu.',
      footerText: 'Indywidualne lekcje online za 10€, czytanki poziomowane i gramatyka.'
    },
    tr: {
      title: 'Italiano con Martin | 10€ karşılığında birebir online İtalyanca dersleri',
      description: 'Martin ile 10€ karşılığında birebir online İtalyanca dersleri: gerçek konuşma, açık gramer, ücretsiz materyaller ve kişisel A1-C1 yolu.',
      nav: ['Okumalar', 'Gramer', 'Rezervasyon'],
      menuOpen: 'Menüyü aç',
      menuClose: 'Menüyü kapat',
      languageLabel: 'Dil',
      kicker: 'Birebir online dersler · A1-C1',
      eyebrow: 'Yabancılar için İtalyanca',
      h1: 'Her derste İtalyancayı daha güvenle konuş.',
      lead: 'Merhaba, ben Martin, ana dili İtalyanca olan bir öğretmenim. Dersler birebir, pratik ve seviyene göre hazırlanır: gerçek konuşma, açık gramer ve çalışmaya devam etmen için materyaller.',
      offers: ['1:1 online', 'Ders başına 10€', 'A1-C1'],
      primaryCta: 'Preply’de rezervasyon yap',
      whatsappCta: 'WhatsApp’tan yaz',
      whatsappText: 'Merhaba Martin, İtalyanca dersleri hakkında bilgi almak istiyorum.',
      actionNote: 'Hemen Preply’den rezervasyon yapabilir veya doğru yolu seçmek için önce bana yazabilirsin.',
      trust: ['✓ Birebir ders', '✓ Gerçek konuşma', '✓ Kişisel yol'],
      badgeName: 'Martin Modena',
      badgeRole: 'Ana dili İtalyanca öğretmen',
      proof: [
        ['Ana dili İtalyanca öğretmen', 'Doğal, açık ve pratik İtalyanca.'],
        ['1:1 online dersler', 'Kişisel hedefler, ilgi alanları ve tempo.'],
        ['Materyaller dahil', 'Ücretsiz gramer ve seviyeli okumalar.']
      ],
      pathEyebrow: 'Hızlı yol',
      pathTitle: 'Seviyeni seç.',
      pathIntro: 'Bir dersle veya hikayeyle başla. Sonra soruları, yeni kelimeleri ve hataları konuşmaya taşırız.',
      levels: [
        ['İlk temeller', 'Basit cümleler, temel fiiller ve günlük diyaloglar.'],
        ['Daha fazla bağımsızlık', 'Geçmiş, gelecek, modal fiiller ve pratik konuşmalar.'],
        ['Daha doğal konuşma', 'Fikirler, anlatılar ve daha zengin cümleler.'],
        ['Daha fazla kesinlik', 'Konjonktif, varsayımlar ve yararlı nüanslar.'],
        ['Daha fazla stil', 'Üslup, dolaylı anlatım ve ileri seviye İtalyanca.']
      ],
      resourcesEyebrow: 'Ücretsiz materyaller',
      resourcesTitle: 'Ücretsiz çalış, sonra her şeyi konuşmaya taşı.',
      resourcesIntro: 'Hazırlanmak için sitedeki kaynakları kullan. Derste kuralları, hikayeleri ve yeni kelimeleri konuşulan İtalyancaya dönüştürürüz.',
      cards: [
        ['A1-C1', 'Etkileşimli gramer', 'Açık kurallar, gerçek örnekler ve anında geri bildirimli alıştırmalar.', 'Gramere git →'],
        ['A1-C1 hikayeler', 'Seviyeli hikayeler', 'Beş seviyede klasik hikayeler, kelime bilgisi, sorular ve görsellerle.', 'Hikayeleri oku →'],
        ['Seviyeli okumalar', 'Konuşma için makaleler', 'Bilim, teknoloji, kültür ve tarih; birkaç seviyede, kelime ve sorularla.', 'Kütüphaneyi aç →']
      ],
      finalEyebrow: 'İlk adımı atalım',
      finalTitle: '10€ karşılığında birebir ders ister misin?',
      finalText: 'Preply’den rezervasyon yap veya WhatsApp’tan yaz: birkaç mesajda doğru başlangıç noktasını buluruz.',
      footerText: '10€ karşılığında birebir online dersler, seviyeli okumalar ve gramer.'
    },
    de: {
      title: 'Italiano con Martin | Einzelunterricht Italienisch online für 10€',
      description: 'Einzelunterricht Italienisch online mit Martin für 10€: echte Konversation, klare Grammatik, kostenlose Materialien und ein persönlicher A1-C1-Weg.',
      nav: ['Lesetexte', 'Grammatik', 'Buchen'],
      menuOpen: 'Menü öffnen',
      menuClose: 'Menü schließen',
      languageLabel: 'Sprache',
      kicker: 'Einzelunterricht online · A1-C1',
      eyebrow: 'Italienisch für internationale Lernende',
      h1: 'Sprich Italienisch mit mehr Sicherheit, Stunde für Stunde.',
      lead: 'Hallo, ich bin Martin, italienischer Muttersprachler und Lehrer. Der Unterricht ist individuell, praktisch und auf dein Niveau abgestimmt: echte Konversation, klare Grammatik und Materialien zum Weiterlernen.',
      offers: ['1:1 online', '10€ pro Stunde', 'A1-C1'],
      primaryCta: 'Auf Preply buchen',
      whatsappCta: 'Auf WhatsApp schreiben',
      whatsappText: 'Hallo Martin, ich hätte gern Informationen zu den Italienischstunden.',
      actionNote: 'Buche direkt auf Preply oder schreibe mir zuerst, wenn du den passenden Weg finden möchtest.',
      trust: ['✓ Einzelunterricht', '✓ Echte Konversation', '✓ Persönlicher Weg'],
      badgeName: 'Martin Modena',
      badgeRole: 'Muttersprachlicher Lehrer',
      proof: [
        ['Muttersprachlicher Lehrer', 'Natürliches, klares und praktisches Italienisch.'],
        ['1:1 online', 'Persönliche Ziele, Interessen und Tempo.'],
        ['Materialien inklusive', 'Kostenlose Grammatik und abgestufte Lesetexte.']
      ],
      pathEyebrow: 'Schneller Einstieg',
      pathTitle: 'Wähle dein Niveau.',
      pathIntro: 'Starte mit einer Lektion oder einer Geschichte. Dann bringen wir Fragen, neue Wörter und Fehler in die Konversation.',
      levels: [
        ['Erste Grundlagen', 'Einfache Sätze, wichtige Verben und Alltagsdialoge.'],
        ['Mehr Selbstständigkeit', 'Vergangenheit, Zukunft, Modalverben und praktische Gespräche.'],
        ['Mehr Natürlichkeit', 'Meinungen, Erzählungen und reichere Sätze.'],
        ['Mehr Präzision', 'Konjunktiv, Hypothesen und nützliche Nuancen.'],
        ['Mehr Stil', 'Register, indirekte Rede und fortgeschrittenes Italienisch.']
      ],
      resourcesEyebrow: 'Kostenlose Materialien',
      resourcesTitle: 'Lerne kostenlos und bringe alles in die Konversation.',
      resourcesIntro: 'Nutze die Ressourcen der Website zur Vorbereitung. Im Unterricht machen wir aus Regeln, Geschichten und neuen Wörtern gesprochenes Italienisch.',
      cards: [
        ['A1-C1', 'Interaktive Grammatik', 'Klare Regeln, echte Beispiele und Übungen mit sofortigem Feedback.', 'Zur Grammatik →'],
        ['Geschichten A1-C1', 'Abgestufte Geschichten', 'Klassische Geschichten in fünf Niveaus, mit Wortschatz, Fragen und Bildern.', 'Geschichten lesen →'],
        ['Abgestufte Lesetexte', 'Artikel zum Sprechen', 'Wissenschaft, Technologie, Kultur und Geschichte in mehreren Niveaus, mit Wortschatz und Fragen.', 'Bibliothek öffnen →']
      ],
      finalEyebrow: 'Machen wir den ersten Schritt',
      finalTitle: 'Möchtest du Einzelunterricht für 10€?',
      finalText: 'Buche auf Preply oder schreibe mir auf WhatsApp: In wenigen Nachrichten finden wir den richtigen Startpunkt.',
      footerText: 'Einzelunterricht online für 10€, abgestufte Lesetexte und Grammatik.'
    },
    ja: {
      title: 'Italiano con Martin | 10ユーロのオンライン個人イタリア語レッスン',
      description: 'Martinのオンライン個人イタリア語レッスンは10ユーロ。実際の会話、わかりやすい文法、無料教材、A1-C1の個別学習プラン。',
      nav: ['読み物', '文法', '予約'],
      menuOpen: 'メニューを開く',
      menuClose: 'メニューを閉じる',
      languageLabel: '言語',
      kicker: 'オンライン個人レッスン · A1-C1',
      eyebrow: '外国人のためのイタリア語',
      h1: '一回ずつのレッスンで、もっと自信を持ってイタリア語を話そう。',
      lead: 'こんにちは、Martinです。イタリア語ネイティブの講師です。レッスンは個人向けで実践的、あなたのレベルに合わせて作ります。実際の会話、わかりやすい文法、学習を続けるための教材があります。',
      offers: ['1対1オンライン', '1レッスン10€', 'A1-C1'],
      primaryCta: 'Preplyで予約',
      whatsappCta: 'WhatsAppで連絡',
      whatsappText: 'こんにちはMartin、イタリア語レッスンについて知りたいです。',
      actionNote: 'すぐにPreplyで予約できます。先に相談したい場合はメッセージを送ってください。',
      trust: ['✓ 個人レッスン', '✓ 実際の会話', '✓ 個別プラン'],
      badgeName: 'Martin Modena',
      badgeRole: 'イタリア語ネイティブ講師',
      proof: [
        ['ネイティブ講師', '自然でわかりやすく、実用的なイタリア語。'],
        ['1対1オンライン', '目標、興味、ペースに合わせます。'],
        ['教材込み', '無料の文法とレベル別読み物。']
      ],
      pathEyebrow: 'かんたんスタート',
      pathTitle: 'レベルを選ぼう。',
      pathIntro: 'レッスンや物語から始められます。そのあと疑問、新しい単語、間違いを会話につなげます。',
      levels: [
        ['最初の基礎', '簡単な文、基本動詞、日常会話。'],
        ['もっと自立して話す', '過去、未来、助動詞、実用的な会話。'],
        ['もっと自然に', '意見、物語、より豊かな文。'],
        ['もっと正確に', '接続法、仮定、役立つニュアンス。'],
        ['もっと洗練して', '文体、間接話法、上級イタリア語。']
      ],
      resourcesEyebrow: '無料教材',
      resourcesTitle: '無料で学び、レッスンで会話に変えよう。',
      resourcesIntro: 'サイトの教材で準備できます。レッスンでは文法、物語、新しい単語を話せるイタリア語に変えていきます。',
      cards: [
        ['A1-C1', 'インタラクティブ文法', 'わかりやすいルール、実例、すぐに確認できる練習問題。', '文法へ →'],
        ['A1-C1の物語', 'レベル別ストーリー', '5つのレベルの古典的な物語。語彙、質問、イラスト付き。', '物語を読む →'],
        ['レベル別読み物', '話すための記事', '科学、テクノロジー、文化、歴史を複数レベルで。語彙と質問付き。', 'ライブラリーを開く →']
      ],
      finalEyebrow: '最初の一歩',
      finalTitle: '10€の個人レッスンを受けてみませんか？',
      finalText: 'Preplyで予約するか、WhatsAppで連絡してください。数回のメッセージで最適なスタートを見つけます。',
      footerText: '10€のオンライン個人レッスン、レベル別読み物、文法。'
    }
  };

  if (year) year.textContent = new Date().getFullYear();
  if (!header || !nav || !navWrap) return;

  if (!nav.id) nav.id = 'main-nav';

  const preferredLanguage = getPageLanguage();
  const languageControl = createLanguageControl(preferredLanguage);
  navWrap.insertBefore(languageControl, nav);

  let menuButton = header.querySelector('.menu-button');
  if (!menuButton) {
    menuButton = document.createElement('button');
    menuButton.className = 'menu-button';
    menuButton.type = 'button';
    menuButton.setAttribute('aria-controls', nav.id);
    menuButton.setAttribute('aria-expanded', 'false');
    menuButton.innerHTML = '<span></span><span></span><span></span>';
    navWrap.insertBefore(menuButton, nav);
  }

  function closeMenu() {
    const labels = getCurrentTranslation();
    nav.classList.remove('open');
    menuButton.setAttribute('aria-expanded', 'false');
    menuButton.setAttribute('aria-label', labels.menuOpen);
  }

  menuButton.addEventListener('click', () => {
    const labels = getCurrentTranslation();
    const open = nav.classList.toggle('open');
    menuButton.setAttribute('aria-expanded', String(open));
    menuButton.setAttribute('aria-label', open ? labels.menuClose : labels.menuOpen);
  });

  nav.querySelectorAll('a').forEach((link) => {
    link.addEventListener('click', closeMenu);
  });

  languageControl.querySelectorAll('a').forEach((link) => link.addEventListener('click', () => {
    saveLanguage(link.dataset.language);
    closeMenu();
  }));

  document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape') closeMenu();
  });

  document.addEventListener('click', (event) => {
    if (!header.contains(event.target)) closeMenu();
  });

  function scrollToCurrentHash() {
    if (!location.hash) return;

    const target = document.getElementById(decodeURIComponent(location.hash.slice(1)));
    if (!target) return;

    const headerHeight = header.getBoundingClientRect().height;
    const top = target.getBoundingClientRect().top + window.scrollY - headerHeight - 24;
    window.scrollTo({ top: Math.max(0, top), behavior: 'auto' });
  }

  window.addEventListener('hashchange', () => {
    window.setTimeout(scrollToCurrentHash, 0);
  });

  window.addEventListener('load', () => {
    window.setTimeout(scrollToCurrentHash, 0);
  });

  applyLanguage(preferredLanguage);
  window.setTimeout(scrollToCurrentHash, 0);

  function createLanguageControl(language) {
    const label = document.createElement('details');
    label.className = 'language-switcher';
    label.innerHTML = `<summary><span class="language-flag" aria-hidden="true"></span><span class="language-current"></span><span class="language-chevron" aria-hidden="true">⌄</span></summary><div class="language-options"></div>`;
    label.querySelector('.language-flag').textContent = languageFlags[language];
    label.querySelector('.language-current').textContent = languageNames[language];
    const options = label.querySelector('.language-options');
    Object.entries(languageNames).forEach(([code, name]) => {
      const option = document.createElement('a');
      option.href = getLanguageUrl(code);
      option.dataset.language = code;
      option.innerHTML = `<span aria-hidden="true">${languageFlags[code]}</span><span>${name}</span>`;
      if (code === language) option.setAttribute('aria-current', 'page');
      options.appendChild(option);
    });

    return label;
  }

  function getPageLanguage() {
    const firstSegment = location.pathname.split('/').filter(Boolean)[0];
    return languagePaths[firstSegment] === undefined ? 'it' : firstSegment;
  }

  function getPageKind() {
    const path = location.pathname;
    if (path.includes('/letture/') || path.endsWith('/letture') || path.includes('/readings/') || path.endsWith('/readings')) return 'readings';
    if (path.includes('/grammatica/') || path.endsWith('/grammatica') || path.includes('/grammar/') || path.endsWith('/grammar')) return 'grammar';
    if (path.includes('/favole/') || path.endsWith('/favole') || path.includes('/stories/') || path.endsWith('/stories')) return 'stories';
    return 'home';
  }

  function getLanguageUrl(language) {
    const kind = getPageKind();
    if (language === 'it') {
      if (kind === 'readings') return '/letture/';
      if (kind === 'grammar') return '/grammatica/';
      if (kind === 'stories') return '/favole/';
      return '/';
    }
    const prefix = `/${language}/`;
    if (kind === 'readings') return `${prefix}readings/`;
    if (kind === 'grammar') return `${prefix}grammar/`;
    if (kind === 'stories') return `${prefix}stories/`;
    return prefix;
  }

  function loadLanguage() {
    try {
      return localStorage.getItem('italianoConMartinLanguage');
    } catch (error) {
      return null;
    }
  }

  function saveLanguage(language) {
    try {
      localStorage.setItem('italianoConMartinLanguage', language);
    } catch (error) {
      return null;
    }
  }

  function getCurrentTranslation() {
    const currentLanguage = document.documentElement.lang || 'it';
    return homeTranslations[currentLanguage] || homeTranslations.it;
  }

  function applyLanguage(language) {
    const t = homeTranslations[language] || homeTranslations.it;
    if (getPageLanguage() === 'it' && getPageKind() === 'home') {
      document.documentElement.lang = language;
      translateNavigation(t);
      translateHomepage(t);
    }
    menuButton.setAttribute('aria-label', nav.classList.contains('open') ? t.menuClose : t.menuOpen);
  }

  function translateNavigation(t) {
    const navLinks = Array.from(nav.querySelectorAll('a'));
    const readingLink = navLinks.find((link) => link.getAttribute('href')?.includes('letture'));
    const grammarLink = navLinks.find((link) => link.getAttribute('href')?.includes('grammatica'));
    const ctaLink = navLinks.find((link) => link.classList.contains('nav-cta'));
    if (readingLink) readingLink.textContent = t.nav[0];
    if (grammarLink) grammarLink.textContent = t.nav[1];
    if (ctaLink) ctaLink.textContent = t.nav[2];

    document.querySelectorAll('footer a').forEach((link) => {
      const href = link.getAttribute('href') || '';
      if (href.includes('letture')) link.textContent = t.nav[0];
      if (href.includes('grammatica')) link.textContent = t.nav[1];
    });
  }

  function translateHomepage(t) {
    if (!document.querySelector('.landing-hero')) return;

    document.title = t.title;
    setMeta('description', t.description);
    setMeta('og:title', t.title);
    setMeta('og:description', t.description);
    setMeta('twitter:title', t.title);
    setMeta('twitter:description', t.description);

    setText('.hero-kicker', t.kicker);
    setText('.landing-hero .eyebrow', t.eyebrow);
    setText('.landing-hero h1', t.h1);
    setText('.lead', t.lead);
    setTexts('.hero-offer span', t.offers);
    setText('.actions .primary', t.primaryCta);
    setText('.actions .whatsapp-cta', t.whatsappCta);
    setText('.hero-action-note', t.actionNote);
    setTexts('.trust-row span', t.trust);
    setText('.teacher-badge strong', t.badgeName);
    setText('.teacher-badge span', t.badgeRole);
    updateWhatsappLinks(t.whatsappText);

    document.querySelectorAll('.proof-grid div').forEach((item, index) => {
      const proof = t.proof[index];
      if (!proof) return;
      item.querySelector('strong').textContent = proof[0];
      item.querySelector('span:last-child').textContent = proof[1];
    });

    const sectionHeadings = document.querySelectorAll('.section-heading');
    translateSectionHeading(sectionHeadings[0], t.pathEyebrow, t.pathTitle, t.pathIntro);
    translateSectionHeading(sectionHeadings[1], t.resourcesEyebrow, t.resourcesTitle, t.resourcesIntro);

    document.querySelectorAll('.level-path-grid a').forEach((item, index) => {
      const level = t.levels[index];
      if (!level) return;
      item.querySelector('strong').textContent = level[0];
      item.querySelector('small').textContent = level[1];
    });

    document.querySelectorAll('.home-card').forEach((item, index) => {
      const card = t.cards[index];
      if (!card) return;
      item.querySelector('.badge').textContent = card[0];
      item.querySelector('h3').textContent = card[1];
      item.querySelector('p').textContent = card[2];
      item.querySelector('strong').textContent = card[3];
    });

    setText('.conversion-card .eyebrow', t.finalEyebrow);
    setText('.conversion-card h2', t.finalTitle);
    setText('.conversion-card p', t.finalText);
    setTexts('.conversion-actions .button', [t.primaryCta, t.whatsappCta]);
    setText('footer p', t.footerText);
  }

  function translateSectionHeading(section, eyebrow, title, intro) {
    if (!section) return;
    section.querySelector('.eyebrow').textContent = eyebrow;
    section.querySelector('h2').textContent = title;
    section.querySelector(':scope > p').textContent = intro;
  }

  function setText(selector, text) {
    const element = document.querySelector(selector);
    if (element) element.textContent = text;
  }

  function setTexts(selector, texts) {
    document.querySelectorAll(selector).forEach((element, index) => {
      if (texts[index]) element.textContent = texts[index];
    });
  }

  function setMeta(name, content) {
    const meta = document.querySelector(`meta[name="${name}"], meta[property="${name}"]`);
    if (meta) meta.setAttribute('content', content);
  }

  function updateWhatsappLinks(message) {
    document.querySelectorAll('a[href^="https://wa.me/"]').forEach((link) => {
      link.href = `https://wa.me/59167434075?text=${encodeURIComponent(message)}`;
    });
  }
})();
