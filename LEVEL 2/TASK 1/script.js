function showBrewInfo() {
    alert("Caramel Pour-Over: Ethiopian single-origin beans, brewed fresh, $4.50.");
}

// Bulma navbar burger toggle (mobile menu)
document.addEventListener("DOMContentLoaded", () => {
    const burger = document.getElementById("navBurger");
    const menu = document.getElementById("navMenu");
    if (burger && menu) {
        burger.addEventListener("click", () => {
            burger.classList.toggle("is-active");
            menu.classList.toggle("is-active");
        });
    }
});
