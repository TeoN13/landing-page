// Function to get the width of the first .card element
function getCardWidth() {
  const card = document.querySelector(".card");
  return card.getBoundingClientRect().width;
}

// Event listener for the left arrow
document.querySelector("#arrow-left").addEventListener("click", function () {
  const cardWidth = getCardWidth();
  document.querySelector("#card-container").scrollBy({
    left: -cardWidth, // Scrolls by the dynamic width of the card
    behavior: "smooth"
  });
});

// Event listener for the right arrow
document.querySelector("#arrow-right").addEventListener("click", function () {
  const cardWidth = getCardWidth();
  document.querySelector("#card-container").scrollBy({
    left: cardWidth, // Scrolls by the dynamic width of the card
    behavior: "smooth"
  });
});

// scroll card into view when hovered over
const cards = document.querySelectorAll(".card");
cards.forEach(function (element) {
  element.addEventListener("mouseover", function () {
    this.scrollIntoView({ behavior: "smooth", block: "nearest" });
  });
});

function isInViewport(element) {
  const rect = element.getBoundingClientRect();
  return (
    rect.top >= 0 &&
    rect.left >= 0 &&
    rect.bottom <=
      (window.innerHeight || document.documentElement.clientHeight) &&
    rect.right <= (window.innerWidth || document.documentElement.clientWidth)
  );
}

// animate things in section 3
function reveal() {
  const reveals = document.querySelectorAll(".reveal");

  for (let i = 0; i < reveals.length; i++) {
    let windowHeight = window.innerHeight;
    let elementTop = reveals[i].getBoundingClientRect().top;
    const elementVisible = 150;

    if (elementTop < windowHeight - elementVisible) {
      reveals[i].classList.add("active");
      console.log("Making element ", reveals[i], " active");
    } else {
      reveals[i].classList.remove("active");
    }
  }
}

window.addEventListener("scroll", reveal);