# Website Billard Club Black & White Verden

Statische Website – reines HTML, CSS und JavaScript. Kein Build-Schritt, keine
Abhängigkeiten, keine externen Dienste. Läuft auf jedem einfachen Webspace.

## Aufbau

```
├── index.html          Startseite
├── verein.html         Über uns, Vorstand, Beiträge
├── training.html       Trainingszeiten & Öffnungszeiten
├── galerie.html        Bildergalerie mit Lightbox
├── kontakt.html        Kontaktformular & Anfahrt
├── impressum.html      Impressum (Vorlage)
├── datenschutz.html    Datenschutzerklärung (Vorlage)
├── CHANGELOG.md        Änderungsprotokoll je Version
├── .gitignore          Legt fest, was nicht veröffentlicht wird
└── assets/
    ├── css/style.css   Komplettes Design in einer Datei
    ├── js/main.js      Menü, Lightbox, Formular, Animationen
    └── img/            Platzhalter-Grafiken (SVG)
```

## Lokal ansehen

Doppelklick auf `index.html` genügt. Alternativ mit lokalem Server:

```bash
npx serve .
```

## Gestaltung

Helles Design mit Ocean Blue als Akzentfarbe – abgeleitet vom Tuch der Tische
(Z9 BilliardCloth® Ocean Blue). Alle Farben stehen als CSS-Variablen ganz oben in
`assets/css/style.css`; für einen anderen Blauton reicht es, `--accent`,
`--accent-hover` und `--accent-soft` anzupassen.

## Versionsnummer

Die aktuelle Version steht in der Fußzeile jeder Seite. Gepflegt wird sie an
genau einer Stelle – als Konstante `VERSION` am Anfang von `assets/js/main.js`,
in der Zeile, die mit `var VERSION =` beginnt.

Von dort schreibt `main.js` sie in alle Fußzeilen. Bei jeder ausgelieferten
Änderung die Nummer dort hochzählen und in der `CHANGELOG.md` einen Abschnitt
ergänzen. Schema `Hauptversion.Funktion.Korrektur`: die letzte Stelle für
behobene Fehler, die mittlere für neue Funktionen, die erste für große
Umbauten.

Weil die Nummer per JavaScript eingesetzt wird, bleibt die Stelle in der Fußzeile
leer, wenn im Browser kein JavaScript läuft. Der übrige Inhalt der Seite ist
davon nicht betroffen.

## Regeln für Knöpfe und Beschriftungen

Diese Regeln gelten für die ganze Website. Wer neue Abschnitte ergänzt, hält sich
bitte daran – sonst franst die Oberfläche wieder aus.

**Knopfarten:** Es gibt genau zwei.

| Klasse | Aussehen | Bedeutung |
|---|---|---|
| `btn btn--primary` | gefüllt, Ocean Blue | Hauptaktion – **höchstens eine je Abschnitt** |
| `btn btn--ghost` | weiß mit Rand | Weiterlesen, Seite wechseln, Information ansehen |
| zusätzlich `btn--extern` | mit Pfeil ↗ | verlässt die Website, öffnet neuen Tab |

Bei `btn--extern` gehört ein `<span class="sr-only"> (öffnet in neuem Tab)</span>`
in die Beschriftung, damit Screenreader den Wechsel ansagen.

**Erlaubte Beschriftungen:** Für eine Aktion gibt es genau eine Formulierung.

| Ziel | Beschriftung | Knopfart |
|---|---|---|
| Kontaktseite | „Kontakt aufnehmen" | primary |
| Kontaktseite, wenn es um Eintritt geht | „Mitglied werden" | primary |
| Formular abschicken | „E-Mail schreiben …" | primary |
| Trainingsseite | „Trainingszeiten ansehen" | ghost |
| Galerie | „Zur Galerie" | ghost |
| Anfahrt | „Anfahrt ansehen" | ghost |

Die drei Punkte bei „E-Mail schreiben …" kündigen an, dass sich danach ein weiteres
Fenster öffnet – hier das E-Mail-Programm. Nur dort verwenden, nicht bei einer
bloßen Ja/Nein-Rückfrage.

**Wortwahl:** Besucher „kommen vorbei". Nicht „reinschauen", nicht
„vorbeischauen", nicht „reinschnuppern" – ein Verb genügt. Die Postanschrift heißt
überall „Anschrift", nicht „Clubheim". Besuchertexte duzen, Impressum und
Datenschutzerklärung siezen.

