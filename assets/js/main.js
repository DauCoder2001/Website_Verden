/* ==========================================================================
   Billardclub Black & White Verden e.V. – Interaktionen
   Kein Framework, keine externen Abhängigkeiten.
   ========================================================================== */
(function () {
  'use strict';

  /* ---------------------------------------------------------------------
     Mobile-Navigation
     --------------------------------------------------------------------- */
  var toggle = document.querySelector('.nav-toggle');
  var nav = document.getElementById('hauptnavigation');

  if (toggle && nav) {
    toggle.addEventListener('click', function () {
      var open = nav.classList.toggle('is-open');
      toggle.setAttribute('aria-expanded', open ? 'true' : 'false');
    });

    // Menü schließen, sobald ein Link angeklickt wird
    nav.addEventListener('click', function (e) {
      if (e.target.tagName === 'A') {
        nav.classList.remove('is-open');
        toggle.setAttribute('aria-expanded', 'false');
      }
    });

    // Menü schließen beim Wechsel auf Desktop-Breite
    window.addEventListener('resize', function () {
      if (window.innerWidth > 860) {
        nav.classList.remove('is-open');
        toggle.setAttribute('aria-expanded', 'false');
      }
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

    function openLightbox(src, alt, caption) {
      lastFocused = document.activeElement;
      lbImage.src = src;
      lbImage.alt = alt || '';
      lbCaption.textContent = caption || '';
      lightbox.classList.add('is-open');
      lightbox.setAttribute('aria-hidden', 'false');
      document.body.style.overflow = 'hidden';
      lbClose.focus();
    }

    function closeLightbox() {
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

      var empfaenger = form.dataset.mailto || 'info@example.de';
      window.location.href =
        'mailto:' + empfaenger +
        '?subject=' + encodeURIComponent(betreff) +
        '&body=' + encodeURIComponent(body);

      if (status) {
        status.textContent =
          'Dein E-Mail-Programm wurde geöffnet. Bitte dort noch auf "Senden" klicken.';
        status.classList.add('is-visible');
      }
    });
  }

  /* ---------------------------------------------------------------------
     Jahreszahl im Footer
     --------------------------------------------------------------------- */
  document.querySelectorAll('[data-jahr]').forEach(function (el) {
    el.textContent = new Date().getFullYear();
  });
})();
