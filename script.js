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
    m8: 'Open Gmail', m9: 'Got it', m10: 'Close',
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

  // ---------- Portafolio: los proyectos viven dentro de este archivo ----------
  var PROJECTS = {
    claro: { title: 'B10 · Crowdfunding ecológico', html: "<!DOCTYPE html>\n<html lang=\"es\">\n<head>\n<meta charset=\"utf-8\">\n<meta name=\"viewport\" content=\"width=device-width, initial-scale=1\">\n<title>B10 | Crowdfunding ecológico en Honduras (demo)</title>\n<link rel=\"preconnect\" href=\"https://fonts.googleapis.com\">\n<link href=\"https://fonts.googleapis.com/css2?family=Archivo:wght@400;500;600;700&family=Archivo+Narrow:wght@500;600;700&display=swap\" rel=\"stylesheet\">\n<style>\n:root { --ink:#0d1f17; --green:#1f4d3a; --green-d:#143527; --lime:#cfe9a4; --lime-d:#b9db84; --paper:#f4f7f2; --muted:#5d6b63; --line:#e4e9e3; }\n* { box-sizing:border-box; margin:0; padding:0; }\nbody { font-family:'Archivo',system-ui,sans-serif; background:var(--paper); color:var(--ink); border-top:3px solid var(--green-d); }\na { color:inherit; text-decoration:none; }\n\n/* Barra superior */\n.top { display:flex; align-items:center; justify-content:space-between; gap:24px; padding:0 8%; height:100px; background:#fff; border-bottom:1px solid var(--line); }\n.mark { display:grid; justify-items:center; gap:2px; font-weight:700; line-height:1; }\n.mark svg { width:46px; height:50px; }\n.mark span { font-size:1.35rem; letter-spacing:.02em; }\n.top nav { display:flex; gap:30px; color:var(--muted); font-size:.95rem; }\n.top nav a:hover { color:var(--green); }\n.demo { padding-left:20px; border-left:1px solid var(--line); }\n.demo small { display:block; font-size:.62rem; letter-spacing:.2em; color:var(--muted); margin-bottom:6px; }\n.demo b { font-size:.98rem; display:flex; align-items:center; gap:16px; }\n\n/* Portada */\n.wrap { padding:28px 3.7%; }\n.hero { display:grid; grid-template-columns:1.12fr 1fr; min-height:612px; border-radius:30px; overflow:hidden; background:linear-gradient(160deg,#2b6048,var(--green-d)); box-shadow:0 18px 40px rgba(20,53,39,.28); }\n.copy { padding:56px 64px; color:#eaf3e8; }\n.tag { display:inline-flex; align-items:center; gap:12px; font-size:.68rem; letter-spacing:.2em; font-weight:600; color:#cfe3c8; }\n.tag i { font-style:normal; padding:3px 10px; border:1px solid rgba(255,255,255,.4); letter-spacing:.25em; }\nh1 { font-family:'Archivo Narrow','Archivo',sans-serif; font-weight:600; font-size:4.1rem; line-height:1.1; letter-spacing:-.02em; margin:40px 0 28px; color:#fff; max-width:11em; }\nh1 em { font-style:normal; color:var(--lime); }\n.copy p { max-width:27em; line-height:1.9; color:#d3e4cf; }\n.row { display:flex; align-items:center; gap:26px; margin:38px 0 46px; }\n.cta { display:inline-flex; align-items:center; gap:14px; padding:16px 22px; border-radius:40px; background:linear-gradient(180deg,#d8efae,#b4d77c); color:#173826; font-weight:700; box-shadow:0 6px 0 #6f9a4a, 0 14px 24px rgba(0,0,0,.25); }\n.shield { display:flex; align-items:center; gap:10px; font-size:.82rem; color:#e3efe0; }\n.crowd { display:flex; align-items:center; gap:12px; font-size:.7rem; line-height:1.5; color:#cfe0cb; }\n.crowd .av { display:flex; }\n.crowd .av b { width:26px; height:26px; margin-right:-6px; border-radius:50%; display:grid; place-items:center; font-size:.62rem; color:#2a2a2a; border:2px solid #2b5a45; }\n.av b:nth-child(1) { background:#d5a57a; } .av b:nth-child(2) { background:#efe6c8; } .av b:nth-child(3) { background:#a9b8a0; }\n\n/* Panel de paisaje (ilustración propia) */\n.scene { position:relative; background:linear-gradient(180deg,#dcc7d4 0%,#b9a7bb 28%,#7c8a85 55%,#26453a 100%); overflow:hidden; }\n.scene svg.land { position:absolute; inset:0; width:100%; height:100%; }\n.chip { position:absolute; top:26px; right:26px; display:flex; align-items:center; gap:8px; padding:11px 18px; border-radius:30px; background:#fff; font-size:.72rem; box-shadow:0 6px 20px rgba(0,0,0,.15); }\n.stamp { position:absolute; left:28px; bottom:42px; display:flex; align-items:center; gap:16px; padding:22px 34px 22px 26px; border-radius:20px; background:#f5f3ea; transform:rotate(-4deg); box-shadow:0 18px 30px rgba(0,0,0,.3); }\n.stamp .ic { width:50px; height:50px; border-radius:50%; display:grid; place-items:center; background:linear-gradient(180deg,#d6efb0,#a9cf75); box-shadow:inset 0 -3px 0 rgba(0,0,0,.12); }\n.stamp b { display:block; font-size:1.05rem; line-height:1.3; }\n.stamp small { font-size:.65rem; color:var(--muted); }\n.credit { position:absolute; right:14px; bottom:10px; font-size:.6rem; color:#cfd9d3; }\n\n/* Cifras */\n.facts { display:grid; grid-template-columns:1.35fr 1.1fr .95fr .95fr; align-items:start; padding:40px 4% 24px; }\n.facts > div { padding:0 36px; border-left:1px solid var(--line); }\n.facts > div:first-child { border:0; padding-left:0; }\n.facts small { display:block; font-size:.62rem; letter-spacing:.22em; font-weight:700; color:var(--green); margin-top:10px; margin-bottom:12px; }\n.facts .n { font-family:'Archivo Narrow','Archivo',sans-serif; font-weight:600; font-size:2.1rem; letter-spacing:-.02em; }\n.facts .n s { text-decoration:none; font-size:1.3rem; font-weight:500; }\n.facts p { font-size:.78rem; color:var(--muted); margin-top:10px; }\n\n@media (max-width:900px) {\n  .top nav { display:none; } .top { height:80px; }\n  .hero { grid-template-columns:1fr; } .copy { padding:36px 26px; } h1 { font-size:2.6rem; }\n  .scene { min-height:360px; } .facts { grid-template-columns:1fr 1fr; gap:24px; } .facts > div { border:0; padding:0; }\n}\n</style>\n</head>\n<body>\n<header class=\"top\">\n  <a class=\"mark\" href=\"#\" aria-label=\"B10\">\n    <svg viewBox=\"0 0 46 50\" aria-hidden=\"true\"><path fill=\"#0d1f17\" d=\"M4 0h10v10H4zM4 14h10v26H4zM18 0h16c8 0 12 4 12 10 0 4-2 7-6 8 5 1 8 5 8 10 0 7-6 12-14 12H18V0zm10 8v8h5c3 0 4-2 4-4s-1-4-4-4h-5zm0 16v10h6c3 0 5-2 5-5s-2-5-5-5h-6z\" transform=\"scale(.9 .85) translate(2 2)\"/></svg>\n    <span>B10</span>\n  </a>\n  <nav><a href=\"#\">Explorar proyectos</a><a href=\"#\">Transparencia</a><a href=\"#\">Consultar folio</a></nav>\n  <div class=\"demo\"><small>VISTA DE DEMO</small><b>Dueño de proyecto <svg width=\"12\" height=\"12\" viewBox=\"0 0 12 12\" aria-hidden=\"true\"><path d=\"M2 4l4 4 4-4\" fill=\"none\" stroke=\"#0d1f17\" stroke-width=\"1.5\"/></svg></b></div>\n</header>\n\n<main class=\"wrap\">\n  <section class=\"hero\">\n    <div class=\"copy\">\n      <div class=\"tag\"><i>★ ★ ★</i> CROWDFUNDING ECOLÓGICO · HONDURAS</div>\n      <h1>El futuro de nuestra tierra se construye <em>bloque a bloque.</em></h1>\n      <p>Conectamos a quienes quieren cambiar las cosas con proyectos que cuidan de Honduras. Tu aporte es parte del cambio.</p>\n      <div class=\"row\">\n        <a class=\"cta\" href=\"#\">Encontrá tu causa <svg width=\"14\" height=\"14\" viewBox=\"0 0 14 14\" aria-hidden=\"true\"><path d=\"M3 11L11 3M5 3h6v6\" fill=\"none\" stroke=\"#173826\" stroke-width=\"1.8\"/></svg></a>\n        <span class=\"shield\"><svg width=\"20\" height=\"22\" viewBox=\"0 0 20 22\" aria-hidden=\"true\"><path d=\"M10 1l8 3v6c0 5-3.5 9-8 11-4.500-2-8-6-8-11V4z\" fill=\"none\" stroke=\"#e3efe0\" stroke-width=\"1.5\"/><path d=\"M6.500 11l2.500 2.500 4.500-5\" fill=\"none\" stroke=\"#e3efe0\" stroke-width=\"1.5\"/></svg> Cada aporte, a la vista</span>\n      </div>\n      <div class=\"crowd\"><div class=\"av\"><b>M</b><b>A</b><b>J</b></div><span>Una comunidad que cree<br><b style=\"color:#fff;font-weight:600\">en el poder de hacer juntos.</b></span></div>\n    </div>\n\n    <div class=\"scene\" role=\"img\" aria-label=\"Ilustración de montañas con bosque de pinos entre la neblina\">\n      <svg class=\"land\" viewBox=\"0 0 700 612\" preserveAspectRatio=\"xMidYMid slice\" aria-hidden=\"true\">\n        <defs>\n          <linearGradient id=\"m1\" x1=\"0\" y1=\"0\" x2=\"0\" y2=\"1\"><stop offset=\"0\" stop-color=\"#8d8e93\"/><stop offset=\"1\" stop-color=\"#4f6a60\"/></linearGradient>\n          <linearGradient id=\"m2\" x1=\"0\" y1=\"0\" x2=\"0\" y2=\"1\"><stop offset=\"0\" stop-color=\"#3c5b4d\"/><stop offset=\"1\" stop-color=\"#14301f\"/></linearGradient>\n          <linearGradient id=\"fog\" x1=\"0\" y1=\"0\" x2=\"0\" y2=\"1\"><stop offset=\"0\" stop-color=\"#fff\" stop-opacity=\"0\"/><stop offset=\".5\" stop-color=\"#f1e6ee\" stop-opacity=\".55\"/><stop offset=\"1\" stop-color=\"#fff\" stop-opacity=\"0\"/></linearGradient>\n          <g id=\"pine\"><path d=\"M0 0l10 26H-10zM0 14l14 32H-14zM0 30l18 40H-18z\"/></g>\n        </defs>\n        <path d=\"M0 330C90 280 170 190 280 150C380 112 470 140 560 200C620 240 670 290 700 330V612H0z\" fill=\"url(#m1)\"/>\n        <rect y=\"190\" width=\"700\" height=\"150\" fill=\"url(#fog)\"/>\n        <path d=\"M0 430C100 380 200 300 320 290C430 282 530 340 600 390C650 424 680 470 700 500V612H0z\" fill=\"url(#m2)\"/>\n        <g fill=\"#0f2a1b\" opacity=\".92\">\n          <use href=\"#pine\" x=\"410\" y=\"330\"/><use href=\"#pine\" x=\"450\" y=\"310\" transform=\"translate(0 0)\"/><use href=\"#pine\" x=\"490\" y=\"340\"/><use href=\"#pine\" x=\"530\" y=\"325\"/><use href=\"#pine\" x=\"570\" y=\"350\"/><use href=\"#pine\" x=\"610\" y=\"365\"/><use href=\"#pine\" x=\"650\" y=\"380\"/><use href=\"#pine\" x=\"680\" y=\"395\"/>\n          <use href=\"#pine\" x=\"380\" y=\"380\"/><use href=\"#pine\" x=\"425\" y=\"395\"/><use href=\"#pine\" x=\"470\" y=\"385\"/><use href=\"#pine\" x=\"515\" y=\"400\"/><use href=\"#pine\" x=\"560\" y=\"415\"/><use href=\"#pine\" x=\"605\" y=\"430\"/><use href=\"#pine\" x=\"650\" y=\"445\"/>\n          <use href=\"#pine\" x=\"340\" y=\"450\"/><use href=\"#pine\" x=\"390\" y=\"465\"/><use href=\"#pine\" x=\"440\" y=\"455\"/><use href=\"#pine\" x=\"490\" y=\"470\"/><use href=\"#pine\" x=\"540\" y=\"485\"/><use href=\"#pine\" x=\"590\" y=\"500\"/><use href=\"#pine\" x=\"640\" y=\"515\"/>\n          <use href=\"#pine\" x=\"300\" y=\"520\"/><use href=\"#pine\" x=\"360\" y=\"535\"/><use href=\"#pine\" x=\"420\" y=\"525\"/><use href=\"#pine\" x=\"480\" y=\"545\"/><use href=\"#pine\" x=\"540\" y=\"555\"/><use href=\"#pine\" x=\"600\" y=\"570\"/><use href=\"#pine\" x=\"660\" y=\"580\"/>\n        </g>\n      </svg>\n      <div class=\"chip\"><svg width=\"12\" height=\"14\" viewBox=\"0 0 12 14\" aria-hidden=\"true\"><path d=\"M6 0a5 5 0 0 0-5 5c0 4 5 9 5 9s5-5 5-9a5 5 0 0 0-5-5zm0 7a2 2 0 1 1 0-4 2 2 0 0 1 0 4z\" fill=\"none\" stroke=\"#0d1f17\" stroke-width=\"1.2\"/></svg> Valle de Ángeles, Honduras</div>\n      <div class=\"stamp\">\n        <div class=\"ic\"><svg width=\"22\" height=\"22\" viewBox=\"0 0 22 22\" aria-hidden=\"true\"><path d=\"M11 20v-8M11 12C11 7 8 5 3 5c0 5 3 7 8 7zm0 0c0-4 2-6 7-6 0 4-2 6-7 6z\" fill=\"none\" stroke=\"#1d4a33\" stroke-width=\"1.8\" stroke-linecap=\"round\"/></svg></div>\n        <div><b>De nuestra tierra.<br>Para nuestra tierra.</b><small>100% espíritu hondureño</small></div>\n      </div>\n      <span class=\"credit\">Ilustración de demostración</span>\n    </div>\n  </section>\n\n  <section class=\"facts\" aria-label=\"Cifras de demostración\">\n    <div><small>EL IMPACTO QUE SUMAMOS</small><p style=\"margin-top:0\">Cifras de demostración</p></div>\n    <div><div class=\"n\">L 124,000.00</div><p>recaudados en la demo</p></div>\n    <div><div class=\"n\">24 <s>aportes</s></div><p>que hacen crecer las ideas</p></div>\n    <div><div class=\"n\">3 <s>proyectos</s></div><p>con una causa en común</p></div>\n  </section>\n</main>\n</body>\n</html>\n" },
    oscuro: { title: 'Bloque Diez · Inversiones inteligentes', html: "<!DOCTYPE html>\n<html lang=\"es\">\n<head>\n<meta charset=\"utf-8\">\n<meta name=\"viewport\" content=\"width=device-width, initial-scale=1\">\n<title>Bloque Diez | Inversiones inteligentes (demo)</title>\n<link rel=\"preconnect\" href=\"https://fonts.googleapis.com\">\n<link href=\"https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap\" rel=\"stylesheet\">\n<style>\n:root { --bg:#060b1a; --panel:#0b1226; --panel2:#0e1730; --line:rgba(255,255,255,.1); --text:#eef2ff; --muted:#a3adc7; --blue:#2f6bff; --sky:#5aa9ff; --mint:#2fe0a8; }\n* { box-sizing:border-box; margin:0; padding:0; }\nbody { font-family:'Inter',system-ui,sans-serif; background:radial-gradient(900px 500px at 100% 100%,rgba(47,224,168,.1),transparent 60%),radial-gradient(800px 500px at 0 0,rgba(47,107,255,.08),transparent 60%),var(--bg); color:var(--text); min-height:100vh; }\nbutton, select, input { font:inherit; color:inherit; }\n.page { width:min(1216px,92%); margin:0 auto; }\n\n/* Franja demo */\n.strip { background:#050914; border-bottom:1px solid var(--line); }\n.strip .page { display:flex; align-items:center; justify-content:space-between; gap:16px; height:48px; font-size:.78rem; color:var(--muted); }\n.strip .l { display:flex; align-items:center; gap:12px; }\n.pill { display:inline-flex; align-items:center; gap:7px; padding:4px 10px; border-radius:20px; background:rgba(47,224,168,.12); border:1px solid rgba(47,224,168,.35); color:var(--mint); font-weight:600; }\n.pill::before { content:\"\"; width:6px; height:6px; border-radius:50%; background:var(--mint); }\n.strip .r { display:flex; align-items:center; gap:14px; }\n.cur { display:flex; padding:3px; border-radius:8px; background:var(--panel); border:1px solid var(--line); }\n.cur button { padding:4px 10px; border:0; border-radius:6px; background:none; cursor:pointer; font-weight:600; font-size:.74rem; color:var(--muted); }\n.cur button.on { background:var(--blue); color:#fff; }\n.reset { padding:8px 12px; border-radius:8px; border:1px solid var(--line); background:transparent; cursor:pointer; font-size:.78rem; }\n\n/* Navegación */\n.nav { display:flex; align-items:center; justify-content:space-between; gap:20px; padding:12px 0; border-bottom:1px solid var(--line); }\n.brand { display:flex; align-items:center; gap:12px; }\n.ico { width:40px; height:40px; border-radius:11px; background:var(--panel2); border:1px solid rgba(90,169,255,.5); display:grid; place-items:center; }\n.brand b { font-size:1.05rem; } .brand small { display:block; font-size:.7rem; color:var(--muted); margin-top:2px; }\n.tabs { display:flex; align-items:center; gap:8px; }\n.tabs a { display:flex; align-items:center; gap:8px; padding:10px 18px; border-radius:10px; font-size:.9rem; color:var(--muted); }\n.tabs a.on { color:#fff; background:rgba(47,107,255,.2); border:1px solid rgba(90,169,255,.5); font-weight:600; }\n.badge { width:20px; height:20px; border-radius:50%; display:grid; place-items:center; font-size:.68rem; font-weight:700; color:#2a1d00; background:#f6c24a; }\n.rol { display:flex; align-items:center; gap:10px; padding:9px 14px; border-radius:12px; border:1px solid var(--line); background:var(--panel); font-size:.78rem; color:var(--muted); }\n.rol select { background:#fff; color:#000; border:1px solid #888; border-radius:4px; padding:3px 6px; font-weight:600; }\n\n/* Portada */\n.hero { display:grid; grid-template-columns:1.2fr 1fr; gap:40px; align-items:center; margin-top:34px; padding:40px 40px 38px; border-radius:26px; background:linear-gradient(180deg,rgba(15,24,48,.85),rgba(9,14,30,.9)); border:1px solid var(--line); }\n.kicker { display:inline-flex; align-items:center; gap:8px; padding:6px 14px; border-radius:20px; font-size:.76rem; font-weight:600; background:rgba(47,107,255,.12); border:1px solid rgba(90,169,255,.4); color:#bcd7ff; }\nh1 { font-weight:800; font-size:3.15rem; line-height:1.03; letter-spacing:-.035em; margin:20px 0 20px; }\nh1 em { font-style:normal; background:linear-gradient(90deg,#5aa9ff,#2fe0a8); -webkit-background-clip:text; background-clip:text; color:transparent; }\n.hero p.lead { color:#c3cce3; line-height:1.65; max-width:36em; font-size:1.02rem; }\n.btns { display:flex; gap:12px; margin-top:26px; flex-wrap:wrap; }\n.b1, .b2 { display:inline-flex; align-items:center; gap:10px; padding:14px 22px; border-radius:11px; font-weight:600; font-size:.92rem; cursor:pointer; }\n.b1 { background:var(--blue); border:0; box-shadow:0 10px 24px rgba(47,107,255,.35); }\n.b2 { background:transparent; border:1px solid var(--line); }\n\n.live { padding:26px 24px 24px; border-radius:20px; background:rgba(8,13,28,.8); border:1px solid var(--line); }\n.live .hd { display:flex; justify-content:space-between; font-size:.78rem; font-weight:700; letter-spacing:.05em; color:#c8d0e6; }\n.live .hd span:last-child { color:var(--mint); font-weight:600; letter-spacing:0; display:flex; align-items:center; gap:6px; }\n.live .hd span:last-child::before { content:\"\"; width:6px; height:6px; border-radius:50%; background:var(--mint); }\n.total { margin:18px 0 14px; padding:16px 18px; border-radius:12px; background:rgba(47,107,255,.1); border:1px solid rgba(90,169,255,.28); }\n.total small { font-size:.8rem; color:var(--muted); } .total b { display:block; font-size:2.1rem; font-weight:800; letter-spacing:.01em; margin-top:6px; }\n.mini { display:grid; grid-template-columns:repeat(3,1fr); gap:10px; }\n.mini div { padding:14px; border-radius:12px; border:1px solid var(--line); background:rgba(255,255,255,.02); }\n.mini small { font-size:.74rem; color:var(--muted); } .mini b { display:block; font-size:1.4rem; margin-top:6px; }\n.mini div:nth-child(2) b { color:var(--mint); } .mini div:nth-child(3) b { color:var(--sky); }\n\n/* Filtros */\n.bar { display:flex; align-items:center; justify-content:space-between; gap:16px; margin-top:34px; flex-wrap:wrap; }\n.seg { display:flex; padding:4px; border-radius:12px; border:1px solid var(--line); background:var(--panel); }\n.seg button { display:flex; align-items:center; gap:8px; padding:10px 16px; border:0; border-radius:9px; background:none; cursor:pointer; font-size:.88rem; font-weight:600; color:var(--muted); }\n.seg button.on { background:var(--blue); color:#fff; }\n.search { display:flex; align-items:center; gap:10px; width:min(310px,100%); padding:13px 16px; border-radius:12px; border:1px solid var(--line); background:var(--panel); }\n.search input { width:100%; background:none; border:0; outline:0; font-size:.9rem; }\n.search input::placeholder { color:var(--muted); }\n.cats { display:flex; align-items:center; gap:10px; margin:20px 0 22px; flex-wrap:wrap; font-size:.78rem; color:var(--muted); }\n.cats button { padding:8px 16px; border-radius:20px; border:1px solid var(--line); background:var(--panel); cursor:pointer; font-size:.8rem; font-weight:600; color:#d6def2; }\n.cats button.on { background:rgba(47,224,168,.14); border-color:rgba(47,224,168,.5); color:var(--mint); }\n\n/* Tarjetas */\n.cards { display:grid; grid-template-columns:repeat(3,1fr); gap:24px; padding-bottom:60px; }\n.card { border-radius:18px; overflow:hidden; background:var(--panel); border:1px solid var(--line); transition:transform .25s, border-color .25s; }\n.card:hover { transform:translateY(-4px); border-color:rgba(90,169,255,.5); }\n.card[hidden] { display:none; }\n.art { position:relative; height:144px; }\n.art svg { position:absolute; inset:0; width:100%; height:100%; }\n.art .t { position:absolute; top:16px; padding:5px 12px; border-radius:20px; font-size:.7rem; font-weight:600; background:rgba(8,13,28,.55); border:1px solid rgba(255,255,255,.35); backdrop-filter:blur(4px); }\n.art .t.l { left:16px; } .art .t.r { right:16px; }\n.art .loc { position:absolute; left:16px; bottom:12px; display:flex; align-items:center; gap:7px; font-size:.78rem; font-weight:600; }\n.i1 { background:linear-gradient(135deg,#1c2a6b,#101a4a); } .i2 { background:linear-gradient(135deg,#0f4f4b,#0a2c3a); } .i3 { background:linear-gradient(135deg,#1c2a6b,#0f3a52); }\n.body { padding:18px 20px 20px; }\n.body small { font-size:.74rem; color:var(--muted); }\n.body h3 { font-size:1.12rem; line-height:1.3; margin:8px 0 14px; letter-spacing:-.01em; }\n.prog { height:6px; border-radius:6px; background:rgba(255,255,255,.1); overflow:hidden; }\n.prog i { display:block; height:100%; border-radius:6px; background:linear-gradient(90deg,var(--blue),var(--mint)); }\n.meta { display:flex; justify-content:space-between; margin-top:10px; font-size:.78rem; color:var(--muted); }\n.meta b { color:var(--text); }\n.empty { grid-column:1/-1; padding:40px; text-align:center; color:var(--muted); border:1px dashed var(--line); border-radius:16px; }\n\n@media (max-width:980px) {\n  .hero { grid-template-columns:1fr; padding:26px; } h1 { font-size:2.3rem; }\n  .cards { grid-template-columns:1fr; } .tabs a span { display:none; } .strip .l span.hide { display:none; }\n}\n</style>\n</head>\n<body>\n<div class=\"strip\"><div class=\"page\">\n  <div class=\"l\"><span class=\"pill\">Preview Interactivo</span><span class=\"hide\">Persistencia local activa · Tasa ref. BCH: L 25.00 = US$ 1.00</span></div>\n  <div class=\"r\">\n    <div class=\"cur\" role=\"group\" aria-label=\"Moneda\"><button class=\"on\" data-cur=\"HNL\">L HNL</button><button data-cur=\"USD\">US$ USD</button></div>\n    <button class=\"reset\" id=\"reset\">↺ Reiniciar Demo</button>\n  </div>\n</div></div>\n\n<div class=\"page\">\n  <header class=\"nav\">\n    <div class=\"brand\">\n      <div class=\"ico\"><svg width=\"22\" height=\"22\" viewBox=\"0 0 22 22\" aria-hidden=\"true\"><rect x=\"2\" y=\"2\" width=\"8\" height=\"8\" rx=\"2\" fill=\"#5aa9ff\"/><rect x=\"12\" y=\"2\" width=\"8\" height=\"18\" rx=\"2\" fill=\"#fff\"/><rect x=\"2\" y=\"12\" width=\"8\" height=\"8\" rx=\"2\" fill=\"#2fe0a8\"/></svg></div>\n      <div><b>B10 | Bloque Diez</b><small>Inversiones Inteligentes</small></div>\n    </div>\n    <nav class=\"tabs\">\n      <a class=\"on\" href=\"#\">◎ <span>Explorar Proyectos</span></a>\n      <a href=\"#\">⛨ <span>Transparencia</span></a>\n      <a href=\"#\">▦ <span>Admin / Auditor</span> <i class=\"badge\">2</i></a>\n    </nav>\n    <label class=\"rol\">ROL: <select aria-label=\"Rol\"><option>Admin / Auditor</option><option>Donante</option><option>Dueño de proyecto</option></select></label>\n  </header>\n\n  <section class=\"hero\">\n    <div>\n      <span class=\"kicker\">✦ Finanzas Sostenibles e Impacto Medible · Honduras</span>\n      <h1>Democratizando el acceso al financiamiento de <em>alto impacto</em> en Honduras.</h1>\n      <p class=\"lead\">Conectamos proyectos productivos, ambientales, sociales y de innovación con donantes e inversionistas bajo trazabilidad por folio, métricas verificables y privacidad configurable.</p>\n      <div class=\"btns\"><button class=\"b1\">◈ Explorar Proyectos</button><button class=\"b2\">⛨ Ver Transparencia y Folios</button></div>\n    </div>\n    <aside class=\"live\" aria-label=\"Resumen en tiempo real\">\n      <div class=\"hd\"><span>RESUMEN EN TIEMPO REAL</span><span>100% Auditable</span></div>\n      <div class=\"total\"><small>Capital Total Movilizado</small><b id=\"total\" data-hnl=\"1162600\">L 1,162,600.00</b></div>\n      <div class=\"mini\"><div><small>Aportes</small><b>8</b></div><div><small>Activos</small><b>6</b></div><div><small>Comunidades</small><b>27</b></div></div>\n    </aside>\n  </section>\n\n  <div class=\"bar\">\n    <div class=\"seg\" role=\"group\" aria-label=\"Tipo\"><button class=\"on\" data-type=\"all\">▦ Todos</button><button data-type=\"Donación\">♡ Donaciones</button><button data-type=\"Inversión\">↗ Inversiones</button></div>\n    <label class=\"search\"><svg width=\"16\" height=\"16\" viewBox=\"0 0 16 16\" aria-hidden=\"true\"><circle cx=\"7\" cy=\"7\" r=\"5\" fill=\"none\" stroke=\"#a3adc7\" stroke-width=\"1.5\"/><path d=\"M11 11l4 4\" stroke=\"#a3adc7\" stroke-width=\"1.5\"/></svg><input id=\"q\" type=\"search\" placeholder=\"Buscar por proyecto o departamento...\"></label>\n  </div>\n  <div class=\"cats\" role=\"group\" aria-label=\"Categoría\">Categoría:\n    <button class=\"on\" data-cat=\"all\">Todas</button><button data-cat=\"Productivos\">Productivos</button><button data-cat=\"Sociales\">Sociales</button><button data-cat=\"Ambientales\">Ambientales</button><button data-cat=\"Innovación\">Innovación</button>\n  </div>\n\n  <section class=\"cards\" id=\"cards\">\n    <article class=\"card\" data-type=\"Inversión\" data-cat=\"Productivos\" data-text=\"café orgánico de altura marcala la paz cooperativa cafetalera sierra de la paz\">\n      <div class=\"art i1\">\n        <svg viewBox=\"0 0 390 144\" preserveAspectRatio=\"xMidYMid slice\" aria-hidden=\"true\"><g fill=\"#3459d6\" opacity=\".7\"><rect x=\"100\" y=\"86\" width=\"26\" height=\"40\" rx=\"3\"/><rect x=\"138\" y=\"70\" width=\"26\" height=\"56\" rx=\"3\"/><rect x=\"190\" y=\"50\" width=\"26\" height=\"76\" rx=\"3\"/><rect x=\"242\" y=\"64\" width=\"26\" height=\"62\" rx=\"3\"/><rect x=\"296\" y=\"28\" width=\"30\" height=\"98\" rx=\"3\"/></g><path d=\"M40 112L100 76L150 82L200 46L250 70L310 38\" fill=\"none\" stroke=\"#2fe0a8\" stroke-width=\"3\"/><circle cx=\"200\" cy=\"46\" r=\"6\" fill=\"#2fe0a8\"/></svg>\n        <span class=\"t l\" style=\"color:#7ff0c9;border-color:rgba(47,224,168,.5)\">Inversión</span><span class=\"t r\" style=\"color:#9ec4ff\">Productivos</span>\n        <span class=\"loc\">⌖ Marcala, La Paz</span>\n      </div>\n      <div class=\"body\"><small>Cooperativa Cafetalera Sierra de La Paz</small><h3>Café Orgánico de Altura — Marcala</h3>\n        <div class=\"prog\"><i style=\"width:68%\"></i></div><div class=\"meta\"><span>Meta <b class=\"amt\" data-hnl=\"250000\">L 250,000</b></span><span><b>68%</b> financiado</span></div></div>\n    </article>\n    <article class=\"card\" data-type=\"Donación\" data-cat=\"Ambientales\" data-text=\"reforestación parque nacional la tigra francisco morazán fundación bosques del distrito\">\n      <div class=\"art i2\">\n        <svg viewBox=\"0 0 390 144\" preserveAspectRatio=\"xMidYMid slice\" aria-hidden=\"true\"><path d=\"M0 144C60 100 140 90 210 110C280 128 340 100 390 80V144z\" fill=\"#0f6f68\" opacity=\".7\"/><path d=\"M0 144C80 120 160 128 240 120C300 114 350 120 390 112V144z\" fill=\"#0b4b57\" opacity=\".8\"/><path d=\"M180 100C190 50 230 30 275 28C272 70 240 100 180 100z\" fill=\"none\" stroke=\"#2fe0a8\" stroke-width=\"2.5\"/><path d=\"M180 100L262 36\" stroke=\"#2fe0a8\" stroke-width=\"2\"/><ellipse cx=\"300\" cy=\"40\" rx=\"36\" ry=\"24\" fill=\"none\" stroke=\"#2fe0a8\" stroke-width=\"2\" opacity=\".6\"/></svg>\n        <span class=\"t l\" style=\"color:#9ec4ff\">Donación</span><span class=\"t r\" style=\"color:#7ff0c9;border-color:rgba(47,224,168,.5)\">Ambientales</span>\n        <span class=\"loc\">⌖ Francisco Morazán</span>\n      </div>\n      <div class=\"body\"><small>Fundación Bosques del Distrito</small><h3>Reforestación Parque Nacional La Tigra</h3>\n        <div class=\"prog\"><i style=\"width:42%\"></i></div><div class=\"meta\"><span>Meta <b class=\"amt\" data-hnl=\"180000\">L 180,000</b></span><span><b>42%</b> recaudado</span></div></div>\n    </article>\n    <article class=\"card\" data-type=\"Donación\" data-cat=\"Sociales\" data-text=\"sistema de agua comunitaria el porvenir francisco morazán patronato regional agua viva\">\n      <div class=\"art i3\">\n        <svg viewBox=\"0 0 390 144\" preserveAspectRatio=\"xMidYMid slice\" aria-hidden=\"true\"><g fill=\"none\" stroke-width=\"2.5\"><circle cx=\"150\" cy=\"50\" r=\"18\" stroke=\"#5aa9ff\"/><path d=\"M100 110c0-26 22-36 50-36s50 10 50 36\" stroke=\"#5aa9ff\"/><circle cx=\"215\" cy=\"38\" r=\"22\" stroke=\"#6f9bff\"/><path d=\"M150 110c0-30 28-42 65-42s65 12 65 42\" stroke=\"#6f9bff\"/><circle cx=\"285\" cy=\"52\" r=\"16\" stroke=\"#2fe0a8\"/><path d=\"M262 110c0-24 10-32 23-32s40 8 40 32\" stroke=\"#2fe0a8\"/></g></svg>\n        <span class=\"t l\" style=\"color:#9ec4ff\">Donación</span><span class=\"t r\" style=\"color:#9ec4ff\">Sociales</span>\n        <span class=\"loc\">⌖ El Porvenir, Francisco Morazán</span>\n      </div>\n      <div class=\"body\"><small>Patronato Regional Agua Viva</small><h3>Sistema de Agua Comunitaria — El Porvenir</h3>\n        <div class=\"prog\"><i style=\"width:57%\"></i></div><div class=\"meta\"><span>Meta <b class=\"amt\" data-hnl=\"320000\">L 320,000</b></span><span><b>57%</b> recaudado</span></div></div>\n    </article>\n    <p class=\"empty\" id=\"empty\" hidden>No hay proyectos con esos filtros.</p>\n  </section>\n</div>\n\n<script>\n(function () {\n  var RATE = 25, cur = 'HNL', type = 'all', cat = 'all';\n  var cards = Array.prototype.slice.call(document.querySelectorAll('.card'));\n  function money(n) {\n    return cur === 'HNL' ? 'L ' + n.toLocaleString('en-US', { minimumFractionDigits: 0 })\n                         : 'US$ ' + (n / RATE).toLocaleString('en-US', { maximumFractionDigits: 0 });\n  }\n  function paintMoney() {\n    var t = document.getElementById('total'), n = +t.dataset.hnl;\n    t.textContent = cur === 'HNL' ? 'L ' + n.toLocaleString('en-US', { minimumFractionDigits: 2 })\n                                  : 'US$ ' + (n / RATE).toLocaleString('en-US', { minimumFractionDigits: 2 });\n    document.querySelectorAll('.amt').forEach(function (a) { a.textContent = money(+a.dataset.hnl); });\n  }\n  function filter() {\n    var q = document.getElementById('q').value.trim().toLowerCase(), shown = 0;\n    cards.forEach(function (c) {\n      var ok = (type === 'all' || c.dataset.type === type) && (cat === 'all' || c.dataset.cat === cat) && (!q || c.dataset.text.indexOf(q) > -1);\n      c.hidden = !ok; if (ok) shown++;\n    });\n    document.getElementById('empty').hidden = shown > 0;\n  }\n  function group(sel, attr, set) {\n    document.querySelectorAll(sel + ' button').forEach(function (b) {\n      b.addEventListener('click', function () {\n        document.querySelectorAll(sel + ' button').forEach(function (x) { x.classList.toggle('on', x === b); });\n        set(b.getAttribute(attr)); filter();\n      });\n    });\n  }\n  group('.seg', 'data-type', function (v) { type = v; });\n  group('.cats', 'data-cat', function (v) { cat = v; });\n  document.getElementById('q').addEventListener('input', filter);\n  document.querySelectorAll('.cur button').forEach(function (b) {\n    b.addEventListener('click', function () {\n      cur = b.dataset.cur;\n      document.querySelectorAll('.cur button').forEach(function (x) { x.classList.toggle('on', x === b); });\n      paintMoney();\n    });\n  });\n  document.getElementById('reset').addEventListener('click', function () {\n    type = 'all'; cat = 'all'; cur = 'HNL'; document.getElementById('q').value = '';\n    document.querySelectorAll('.seg button, .cats button, .cur button').forEach(function (b) {\n      b.classList.toggle('on', b.dataset.type === 'all' || b.dataset.cat === 'all' || b.dataset.cur === 'HNL');\n    });\n    paintMoney(); filter();\n  });\n})();\n</script>\n</body>\n</html>\n" }
  };
  document.querySelectorAll('.project').forEach(function (card) {
    var p = PROJECTS[card.dataset.proj];
    card.querySelector('iframe').srcdoc = p.html;
  });
  var pm = document.getElementById('projModal'), pf = document.getElementById('projFrame'), pLast = null;
  function openProject(key) {
    var p = PROJECTS[key]; if (!p) return;
    pLast = document.activeElement;
    document.getElementById('projTitle').textContent = p.title;
    pf.srcdoc = p.html;
    pm.classList.add('show'); pm.setAttribute('aria-hidden', 'false');
    document.body.classList.add('lock');
    document.getElementById('projClose').focus();
  }
  function closeProject() {
    pm.classList.remove('show'); pm.setAttribute('aria-hidden', 'true');
    document.body.classList.remove('lock'); pf.srcdoc = '';
    if (pLast) pLast.focus();
  }
  document.querySelectorAll('.project').forEach(function (card) {
    card.addEventListener('click', function () { openProject(card.dataset.proj); });
    card.addEventListener('keydown', function (e) {
      if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); openProject(card.dataset.proj); }
    });
  });
  document.getElementById('projClose').addEventListener('click', closeProject);
  document.addEventListener('keydown', function (e) { if (e.key === 'Escape' && pm.classList.contains('show')) closeProject(); });

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