**Symbole:** Ein Sinnbild steht für genau eine Sache und muss zum Billardsport
passen (🎱, nicht 🏓). Schrittzahlen bekommen `card__icon--zahl` und erscheinen als
Ziffernkreis, damit sie nicht wie Sinnbilder wirken.

## Redaktionshinweise ausblenden

Die blau hinterlegten Kästen „Noch anzupassen …" sind Notizen für euch. Sie tragen
alle die Klasse `redaktion`. **Vor dem Start der Website** in
`assets/css/style.css` (Abschnitt 1a, ganz oben) diese Zeile einkommentieren:

```css
.redaktion { display: none !important; }
```

Damit verschwinden alle auf einen Schlag, ohne dass eine HTML-Datei angefasst wird.
Zum Weiterarbeiten einfach wieder auskommentieren.

## Bereits eingepflegte Vereinsdaten

- Name: Billard Club Black & White Verden
- Anschrift: Bremer Str. 121, 27283 Verden (Aller)
- 4 Tische Gabriel's Signature, 9 Fuß
- Tuch: Z9 BilliardCloth® Ocean Blue
- über 30 Mitglieder
- Tonalität und Aussagen der Startseite folgen dem Kleinanzeigen-Text: offen für
  jedes Alter, Anfänger wie Fortgeschrittene, Tipps und Übungen zum Besserwerden,
  kostenloses und unverbindliches Reinschauen

### Logo

`assets/img/logo.svg` ist eine Nachbildung des Vereinslogos (weiße Kugel mit
schwarzer Acht) als reine Vektorgrafik, damit sie in jeder Größe scharf bleibt. Die
Schriftzüge des Originals fehlen bewusst – im Seitenkopf steht der Name daneben
bereits als Text. Wenn ihr das Original als Datei habt, ersetzt es einfach
`logo.svg` und `favicon.svg`.

## Was noch fehlt

Offene Stellen sind auf den Seiten selbst mit einem blau markierten Hinweiskasten
(`<div class="note">`) gekennzeichnet:

| Was | Wo |
|---|---|
| Telefonnummer und E-Mail-Adresse | Footer **aller** Seiten + `kontakt.html` |
| Namen des Vorstands | `verein.html` |
| Gründungsjahr / Vereinsgeschichte | `verein.html` |
| Mitgliedsbeiträge | `verein.html` |
| Trainingszeiten | `training.html` |
| Rechtsform (e. V.?), Vereinsregister | `impressum.html` |
| Hosting-Anbieter, Löschfristen, Stand | `datenschutz.html` |
| Alle Fotos | `assets/img/` |

Kontaktdaten stehen im Footer jeder Seite. Zum Ersetzen am schnellsten per
Suchen-und-Ersetzen über alle `.html`-Dateien:

- `[Telefonnummer eintragen]` → echte Nummer, idealerweise als
  `<a href="tel:+49...">…</a>`
- `[E-Mail-Adresse eintragen]` → echte Adresse, ebenfalls als `mailto:`-Link
- in `kontakt.html` zusätzlich `data-mailto="bitte-adresse-eintragen@example.com"`
  am `<form>` auf die echte Adresse setzen

Kein Ligabetrieb: Die Seite `mannschaften.html` wurde auf Wunsch entfernt, ebenso
alle Verweise auf Mannschaften, Spielklassen, Punktspiele und Heimspiele. Falls
später doch ein Ligateam dazukommt, muss die Seite neu angelegt und in Navigation
und Fußzeile aufgenommen werden.

Weiterhin ungeprüft sind die Trainingszeiten in `training.html` – die Tabelle enthält
Beispielwerte und ist entsprechend markiert.

### Fotos

Zwei echte Aufnahmen sind bereits eingebunden: `assets/img/eingang.jpg` (Eingangstür)
und `assets/img/banner.jpg` (Vereinsbanner), beide aus dem Ordner `Bilder/`.

Das Banner ist ein sehr breiter Streifen (482 × 148). Damit es beim Zuschneiden nicht
zerstört wird, trägt seine Kachel zusätzlich `gallery__item--vollbild` – das zeigt
das Bild vollständig statt formatfüllend. Dieselbe Klasse eignet sich für jedes
weitere Motiv, das nicht ins 4:3-Format passt.

Für die übrigen sechs Kacheln sind die Bildunterschriften schon auf passende Motive
ausgerichtet: Blick in den Spielraum, ein Gabriel's Signature aus der Nähe, das
Ocean-Blue-Tuch, die Sitzecke, die Tischbeleuchtung und eine Partie am Tisch. Ein
Innenraumfoto eignet sich zudem als Hero-Bild auf der Startseite.

### Bilder austauschen

