/* =========================================================
   TYPING EFFECT
========================================================= */

const typingText = document.getElementById("typing-text");

const roles = [
    "Python Developer",
    "Software Developer",
    "Full Stack Developer",
    "Data Analyst"
];

let roleIndex = 0;
let characterIndex = 0;
let deleting = false;

function typeEffect() {

    // Agar typing element nahi mila to error avoid hoga
    if (!typingText) {
        return;
    }

    const currentRole = roles[roleIndex];

    if (deleting === false) {

        typingText.textContent =
            currentRole.substring(0, characterIndex + 1);

        characterIndex++;

        if (characterIndex === currentRole.length) {

            deleting = true;

            setTimeout(typeEffect, 1500);

            return;
        }

    } else {

        typingText.textContent =
            currentRole.substring(0, characterIndex - 1);

        characterIndex--;

        if (characterIndex === 0) {

            deleting = false;

            roleIndex++;

            if (roleIndex === roles.length) {
                roleIndex = 0;
            }

        }

    }

    setTimeout(
        typeEffect,
        deleting ? 60 : 100
    );

}

typeEffect();


/* =========================================================
   LOAD ABOUT SECTION
========================================================= */

fetch("sections/about.html")
    .then(response => {

        if (!response.ok) {
            throw new Error("About section not found");
        }

        return response.text();

    })
    .then(data => {

        const aboutSection = document.getElementById("about");

        if (aboutSection) {
            aboutSection.innerHTML = data;
        }

    })
    .catch(error => {

        console.error(
            "About section loading error:",
            error
        );

    });


/* =========================================================
   LOAD SKILLS SECTION
========================================================= */

fetch("sections/skills.html")
    .then(response => {

        if (!response.ok) {
            throw new Error("Skills section not found");
        }

        return response.text();

    })
    .then(data => {

        const skillsSection = document.getElementById("skills");

        if (skillsSection) {
            skillsSection.innerHTML = data;
        }

    })
    .catch(error => {

        console.error(
            "Skills section loading error:",
            error
        );

    });


/* =========================================================
   LOAD PROJECTS SECTION
========================================================= */

fetch("sections/projects.html")
    .then(response => {

        if (!response.ok) {
            throw new Error("Projects section not found");
        }

        return response.text();

    })
    .then(data => {

        const projectsSection = document.getElementById("projects");

        if (projectsSection) {
            projectsSection.innerHTML = data;
        }

    })
    .catch(error => {

        console.error(
            "Projects section loading error:",
            error
        );

    });


/* =========================================================
   LOAD EDUCATION SECTION
========================================================= */

fetch("sections/education.html")
    .then(response => {

        if (!response.ok) {
            throw new Error("Education section not found");
        }

        return response.text();

    })
    .then(data => {

        const educationSection =
            document.getElementById("education");

        if (educationSection) {
            educationSection.innerHTML = data;
        }

    })
    .catch(error => {

        console.error(
            "Education section loading error:",
            error
        );

    });


/* =========================================================
   LOAD EXPERIENCE SECTION
========================================================= */

fetch("sections/experience.html")
    .then(response => {

        if (!response.ok) {
            throw new Error("Experience section not found");
        }

        return response.text();

    })
    .then(data => {

        const experienceSection =
            document.getElementById("experience");

        if (experienceSection) {
            experienceSection.innerHTML = data;
        }

    })
    .catch(error => {

        console.error(
            "Experience section loading error:",
            error
        );

    });


/* =========================================================
   LOAD ACHIEVEMENTS SECTION
========================================================= */

fetch("sections/achievements.html")
    .then(response => {

        if (!response.ok) {
            throw new Error("Achievements section not found");
        }

        return response.text();

    })
    .then(data => {

        const achievementsSection =
            document.getElementById("achievements");

        if (achievementsSection) {
            achievementsSection.innerHTML = data;
        }

    })
    .catch(error => {

        console.error(
            "Achievements section loading error:",
            error
        );

    });


/* =========================================================
   LOAD CONTACT SECTION
========================================================= */

