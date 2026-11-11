
// Mobilní navigace
const menuToggle = document.querySelector("#menu-toggle");
const navigation = document.querySelector("#navigation");

if (menuToggle && navigation) {
    menuToggle.addEventListener("click", () => {
        navigation.classList.toggle("open");

        const isOpen = navigation.classList.contains("open");
        menuToggle.setAttribute("aria-expanded", String(isOpen));
    });

    navigation.querySelectorAll("a").forEach(link => {
        link.addEventListener("click", () => {
            navigation.classList.remove("open");
            menuToggle.setAttribute("aria-expanded", "false");
        });
    });
}

// Filtrování závodních týmů
const filterButtons = document.querySelectorAll(".filter");
const teamCards = document.querySelectorAll(".team-card");

filterButtons.forEach(button => {
    button.addEventListener("click", () => {
        const selectedFilter = button.dataset.filter;

        filterButtons.forEach(item => {
            item.classList.remove("active");
        });

        button.classList.add("active");

        teamCards.forEach(card => {
            const teamColor = card.dataset.color;

            if (selectedFilter === "all" || teamColor === selectedFilter) {
                card.classList.remove("hidden");
            } else {
                card.classList.add("hidden");
            }
        });
    });
});

// Plynulé odkazování na jednotlivé sekce
document.querySelectorAll('a[href^="#"]').forEach(link => {
    link.addEventListener("click", event => {
        const target = document.querySelector(link.getAttribute("href"));

        if (target) {
            event.preventDefault();
            target.scrollIntoView({
                behavior: "smooth",
                block: "start"
            });
        }
    });
});