Die Dateien in `assets/img/` sind generierte Platzhalter-Grafiken. Eigene Fotos als
JPG/WebP dort ablegen und die `src`-Pfade in den HTML-Dateien anpassen. Empfehlung:
Breite max. 1600 px, Dateigröße unter 300 kB. Ein Foto der Hausfront mit dem blauen
Tor und dem Vereinsbanner wäre ein gutes Hero-Bild.

**Wichtig:** Vor der Veröffentlichung von Fotos die Einwilligung der abgebildeten
Personen einholen (siehe `datenschutz.html`, Abschnitt 6).

### Kontaktformular

Ohne Server-Backend gibt es keinen echten Versand. Das Formular öffnet daher das
E-Mail-Programm der Besucher mit vorbereitetem Text (`mailto:`). Der Empfänger steht
in `kontakt.html` im Attribut `data-mailto`.

Für echten Versand: ein `action`-Attribut am `<form id="kontaktformular">` setzen
(z. B. auf ein PHP-Skript oder einen Dienst wie Formspree). Sobald `action` gesetzt
ist, hält sich `main.js` automatisch heraus. In diesem Fall muss Abschnitt 5 der
Datenschutzerklärung angepasst werden.

### Karte auf der Kontaktseite

Bewusst nicht eingebunden – ein Google-Maps-Embed lädt Daten der Besucher zu Google
und würde einen Cookie-Banner sowie zusätzliche Datenschutzhinweise nötig machen.
Datensparsame Alternative über OpenStreetMap: In `kontakt.html` den Block
`<div class="map-embed">` ersetzen durch:

```html
<div class="map-embed">
  <iframe title="Lage des Clubheims"
          src="https://www.openstreetmap.org/export/embed.html?bbox=BBOX&layer=mapnik"
          loading="lazy" referrerpolicy="no-referrer"></iframe>
</div>
```

Den `bbox`-Wert liefert openstreetmap.org über „Teilen → HTML einbetten“. Auch dieser
Fall gehört in die Datenschutzerklärung.

## Rechtliches

`impressum.html` und `datenschutz.html` sind **unverbindliche Vorlagen** und ersetzen
keine Rechtsberatung. Beide Texte gehen von einer rein statischen Seite ohne Tracking,
ohne Cookies und ohne externe Schriftarten aus – das entspricht dem aktuellen Stand
dieser Website. Sobald externe Dienste hinzukommen, müssen die Texte erweitert werden.

## Technische Hinweise

- **Keine externen Requests.** Systemschriften statt Google Fonts, keine CDN-Skripte –
  dadurch DSGVO-unkritisch und schnell.
- **Responsiv** ab ca. 320 px Breite, mobiles Menü unter 860 px.
- **Barrierefreiheit:** Skip-Link, sichtbarer Fokus, ARIA-Attribute an Menü und
  Lightbox, `prefers-reduced-motion` wird respektiert.

## Veröffentlichen

**Es gehören nicht alle Dateien dieses Ordners auf den Server.** Neben der Website
liegt hier Arbeitsmaterial: die komplette alte Vereinsseite, gespeicherte Seiten
anderer Vereine und unsortierte Fotos. Würde das mit hochgeladen, wäre es öffentlich
abrufbar – teils mit Material, an dem wir keine Rechte haben.

Auf den Server gehören genau diese Dateien und Ordner:

```
index.html  verein.html  training.html  galerie.html
kontakt.html  impressum.html  datenschutz.html
assets/
```

Nicht hochladen: `Alte Website/`, `Andere Websites/`, `Bilder/`,
`Test Hosting auf Github/`, `sub.domain zu den Scoreboards und Turneirplänen/`
und `.claude/`. Dieselbe Liste steht in der `.gitignore`, damit Git sie von
vornherein ignoriert.

**Per FTP:** nur die oben genannten sieben HTML-Dateien und den Ordner `assets/`
in das Web-Verzeichnis des Hosters übertragen.

**Über GitHub Pages, Netlify oder Cloudflare Pages:** Repository verbinden, kein
Build-Befehl, Ausgabeverzeichnis `/`. Diese Dienste laden nur, was im Repository
liegt – die `.gitignore` sorgt also schon dafür, dass das Arbeitsmaterial
draußen bleibt. Vor dem ersten Start einmal auf GitHub nachsehen, ob dort
wirklich nur die 26 Dateien der Website angekommen sind.

Die alte Vereinsdomain vom Banner (`www.pbcblack-and-white.de`) löst derzeit nicht
mehr auf – vor dem Start klären, ob sie reaktiviert oder eine neue Domain registriert
wird.
