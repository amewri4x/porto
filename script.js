document.addEventListener("DOMContentLoaded", () => {

  // =====================
  // LOADER
  // =====================
  window.addEventListener("load", () => {
    const loader = document.getElementById("loader");
    if (loader) {
      loader.style.opacity = "0";
      setTimeout(() => {
        loader.style.display = "none";
      }, 500);
    }
  });

  // =====================
  // TYPING EFFECT (SAFE)
  // =====================
  const text = ["Masih Gamon", "Math Lover", "Newbie", "Gamer"];
  const typingEl = document.querySelector(".typing");

  if (typingEl) {
    let count = 0;
    let index = 0;

    function type() {
      const current = text[count];
      const letter = current.slice(0, ++index);

      typingEl.textContent = letter;

      if (letter.length === current.length) {
        count = (count + 1) % text.length;
        index = 0;
        setTimeout(type, 1200);
      } else {
        setTimeout(type, 100);
      }
    }

    type();
  }

  // =====================
  // LIGHTBOX (SAFE)
  // =====================
  window.openImage = function (src) {
    const box = document.getElementById("lightbox");
    const img = document.getElementById("lightbox-img");

    if (!box || !img) return;

    box.style.display = "flex";
    img.src = src;
  };

  window.closeImage = function () {
    const box = document.getElementById("lightbox");
    if (box) box.style.display = "none";
  };

  // =====================
  // BACKGROUND BLOBS (SAFE MODULE)
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
