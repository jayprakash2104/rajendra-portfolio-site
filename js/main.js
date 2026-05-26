// ================================
// INIT GSAP
// ================================
gsap.registerPlugin(ScrollTrigger);

// ================================
// LENIS SMOOTH SCROLL (SAFE INIT)
// ================================
if (typeof Lenis !== "undefined") {
  const lenis = new Lenis({
    duration: 1.2,
    smooth: true
  });

  lenis.on("scroll", ScrollTrigger.update);

  gsap.ticker.add((time) => {
    lenis.raf(time * 1000);
  });

  gsap.ticker.lagSmoothing(0);
}

// ================================
// HERO ENTRY ANIMATION
// ================================
gsap.from(".hero-title", {
  y: 50,
  opacity: 0,
  duration: 1,
  ease: "power3.out"
});

gsap.from("#particles-bg", {
  opacity: 0,
  duration: 1.5,
  ease: "power2.out"
});

// ================================
// SECTION REVEAL ANIMATION
// ================================
gsap.utils.toArray(".reveal").forEach((section) => {
  gsap.from(section.children, {
    opacity: 0,
    y: 60,
    stagger: 0.15,
    duration: 1,
    ease: "power3.out",
    scrollTrigger: {
      trigger: section,
      start: "top 85%"
    }
  });
});

// ================================
// FLOATING SHAPES ANIMATION
// ================================
gsap.to(".shape-1", {
  y: 15,
  duration: 3,
  repeat: -1,
  yoyo: true,
  ease: "sine.inOut"
});

gsap.to(".shape-2", {
  y: -12,
  duration: 4,
  repeat: -1,
  yoyo: true,
  ease: "sine.inOut"
});

gsap.to(".shape-3", {
  y: 10,
  duration: 5,
  repeat: -1,
  yoyo: true,
  ease: "sine.inOut"
});

// ================================
// PARTICLES (CONTROLLED & PREMIUM)
// ================================
const accent = getComputedStyle(document.documentElement)
  .getPropertyValue("--accent")
  .trim();

if (typeof tsParticles !== "undefined") {
  tsParticles.load("particles-bg", {
    particles: {
      number: { value: 18 },

      color: { value: accent },

      links: {
        enable: true,
        color: accent,
        distance: 180,
        opacity: 0.3,
        width: 1,

        shadow: {
          enable: true,
          color: accent,
          blur: 6
        }
      },

      move: {
        enable: true,
        speed: 0.35
      },

      size: {
        value: 2
      },

      opacity: {
        value: 0.35
      }
    },

    interactivity: {
      events: {
        onHover: { enable: true },
        resize: true
      }
    },

    fullScreen: {
      enable: false
    }
  });
}

// ================================
// MOUSE PARALLAX (SUBTLE & PREMIUM)
// ================================
const hero = document.querySelector(".hero");

if (hero) {
  hero.addEventListener("mousemove", (e) => {
    const x = (e.clientX / window.innerWidth - 0.5);
    const y = (e.clientY / window.innerHeight - 0.5);

    gsap.to(".avatar", {
      x: x * 25,
      y: y * 20,
      rotationY: x * 3,
      duration: 0.6,
      ease: "power2.out"
    });

    gsap.to(".shape", {
      x: x * 10,
      y: y * 8,
      duration: 0.6,
      ease: "power2.out"
    });

    gsap.to("#particles-bg", {
      x: x * 15,
      y: y * 10,
      duration: 0.6,
      ease: "power2.out"
    });
  });
}

// const toggle = document.querySelector(".menu-toggle");
// const nav = document.querySelector(".nav");

// if (toggle) {
//   toggle.addEventListener("click", () => {
//     nav.classList.toggle("active");
//     toggle.textContent = nav.classList.contains("active") ? "✕" : "☰";
//      document.body.style.overflow = nav.classList.contains("active") ? "hidden" : "auto";
//   });
// }



// ================= CTA PREMIUM ANIMATION =================

const ctaTitle = document.querySelector(".cta h2");

if (ctaTitle) {
  const words = ctaTitle.innerText.split(" ");

  ctaTitle.innerHTML = words
    .map(word => `<span class="cta-word">${word}</span>`)
    .join(" ");
}

gsap.from(".cta-word", {
  opacity: 0,
  y: 60,
  stagger: 0.07,
  duration: 0.9,
  ease: "power4.out",
  scrollTrigger: {
    trigger: ".reveal-cta",
    start: "top 75%",
  }
});


function initCTAAnimation() {

  const cta = document.querySelector(".reveal-cta");
  if (!cta) return;

  const ctaTitle = cta.querySelector("h2");

  const words = ctaTitle.innerText.split(" ");

  ctaTitle.innerHTML = words
    .map(word => `<span class="cta-word">${word}</span>`)
    .join(" ");

  gsap.from(".cta-word", {
    opacity: 0,
    y: 60,
    stagger: 0.07,
    duration: 0.9,
    scrollTrigger: {
      trigger: ".reveal-cta",
      start: "top 75%"
    }
  });

}

