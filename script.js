document.addEventListener("DOMContentLoaded", () => {

  // =====================
  // LIGHTBOX
  // =====================
  window.openImage = (src) => {
    const box = document.getElementById("lightbox");
    const img = document.getElementById("lightbox-img");
    if (!box || !img) return;

    box.style.display = "flex";
    img.src = src;
  };

  window.closeImage = () => {
    const box = document.getElementById("lightbox");
    if (box) box.style.display = "none";
  };

  // =====================
  // TYPING EFFECT (ANTI LOOP FIX)
  // =====================
  const text = ["Masih Gamon", "Math Lover", "Newbie", "Gamer"];
  const el = document.querySelector(".typing");

  if (el && !el.dataset.init) {
    el.dataset.init = "true"; // 🔥 anti double run lock

    let count = 0;
    let index = 0;

    function type() {
      const current = text[count];

      el.textContent = current.slice(0, ++index);

      if (index === current.length) {
        count = (count + 1) % text.length;
        index = 0;
        setTimeout(type, 1200);
      } else {
        setTimeout(type, 80);
      }
    }

    type();
  }

  // =====================
  // BG BLOBS (SAFE + CLEAN)
  // =====================
  const canvas = document.getElementById("bg-blobs");

  if (canvas) {
    const ctx = canvas.getContext("2d");

    function resize() {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    }

    resize();
    window.addEventListener("resize", resize);

    const blobs = Array.from({ length: 3 }, () => ({
      x: Math.random() * window.innerWidth,
      y: Math.random() * window.innerHeight,
      r: 80 + Math.random() * 120,
      dx: (Math.random() - 0.5) * 1.2,
      dy: (Math.random() - 0.5) * 1.2
    }));

    function animate() {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      blobs.forEach(b => {
        const gradient = ctx.createRadialGradient(
          b.x, b.y, 0,
          b.x, b.y, b.r
        );

        gradient.addColorStop(0, "rgba(255,255,255,0.2)");
        gradient.addColorStop(1, "rgba(255,255,255,0)");

        ctx.fillStyle = gradient;
        ctx.beginPath();
        ctx.arc(b.x, b.y, b.r, 0, Math.PI * 2);
        ctx.fill();

        b.x += b.dx;
        b.y += b.dy;

        if (b.x < -200 || b.x > canvas.width + 200) b.dx *= -1;
        if (b.y < -200 || b.y > canvas.height + 200) b.dy *= -1;
      });

      requestAnimationFrame(animate);
    }

    animate();
  }

  // =====================
  // SCROLL REVEAL (CINEMATIC FIX)
  // =====================
  const hiddenElements = document.querySelectorAll(".hidden");

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("show");

        // 🔥 stop observe setelah muncul (lebih ringan)
        observer.unobserve(entry.target);
      }
    });
  }, {
    threshold: 0.15
  });

  hiddenElements.forEach(el => observer.observe(el));

});
