# Änderungsprotokoll

Alle nennenswerten Änderungen an der Website des Billard Clubs Black & White Verden.

Die Nummern folgen der semantischen Versionierung `Hauptversion.Funktion.Korrektur`:

- **Korrektur** (`1.2.0` → `1.2.1`): nur Fehler behoben
- **Funktion** (`1.2.1` → `1.3.0`): neue Funktionen
- **Hauptversion** (`1.3.0` → `2.0.0`): große Umbauten, Inkompatibilitäten

Die gültige Nummer steht an **genau einer Stelle** im Projekt: als Konstante
`VERSION` am Anfang von `assets/js/main.js`. Von dort wird sie in die Fußzeile
jeder Seite geschrieben. Bei jeder ausgelieferten Änderung dort hochzählen und
hier einen Abschnitt ergänzen.

---

## 1.1.0 – 19.11.2026

### Hinzugefügt

- **Vorschau beim Teilen von Links.** Open-Graph-Angaben gab es bisher nur auf der
  Startseite. Jetzt hat jede Seite eigene Angaben, sodass beim Teilen in WhatsApp
  oder Facebook Titel und Beschreibung der tatsächlich geteilten Seite erscheinen
  statt nur der nackten Adresse. `og:url` und `og:image` fehlen noch, weil sie die
  endgültige Domain brauchen – beschrieben in der README.

### Behoben

- **Überschriftensprung in der Fußzeile.** Auf sechs Seiten folgten nach einer
  Überschrift der Ebene 2 direkt Überschriften der Ebene 4; wer die Seite per
  Überschriftenliste eines Screenreaders durchgeht, bekam eine Lücke in der
  Gliederung. Die Fußzeile verwendet jetzt Ebene 3.
- **Weichzeichner der Kopfzeile in älteren Safari-Versionen.** `backdrop-filter`
  stand ohne Präfix und wurde bis Safari 17 ignoriert. Die Angabe steht nun
  zusätzlich als `-webkit-backdrop-filter`.
- **Mobiles Menü schloss nicht bei jedem Klick.** Es reagierte nur, wenn genau der
  Verweis selbst getroffen wurde. Bekäme ein Navigationspunkt je ein Symbol oder
  eine innere Auszeichnung, wäre das Klickziel dieses Kind und das Menü offen
  geblieben.
- **Überflüssige Anfrage beim Schließen der Bildansicht.** Das Bild behielt einen
  leeren `src`, den Browser als Verweis auf die Seite selbst auflösen.
- **Veralteter Vereinsname** im Dateikopf von `assets/js/main.js`.

### Dokumentation

- Arbeitsregel zu Kopf- und Fußzeile: Beide stehen in allen sieben Seiten einzeln.
  Änderungen daran gehören per Suchen-und-Ersetzen über alle Dateien, nicht von
  Hand. Ohne Build-Schritt lässt sich die Doppelung nicht auflösen; das war eine
  bewusste Entscheidung.
- Abschnitt zur Vorschau in sozialen Netzwerken mit dem, was nach Festlegung der
  Domain noch zu ergänzen ist.

---

## 1.0.2 – 19.11.2026

### Behoben

- **Die Bildansicht der Galerie hielt den Tastaturfokus nicht fest.** Sie meldete
  sich als Dialog, ließ den Fokus mit der Tabulatortaste aber in die verdeckte
  Seite dahinter wandern, von wo er nicht zurückfand; Screenreader lasen beides
  gleichzeitig vor. Solange die Bildansicht offen ist, sind Skip-Link, Kopfzeile,
  Inhalt und Fußzeile nun stillgelegt. Beim Schließen – per Knopf, mit Escape oder
  durch Klick auf den Hintergrund – wird der Fokus auf das Bild zurückgegeben, von
  dem aus die Ansicht geöffnet wurde.

---

## 1.0.1 – 19.11.2026

### Behoben

- **Das Kontaktformular meldete einen Versand, den es nicht geben konnte.** Es
  bestätigte „Dein E-Mail-Programm wurde geöffnet" auch dann, wenn als Empfänger
  noch ein Platzhalter eingetragen war oder gar kein Mail-Programm existiert. Ist
  keine echte Adresse hinterlegt, sagt das Formular das jetzt und verweist auf die
  Anschrift des Clubheims, statt einen Versand zu behaupten.
