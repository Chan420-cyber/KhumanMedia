// for slides
const carousel = document.querySelector(".carousel"),
firstImg = carousel.querySelectorAll("img")[0];
arrowIcons = document.querySelectorAll(".wrapper i");

let isDragStart = false, isDragging = false, prevPageX, prevScrollLeft, positionDiff;

const showHideIcons = () => {
  //showing and hiding prev/next icon according to carousel scroll left value
  let scrollWidth = carousel.scrollWidth - carousel.clientWidth;//getting max scrollable width
  arrowIcons[0].style.display = carousel.scrollLeft == 0 ? "none" : "block";
  arrowIcons[1].style.display = carousel.scrollLeft == scrollWidth ? "none" : "block";
}

arrowIcons.forEach(icon => {
  icon.addEventListener("click", () => {
    let firstImgWidth = firstImg.clientWidth + 5.5;//getting first img width & adding 14 margin
    //if clicked icon is left, reduce width value from the carousel scroll left else add to it
    carousel.scrollLeft += icon.id == "left" ? -firstImgWidth : firstImgWidth;
    setTimeout(() => showHideIcons(), 60);//calling showHideIcons after 60ms
  });
});

const autoSlide = () => {
  //if there is no image left to scroll then return from here
  if(carousel.scrollLeft == (carousel.scrollWidth - carousel.clientWidth)) return;

  positionDiff = Math.abs(positionDiff);//Making positiondiff value to positive
  let firstImgwidth = firstImg.clientWidth +14;
  //getting difference value that needs to add or reduce from carousel left to take middle img center
  let valDifference = firstImgwidth - positionDiff;

  if(carousel.scrollLeft > prevScrollLeft) {//if user is scrolling to the right
    return carousel.scrollLeft += positionDiff > firstImgwidth / 3 ? valDifference: -positionDiff 
  }
  //if user is scrollig to the left
  carousel.scrollLeft -= positionDiff > firstImgwidth / 3 ? valDifference: -positionDiff;
}

const dragStart = (e) => {
  //updating global variables value on ouse down event
  isDragStart = true;
  prevPageX = e.pageX || e.touches [0].pageX;
  prevScrollLeft = carousel.scrollLeft;
}

const dragging = (e) => {
  //scrolling images/carousel to let according to mouse pointer
  if(!isDragStart) return;
  e.preventDefault();
  isDragging = true;
  carousel.classList.add("dragging");
  positionDiff = (e.pageX || e.touches[0].pageX) - prevPageX;
  carousel.scrollLeft = prevScrollLeft - positionDiff;
  showHideIcons();
}

const dragStop = () => {
  isDragStart = false;
  carousel.classList.remove("dragging");

  if(!isDragging) return;
  isDragging = false;
  autoSlide();
}

carousel.addEventListener("mousedown", dragStart);
carousel.addEventListener("touchstart", dragStart);

carousel.addEventListener("mousemove", dragging);
carousel.addEventListener("touchmove", dragging);

carousel.addEventListener("mouseup", dragStop);
carousel.addEventListener("mouseleave", dragStop);
carousel.addEventListener("touchend", dragStop);

// Call show/hide once on load
window.addEventListener("load", showHideIcons);

// Update arrow visibility after dragging ends
carousel.addEventListener("mouseup", showHideIcons);
carousel.addEventListener("touchend", showHideIcons);

// Optional: handle resizing
window.addEventListener("resize", showHideIcons);
