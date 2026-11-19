/* ==========================================================================
   Billardclub Black & White Verden e.V. – Interaktionen
   Kein Framework, keine externen Abhängigkeiten.
   ========================================================================== */
(function () {
  'use strict';

  /* ---------------------------------------------------------------------
     Versionsnummer
     Dies ist die EINZIGE Stelle im Projekt, an der die Nummer steht. Sie
     wird von hier aus in die Fusszeile jeder Seite geschrieben.
     Schema: Hauptversion.Funktion.Korrektur (semantische Versionierung)
       Korrektur  1.2.0 -> 1.2.1   nur Fehler behoben
       Funktion   1.2.1 -> 1.3.0   neue Funktionen
       Haupt      1.3.0 -> 2.0.0   grosse Umbauten, Inkompatibilitaeten
     Bei jeder ausgelieferten Aenderung hier hochzaehlen und in der
     CHANGELOG.md einen Abschnitt ergaenzen.
     --------------------------------------------------------------------- */
  var VERSION = '1.0.2';

  /* ---------------------------------------------------------------------
     Mobile-Navigation
     --------------------------------------------------------------------- */
  var toggle = document.querySelector('.nav-toggle');
  var nav = document.getElementById('hauptnavigation');

  if (toggle && nav) {
    // Zustand an einer Stelle setzen, damit Beschriftung und aria-expanded
    // nie auseinanderlaufen.
    function menueZustand(offen) {
      nav.classList.toggle('is-open', offen);
      toggle.setAttribute('aria-expanded', offen ? 'true' : 'false');
      toggle.setAttribute('aria-label', offen ? 'Menü schließen' : 'Menü öffnen');
    }

    toggle.addEventListener('click', function () {
      menueZustand(!nav.classList.contains('is-open'));
    });

    // Menü schließen, sobald ein Link angeklickt wird
    nav.addEventListener('click', function (e) {
      if (e.target.tagName === 'A') { menueZustand(false); }
    });

    // Menü schließen beim Wechsel auf Desktop-Breite
    window.addEventListener('resize', function () {
      if (window.innerWidth > 860) { menueZustand(false); }
    });
  }

  /* ---------------------------------------------------------------------
     Einblend-Animation beim Scrollen
     --------------------------------------------------------------------- */
  var revealables = document.querySelectorAll('.reveal');

  if (revealables.length) {
    if ('IntersectionObserver' in window) {
      var observer = new IntersectionObserver(function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
            observer.unobserve(entry.target);
          }
        });
      }, { threshold: 0.12, rootMargin: '0px 0px -60px 0px' });

      revealables.forEach(function (el) { observer.observe(el); });
    } else {
      revealables.forEach(function (el) { el.classList.add('is-visible'); });
    }
  }

  /* ---------------------------------------------------------------------
     Galerie-Lightbox
     --------------------------------------------------------------------- */
  var lightbox = document.getElementById('lightbox');

  if (lightbox) {
    var lbImage = lightbox.querySelector('img');
    var lbCaption = lightbox.querySelector('figcaption');
    var lbClose = lightbox.querySelector('.lightbox__close');
    var lastFocused = null;

    // Alles hinter der Bildansicht stilllegen, solange sie offen ist. Ohne das
    // wandert der Fokus mit der Tabulatortaste in die unsichtbare Seite
    // dahinter und findet nicht zurueck. 'inert' nimmt den Bereich zugleich
    // aus der Tabreihenfolge und aus dem Vorlesen durch Screenreader.
    // Der Skip-Link gehoert dazu: er steht ausserhalb von Kopf, Inhalt und Fuss.
    var hintergrund = [
      document.querySelector('.skip-link'),
      document.querySelector('.header'),
      document.getElementById('main'),
      document.querySelector('.footer')
    ].filter(function (el) { return el; });

    function hintergrundStilllegen(an) {
      hintergrund.forEach(function (el) { el.inert = an; });
    }

    function openLightbox(src, alt, caption) {
      lastFocused = document.activeElement;
      lbImage.src = src;
      lbImage.alt = alt || '';
      lbCaption.textContent = caption || '';
      lightbox.classList.add('is-open');
      lightbox.setAttribute('aria-hidden', 'false');
      document.body.style.overflow = 'hidden';
      hintergrundStilllegen(true);
      lbClose.focus();
    }

    function closeLightbox() {
      hintergrundStilllegen(false);
      lightbox.classList.remove('is-open');
      lightbox.setAttribute('aria-hidden', 'true');
      document.body.style.overflow = '';
      lbImage.src = '';
      if (lastFocused) { lastFocused.focus(); }
    }

    document.querySelectorAll('.gallery__item').forEach(function (item) {
      item.addEventListener('click', function () {
        var img = item.querySelector('img');
        var cap = item.querySelector('.gallery__caption');
        if (img) {
          openLightbox(img.src, img.alt, cap ? cap.textContent.trim() : img.alt);
        }
      });
    });

    lbClose.addEventListener('click', closeLightbox);

    lightbox.addEventListener('click', function (e) {
      if (e.target === lightbox) { closeLightbox(); }
    });

    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape' && lightbox.classList.contains('is-open')) {
        closeLightbox();
      }
    });
  }

  /* ---------------------------------------------------------------------
     Kontaktformular
     Ohne Server-Backend gibt es keinen Versand. Das Formular öffnet
     daher das E-Mail-Programm mit vorbereitetem Text (mailto).
     Wer PHP/Formspree o. Ä. nutzt: action/method im HTML setzen und
     diesen Block entfernen.
     --------------------------------------------------------------------- */
  var form = document.getElementById('kontaktformular');

  if (form && !form.getAttribute('action')) {
    var status = document.getElementById('form-status');

    // Statusmeldung an einer Stelle setzen, damit Text und Aussehen nie
    // auseinanderlaufen.
    function melde(text, problem) {
      if (!status) { return; }
      status.textContent = text;
      status.classList.toggle('form-status--problem', !!problem);
      status.classList.add('is-visible');
    }

    form.addEventListener('submit', function (e) {
      e.preventDefault();
      if (!form.reportValidity()) { return; }

      var data = new FormData(form);
      var betreff = 'Anfrage über die Website: ' + (data.get('betreff') || 'Kontakt');
      var body =
        'Name: ' + (data.get('name') || '') + '\n' +
        'E-Mail: ' + (data.get('email') || '') + '\n' +
        'Telefon: ' + (data.get('telefon') || '-') + '\n\n' +
        (data.get('nachricht') || '');

      var empfaenger = form.dataset.mailto || '';

      // Solange keine echte Adresse hinterlegt ist, darf das Formular keinen
      // Versand behaupten. 'example.' erkennt die Platzhalter mit.
      if (!empfaenger || empfaenger.indexOf('example.') !== -1) {
        melde('Die E-Mail-Adresse des Vereins ist hier noch nicht hinterlegt, ' +
              'deine Nachricht kann deshalb nicht verschickt werden. Komm am ' +
              'besten einfach im Clubheim vorbei: Bremer Str. 121, ' +
              '27283 Verden (Aller).', true);
        return;
      }

      var adresse =
        'mailto:' + empfaenger +
        '?subject=' + encodeURIComponent(betreff) +
        '&body=' + encodeURIComponent(body);

      // mailto-Adressen werden je nach System ab etwa 2000 Zeichen abgeschnitten.
      // Umlaute zaehlen dabei dreifach (aus ü wird %C3%BC), deshalb wird die
      // fertige Adresse gemessen und nicht die sichtbare Textlaenge.
      if (adresse.length > 1900) {
        melde('Deine Nachricht ist zu lang für diesen Weg und würde unterwegs ' +
              'abgeschnitten. Bitte kürze sie etwas oder schreib uns direkt ' +
              'an ' + empfaenger + '.', true);
        return;
      }

      window.location.href = adresse;

      melde('Es sollte sich jetzt dein E-Mail-Programm mit der fertigen Nachricht ' +
            'öffnen. Falls nicht, schreib uns bitte direkt an ' +
            empfaenger + '.', false);
    });
  }

  /* ---------------------------------------------------------------------
     Jahreszahl und Versionsnummer im Footer
     --------------------------------------------------------------------- */
  document.querySelectorAll('[data-jahr]').forEach(function (el) {
    el.textContent = new Date().getFullYear();
  });

  document.querySelectorAll('[data-version]').forEach(function (el) {
    el.textContent = 'v' + VERSION;
  });
})();
