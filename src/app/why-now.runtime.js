/* Why Now runtime — light, dependency-free. Staggered hero word reveal +
 * scroll-triggered section reveals. Self-guards against StrictMode double-init. */
let started = false;

export function initWhyNow() {
  if (started) return;
  started = true;

  const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  // Hero words — staggered rise-in on load.
  const words = [].slice.call(document.querySelectorAll(".pg-whynow .wn-hero .word"));
  if (reduce) {
    words.forEach(function (w) { w.classList.add("in"); });
  } else {
    words.forEach(function (w, i) {
      setTimeout(function () { w.classList.add("in"); }, 90 + i * 62);
    });
  }

  // Scroll reveals.
  const reveals = [].slice.call(document.querySelectorAll(".pg-whynow .reveal"));
  if (reduce || !("IntersectionObserver" in window)) {
    reveals.forEach(function (el) { el.classList.add("in"); });
  } else {
    const io = new IntersectionObserver(function (entries) {
      entries.forEach(function (e) {
        if (e.isIntersecting) { e.target.classList.add("in"); io.unobserve(e.target); }
      });
    }, { threshold: 0.16, rootMargin: "0px 0px -8% 0px" });
    reveals.forEach(function (el) { io.observe(el); });
  }

  // Beat 5 — proposal configurator + live dossier (ported from the home comp).
  const cfg = { band: null, fy: null };
  let cur = 0;
  const barEl = document.getElementById("cfgbar");
  const inEl = document.getElementById("cfgin");
  const dband = document.getElementById("dband");
  const dfy = document.getElementById("dfy");
  const drect = document.getElementById("drect");
  function drawBorder() {
    if (!drect || reduce) return;
    try {
      const w = drect.ownerSVGElement.clientWidth, h = drect.ownerSVGElement.clientHeight;
      drect.setAttribute("width", w - 2); drect.setAttribute("height", h - 2);
      const per = 2 * ((w - 2) + (h - 2));
      drect.style.strokeDasharray = per; drect.style.strokeDashoffset = per;
      drect.getBoundingClientRect();
      drect.style.transition = "stroke-dashoffset 1.1s cubic-bezier(.16,1,.3,1)";
      drect.style.strokeDashoffset = 0;
    } catch (e) { /* no-op */ }
  }
  function showStep(n) {
    cur = n;
    if (inEl) inEl.style.transform = "translateX(-" + (n * 25) + "%)";
    if (barEl) barEl.style.width = Math.min((n + 1) / 3 * 100, 100) + "%";
  }
  document.querySelectorAll(".pg-whynow .opts").forEach(function (g) {
    g.addEventListener("click", function (e) {
      const o = e.target.closest(".opt");
      if (!o) return;
      [].slice.call(g.children).forEach(function (x) { x.classList.remove("sel"); });
      o.classList.add("sel");
      cfg[g.dataset.group] = o.dataset.v;
      if (g.dataset.group === "band") {
        dband.textContent = o.dataset.v; dband.classList.remove("dim");
        if (o.dataset.fy) { dfy.textContent = o.dataset.fy; dfy.classList.remove("dim"); }
        drawBorder();
      } else {
        dfy.textContent = o.dataset.v; dfy.classList.remove("dim"); drawBorder();
      }
      setTimeout(function () { showStep(g.dataset.group === "band" ? 1 : 2); }, reduce ? 0 : 240);
    });
  });
  document.querySelectorAll(".pg-whynow [data-back]").forEach(function (b) {
    b.addEventListener("click", function () { showStep(Math.max(cur - 1, 0)); });
  });
  // Hand off to the full /start request form, carrying the scoped answers so they
  // prefill there. Band always maps; only cleanly-matching timing is carried
  // ("FY 2027-28" has no /start bucket, so timeline is simply left unset there).
  const BAND2START = { "Top 500 listed": "t500", "Top 1,000 listed": "t1000", "Value chain / supplier": "supplier" };
  const FY2START = { "FY 2026-27": "thisfy", "Exploring": "explore" };
  const submit = document.getElementById("cfgsubmit");
  if (submit) submit.addEventListener("click", function (e) {
    e.preventDefault();
    const q = [];
    if (cfg.band && BAND2START[cfg.band]) q.push("band=" + BAND2START[cfg.band]);
    if (cfg.fy && FY2START[cfg.fy]) q.push("timeline=" + FY2START[cfg.fy]);
    window.location.href = "/start" + (q.length ? "?" + q.join("&") : "") + "#start";
  });
}
