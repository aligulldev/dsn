/**
 * Digital Sathi Network — Application Core
 * Modular, backend-ready structure (CONFIG + services + UI)
 */
(function () {
  "use strict";

  /** @type {const} Replace with production Google Form / Sheet IDs */
  const PLACEHOLDER_FORM = "https://docs.google.com/forms/d/e/1FAIpQLSfo-placeholder/viewform";
  const PLACEHOLDER_SHEET = "https://docs.google.com/spreadsheets/d/placeholder/edit";

  const CONFIG = {
    brand: "Digital Sathi Network",
    apiBase: "/api/v1",
    courses: [
      { id: 1, title: "ECAT Mastery", tag: "Engineering", durationWeeks: 16, fee: 14999, outline: ["Physics — Mechanics", "Math — Calculus", "Chemistry — Organic", "Full-length mocks"], demoUrl: "https://www.youtube.com/watch?v=dQw4w9WgXcQ", formUrl: PLACEHOLDER_FORM },
      { id: 2, title: "MDCAT Intensive", tag: "Medical", durationWeeks: 20, fee: 17999, outline: ["Biology — Cell", "Chemistry — Equilibrium", "Physics — Waves", "Past paper sprints"], demoUrl: "https://www.youtube.com/watch?v=dQw4w9WgXcQ", formUrl: PLACEHOLDER_FORM },
      { id: 3, title: "NUST NET Pro", tag: "Entry Test", durationWeeks: 12, fee: 12999, outline: ["Quantitative", "Verbal", "Analytical", "Time-boxed drills"], demoUrl: "https://www.youtube.com/watch?v=dQw4w9WgXcQ", formUrl: PLACEHOLDER_FORM },
      { id: 4, title: "FAST Entry Sprint", tag: "CS", durationWeeks: 10, fee: 9999, outline: ["IQ patterns", "Math foundations", "English", "Crash mocks"], demoUrl: "https://www.youtube.com/watch?v=dQw4w9WgXcQ", formUrl: PLACEHOLDER_FORM },
      { id: 5, title: "GIKI Gateway", tag: "Engineering", durationWeeks: 14, fee: 13999, outline: ["Subject triage", "Speed math", "Concept maps", "Review circles"], demoUrl: "https://www.youtube.com/watch?v=dQw4w9WgXcQ", formUrl: PLACEHOLDER_FORM },
      { id: 6, title: "SAT Digital 1600", tag: "International", durationWeeks: 18, fee: 24999, outline: ["RW modules", "Math — Algebra/Geometry", "Adaptive practice", "Essay optional"], demoUrl: "https://www.youtube.com/watch?v=dQw4w9WgXcQ", formUrl: PLACEHOLDER_FORM },
      { id: 7, title: "CSS & PMS Essays", tag: "Competitive", durationWeeks: 24, fee: 18999, outline: ["Essay frameworks", "Precis", "GK capsules", "Panel simulations"], demoUrl: "https://www.youtube.com/watch?v=dQw4w9WgXcQ", formUrl: PLACEHOLDER_FORM },
      { id: 8, title: "IELTS Band 8+", tag: "English", durationWeeks: 8, fee: 7999, outline: ["Listening maps", "Reading tactics", "Speaking fluency", "Writing structures"], demoUrl: "https://www.youtube.com/watch?v=dQw4w9WgXcQ", formUrl: PLACEHOLDER_FORM },
      { id: 9, title: "Python for Data", tag: "Tech", durationWeeks: 10, fee: 8999, outline: ["Python core", "NumPy/Pandas", "Mini projects", "Portfolio"], demoUrl: "https://www.youtube.com/watch?v=dQw4w9WgXcQ", formUrl: PLACEHOLDER_FORM },
      { id: 10, title: "Web Dev Accelerator", tag: "Tech", durationWeeks: 14, fee: 11999, outline: ["HTML/CSS/JS", "React basics", "APIs", "Deploy"], demoUrl: "https://www.youtube.com/watch?v=dQw4w9WgXcQ", formUrl: PLACEHOLDER_FORM },
      { id: 11, title: "Aptitude Core", tag: "General", durationWeeks: 6, fee: 4999, outline: ["Numerical", "Logical", "Verbal", "Speed tests"], demoUrl: "https://www.youtube.com/watch?v=dQw4w9WgXcQ", formUrl: PLACEHOLDER_FORM },
      { id: 12, title: "Physics Olympiad Prep", tag: "STEM", durationWeeks: 22, fee: 15999, outline: ["Mechanics deep", "E&M", "Modern physics", "Problem banks"], demoUrl: "https://www.youtube.com/watch?v=dQw4w9WgXcQ", formUrl: PLACEHOLDER_FORM },
    ],
    mockTests: Array.from({ length: 15 }, (_, i) => ({
      id: i + 1,
      label: `Mock Test ${i + 1}`,
      formUrl: PLACEHOLDER_FORM,
    })),
    results: Array.from({ length: 15 }, (_, i) => ({
      id: i + 1,
      label: `Result ${i + 1}`,
      sheetUrl: PLACEHOLDER_SHEET,
    })),
    dailyCategories: [
      { title: "General Knowledge", href: "https://pakmcqs.com/general-knowledge-mcqs/" },
      { title: "English", href: "https://pakmcqs.com/english-mcqs/" },
      { title: "Pakistan Studies", href: "https://pakmcqs.com/pakistan-studies-mcqs/" },
      { title: "Islamic Studies", href: "https://pakmcqs.com/islamic-studies-mcqs/" },
      { title: "Computer Science", href: "https://pakmcqs.com/computer-mcqs/" },
      { title: "Physics", href: "https://pakmcqs.com/physics-mcqs/" },
      { title: "Chemistry", href: "https://pakmcqs.com/chemistry-mcqs/" },
      { title: "Biology", href: "https://pakmcqs.com/biology-mcqs/" },
      { title: "Mathematics", href: "https://pakmcqs.com/mathematics-mcqs/" },
      { title: "Current Affairs", href: "https://pakmcqs.com/current-affairs-mcqs/" },
      { title: "Logical Reasoning", href: "https://pakmcqs.com/logical-reasoning-mcqs/" },
      { title: "Everyday Science", href: "https://pakmcqs.com/everyday-science-mcqs/" },
    ],
    offlineMcqs: [
      { q: "The SI unit of force is?", options: ["Joule", "Newton", "Watt", "Pascal"], a: 1 },
      { q: "Speed of light in vacuum is approximately?", options: ["3×10⁶ m/s", "3×10⁸ m/s", "3×10⁵ m/s", "3×10⁷ m/s"], a: 1 },
      { q: "Water boils at 1 atm at?", options: ["90°C", "100°C", "110°C", "120°C"], a: 1 },
      { q: "DNA stands for?", options: ["Diribo nucleic acid", "Deoxyribonucleic acid", "Dual nucleic acid", "Dense nucleic acid"], a: 1 },
      { q: "H₂SO₄ is?", options: ["Base", "Salt", "Acid", "Metal"], a: 2 },
      { q: "Integral of 1/x is?", options: ["x²/2 + C", "ln|x| + C", "eˣ + C", "1/x² + C"], a: 1 },
      { q: "Which is a prime number?", options: ["91", "97", "99", "100"], a: 1 },
      { q: "Largest planet in solar system?", options: ["Earth", "Mars", "Jupiter", "Saturn"], a: 2 },
      { q: "CPU stands for?", options: ["Central Processing Unit", "Computer Personal Unit", "Central Program Utility", "Core Processing Utility"], a: 0 },
      { q: "Synonym of 'Benevolent'?", options: ["Cruel", "Kind", "Angry", "Weak"], a: 1 },
      { q: "Pakistan capital is?", options: ["Lahore", "Karachi", "Islamabad", "Peshawar"], a: 2 },
      { q: "Ohm's law: V = ?", options: ["IR", "I/R", "I+R", "I²R"], a: 0 },
      { q: "Photosynthesis produces?", options: ["CO₂", "O₂", "N₂", "H₂"], a: 1 },
      { q: "Which is a noble gas?", options: ["Oxygen", "Neon", "Chlorine", "Nitrogen"], a: 1 },
      { q: "√144 equals?", options: ["10", "11", "12", "13"], a: 2 },
    ],
  };

  const state = {
    theme: localStorage.getItem("dsn-theme") || "dark",
    currentSection: "home",
    selectedCourseId: null,
    quizIndex: 0,
    quizScore: 0,
    quizAnswered: false,
  };

  function $(sel, root) {
    return (root || document).querySelector(sel);
  }
  function $$(sel, root) {
    return Array.from((root || document).querySelectorAll(sel));
  }

  function initTheme() {
    document.documentElement.setAttribute("data-theme", state.theme);
    $("#theme-toggle")?.addEventListener("click", () => {
      state.theme = state.theme === "dark" ? "light" : "dark";
      document.documentElement.setAttribute("data-theme", state.theme);
      localStorage.setItem("dsn-theme", state.theme);
    });
  }

  function initOffline() {
    const banner = $("#offline-banner");
    const dismiss = $("#offline-dismiss");

    function sync() {
      if (!navigator.onLine) {
        banner.hidden = false;
      } else {
        banner.hidden = true;
      }
    }
    window.addEventListener("online", sync);
    window.addEventListener("offline", sync);
    dismiss?.addEventListener("click", () => {
      banner.hidden = true;
    });
    sync();
  }

  function initParticles() {
    const canvas = $("#particle-canvas");
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    let w, h, particles, raf;

    function resize() {
      w = canvas.width = window.innerWidth;
      h = canvas.height = window.innerHeight;
      particles = Array.from({ length: Math.min(90, Math.floor(w / 18)) }, () => ({
        x: Math.random() * w,
        y: Math.random() * h,
        vx: (Math.random() - 0.5) * 0.5,
        vy: (Math.random() - 0.5) * 0.5,
        r: Math.random() * 2 + 0.5,
      }));
    }

    function tick() {
      ctx.clearRect(0, 0, w, h);
      const isLight = document.documentElement.getAttribute("data-theme") === "light";
      ctx.fillStyle = isLight ? "rgba(0,100,200,0.35)" : "rgba(0,247,255,0.45)";
      particles.forEach((p) => {
        p.x += p.vx;
        p.y += p.vy;
        if (p.x < 0 || p.x > w) p.vx *= -1;
        if (p.y < 0 || p.y > h) p.vy *= -1;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fill();
      });
      raf = requestAnimationFrame(tick);
    }

    resize();
    tick();
    window.addEventListener("resize", resize);
  }

  function initCursorGlow() {
    const glow = $("#cursor-glow");
    if (!glow) return;
    let mx = 0,
      my = 0,
      tx = 0,
      ty = 0;
    window.addEventListener("mousemove", (e) => {
      tx = e.clientX;
      ty = e.clientY;
    });
    function loop() {
      mx += (tx - mx) * 0.08;
      my += (ty - my) * 0.08;
      glow.style.left = mx + "px";
      glow.style.top = my + "px";
      requestAnimationFrame(loop);
    }
    loop();
  }

  function initScrollProgress() {
    const bar = $("#scroll-progress");
    if (!bar) return;
    function onScroll() {
      const doc = document.documentElement;
      const scrolled = (doc.scrollTop / (doc.scrollHeight - doc.clientHeight)) * 100;
      const v = Math.min(100, Math.max(0, scrolled));
      bar.style.width = v + "%";
      bar.setAttribute("aria-valuenow", String(Math.round(v)));
    }
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
  }

  function initMagnetic() {
    $$(".magnetic-btn").forEach((el) => {
      el.addEventListener("mousemove", (e) => {
        const rect = el.getBoundingClientRect();
        const x = e.clientX - rect.left - rect.width / 2;
        const y = e.clientY - rect.top - rect.height / 2;
        el.style.transform = `translate(${x * 0.12}px, ${y * 0.12}px)`;
      });
      el.addEventListener("mouseleave", () => {
        el.style.transform = "";
      });
    });
  }

  function scrambleText(el, finalText, duration) {
    if (!el) return;
    const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789@#$";
    const len = finalText.length;
    let frame = 0;
    const totalFrames = duration / 16;
    const timer = setInterval(() => {
      frame++;
      let out = "";
      for (let i = 0; i < len; i++) {
        if (frame / totalFrames > i / len) out += finalText[i];
        else out += chars[Math.floor(Math.random() * chars.length)];
      }
      el.textContent = out;
      if (frame >= totalFrames) {
        clearInterval(timer);
        el.textContent = finalText;
      }
    }, 16);
  }

  function initHeroScramble() {
    const el = $("#hero-scramble");
    const finalText =
      "Preparing tomorrow’s achievers with structured learning, smart testing, and real outcomes.";
    scrambleText(el, finalText, 1800);
  }

  function initGSAP() {
    if (typeof gsap === "undefined" || typeof ScrollTrigger === "undefined") return;
    gsap.registerPlugin(ScrollTrigger);

    $$(".reveal-item").forEach((el) => {
      gsap.fromTo(
        el,
        { opacity: 0, y: 40 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: "power3.out",
          scrollTrigger: {
            trigger: el,
            start: "top 88%",
            toggleActions: "play none none none",
          },
        }
      );
    });

    gsap.utils.toArray(".parallax-slow, .parallax-mid, .parallax-fast").forEach((el, i) => {
      const speed = el.classList.contains("parallax-slow") ? 30 : el.classList.contains("parallax-mid") ? 50 : 70;
      gsap.to(el, {
        y: speed,
        ease: "none",
        scrollTrigger: {
          trigger: el,
          scrub: true,
          start: "top bottom",
          end: "bottom top",
        },
      });
    });

    ScrollTrigger.refresh();
  }

  function setActiveNav(id) {
    $$(".nav-list a").forEach((a) => {
      a.classList.toggle("active", a.getAttribute("data-nav") === id);
    });
  }

  const VALID_SECTIONS = new Set([
    "home",
    "about",
    "courses",
    "course-detail",
    "entry-test",
    "mcqs",
    "results",
    "services",
    "portfolio",
    "achievements",
    "contact",
  ]);

  function navigateTo(sectionId, pushHash) {
    state.currentSection = sectionId;
    const detail = $("#course-detail");
    if (sectionId === "course-detail") {
      detail?.removeAttribute("hidden");
    } else {
      detail?.setAttribute("hidden", "");
    }
    if (pushHash !== false) {
      history.replaceState(null, "", "#" + sectionId);
    }
    setActiveNav(sectionId === "course-detail" ? "courses" : sectionId);
  }

  function initRouter() {
    function fromHash() {
      const raw = (location.hash || "#home").slice(1);
      const h = VALID_SECTIONS.has(raw) ? raw : "home";
      navigateTo(h, false);
      const el = document.getElementById(h);
      if (el) el.scrollIntoView({ behavior: "smooth" });
    }
    window.addEventListener("hashchange", fromHash);
    $$('a[data-nav]').forEach((a) => {
      a.addEventListener("click", (e) => {
        const id = a.getAttribute("data-nav");
        if (!id) return;
        e.preventDefault();
        navigateTo(id);
        const target = document.getElementById(id);
        target?.scrollIntoView({ behavior: "smooth" });
        const nav = $("#main-nav");
        const toggle = $("#nav-toggle");
        if (nav?.classList.contains("open")) {
          nav.classList.remove("open");
          toggle?.setAttribute("aria-expanded", "false");
        }
      });
    });
    fromHash();
  }

  function renderCourses() {
    const grid = $("#course-grid");
    const skel = $("#courses-skeleton");
    if (!grid) return;

    setTimeout(() => {
      skel?.setAttribute("hidden", "");
      grid.removeAttribute("hidden");
      grid.innerHTML = CONFIG.courses
        .map(
          (c) => `
        <div class="flip-scene course-card-tilt" data-course-id="${c.id}">
          <div class="flip-card">
            <div class="flip-face flip-front glass">
              <span class="course-tag">${escapeHtml(c.tag)}</span>
              <h3>${escapeHtml(c.title)}</h3>
              <p class="text-muted">${c.durationWeeks} weeks · PKR ${c.fee.toLocaleString()}</p>
              <span class="hint">Hover to flip · Click for details</span>
            </div>
            <div class="flip-face flip-back">
              <p>Structured modules, live doubt sessions, and analytics-ready progress.</p>
              <button type="button" class="btn btn-primary magnetic-btn ripple btn-open-course" data-id="${c.id}">Open Course</button>
            </div>
          </div>
        </div>`
        )
        .join("");

      $$(".flip-scene").forEach((scene) => {
        scene.addEventListener("mousemove", (e) => {
          const rect = scene.getBoundingClientRect();
          const px = (e.clientX - rect.left) / rect.width - 0.5;
          const py = (e.clientY - rect.top) / rect.height - 0.5;
          scene.style.transform = `perspective(1200px) rotateY(${px * 8}deg) rotateX(${-py * 8}deg)`;
        });
        scene.addEventListener("mouseleave", () => {
          scene.style.transform = "";
        });
        scene.addEventListener("click", (e) => {
          if (e.target.closest(".btn-open-course")) return;
          const id = Number(scene.getAttribute("data-course-id"));
          openCourseModal(id);
        });
      });

      $$(".btn-open-course").forEach((btn) => {
        btn.addEventListener("click", (e) => {
          e.stopPropagation();
          openCourseModal(Number(btn.getAttribute("data-id")));
        });
      });

      initMagnetic();
    }, 900);
  }

  function escapeHtml(s) {
    const d = document.createElement("div");
    d.textContent = s;
    return d.innerHTML;
  }

  function animateNumber(el, target, suffix) {
    if (!el || typeof gsap === "undefined") {
      el.textContent = target + (suffix || "");
      return;
    }
    const obj = { val: 0 };
    gsap.to(obj, {
      val: target,
      duration: 1.6,
      ease: "power2.out",
      onUpdate: () => {
        el.textContent = Math.round(obj.val) + (suffix || "");
      },
    });
  }

  function openCourseModal(courseId) {
    const c = CONFIG.courses.find((x) => x.id === courseId);
    if (!c) return;
    const modal = $("#course-modal");
    const content = $("#modal-content");
    if (!modal || !content) return;

    content.innerHTML = `
      <h3 id="modal-title">${escapeHtml(c.title)}</h3>
      <p style="color:var(--text-muted)">${escapeHtml(c.tag)} · Full stack learning track</p>

      <div class="collapsible open" data-collapsible>
        <button type="button" class="collapsible-head">
          📘 Course Outline
          <span class="collapsible-icon">▼</span>
        </button>
        <div class="collapsible-body">
          <div class="collapsible-inner">
            <ul>${c.outline.map((o) => `<li>${escapeHtml(o)}</li>`).join("")}</ul>
          </div>
        </div>
      </div>

      <div style="margin:1rem 0">
        <strong>⏱ Duration</strong>
        <div class="duration-num" id="dur-num">0</div>
        <span style="color:var(--text-muted)">weeks · paced cohort</span>
      </div>

      <div class="pricing-card">
        <div>💰 Fee Structure</div>
        <strong>PKR ${c.fee.toLocaleString()}</strong>
        <div style="font-size:0.9rem;color:var(--text-muted)">Installment plans available at enrollment.</div>
      </div>

      <div class="modal-actions">
        <a href="${c.formUrl}" target="_blank" rel="noopener" class="btn btn-primary magnetic-btn ripple">📝 Admission Form</a>
        <a href="${c.demoUrl}" target="_blank" rel="noopener" class="btn btn-ghost magnetic-btn ripple">🎥 Demo Class</a>
        <button type="button" class="btn btn-ghost magnetic-btn ripple" data-toggle-outline>View Outline</button>
      </div>
      <div style="margin-top:1rem;display:flex;gap:0.5rem;flex-wrap:wrap">
        <button type="button" class="btn btn-primary magnetic-btn ripple" id="modal-enroll">Enroll Now</button>
        <a href="#course-detail" class="btn btn-ghost slide-back magnetic-btn ripple" data-course-panel="${c.id}">Full page detail</a>
      </div>
    `;

    modal.removeAttribute("hidden");
    document.body.style.overflow = "hidden";

    const durEl = $("#dur-num", content);
    animateNumber(durEl, c.durationWeeks, "");

    content.querySelectorAll("[data-collapsible]").forEach((block) => {
      const head = block.querySelector(".collapsible-head");
      head?.addEventListener("click", () => {
        block.classList.toggle("open");
      });
    });

    content.querySelector("[data-toggle-outline]")?.addEventListener("click", () => {
      const col = content.querySelector("[data-collapsible]");
      col?.classList.toggle("open");
    });

    $("#modal-enroll", content)?.addEventListener("click", () => {
      window.open(c.formUrl, "_blank", "noopener");
    });

    content.querySelector("[data-course-panel]")?.addEventListener("click", (e) => {
      e.preventDefault();
      closeModal();
      const id = Number(e.currentTarget.getAttribute("data-course-panel"));
      showCourseDetailPage(id);
      navigateTo("course-detail", true);
      $("#course-detail")?.scrollIntoView({ behavior: "smooth" });
    });

    initMagnetic();
  }

  function closeModal() {
    const modal = $("#course-modal");
    if (modal) {
      modal.setAttribute("hidden", "");
      document.body.style.overflow = "";
    }
  }

  function showCourseDetailPage(courseId) {
    const c = CONFIG.courses.find((x) => x.id === courseId);
    const root = $("#course-detail-root");
    if (!c || !root) return;
    state.selectedCourseId = courseId;
    root.innerHTML = `
      <article>
        <h2>${escapeHtml(c.title)}</h2>
        <p>${escapeHtml(c.tag)}</p>
        <div class="collapsible open" data-collapsible>
          <button type="button" class="collapsible-head">📘 Course Outline <span class="collapsible-icon">▼</span></button>
          <div class="collapsible-body"><div class="collapsible-inner"><ul>${c.outline.map((o) => `<li>${escapeHtml(o)}</li>`).join("")}</ul></div></div>
        </div>
        <p><strong>Duration:</strong> ${c.durationWeeks} weeks</p>
        <div class="pricing-card"><strong>PKR ${c.fee.toLocaleString()}</strong></div>
        <div class="modal-actions">
          <a class="btn btn-primary magnetic-btn ripple" href="${c.demoUrl}" target="_blank" rel="noopener">🎥 Demo Class</a>
          <a class="btn btn-ghost magnetic-btn ripple" href="${c.formUrl}" target="_blank" rel="noopener">📝 Admission Form</a>
        </div>
      </article>
    `;
    root.querySelectorAll("[data-collapsible]").forEach((block) => {
      block.querySelector(".collapsible-head")?.addEventListener("click", () => block.classList.toggle("open"));
    });
  }

  function initModal() {
    $("[data-close-modal]")?.addEventListener("click", closeModal);
    $("#modal-close")?.addEventListener("click", closeModal);
    document.addEventListener("keydown", (e) => {
      if (e.key === "Escape") closeModal();
    });
  }

  function initMockTests() {
    const grid = $("#mock-test-grid");
    if (!grid) return;
    grid.innerHTML = CONFIG.mockTests
      .map(
        (t) =>
          `<button type="button" class="mock-btn magnetic-btn" data-url="${t.formUrl}">${escapeHtml(t.label)}</button>`
      )
      .join("");
    grid.querySelectorAll(".mock-btn").forEach((btn) => {
      btn.addEventListener("click", () => {
        window.open(btn.getAttribute("data-url"), "_blank", "noopener");
      });
    });
  }

  function initDailyCategories() {
    const el = $("#daily-categories");
    if (!el) return;
    el.innerHTML = CONFIG.dailyCategories
      .map(
        (cat) => `
      <div class="category-card glass">
        <h4>${escapeHtml(cat.title)}</h4>
        <a href="${cat.href}" target="_blank" rel="noopener">Open question bank →</a>
      </div>`
      )
      .join("");
  }

  function initEngineTabs() {
    $$(".engine-tab").forEach((tab) => {
      tab.addEventListener("click", () => {
        $$(".engine-tab").forEach((t) => {
          t.classList.toggle("active", t === tab);
          t.setAttribute("aria-selected", t === tab ? "true" : "false");
        });
        const eng = tab.getAttribute("data-engine");
        $$(".engine-panel").forEach((p) => {
          p.classList.toggle("active", p.id === "engine-" + eng);
        });
      });
    });
  }

  function renderQuiz() {
    const qEl = $("#quiz-question");
    const optEl = $("#quiz-options");
    const scoreEl = $("#quiz-score");
    const q = CONFIG.offlineMcqs[state.quizIndex];
    if (!q || !qEl || !optEl) return;
    state.quizAnswered = false;
    qEl.textContent = `Q${state.quizIndex + 1}. ${q.q}`;
    optEl.innerHTML = q.options
      .map(
        (o, i) =>
          `<button type="button" class="quiz-opt" data-i="${i}">${String.fromCharCode(65 + i)}. ${escapeHtml(o)}</button>`
      )
      .join("");
    scoreEl.textContent = `Score: ${state.quizScore} / ${CONFIG.offlineMcqs.length}`;
    optEl.querySelectorAll(".quiz-opt").forEach((btn) => {
      btn.addEventListener("click", () => {
        if (state.quizAnswered) return;
        state.quizAnswered = true;
        const i = Number(btn.getAttribute("data-i"));
        optEl.querySelectorAll(".quiz-opt").forEach((b, bi) => {
          b.disabled = true;
          if (bi === q.a) b.classList.add("correct");
          else if (bi === i && i !== q.a) b.classList.add("wrong");
        });
        if (i === q.a) state.quizScore++;
        scoreEl.textContent = `Score: ${state.quizScore} / ${CONFIG.offlineMcqs.length}`;
      });
    });
  }

  function initOfflineQuiz() {
    $("#quiz-next")?.addEventListener("click", () => {
      if (state.quizIndex < CONFIG.offlineMcqs.length - 1) {
        state.quizIndex++;
        renderQuiz();
      } else {
        alert(`Quiz complete! Final score: ${state.quizScore} / ${CONFIG.offlineMcqs.length}`);
      }
    });
    $("#quiz-reset")?.addEventListener("click", () => {
      state.quizIndex = 0;
      state.quizScore = 0;
      renderQuiz();
    });
    renderQuiz();
  }

  function initResults() {
    const grid = $("#results-grid");
    if (!grid) return;
    grid.innerHTML = CONFIG.results
      .map(
        (r) =>
          `<button type="button" class="result-btn magnetic-btn" data-url="${r.sheetUrl}">Result ${r.id} — Check Result</button>`
      )
      .join("");
    grid.querySelectorAll(".result-btn").forEach((btn) => {
      btn.addEventListener("click", () => window.open(btn.getAttribute("data-url"), "_blank", "noopener"));
    });
  }

  function initChatbot() {
    const toggle = $("#chatbot-toggle");
    const panel = $("#chatbot-panel");
    const close = $("#chatbot-close");
    const form = $("#chatbot-form");
    const input = $("#chatbot-input");
    const msgs = $("#chatbot-messages");

    function openP(open) {
      panel.hidden = !open;
      toggle.setAttribute("aria-expanded", open ? "true" : "false");
    }

    toggle?.addEventListener("click", () => openP(panel.hidden));
    close?.addEventListener("click", () => openP(false));

    const replies = [
      "Our cohorts open every month — check the course modal for enrollment.",
      "Mock tests are in the Entry Test tab. Pick a numbered session to begin.",
      "For fee plans, open any course card and review the pricing card.",
    ];

    form?.addEventListener("submit", (e) => {
      e.preventDefault();
      const text = (input.value || "").trim();
      if (!text) return;
      const userBubble = document.createElement("p");
      userBubble.className = "chat-bubble user";
      userBubble.textContent = text;
      msgs.appendChild(userBubble);
      input.value = "";
      setTimeout(() => {
        const bot = document.createElement("p");
        bot.className = "chat-bubble bot";
        bot.textContent = replies[Math.floor(Math.random() * replies.length)];
        msgs.appendChild(bot);
        msgs.scrollTop = msgs.scrollHeight;
      }, 400);
      msgs.scrollTop = msgs.scrollHeight;
    });
  }

  function initContact() {
    $("#contact-form")?.addEventListener("submit", (e) => {
      e.preventDefault();
      alert("Thank you — this demo stores messages client-side only. Wire to your API in CONFIG.apiBase.");
    });
  }

  function initNavToggle() {
    const btn = $("#nav-toggle");
    const nav = $("#main-nav");
    btn?.addEventListener("click", () => {
      const open = !nav.classList.contains("open");
      nav.classList.toggle("open", open);
      btn.setAttribute("aria-expanded", open ? "true" : "false");
    });
  }

  function initCourseDetailBack() {
    $("#course-detail-back")?.addEventListener("click", () => {
      navigateTo("courses");
      $("#courses")?.scrollIntoView({ behavior: "smooth" });
    });
  }

  function initYear() {
    const y = $("#year");
    if (y) y.textContent = new Date().getFullYear();
  }

  function initLoader() {
    window.addEventListener("load", () => {
      setTimeout(() => {
        $("#page-loader")?.classList.add("done");
        initGSAP();
        const stat = $("#stat-learners");
        if (stat && typeof gsap !== "undefined") {
          const obj = { v: 0 };
          gsap.to(obj, {
            v: 12,
            duration: 2,
            ease: "power2.out",
            onUpdate: () => {
              stat.textContent = Math.round(obj.v) + "k+";
            },
          });
        }
      }, 600);
    });
  }

  function boot() {
    initTheme();
    initOffline();
    initParticles();
    initCursorGlow();
    initScrollProgress();
    initMagnetic();
    initHeroScramble();
    initRouter();
    initModal();
    renderCourses();
    initMockTests();
    initDailyCategories();
    initEngineTabs();
    initOfflineQuiz();
    initResults();
    initChatbot();
    initContact();
    initNavToggle();
    initCourseDetailBack();
    initYear();
    initLoader();
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", boot);
  } else {
    boot();
  }
})();
