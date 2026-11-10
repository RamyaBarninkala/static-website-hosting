// Get the navigation elements
const menuToggle = document.getElementById("menuToggle");
const navLinks = document.getElementById("navLinks");

// Open or close the mobile navigation menu
menuToggle.addEventListener("click", () => {
    const isOpen = navLinks.classList.toggle("open");

    menuToggle.setAttribute(
        "aria-expanded",
        String(isOpen)
    );
});

// Close the menu when a navigation link is clicked
navLinks.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
        navLinks.classList.remove("open");

        menuToggle.setAttribute(
            "aria-expanded",
            "false"
        );
    });
});

// Automatically update the copyright year
document.getElementById("year").textContent =
    new Date().getFullYear();