- **Lange Nachrichten wurden stillschweigend abgeschnitten.** Der Weg über
  `mailto:` ist je nach System auf etwa 2000 Zeichen begrenzt, Umlaute zählen
  dabei dreifach. Das Nachrichtenfeld nennt nun seine Grenze von 1200 Zeichen und
  erzwingt sie; zusätzlich wird die fertige Adresse vor dem Absenden gemessen und
  der Absender bei Überlänge gebeten, zu kürzen.

### Geändert

- Meldungen des Kontaktformulars, die kein Erfolg sind, heben sich jetzt deutlich
  von der Bestätigung ab: neutraler Hintergrund mit breitem Markierungsstreifen
  statt des blauen Kästchens.

---

## 1.0.0 – 19.11.2026

Erste gezählte Version. Sie hält den Stand fest, mit dem die Website
veröffentlichungsreif wird – ab hier ist jede Änderung hier nachzulesen.

### Behoben

- **Ohne JavaScript blieb der halbe Inhalt unsichtbar.** Auf fünf Seiten waren
  zusammen 40 Inhaltsblöcke dauerhaft ausgeblendet, wenn das Skript nicht lief –
  darunter Kontaktdaten und Kontaktformular. Die Einblend-Animation wird nun erst
  scharf geschaltet, wenn JavaScript nachweislich läuft; ohne Skript ist der
  Inhalt von Anfang an sichtbar.

### Hinzugefügt

- **`.gitignore`**, damit das Arbeitsmaterial im Projektordner (alte Vereinsseite,
  gespeicherte Seiten anderer Vereine, unsortierte Fotos – zusammen rund 2,9 MB)
  nicht versehentlich mit veröffentlicht wird.
- **Versionsnummer** als Konstante in `assets/js/main.js`, sichtbar in der Fußzeile
  jeder Seite.
- **Dieses Änderungsprotokoll.**

### Geändert

- Der Abschnitt „Veröffentlichen" der `README.md` riet bisher dazu, alle Dateien
  des Ordners hochzuladen. Er benennt jetzt getrennt für FTP und GitHub, was auf
  den Server gehört und was nicht.

### Projektpflege

- Der Projektstand liegt erstmals in der Versionsverwaltung. Vorher existierte die
  Website ausschließlich als Arbeitskopie auf einer Festplatte.

---

## Vor der Versionszählung

Die Website entstand, bevor die Nummerierung eingeführt wurde. Diese Einträge sind
nachträglich notiert und haben deshalb keine eigene Versionsnummer.

- **19.11.2026** – Qualitätsprüfung nach ISO/IEC 25010. Ergebnis: 1 kritischer
  Befund, 5 mittlere, 7 Hinweise. Die Befunde 1, 5, 6 und 7 wurden umgesetzt und
  sind oben unter 1.0.0 aufgeführt; die übrigen sind noch offen.
- **28.10.2026** – Prüfung der Oberfläche auf Einheitlichkeit. Fünf verschiedene
  Beschriftungen für „Kontakt aufnehmen" wurden auf eine reduziert, ebenso drei
  Verben fürs Vorbeikommen auf eines. Der verbindliche Regelsatz für Knöpfe und
  Beschriftungen steht seitdem in der `README.md`. Die ersten echten Fotos
  (Eingang und Vereinsbanner) kamen in die Galerie.
- **28.10.2026** – Die Seite `mannschaften.html` wurde entfernt, weil der Verein
  keinen Ligabetrieb hat. Mit ihr alle Verweise auf Mannschaften, Spielklassen,
  Punktspiele und Heimspiele.
- **davor** – Aufbau der Website: sieben Seiten als reines HTML, CSS und
  JavaScript, ohne Build-Schritt und ohne externe Requests. Helles Design mit
  Ocean Blue als Akzentfarbe, abgeleitet vom Tuch der Tische. Zuvor war ein
  dunkles Design entworfen worden, das auf Wunsch ersetzt wurde.