fetch("sections/contact.html")
    .then(response => {

        if (!response.ok) {
            throw new Error("Contact section not found");
        }

        return response.text();

    })
    .then(data => {

        const contactSection =
            document.getElementById("contact");

        if (contactSection) {

            contactSection.innerHTML = data;

            // HTML load hone ke baad form initialize hoga
            initializeContactForm();

        }

    })
    .catch(error => {

        console.error(
            "Contact section loading error:",
            error
        );

    });


/* =========================================================
   CONTACT FORM VALIDATION
========================================================= */

function initializeContactForm() {

    const contactForm =
        document.getElementById("contact-form");

    const formStatus =
        document.getElementById("form-status");

    // Agar form nahi mila to function stop
    if (!contactForm || !formStatus) {
        return;
    }


    contactForm.addEventListener("submit", function (event) {

        const name =
            document.getElementById("visitor-name");

        const email =
            document.getElementById("visitor-email");

        const subject =
            document.getElementById("visitor-subject");

        const message =
            document.getElementById("visitor-message");

        const submitButton =
            contactForm.querySelector(".contact-submit-btn");


        // Safety check
        if (
            !name ||
            !email ||
            !subject ||
            !message ||
            !submitButton
        ) {
            return;
        }


        /* =========================================
           EMPTY FIELD VALIDATION
        ========================================= */

        if (
            name.value.trim() === "" ||
            email.value.trim() === "" ||
            subject.value.trim() === "" ||
            message.value.trim() === ""
        ) {

            event.preventDefault();

            formStatus.textContent =
                "Please fill in all the fields before submitting.";

            formStatus.className =
                "form-status error";

            return;
        }


        /* =========================================
           EMAIL VALIDATION
        ========================================= */

        const emailPattern =
            /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        if (!emailPattern.test(email.value.trim())) {

            event.preventDefault();

            formStatus.textContent =
                "Please enter a valid email address.";

            formStatus.className =
                "form-status error";

            return;
        }


        /* =========================================
           VALID FORM SUBMISSION
        =========================================

           Yahan event.preventDefault() nahi lagana hai.

           FormSubmit ko form submit hone denge,
           tabhi message Gmail par send hoga.
        ========================================= */

        submitButton.disabled = true;

        submitButton.innerHTML = `
            <span>Sending...</span>
            <i class="fa-solid fa-spinner fa-spin"></i>
        `;

    });

}

/* =========================================================
   LOAD FOOTER
========================================================= */

fetch("sections/footer.html")
    .then(response => {

        if (!response.ok) {
            throw new Error("Footer section not found");
        }

        return response.text();

    })
    .then(data => {

        const footerSection =
            document.getElementById("footer");

        if (footerSection) {

            footerSection.innerHTML = data;

            // Footer year automatically update hoga
            const footerYear =
                document.getElementById("footer-year");

            if (footerYear) {
                footerYear.textContent =
                    new Date().getFullYear();
            }

        }

    })
    .catch(error => {

        console.error(
            "Footer loading error:",
            error
        );

    });


    /* =========================================================
   DARK / LIGHT THEME
========================================================= */

const themeBtn =
    document.getElementById("theme-btn");

if (themeBtn) {

    themeBtn.addEventListener("click", function () {

        document.body.classList.toggle("light-mode");

        if (document.body.classList.contains("light-mode")) {

            themeBtn.textContent = "☀";

        } else {

            themeBtn.textContent = "☾";

        }

    });

}


/* =========================================================
   COLOR THEME SWITCHER
========================================================= */

const themeToggleBtn =
    document.getElementById("theme-toggle-btn");

const themeColorOptions =
    document.getElementById("theme-color-options");

if (themeToggleBtn && themeColorOptions) {

    themeToggleBtn.addEventListener("click", function () {

        themeColorOptions.classList.toggle("active");

    });

}


/* =========================================================
   ACCENT COLOR CHANGE
========================================================= */

const themeColorButtons =
    document.querySelectorAll(".theme-color-btn");

themeColorButtons.forEach(function (button) {

    button.addEventListener("click", function () {

        const color =
            button.getAttribute("data-color");

        const hoverColor =
            button.getAttribute("data-hover");

        if (!color) {
            return;
        }

        document.documentElement.style.setProperty(
            "--accent-color",
            color
        );

        if (hoverColor) {

            document.documentElement.style.setProperty(
                "--accent-hover",
                hoverColor
            );

        }

        themeColorOptions.classList.remove("active");

    });

});