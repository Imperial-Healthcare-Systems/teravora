/* eslint-disable */
export function init_careers() {
  if (typeof window === 'undefined') return;
  if (window.__trv_careers_ran) return; window.__trv_careers_ran = true;
  var reduce = matchMedia("(prefers-reduced-motion:reduce)").matches;
  // hero headline — staggered word rise-in (per learn.runtime.js)
  document.querySelectorAll(".pg-careers .shero .hl-line").forEach(function (line, li) {
    var words = line.textContent.split(" "); line.innerHTML = "";
    words.forEach(function (w, i) {
      var s = document.createElement("span"); s.className = "word"; s.textContent = w;
      line.appendChild(s);
      if (i < words.length - 1) line.appendChild(document.createTextNode(" "));
      if (!reduce) setTimeout(function () { s.classList.add("in"); }, 90 + (li * 300) + (i * 62));
      else s.classList.add("in");
    });
  });
  // reveal on scroll
  var io = new IntersectionObserver(function(es){es.forEach(function(e){if(e.isIntersecting){e.target.classList.add("in");io.unobserve(e.target)}})},{threshold:.14});
  document.querySelectorAll(".pg-careers .reveal").forEach(function(el){io.observe(el)});
}
