# Decisioni e appunti del sito

Questo file raccoglie le decisioni principali per `Italiano con Martin`, cosi le idee importanti non restano disperse nelle conversazioni.

## Posizionamento

- Il sito promuove lezioni individuali online di italiano per stranieri.
- Il prezzo principale comunicato e 10 euro a lezione.
- La promessa centrale e: conversazione reale, grammatica chiara, materiali gratuiti e percorso personalizzato.
- Il sito deve parlare a studenti internazionali, non solo a chi gia capisce l'italiano.

## Multilingua

Lingue prioritarie, basate sugli studenti attuali:

- Italiano
- Inglese
- Spagnolo
- Francese
- Ceco
- Polacco
- Turco
- Tedesco
- Giapponese

### Implementazione attuale

- La homepage ha un selettore lingua globale.
- La lingua viene scelta automaticamente dal browser quando possibile.
- La scelta del visitatore viene salvata nel browser.
- La homepage, la navigazione, le call to action, il footer e i messaggi WhatsApp sono tradotti da un dizionario centrale in `script.js`.
- Il selettore lingua appare anche nelle pagine interne, cosi l'interfaccia comune resta pronta per evolvere.

### Scelta strategica

Per ora il contenuto didattico resta in italiano, perche grammatica, letture e favole sono materiale di apprendimento. Le lingue straniere servono soprattutto come porta d'ingresso: spiegano l'offerta, riducono l'attrito iniziale e aiutano lo studente a capire come iniziare.

### Passo successivo consigliato

Creare URL separati per le landing page principali:

- `/en/`
- `/es/`
- `/fr/`
- `/cs/`
- `/pl/`
- `/tr/`
- `/de/`
- `/ja/`

Questo aiuterebbe la SEO internazionale meglio di una sola homepage tradotta via JavaScript. Le pagine di grammatica e lettura possono restare in italiano, con brevi introduzioni nella lingua dello studente.

### Decisione 2026-08-04: struttura SEO per lingua

- La versione italiana resta la versione principale e usa gli URL esistenti: `/letture/`, `/grammatica/` e `/favole/`.
- Le versioni internazionali usano pagine HTML statiche e URL separati, non una traduzione affidata soltanto a JavaScript.
- I codici lingua seguono lo standard ISO per la SEO: spagnolo `/es/` (non `/sp/`), inglese `/en/`, francese `/fr/`, ceco `/cs/`, polacco `/pl/`, turco `/tr/`, tedesco `/de/`, giapponese `/ja/`.
- Ogni lingua ha una home e tre hub: `readings`, `grammar` e `stories`; gli hub indirizzano ai materiali didattici italiani finche le singole lezioni non vengono tradotte.
- Ogni pagina localizzata deve avere `lang`, `canonical`, `hreflang` reciproci, meta description, Open Graph e URL nella sitemap.
- Il selettore lingua deve mostrare la bandiera e portare a un URL permanente della sezione corrispondente.

Motivo: una pagina reale per lingua e per intento di ricerca e piu leggibile per utenti e motori di ricerca rispetto a contenuti cambiati soltanto nel browser.

## Regole didattiche

- I livelli A1, A2 e B1 non usano il passato remoto.
- Il passato remoto compare solo dal livello B2.
- Le letture e le favole devono essere graduate da A1 a C1.
- Ogni materiale dovrebbe favorire la conversazione in lezione, non solo la lettura passiva.

## Promemoria per appunti futuri

Quando emerge una decisione importante in una conversazione, aggiungerla qui con:

- data;
- decisione;
- motivo;
- file o sezione del sito coinvolta.

Regola operativa: ogni indicazione contenuta in un prompt che modifica il sito, la sua struttura, i contenuti, la lingua o la SEO deve essere registrata in questo file nella stessa sessione di lavoro.
