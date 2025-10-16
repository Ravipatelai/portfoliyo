function toggleMenu() {
      const nav = document.getElementById("navLinks");
      const btn = document.getElementById("menuBtn");

      nav.classList.toggle("active");

      // Cross button toggle
      if (nav.classList.contains("active")) {
        btn.textContent = "✖"; // show cross
      } else {
        btn.textContent = "☰"; // show menu
      }
    }


   