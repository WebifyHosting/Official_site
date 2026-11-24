/* Webify | script.js
   El texto en español vive en index.html; aquí solo está la traducción al inglés. */
(function () {
  'use strict';

  var X = '<i class="fa-solid fa-xmark"></i> ', C = '<i class="fa-solid fa-check"></i> ';

  // ---------- Traducciones al inglés (clave = valor de data-i) ----------
  var EN = {
    n1: 'About', n2: 'Services', n3: 'Plans', n4: 'Contact',
    h1: 'Your business online, made for you',
    h2: 'Websites and chatbots for WhatsApp and Instagram, built in Honduras for businesses of any size.',
    b1: 'Contact us now', b2: 'Request a quote',
    c1: 'plans to choose from', c2: 'chatbot channels', c3: 'custom-made websites', c4: 'days of service',
    a0: 'About us',
    a1: 'Who we are', a1p: 'We are Webify, a technology company located in Honduras. We build websites and chatbots for businesses of any size.',
    a2: 'Our mission', a2p: 'To drive the growth of small and medium-sized businesses and local entrepreneurs through professional, accessible and innovative websites that help them increase sales, create decent jobs and move toward sustainable development.',
    a3: 'Our vision', a3p: 'To become, within the next five years, the leading provider of digital solutions for small and medium-sized businesses, recognized for innovation, close service and contribution to economic growth and decent work.',
    a4: 'Why choose us', a4p: 'All of our websites are made to fit you. We communicate prices, scope and results clearly.',
    v0: 'Our values',
    v1: '<b>Commitment to the client:</b> the success of the client\u2019s business is the success of Webify.',
    v2: '<b>Innovation:</b> we look for creative, up-to-date technology solutions.',
    v3: '<b>Teamwork:</b> results come from collaboration and respect.',
    v4: '<b>Integrity and transparency:</b> prices, scope and results are communicated clearly.',
    v5: '<b>Inclusion and accessibility:</b> we offer packages designed for businesses of all sizes.',
    v6: '<b>Responsibility and sustainability:</b> we promote the responsible use of resources.',
    s0: 'Services',
    s1: 'Websites', s1p: 'All of our websites are made to fit you: fast, secure and mobile-friendly.',
    s2: 'Landing pages', s2p: 'Clear pages focused on getting your customers to contact you.',
    s3: 'Forms and databases', s3p: 'When your project needs it, we store contacts and requests in a database.',
    s4: 'WhatsApp chatbots', s4p: 'Automatic replies, orders and appointments, at any hour.',
    s5: 'Instagram chatbots', s5p: 'Answer the messages on your account automatically.',
    t0: 'Technologies', t1: 'We work with modern tools.',
    p0: 'Portfolio', p1: 'Completed projects.',
    p2: 'Home page of a Honduran platform that collects contributions for projects that care for the land.',
    p3: 'Interactive dashboard with filterable projects, a real-time summary and an L / US$ currency switch.',
    p4: 'Light design', p5: 'View project', p6: 'Dark design',
    m1: 'Link copied!', m2: 'We copied our email address. Here is how to write to us:',
    m3: 'Open Gmail or the email app you use.',
    m4: 'Tap <b>Compose</b> or <b>New message</b>.',
    m5: 'In the <b>To</b> field, paste the address (press and hold, then choose <b>Paste</b>, or use Ctrl+V).',
    m6: 'Write a subject and tell us what you need: a website, a chatbot or both.',
    m7: 'Send the message. We will reply during our business hours.',
    m8: 'Open Gmail', m9: 'Got it',
    pl0: 'Our plans', pb: 'Basic', ps: 'Standard', pp: 'Premium',
    r1: 'Website', r11: '$120 \u00b7 Content only', r12: '$250 \u00b7 Multi-page', r13: 'From $450 \u00b7 Full',
    r2: 'Interaction', r21: 'None', r22: 'Basic: forms and surveys', r23: 'High',
    r3: 'Database', r31: X + 'Not included', r32: C + 'Basic', r33: C + 'Medium or advanced',
    r4: 'Maintenance', r41: X + 'Not included', r42: X + 'Not included', r43: C + 'Every two weeks',
    r5: 'WhatsApp and Instagram chatbot', r51: '$50 to $80 \u00b7 Automatic replies', r52: '$120 to $200 \u00b7 Orders and appointments', r53: '$250 to $400 \u00b7 Advanced',
    hire: 'Hire',
    pn: 'On the Basic plan, the website is delivered in a GitHub account that the client fully owns and manages. The final price depends on the scope of each project.',
    k0: 'Contact', k1: 'Business hours', k2: 'Monday to Saturday, 7:00 AM to 8:00 PM',
    f1: 'Driving Digital Business', f2: '\u00a9 2026 Webify. All rights reserved.'
  };

  var nodes = document.querySelectorAll('[data-i]');
  // Guardar el texto original en español
  nodes.forEach(function (el) { el.dataset.es = el.innerHTML; });

  var TITLE = { es: document.title, en: 'Webify | Websites and chatbots in Honduras' };

  function setLang(lang) {
    nodes.forEach(function (el) {
      el.innerHTML = lang === 'en' && EN[el.dataset.i] ? EN[el.dataset.i] : el.dataset.es;
    });
    document.documentElement.lang = lang;
    document.title = TITLE[lang];
    document.querySelectorAll('.lang button').forEach(function (b) {
      b.classList.toggle('on', b.dataset.lang === lang);
    });
    try { localStorage.setItem('webify-lang', lang); } catch (e) {}
  }

  document.querySelectorAll('.lang button').forEach(function (b) {
    b.addEventListener('click', function () { setLang(b.dataset.lang); });
  });

  var saved = 'es';
  try { saved = localStorage.getItem('webify-lang') || 'es'; } catch (e) {}
  if (saved === 'en') setLang('en');

  // ---------- Aparición de elementos y contadores ----------
  var reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  function count(el) {
    var end = +el.dataset.count, suf = el.dataset.suf || '', t0 = null;
    if (reduce) { el.textContent = end + suf; return; }
    function step(t) {
      t0 = t0 || t;
      var p = Math.min((t - t0) / 1400, 1);
      el.textContent = Math.round(end * p) + suf;
      if (p < 1) requestAnimationFrame(step);
    }
    requestAnimationFrame(step);
  }

  if ('IntersectionObserver' in window) {
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (e) {
        if (!e.isIntersecting) return;
        e.target.classList.add('in');
        if (e.target.dataset.count) count(e.target);
        io.unobserve(e.target);
      });
    }, { threshold: 0.2 });
    document.querySelectorAll('.reveal, [data-count]').forEach(function (el) { io.observe(el); });
  } else {
    document.querySelectorAll('.reveal').forEach(function (el) { el.classList.add('in'); });
    document.querySelectorAll('[data-count]').forEach(count);
  }

  // ---------- Copiar el correo y mostrar cómo escribirnos ----------
  var MAIL = 'webify.comunnication@gmail.com';
  var dlg = document.getElementById('copyDialog');
  var lastFocus = null;

  function copyText(text) {
    if (navigator.clipboard && window.isSecureContext) {
      return navigator.clipboard.writeText(text);
    }
    return new Promise(function (ok, fail) {
      var ta = document.createElement('textarea');
      ta.value = text; ta.setAttribute('readonly', '');
      ta.style.cssText = 'position:fixed;top:0;left:0;opacity:0';
      document.body.appendChild(ta); ta.select();
      try { document.execCommand('copy') ? ok() : fail(); } catch (e) { fail(e); }
      document.body.removeChild(ta);
    });
  }
  function openDialog() {
    lastFocus = document.activeElement;
    dlg.classList.add('show'); dlg.setAttribute('aria-hidden', 'false');
    document.getElementById('copyOk').focus();
  }
  function closeDialog() {
    dlg.classList.remove('show'); dlg.setAttribute('aria-hidden', 'true');
    if (lastFocus) lastFocus.focus();
  }
  document.querySelectorAll('.js-copy-mail').forEach(function (a) {
    a.addEventListener('click', function (ev) {
      ev.preventDefault();
      // Si el navegador no deja copiar, se abre el programa de correo como respaldo
      copyText(MAIL).then(openDialog, function () { window.location.href = 'mailto:' + MAIL; });
    });
  });
  document.getElementById('copyClose').addEventListener('click', closeDialog);
  document.getElementById('copyOk').addEventListener('click', closeDialog);
  dlg.addEventListener('click', function (e) { if (e.target === dlg) closeDialog(); });
  document.addEventListener('keydown', function (e) { if (e.key === 'Escape' && dlg.classList.contains('show')) closeDialog(); });

  // ---------- Estrellas en las esquinas: aparecen al llegar a la sección y se mueven con el scroll ----------
  var starBoxes = Array.prototype.filter.call(document.querySelectorAll('.hero, .sec, footer'), function (s) {
    return s.querySelector(':scope > .star');
  });
  if ('IntersectionObserver' in window) {
    var so = new IntersectionObserver(function (entries) {
      entries.forEach(function (e) { if (e.isIntersecting) { e.target.classList.add('in-view'); so.unobserve(e.target); } });
    }, { threshold: 0.12 });
    starBoxes.forEach(function (s) { so.observe(s); });
  } else {
    starBoxes.forEach(function (s) { s.classList.add('in-view'); });
  }
  if (!reduce) {
    var ticking = false;
    function parallax() {
      var vh = window.innerHeight;
      starBoxes.forEach(function (s) {
        var r = s.getBoundingClientRect();
        if (r.bottom < -200 || r.top > vh + 200) return;
        var off = (r.top + r.height / 2 - vh / 2) * -0.07;
        s.style.setProperty('--py', off.toFixed(1) + 'px');
      });
      ticking = false;
    }
    window.addEventListener('scroll', function () {
      if (!ticking) { ticking = true; requestAnimationFrame(parallax); }
    }, { passive: true });
    parallax();
  }

  // ---------- Vistas previas del portafolio (se ajustan al ancho de la tarjeta) ----------
  function fitFrames() {
    document.querySelectorAll('.project .frame').forEach(function (f) {
      f.style.setProperty('--k', (f.clientWidth / 1440).toFixed(4));
    });
  }
  fitFrames();
  window.addEventListener('resize', fitFrames);
  window.addEventListener('load', fitFrames);

  // ---------- Botón "Volver arriba" ----------
  var top = document.getElementById('top');
  window.addEventListener('scroll', function () {
    top.classList.toggle('show', window.scrollY > 600);
  }, { passive: true });
  top.addEventListener('click', function () { window.scrollTo({ top: 0, behavior: 'smooth' }); });
})();
