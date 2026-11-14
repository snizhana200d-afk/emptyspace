
const filters = document.querySelectorAll(".filter");
const cards = document.querySelectorAll(".space-card");

filters.forEach(function(button) {
  button.addEventListener("click", function() {
    const category = button.dataset.category;

    filters.forEach(function(item) {
      item.classList.remove("active");
    });

    button.classList.add("active");

    cards.forEach(function(card) {
      if (category === "all" || card.dataset.category === category) {
        card.style.display = "block";
      } else {
        card.style.display = "none";
      }
    });
  });
});

const bookButtons = document.querySelectorAll(".book");

bookButtons.forEach(function(button) {
  button.addEventListener("click", function() {
    const card = button.closest(".space-card");
    const name = card.querySelector("h3").textContent;
    const price = card.querySelector("strong").textContent;

    alert(
      "Ви обрали: " + name +
      "\nВартість: " + price +
      "\n\nДякуємо за інтерес до EmptySpace! Для реального бронювання зв'яжіться з нами."
    );
  });
});