function initNavbar() {

  const toggle = document.querySelector(".menu-toggle");
  const nav = document.querySelector(".nav");

  if (!toggle || !nav) return;

  toggle.addEventListener("click", () => {
    nav.classList.toggle("active");

    toggle.textContent = nav.classList.contains("active") ? "✕" : "☰";

    document.body.style.overflow =
      nav.classList.contains("active") ? "hidden" : "auto";
  document.body.classList.toggle("menu-open", nav.classList.contains("active"));

  });



}gsap.from(".contact-left .badge", {
  y: 20,
  opacity: 0,
  duration: 0.6,
  ease: "power2.out"
});

gsap.from(".contact-left h1", {
  y: 40,
  opacity: 0,
  duration: 0.8,
  delay: 0.1,
  ease: "power3.out"
});

gsap.from(".contact-left .desc", {
  y: 30,
  opacity: 0,
  duration: 0.8,
  delay: 0.2
});

gsap.from(".contact-info .info", {
  y: 20,
  opacity: 0,
  stagger: 0.15,
  duration: 0.6,
  delay: 0.3
});

gsap.from(".arrow-btn", {
  y: 20,
  opacity: 0,
  duration: 0.6,
  delay: 0.5
});

gsap.from(".contact-map", {
  x: 80,
  opacity: 0,
  duration: 1,
  ease: "power3.out",
  delay: 0.3
});

gsap.from(".contact-left .accent", {
  scale: 0.8,
  opacity: 0,
  duration: 0.6,
  delay: 0.4,
  ease: "back.out(1.7)"
});

const reason = document.getElementById("reason");
if (reason) {
  console.log("Reason select found, adding change listener");
    reason.addEventListener("change", function () {
      if (this.value !== "") {
        this.classList.add("selected");
      } else {
        this.classList.remove("selected");
      }
    });
  }


window.addEventListener("componentsLoaded", () => {

  // ✅ INIT EMAILJS SAFELY
  if (window.emailjs) {
    emailjs.init({
      // publicKey: "kqWvRTv5kjhFqNabg"
      publicKey: "SJduZE3sdYqaQywdp"
    });
  } else {
    console.error("EmailJS not loaded");
    return;
  }

  // ✅ SAFE FORM SELECT
  const form = document.getElementById("contactForm");
  if (!form) return; // 🔥 THIS LINE FIXES EVERYTHING

  form.addEventListener("submit", function(e) {
    e.preventDefault();

    let isValid = true;

    const name = document.getElementById("name");
    const email = document.getElementById("email");
    const subject = document.getElementById("subject");
    const message = document.getElementById("message");
    const reason = document.getElementById("reason");

    const nameError = document.getElementById("nameError");
    const emailError = document.getElementById("emailError");
    const messageError = document.getElementById("messageError");
    const reasonError = document.getElementById("reasonError");

    // RESET
    [name, email, message, reason].forEach(el => {
      if (el) el.classList.remove("error-input");
    });

    nameError.textContent = "";
    emailError.textContent = "";
    messageError.textContent = "";
    reasonError.textContent = "";

    // VALIDATION
    if (name.value.trim() === "") {
      nameError.textContent = "Please enter your name";
      name.classList.add("error-input");
      isValid = false;
    }

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailPattern.test(email.value)) {
      emailError.textContent = "Please enter a valid email";
      email.classList.add("error-input");
      isValid = false;
    }

    if (reason.value === "") {
      reasonError.textContent = "Please select a service";
      reason.classList.add("error-input");
      isValid = false;
    }

    if (message.value.trim() === "") {
      messageError.textContent = "Please enter your message";
      message.classList.add("error-input");
      isValid = false;
    }

    if (!isValid) return;

    const btn = form.querySelector("button");
    btn.disabled = true;
    btn.innerHTML = "Sending <span class='spinner'></span>";

    emailjs.send("service_ha0zfah", "template_ly32lim", {
      name: name.value,
      email: email.value,
      reason: reason.value,
      subject: subject.value,
      message: message.value
    })
    // emailjs.send("service_yowfb68", "template_c481o32", {
    //   name: name.value,
    //   email: email.value,
    //   reason: reason.value,
    //   subject: subject.value,
    //   message: message.value
    // })
    .then(() => {
      alert("Message sent successfully!");
      form.reset();
      reason.classList.remove("selected");
    })
    
    .catch((err) => {
      console.error(err);
      alert("Failed to send message");
    })
    .finally(() => {
      btn.disabled = false;
      btn.innerHTML = 'Send a Message <span class="arrow-icon">→</span>';
    });

  });

});

// GSAP
window.addEventListener("componentsLoaded", () => {

gsap.from(".about-title", {
  y: 60,
  opacity: 0,
  duration: 1
});

gsap.from(".about-desc", {
  y: 40,
  opacity: 0,
  delay: 0.2
});

gsap.from(".stat-card", {
  y: 30,
  opacity: 1,
  stagger: 0.15,
  delay: 0.4
});




});


