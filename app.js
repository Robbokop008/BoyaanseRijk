(function () {
  "use strict";
  var R = window.RIJK || {};
  var NS = "http://www.w3.org/2000/svg";

  function el(tag, attrs, tekst) {
    var e = document.createElement(tag);
    if (attrs) for (var k in attrs) e.setAttribute(k, attrs[k]);
    if (tekst != null) e.textContent = tekst;
    return e;
  }
  function svg(tag, attrs) {
    var e = document.createElementNS(NS, tag);
    for (var k in attrs) e.setAttribute(k, attrs[k]);
    return e;
  }
  function leeg(doel, tekst) {
    doel.appendChild(el("p", { "class": "leeg" }, tekst));
  }

  /* ---------- De klok ---------- */
  function tandwielPad(cx, cy, r, tanden) {
    var punten = [];
    var stappen = tanden * 4;
    for (var i = 0; i < stappen; i++) {
      var hoek = (Math.PI * 2 * i) / stappen;
      var buiten = (i % 4 === 0 || i % 4 === 1);
      var rr = buiten ? r : r * 0.76;
      punten.push((cx + Math.cos(hoek) * rr).toFixed(1) + "," + (cy + Math.sin(hoek) * rr).toFixed(1));
    }
    return "M" + punten.join("L") + "Z";
  }

  function tekenKlok() {
    var k = document.getElementById("klok");
    if (!k) return;
    var n = Math.max(0, Math.min(7, R.tandwielen || 0));
    var C = 200;
    k.appendChild(svg("circle", { cx: C, cy: C, r: 192, "class": "ring", "stroke-width": 2 }));
    k.appendChild(svg("circle", { cx: C, cy: C, r: 182, "class": "wijzerplaat" }));
    var roman = ["XII", "I", "II", "III", "IIII", "V", "VI", "VII", "VIII", "IX", "X", "XI"];
    for (var u = 0; u < 12; u++) {
      var a = (Math.PI * 2 * u) / 12 - Math.PI / 2;
      var t = svg("text", { x: C + Math.cos(a) * 152, y: C + Math.sin(a) * 152, "class": "uur" });
      t.textContent = roman[u];
      k.appendChild(t);
    }
    for (var m = 0; m < 60; m++) {
      var b = (Math.PI * 2 * m) / 60 - Math.PI / 2;
      var lang = m % 5 === 0 ? 12 : 5;
      k.appendChild(svg("line", {
        x1: C + Math.cos(b) * 178, y1: C + Math.sin(b) * 178,
        x2: C + Math.cos(b) * (178 - lang), y2: C + Math.sin(b) * (178 - lang),
        "class": "streep", "stroke-width": m % 5 === 0 ? 2 : 1
      }));
    }
    // Zeven plekken voor de tandwielen
    for (var g = 0; g < 7; g++) {
      var h = (Math.PI * 2 * g) / 7 - Math.PI / 2;
      var gx = C + Math.cos(h) * 98, gy = C + Math.sin(h) * 98;
      var vol = g < n;
      k.appendChild(svg("path", { d: tandwielPad(gx, gy, 22, 8), "class": vol ? "tand-vol" : "tand-leeg" }));
      if (vol) k.appendChild(svg("circle", { cx: gx, cy: gy, r: 6, "class": "tand-gat" }));
    }
    // Wijzers: stil tussen elf en twaalf, en elk tandwiel brengt ze dichter bij middernacht
    var minuten = n >= 7 ? 60 : Math.round((n * 55) / 6);
    var uurHoek = ((11 + minuten / 60) * 30 - 90) * Math.PI / 180;
    var minHoek = (minuten * 6 - 90) * Math.PI / 180;
    k.appendChild(svg("line", { x1: C, y1: C, x2: C + Math.cos(uurHoek) * 70, y2: C + Math.sin(uurHoek) * 70, "class": "wijzer", "stroke-width": 7 }));
    k.appendChild(svg("line", { x1: C, y1: C, x2: C + Math.cos(minHoek) * 120, y2: C + Math.sin(minHoek) * 120, "class": "wijzer", "stroke-width": 4 }));
    k.appendChild(svg("circle", { cx: C, cy: C, r: 9, "class": "as" }));
    k.setAttribute("aria-label", "De grote klok: " + n + " van de 7 tandwielen hangen terug in het uurwerk.");
  }

  /* ---------- Stand en server ---------- */
  function tekenStand() {
    var s = R.stand || {};
    var kop = document.getElementById("stand");
    kop.textContent = s.hoofdstuk ? "Hoofdstuk " + s.hoofdstuk + ": " + s.titel : (s.titel || "");
    document.getElementById("stand-tekst").textContent = s.tekst || "";
    var n = Math.max(0, Math.min(7, R.tandwielen || 0));
    if (s.hoofdstuk) {
      var tw = el("p", { "class": "tandwielen" }, n === 7 ? "Alle zeven tandwielen hangen terug in de klok." : n + " van de 7 tandwielen hangen terug in de klok.");
      document.getElementById("stand-tekst").after(tw);
    }
    var adres = (R.server && R.server.adres) || "";
    document.getElementById("adres").textContent = adres;
    var knop = document.getElementById("kopieer");
    knop.addEventListener("click", function () {
      var klaar = function () { knop.textContent = "Gekopieerd"; setTimeout(function () { knop.textContent = "Kopieer adres"; }, 2000); };
      if (navigator.clipboard) navigator.clipboard.writeText(adres).then(klaar, function () {});
    });
    if (R.server && R.server.discord) {
      var d = el("a", { href: R.server.discord, rel: "noopener" }, "Naar onze Discord");
      document.querySelector(".adres").appendChild(d);
    }
  }

  /* ---------- Het verhaal ---------- */
  function tekenVerhaal() {
    var lijst = document.getElementById("tijdlijn");
    var hs = R.hoofdstukken || [];
    if (!hs.length) {
      var li = el("li");
      li.appendChild(el("p", { "class": "leeg" }, "Het eerste hoofdstuk moet nog beginnen. Hou het decreet van de keizer in de gaten."));
      lijst.appendChild(li);
    }
    hs.forEach(function (h, i) {
      var li = el("li", { "class": h.vinder ? "klaar" : "" });
      li.appendChild(el("span", { "class": "nr" }, "Hoofdstuk " + h.nr));
      li.appendChild(el("h3", null, h.titel));
      var stukken = h.samenvatting || [];
      if (stukken.length) li.appendChild(el("p", null, stukken[0]));
      if (stukken.length > 1 || h.uitspraak || (h.documenten || []).length) {
        var det = el("details");
        if (i === hs.length - 1) det.open = true;
        det.appendChild(el("summary", null, "Lees verder"));
        stukken.slice(1).forEach(function (p) { det.appendChild(el("p", null, p)); });
        if (h.uitspraak) det.appendChild(el("p", { "class": "citaat" }, "“" + h.uitspraak + "”"));
        (h.documenten || []).forEach(function (code) {
          var p = el("p");
          p.appendChild(document.createTextNode("Gevonden: "));
          p.appendChild(el("a", { href: "#doc-" + code }, docTitel(code)));
          det.appendChild(p);
        });
        li.appendChild(det);
      }
      if (h.vinder) li.appendChild(el("p", { "class": "vinder" }, "Gevonden door " + h.vinder));
      lijst.appendChild(li);
    });

    var u = R.uitspraken || [];
    if (u.length) {
      var blok = document.getElementById("baron-zegt");
      var q = document.getElementById("uitspraak");
      var vorige = -1;
      var toon = function () {
        var i;
        do { i = Math.floor(Math.random() * u.length); } while (u.length > 1 && i === vorige);
        vorige = i;
        q.textContent = "“" + u[i] + "”";
      };
      blok.hidden = false;
      toon();
      document.getElementById("nog-een").addEventListener("click", toon);
    }
  }

  function docTitel(code) {
    var d = (R.archief || []).filter(function (x) { return x.code === code; })[0];
    return d ? d.titel : code;
  }

  /* ---------- Het archief ---------- */
  function tekenArchief() {
    var doel = document.getElementById("archief-lijst");
    var docs = R.archief || [];
    if (!docs.length) return leeg(doel, "Het archief is nog leeg.");
    docs.forEach(function (d) {
      var det = el("details", { "class": "doc", id: "doc-" + d.code });
      var s = el("summary");
      s.appendChild(el("span", { "class": "doc-titel" }, d.titel));
      s.appendChild(el("span", { "class": "doc-code" }, d.code));
      det.appendChild(s);
      var t = el("div", { "class": "doc-tekst" });
      (d.tekst || []).forEach(function (r) { t.appendChild(el("p", null, r)); });
      if (d.ingeleverd) t.appendChild(el("p", { "class": "doc-wie" }, "Ingeleverd door " + d.ingeleverd));
      det.appendChild(t);
      doel.appendChild(det);
    });
    // Een link naar een document opent het meteen
    if (location.hash.indexOf("#doc-") === 0) {
      var open = document.getElementById(location.hash.slice(1));
      if (open) open.open = true;
    }
    document.addEventListener("click", function (e) {
      var a = e.target.closest && e.target.closest("a[href^='#doc-']");
      if (!a) return;
      var d = document.getElementById(a.getAttribute("href").slice(1));
      if (d) d.open = true;
    });
  }

  /* ---------- Personages ---------- */
  function tekenPersonages() {
    var doel = document.getElementById("personen");
    var ps = R.personages || [];
    if (!ps.length) return leeg(doel, "Nog niemand. Of toch niemand die we al gezien hebben.");
    ps.forEach(function (p) {
      var a = el("article", { "class": "persoon" });
      a.appendChild(el("h3", null, p.naam));
      if (p.rol) a.appendChild(el("p", { "class": "rol" }, p.rol));
      a.appendChild(el("p", null, p.wat || ""));
      doel.appendChild(a);
    });
  }

  /* ---------- Het rijk ---------- */
  function tekenRijk() {
    var r = document.getElementById("rangen");
    (R.rangen || []).forEach(function (x) {
      var li = el("li", null, x.naam);
      li.style.color = x.kleur;
      r.appendChild(li);
    });
    var w = document.getElementById("wetten");
    var wet = R.wetten || [];
    if (!wet.length) {
      w.replaceWith(el("p", { "class": "leeg" }, "Het wetboek is nog leeg. Het woord van de keizer is wet."));
    } else {
      wet.forEach(function (x) { w.appendChild(el("li", null, x)); });
    }
    var e = document.getElementById("eer");
    var eer = R.eer || [];
    if (!eer.length) {
      e.replaceWith(el("p", { "class": "leeg" }, "Nog geen eretekens uit het verhaal. Wie wordt de eerste?"));
    } else {
      eer.forEach(function (x) {
        var li = el("li");
        li.appendChild(el("span", { "class": "wie" }, x.naam));
        li.appendChild(document.createTextNode(" kreeg "));
        li.appendChild(el("span", { "class": "wat" }, x.ereteken));
        if (x.hoofdstuk) li.appendChild(document.createTextNode(" in hoofdstuk " + x.hoofdstuk));
        e.appendChild(li);
      });
    }
    var g = document.getElementById("gids");
    if (R.gids) {
      g.appendChild(document.createTextNode("Alles nog eens rustig nalezen? "));
      g.appendChild(el("a", { href: R.gids, rel: "noopener" }, "Open de volledige spelersgids"));
    } else {
      g.remove();
    }
  }

  /* ---------- Notities (alleen in deze browser) ---------- */
  function notities() {
    var t = document.getElementById("notities");
    var m = document.getElementById("bewaard");
    var sleutel = "boyaans-notities";
    try {
      var oud = localStorage.getItem(sleutel);
      if (oud) t.value = oud;
    } catch (e) {
      m.textContent = "Je browser bewaart hier niets. Kopieer je notities zelf als je ze wilt houden.";
    }
    var wacht;
    t.addEventListener("input", function () {
      clearTimeout(wacht);
      wacht = setTimeout(function () {
        try {
          localStorage.setItem(sleutel, t.value);
          m.textContent = "Bewaard op dit toestel.";
        } catch (e) {
          m.textContent = "Bewaren lukte niet in deze browser.";
        }
      }, 400);
    });
  }

  /* ---------- Trailer en peiling ---------- */
  function tekenTrailer() {
    var sec = document.getElementById("trailer");
    if (!sec || !R.trailer) return;
    var v = document.getElementById("trailer-video");
    v.src = R.trailer;
    if (R.trailerPoster) v.poster = R.trailerPoster;
    sec.hidden = false;
    if (R.peiling) {
      var p = document.getElementById("peiling");
      p.appendChild(document.createTextNode("Wanneer kan jij beginnen? "));
      p.appendChild(el("a", { href: R.peiling, rel: "noopener" }, "Vul het hier in"));
      p.hidden = false;
    }
  }

  tekenKlok();
  tekenTrailer();
  tekenStand();
  tekenVerhaal();
  tekenArchief();
  tekenPersonages();
  tekenRijk();
  notities();
})();
