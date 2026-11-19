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
