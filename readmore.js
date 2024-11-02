document.getElementById("readMoreBtn").addEventListener("click", function() {
  const content = document.getElementById("content");
  const button = document.getElementById("readMoreBtn");

  if (content.style.maxHeight) {
    content.style.maxHeight = null;  // Show full content
    button.innerHTML = "Read More";
  } else {
    content.style.maxHeight = "300px"; // Collapse content
    button.innerHTML = "Read Less";
  }
});

