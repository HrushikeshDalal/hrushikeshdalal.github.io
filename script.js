
  /* ─── Custom Cursor ─── */
  const dot = document.getElementById('cursorDot');
  const ring = document.getElementById('cursorRing');
  let mx = 0, my = 0, rx = 0, ry = 0;
  document.addEventListener('mousemove', e => {
    mx = e.clientX; my = e.clientY;
    dot.style.left = mx - 3 + 'px';
    dot.style.top  = my - 3 + 'px';
  });
  (function animRing() {
    rx += (mx - rx - 16) * 0.14;
    ry += (my - ry - 16) * 0.14;
    ring.style.left = rx + 'px';
    ring.style.top  = ry + 'px';
    requestAnimationFrame(animRing);
  })();
  document.querySelectorAll('a, button').forEach(el => {
    el.addEventListener('mouseenter', () => {
      ring.style.width = '48px'; ring.style.height = '48px';
    });
    el.addEventListener('mouseleave', () => {
      ring.style.width = '32px'; ring.style.height = '32px';
    });
  });

  /* ─── Scroll Reveal ─── */
  const observer = new IntersectionObserver(entries => {
    entries.forEach(e => {
      if (e.isIntersecting) { e.target.classList.add('visible'); }
    });
  }, { threshold: 0.1 });
  document.querySelectorAll('.reveal').forEach(el => observer.observe(el));

  /* ─── Typewriter in hero role ─── */
  const roles = [
  'Data Engineer',
  'Big Data Analyst',
  'Fintech Solutions Builder',
  'Database Developer'
];

  const roleEl = document.querySelector('.hero-role span');
  if (roleEl) {
    let ri = 0, ci = 0, deleting = false;
    roleEl.classList.add('typewriter');
    setInterval(() => {
      const role = roles[ri];
      if (!deleting) {
        roleEl.textContent = role.slice(0, ++ci);
        if (ci === role.length) { deleting = true; setTimeout(() => {}, 1200); }
      } else {
        roleEl.textContent = role.slice(0, --ci);
        if (ci === 0) { deleting = false; ri = (ri + 1) % roles.length; }
      }
    }, deleting ? 40 : 80);
  }
