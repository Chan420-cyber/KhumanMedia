const characters = [
  {
    name: "THE EXCUSE",
    text: "Just a regular student life – chilling with friends over coffee after tuition, coming home late, complaining about dinner, then heading to school only to hear there’s a test. Suddenly ‘falling sick’ to dodge it  –  only to return and get ambushed by the postponed test anyway. No escape!",
    image: "assets/background.jpg"
  },
  {
    name: "THE RED ZONE",
    text: "Two friends hype themselves up to meet a girl one of them matched with on Facebook—so one even fibs to his mom about ‘work.’ When they roll up, they find the spot is a red-zone guarded by a squad of women and beat a hasty retreat. Dejected, they stop for some bora, only to have their spirits lifted by the sight of a stunning server. Problem solved!",
    image: "assets/2.jpg"
  },
  {
    name: "HANUBA HANUBI PAN THABA",
    text: "An old couple heads to the field to plant yams, chatting about mischievous monkeys who might dig them up. Just then, some monkeys show up and surprisingly offer farming advice—boil the yam, bury it with a big leaf, and it’ll grow overnight. The couple tries it, and by the next day, the yam has shot up tall and strong. To be continued...",
    image: "assets/3.jpg"
  },
  {
    name: "THE EXCUSE EPISODE 2",
    text: "Inosuke is wild, fearless, and wears a boar’s head—perfect for charging into battle.",
    image: "assets/4.jpg"
  }
];

let currentIndex = 0;

function displayCharacter(index) {
  const textDiv = document.getElementById("character-text");
  const image = document.getElementById("character-image");
  const char = characters[index];

  textDiv.innerHTML = `<h3>${char.name}</h3><p>${char.text}</p>`;
  image.src = char.image;
  image.alt = `${char.name} image`;
}

function nextCharacter() {
  const textDiv = document.getElementById("character-text");
  const image = document.getElementById("character-image");

  // Start fade out and slide out
  textDiv.classList.add("fade-out");
  image.classList.add("slide-out");

  setTimeout(() => {
    // Update content
    currentIndex = (currentIndex + 1) % characters.length;
    const char = characters[currentIndex];
    textDiv.innerHTML = `<h3>${char.name}</h3><p>${char.text}</p>`;
    image.src = char.image;
    image.alt = `${char.name} image`;

    // Reset transitions
    textDiv.classList.remove("fade-out");
    image.classList.remove("slide-out");

    // Trigger slide-in animation
    void image.offsetWidth; // force reflow
    image.classList.add("slide-in");

    setTimeout(() => {
      image.classList.remove("slide-in");
    }, 500);
  }, 500);
}

window.onload = () => {
  displayCharacter(currentIndex);
};
