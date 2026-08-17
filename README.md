# Website Billardclub Black & White Verden e.V.

Statische Website – reines HTML, CSS und JavaScript. Kein Build-Schritt, keine
Abhängigkeiten, keine externen Dienste. Läuft auf jedem einfachen Webspace.

## Aufbau

```
├── index.html          Startseite
├── verein.html         Über uns, Vorstand, Beiträge
├── training.html       Trainingszeiten & Öffnungszeiten
├── mannschaften.html   Teams und Ligabetrieb
├── galerie.html        Bildergalerie mit Lightbox
├── kontakt.html        Kontaktformular & Anfahrt
├── impressum.html      Impressum (Vorlage)
├── datenschutz.html    Datenschutzerklärung (Vorlage)
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

## Was noch angepasst werden muss

Die Website ist inhaltlich vollständig, arbeitet aber mit Platzhaltern. Diese Stellen
sind im Quelltext mit einem grün markierten Hinweiskasten (`<div class="note">`)
gekennzeichnet. Konkret:

| Was | Wo |
|---|---|
| Anschrift, Telefon, E-Mail | Footer **aller** Seiten + `kontakt.html` |
| Namen des Vorstands | `verein.html` |
| Mitgliedsbeiträge | `verein.html` |
| Trainingszeiten | `training.html` |
| Spielklassen, Teams, Ansprechpartner | `mannschaften.html` |
| Gründungsjahr, Mitglieder- und Tischanzahl | `index.html` (Kennzahlen-Block) |
| Vereinsregister, vertretungsberechtigter Vorstand | `impressum.html` |
| Hosting-Anbieter, Löschfristen, Stand | `datenschutz.html` |
| Alle Fotos | `assets/img/` |

Die Kontaktdaten stehen im Footer jeder Seite. Zum Ersetzen am schnellsten per
Suchen-und-Ersetzen über alle `.html`-Dateien:

- `Musterstraße 12` → echte Straße
- `info@bc-blackwhite-verden.de` → echte E-Mail-Adresse
- `04231 / 00 000 00` und `+4942310000000` → echte Telefonnummer

### Bilder austauschen

Die Dateien in `assets/img/` sind generierte Platzhalter-Grafiken. Eigene Fotos als
JPG/WebP dort ablegen und die `src`-Pfade in den HTML-Dateien anpassen. Empfehlung:
Breite max. 1600 px, Dateigröße unter 300 kB.

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
- **Farben und Abstände** sind CSS-Variablen am Anfang von `style.css`. Für ein
  anderes Akzentgrün nur `--accent` und `--accent-hover` ändern.

## Veröffentlichen

Alle Dateien per FTP in das Web-Verzeichnis des Hosters hochladen – fertig. Ebenso
möglich: GitHub Pages, Netlify oder Cloudflare Pages (Repository verbinden, kein
Build-Befehl, Ausgabeverzeichnis `/`).
