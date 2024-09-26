/*
    HERE WE WILL USE THE MOST COMMON METHOD WHICH
    IS element.getBoundingClientRect();
    to figure out the size of an element and position
    relative to the viewport.
BASIC CONCEPT==>
LOOK FIRST CHECK OUT THE INNER HEIGHT OF WINDOW.
THEN TAKE THE SPECIFIC VALUE WHICH YOU FEEL COMFORTABLE.
*/
const boxes = document.querySelectorAll(".box");
window.addEventListener("scroll", checkBoxes);
checkBoxes();
function checkBoxes() {
  const triggerBottom = (window.innerHeight / 5) * 4;
  boxes.forEach((box) => {
    const boxTop = box.getBoundingClientRect().top;
    if (boxTop < triggerBottom) {
      box.classList.add("show");
    } else {
      box.classList.remove("show");
    }
  });
}
