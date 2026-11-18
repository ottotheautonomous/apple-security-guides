/* Device Security Guides: progress tracking + table of contents (inlined into each guide page).
   Everything must keep working when localStorage is unavailable (private mode, blocked storage). */
(function () {
  "use strict";
  var root = document.documentElement;
  var guideId = root.getAttribute("data-guide");
  if (!guideId) return;
  var KEY = "asg-progress:" + guideId;

  var steps = Array.prototype.map.call(document.querySelectorAll(".step[data-step]"), function (el) {
    return el.getAttribute("data-step");
  });
  var valid = {};
  steps.forEach(function (s) { valid[s] = true; });

  var done = {};
  function load() {
    try {
      var raw = window.localStorage.getItem(KEY);
      var arr = raw ? JSON.parse(raw) : [];
      if (Array.isArray(arr)) arr.forEach(function (s) { if (valid[s]) done[s] = true; });
    } catch (e) { /* storage unavailable: start empty */ }
  }
  function save() {
    try { window.localStorage.setItem(KEY, JSON.stringify(Object.keys(done))); } catch (e) { /* ignore */ }
  }

  var boxes = document.querySelectorAll("input.step-check");
  var text = document.getElementById("progress-count");
  var bar = document.getElementById("progress-fill");
  var barWrap = document.getElementById("progress-bar");

  function render() {
    var n = 0;
    steps.forEach(function (s) { if (done[s]) n++; });
    Array.prototype.forEach.call(boxes, function (b) { b.checked = !!done[b.getAttribute("data-step")]; });
    Array.prototype.forEach.call(document.querySelectorAll("[data-step-item]"), function (el) {
      el.classList.toggle("is-done", !!done[el.getAttribute("data-step-item")]);
    });
    Array.prototype.forEach.call(document.querySelectorAll(".step[data-step]"), function (el) {
      el.classList.toggle("is-done", !!done[el.getAttribute("data-step")]);
    });
    if (text) text.textContent = n + " of " + steps.length + " done";
    var pct = steps.length ? Math.round((n / steps.length) * 100) : 0;
    if (bar) bar.style.width = pct + "%";
    if (barWrap) barWrap.setAttribute("aria-valuenow", String(n));
  }

  document.addEventListener("change", function (e) {
    var t = e.target;
    if (!t || !t.classList || !t.classList.contains("step-check")) return;
    var s = t.getAttribute("data-step");
    if (t.checked) done[s] = true; else delete done[s];
    save();
    render();
  });

  var reset = document.getElementById("reset-progress");
  if (reset) {
    reset.addEventListener("click", function (e) {
      e.preventDefault();
      if (!window.confirm("Clear all your ticks for this guide? Your phone or Mac settings are not changed.")) return;
      done = {};
      try { window.localStorage.removeItem(KEY); } catch (err) { /* ignore */ }
      render();
    });
  }

  /* ---- table of contents: open on desktop, collapsible on mobile ---- */
  var toc = document.getElementById("toc");
  var wide = window.matchMedia ? window.matchMedia("(min-width: 960px)") : null;
  function syncToc() { if (toc && wide) { if (wide.matches) toc.setAttribute("open", ""); else toc.removeAttribute("open"); } }
  syncToc();
  if (wide) {
    if (wide.addEventListener) wide.addEventListener("change", syncToc);
    else if (wide.addListener) wide.addListener(syncToc);
  }
  if (toc) {
    toc.addEventListener("click", function (e) {
      var a = e.target && e.target.closest ? e.target.closest("a") : null;
      if (a && wide && !wide.matches) toc.removeAttribute("open");
    });
  }
  var jump = document.getElementById("jump-btn");
  if (jump && toc) {
    jump.addEventListener("click", function () {
      toc.setAttribute("open", "");
      toc.scrollIntoView({ block: "start" });
      var first = toc.querySelector("summary");
      if (first) first.focus();
    });
  }

  /* highlight the step currently on screen in the sidebar */
  if ("IntersectionObserver" in window && toc) {
    var links = {};
    Array.prototype.forEach.call(toc.querySelectorAll("a[href^='#']"), function (a) { links[a.getAttribute("href").slice(1)] = a; });
    var current = null;
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (en) {
        if (!en.isIntersecting) return;
        var a = links[en.target.id];
        if (!a) return;
        if (current) current.classList.remove("is-current");
        current = a;
        a.classList.add("is-current");
      });
    }, { rootMargin: "-20% 0px -70% 0px" });
    Array.prototype.forEach.call(document.querySelectorAll(".step[id], h2[id]"), function (el) { io.observe(el); });
  }

  load();
  render();
})();
