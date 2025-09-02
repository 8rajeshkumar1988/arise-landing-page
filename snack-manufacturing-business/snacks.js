const lenis = new Lenis();

lenis.on("scroll", ScrollTrigger.update);

gsap.ticker.add((time) => {
  lenis.raf(time * 1000);
});

gsap.ticker.lagSmoothing(0);

gsap.registerPlugin(ScrollTrigger);

document.addEventListener("DOMContentLoaded", function () {
  gsap.to("#home .backLayer", {
    y: "50vh",
    ease: "none",
    scrollTrigger: {
      trigger: "#home",
      start: "top 0%",
      end: "bottom 0%",
      toggleActions: "play none none reverse",
      scrub: true,
      onLeave: () => {
        if (window.innerWidth > 768) {
          document.getElementById("form").style.transform = "translateY(0%)";
        } else {
          document.querySelector(".fixedBtn").style.transform =
            "translateY(0%)";
        }
      },
      onEnterBack: () => {
        if (window.innerWidth > 768) {
          document.getElementById("form").style.transform = "translateY(100%)";
        } else {
          document.querySelector(".fixedBtn").style.transform =
            "translateY(150%)";
        }
      },
    },
  });

  gsap.to(
    "#home .content .logo, #home .content h1, #home .content .split .left > p, #home .content .split .left .tiles",
    {
      y: 0,
      opacity: 1,
      ease: "power1.out",
      stagger: 0.3,
    }
  );

  gsap.to("#home .content .split .form", {
    y: 0,
    opacity: 1,
    ease: "power1.out",
    duration: 1,
  });

  let tl = gsap.timeline({
    scrollTrigger: {
      trigger: "#second",
      start: "top center",
      toggleActions: "play none none reverse",
    },
  });

  tl.from("#second .imgg5", { y: "15%", ease: "power4.out", duration: 1 }, "0") // fifth
    .from("#second .imgg4", { y: "25%", ease: "power4.out", duration: 1 }, "0") // forth
    .from("#second .imgg2", { y: "35%", ease: "power4.out", duration: 1 }, "0") // third
    .from("#second .imgg3", { y: "50%", ease: "power4.out", duration: 1 }, "0") // second
    .from("#second .imgg1", { y: "70%", ease: "power4.out", duration: 1 }, "0") //top most
    .from("#second .projected", {
      y: "100px",
      x: "-50%",
      ease: "power4.out",
      duration: 1,
      opacity: 0,
    })
    .from(
      "#second .arrow",
      { y: "100px", x: "-100px", ease: "power4.out", duration: 1, opacity: 0 },
      "<0.1"
    );

  gsap.from("#second .left *", {
    y: "100px",
    ease: "power4.out",
    duration: 1,
    opacity: 0,
    stagger: 0.1,
    scrollTrigger: {
      trigger: "#second .left",
      start: "top 80%",
      toggleActions: "play none none reverse",
    },
  });

  gsap.from("#third .content *", {
    y: "100px",
    ease: "power4.out",
    duration: 1,
    opacity: 0,
    stagger: 0.1,
    scrollTrigger: {
      trigger: "#third ",
      start: "top 80%",
      toggleActions: "play none none reverse",
    },
  });

  gsap.from("#forth .content *", {
    y: "100px",
    ease: "power4.out",
    duration: 1,
    opacity: 0,
    stagger: 0.1,
    scrollTrigger: {
      trigger: "#forth ",
      start: "top 80%",
      toggleActions: "play none none reverse",
    },
  });

  gsap.from("#fifth  *", {
    y: "50",
    ease: "power4.out",
    duration: 1,
    opacity: 0,
    stagger: 0.1,
    scrollTrigger: {
      trigger: "#fifth ",
      start: "top 80%",
      toggleActions: "play none none reverse",
    },
  });

  let pairs = [
    [".pop1", ".pop3"],
    [".pop2", ".pop4"],
  ];

  let tl1 = gsap.timeline({ repeat: -1 });

  pairs.forEach(([el1, el2], i) => {
    tl1
      .fromTo(
        [el1, el2],
        { opacity: 0, y: 100 },
        { opacity: 1, y: 0, duration: 0.8, ease: "power1.inOut" },
        i === 0 ? 0 : "-=0.4" // slight overlap between animations
      )
      .to([el1, el2], { opacity: 1, duration: 1.5 }) // longer stay time
      .to([el1, el2], {
        opacity: 0,
        y: -100,
        duration: 0.8,
        ease: "power1.inOut",
      });
  });

  gsap.fromTo(
    "#third .biscuit",
    {
      y: -150,
    },
    {
      y: 50,
      ease: "none",
      scrollTrigger: {
        trigger: "#third .biscuit",
        start: "top 100%",
        end: "bottom 0%",
        toggleActions: "play none none reverse",
        scrub: true,
      },
    }
  );

  document.querySelector(".fixedBtn").addEventListener("click", function () {
    document.querySelector("#form").classList.add("active");
  });
  document.querySelector(".close").addEventListener("click", function () {
    document.querySelector("#form").classList.remove("active");
  });

  document.querySelectorAll("#number_ , #phone").forEach((input) => {
    input.addEventListener("input", function () {
      const inputValue = this.value;
      const numericValue = inputValue.replace(/\D/g, ""); // Remove non-numeric characters
      this.value = numericValue;
    });
  });

  // For #name, #designation, #company: Allow only text input (no numbers)
  document
    .querySelectorAll(
      "#name_, #name"
    )
    .forEach((input) => {
      input.addEventListener("input", function () {
        const inputValue = this.value;
        const textValue = inputValue.replace(/\d/g, ""); // Remove numeric characters
        this.value = textValue;
      });
    });






});


document.addEventListener('DOMContentLoaded', function () {
  const triggerBtn = document.getElementById('first_cta');

  if (!triggerBtn) {
    console.error('Element with ID "first_cta" not found.');
    return;
  }

  triggerBtn.addEventListener('click', function (event) {
    event.preventDefault(); // In case it's a <button> inside a form

    // Collect form input values
    const name = document.getElementById('name')?.value || '';
    const number = document.getElementById('phone')?.value || '';
    const email = document.getElementById('email')?.value || '';
    const msg = document.getElementById('tellUs')?.value || '';
    const leadType = '10';

    // Prepare form data
    const formDataNew = new FormData();
    formDataNew.append('name', name);
    formDataNew.append('mobile', number);
    formDataNew.append('email', email);
    formDataNew.append('any_comments', msg);
    formDataNew.append('page_url', 'https://africaforinvestors.com/snack-manufacturing-business/');
    formDataNew.append('lead_type', leadType);

    // Submit using fetch to fixed URL 
    fetch('/save_lead', {  
      method: "POST",
      enctype: 'multipart/form-data',
      data: formDataNew,
      dataType: "json",
      contentType: false,
      processData: false,
    })
      .then(response => response.json())
      .then(data => {
        console.log('Server response:', data);
      })
      .catch(error => {
        console.error('Error:', error);
      });
  });
});
