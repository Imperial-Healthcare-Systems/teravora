/* Our Method runtime — light, dependency-free. Grows beat-by-beat.
   Guards against StrictMode double-init. */
/* eslint-disable */
export function init_how_we_prove() {
  if (typeof window === 'undefined') return;
  if (window.__trv_how_we_prove_ran) return; window.__trv_how_we_prove_ran = true;
  var reduce = matchMedia("(prefers-reduced-motion:reduce)").matches;

  // hero headline — staggered word rise-in (per home.runtime.js)
  document.querySelectorAll(".pg-how-we-prove .shero .hl-line").forEach(function (line, li) {
    var words = line.textContent.split(" "); line.innerHTML = "";
    words.forEach(function (w, i) {
      var s = document.createElement("span"); s.className = "word"; s.textContent = w;
      line.appendChild(s);
      if (i < words.length - 1) line.appendChild(document.createTextNode(" "));
      if (!reduce) setTimeout(function () { s.classList.add("in"); }, 90 + (li * 300) + (i * 62));
      else s.classList.add("in");
    });
  });

  // scroll reveals
  if (reduce || !("IntersectionObserver" in window)) {
    document.querySelectorAll(".pg-how-we-prove .reveal").forEach(function (el) { el.classList.add("in"); });
  } else {
    var io = new IntersectionObserver(function (es) {
      es.forEach(function (e) { if (e.isIntersecting) { e.target.classList.add("in"); io.unobserve(e.target); } });
    }, { threshold: .14, rootMargin: "0px 0px -6% 0px" });
    document.querySelectorAll(".pg-how-we-prove .reveal").forEach(function (el) { io.observe(el); });
  }

  // hero particles — scattered data resolves near the cursor (lenient gather, per home)
  var cv = document.getElementById("stars");
  if (cv && !reduce) {
    var ctx = cv.getContext("2d"), W, H, ps = [], mouse = { x: -999, y: -999 }, DPR = Math.min(devicePixelRatio || 1, 2);
    function sz() { W = cv.width = innerWidth * DPR; H = cv.height = cv.offsetHeight * DPR; }
    var N = 44; for (var i = 0; i < N; i++) { var x = Math.random() * innerWidth * DPR, y = Math.random() * 640 * DPR; ps.push({ x: x, y: y, hx: x, hy: y, vx: 0, vy: 0, r: (Math.random() * 1.4 + .5) * DPR, g: Math.random() < .5 }); }
    sz();
    cv.addEventListener("pointermove", function (e) { var r = cv.getBoundingClientRect(); mouse.x = (e.clientX - r.left) * DPR; mouse.y = (e.clientY - r.top) * DPR; });
    cv.addEventListener("pointerleave", function () { mouse.x = mouse.y = -999; });
    var LINK = 120 * DPR, PULL = 175 * DPR, RING = 56 * DPR;
    function draw() {
      ctx.clearRect(0, 0, W, H); var active = mouse.x > -500;
      for (var p of ps) {
        p.near = false;
        if (active) { var dx = mouse.x - p.x, dy = mouse.y - p.y, dm = Math.hypot(dx, dy); if (dm < PULL && dm > 0.1) { p.near = true; var tx = mouse.x - dx / dm * RING, ty = mouse.y - dy / dm * RING, s = (1 - dm / PULL) * 0.02; p.vx += (tx - p.x) * s; p.vy += (ty - p.y) * s; } }
        p.vx += (p.hx - p.x) * 0.006; p.vy += (p.hy - p.y) * 0.006; p.vx *= 0.9; p.vy *= 0.9; p.x += p.vx; p.y += p.vy;
        ctx.beginPath(); ctx.arc(p.x, p.y, p.near ? p.r * 1.3 : p.r, 0, 6.283);
        ctx.fillStyle = p.near ? "rgba(228,190,104,.9)" : (p.g ? "rgba(228,190,104,.5)" : "rgba(79,188,194,.55)"); ctx.fill();
      }
      for (var a = 0; a < ps.length; a++) for (var b = a + 1; b < ps.length; b++) { var q = ps[a], w = ps[b], d = Math.hypot(q.x - w.x, q.y - w.y); if (d < LINK) { var bond = q.near && w.near; ctx.beginPath(); ctx.moveTo(q.x, q.y); ctx.lineTo(w.x, w.y); ctx.strokeStyle = bond ? "rgba(228,190,104," + (.5 * (1 - d / LINK)) + ")" : "rgba(79,188,194," + (.1 * (1 - d / LINK)) + ")"; ctx.lineWidth = (bond ? 1.3 : 1) * DPR; ctx.stroke(); } }
      requestAnimationFrame(draw);
    }
    draw(); addEventListener("resize", sz);
  }

  // Beat 3 — trace a number. Step one figure Source→Control→Evidence→Assurance-ready;
  // status badge climbs, progress + trace node advance. Autoplays once on
  // scroll-in (unless reduced motion), then stays interactive.
  (function () {
    var root = document.querySelector(".pg-how-we-prove .tconsole");
    if (!root) return;
    var tabs = [].slice.call(root.querySelectorAll(".tc-tab"));
    var panels = [].slice.call(root.querySelectorAll(".tc-panel"));
    var dots = [].slice.call(root.querySelectorAll(".tcp"));
    var statusEl = document.getElementById("tcstatus");
    var statusWrap = root.querySelector(".tc-status");
    var bar = document.getElementById("tcbar");
    var node = document.getElementById("tcnode");
    var prog = document.getElementById("tcprog");
    var docs = [].slice.call(root.querySelectorAll(".tc-doc"));
    var CX = [24, 114, 206, 296];
    var LABELS = ["SOURCED", "CONTROLLED", "EVIDENCED", "ASSURANCE-READY"];
    var cur = -1;
    function show(i) {
      if (i === cur) return; cur = i;
      tabs.forEach(function (t, k) { t.classList.toggle("on", k === i); });
      panels.forEach(function (p, k) { p.classList.toggle("on", k === i); });
      dots.forEach(function (d, k) { d.classList.toggle("on", k <= i); });
      docs.forEach(function (d, k) { d.classList.toggle("on", k === i && i === 3); });
      if (statusEl) statusEl.textContent = LABELS[i];
      if (statusWrap) statusWrap.setAttribute("data-s", i);
      if (bar) bar.style.width = ((i + 1) / 4 * 100) + "%";
      if (node) node.setAttribute("cx", CX[i]);
      if (prog) prog.setAttribute("x2", CX[i]);
    }
    tabs.forEach(function (t) { t.addEventListener("click", function () { show(+t.dataset.i); }); });
    show(0);
    if (!reduce && "IntersectionObserver" in window) {
      var played = false;
      new IntersectionObserver(function (es) {
        es.forEach(function (e) {
          if (e.isIntersecting && !played) {
            played = true;
            [1, 2, 3].forEach(function (n, idx) {
              setTimeout(function () { if (cur < n) show(n); }, 1800 + idx * 1800);
            });
          }
        });
      }, { threshold: .5 }).observe(root);
    }
  })();

  // Beat 4 — measurable-impact climb. Draws the ascent on scroll-in (E1-safe:
  // shape, not numbers); hovering a stage card lights its node on the curve.
  (function () {
    var line = document.getElementById("climbLine");
    if (!line) return;
    var fill = document.getElementById("climbFill");
    var peak = document.getElementById("cpeak");
    var cards = [].slice.call(document.querySelectorAll(".pg-how-we-prove .imp-card"));
    var nodes = [].slice.call(document.querySelectorAll(".pg-how-we-prove .cnode"));
    function highlight(i) {
      cards.forEach(function (c, k) { c.classList.toggle("on", k === i); });
      nodes.forEach(function (n, k) { n.classList.toggle("on", k === i); });
    }
    if (reduce) {
      line.style.strokeDashoffset = 0;
      if (fill) fill.style.opacity = 1;
      if (peak) peak.setAttribute("opacity", 1);
      highlight(2);
    } else {
      var L = line.getTotalLength();
      line.style.strokeDasharray = L; line.style.strokeDashoffset = L;
      var drawn = false;
      new IntersectionObserver(function (es) {
        es.forEach(function (e) {
          if (e.isIntersecting && !drawn) {
            drawn = true;
            line.style.strokeDashoffset = 0;
            setTimeout(function () { if (fill) fill.style.opacity = 1; }, 700);
            setTimeout(function () { if (peak) peak.setAttribute("opacity", 1); highlight(2); }, 1200);
          }
        });
      }, { threshold: .4 }).observe(line);
    }
    cards.forEach(function (c) { c.addEventListener("mouseenter", function () { highlight(+c.dataset.i); }); });
    var track = document.querySelector(".pg-how-we-prove .imp-track");
    if (track) track.addEventListener("mouseleave", function () { highlight(2); });
  })();

  // Beat 7 — FAQ accordion.
  document.querySelectorAll(".pg-how-we-prove .qa button").forEach(function (b) {
    b.addEventListener("click", function () { b.parentElement.classList.toggle("open"); });
  });
}
