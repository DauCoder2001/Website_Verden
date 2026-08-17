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

### Fotos, die schon existieren

Aus den vorhandenen Aufnahmen ergeben sich gute Motive für die Galerie – die
Bildunterschriften sind bereits darauf ausgerichtet: Blick in den Spielraum, ein
Gabriel's Signature aus der Nähe, das Ocean-Blue-Tuch, die Sitzecke, die
Tischbeleuchtung, der Eingang an der Bremer Straße und das Vereinsbanner. Ein
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

Alle Dateien per FTP in das Web-Verzeichnis des Hosters hochladen – fertig. Ebenso
möglich: GitHub Pages, Netlify oder Cloudflare Pages (Repository verbinden, kein
Build-Befehl, Ausgabeverzeichnis `/`).

Die alte Vereinsdomain vom Banner (`www.pbcblack-and-white.de`) löst derzeit nicht
mehr auf – vor dem Start klären, ob sie reaktiviert oder eine neue Domain registriert
wird.
