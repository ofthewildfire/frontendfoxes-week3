/* Referenced items that have already been added to the function, can also use 'const/let to declare them individually too, but, i like this way, and i didnt know it was possible, so i will do it like this.' */

dragElement(document.getElementById("witch-icon1"));
dragElement(document.getElementById("witch-icon2"));
dragElement(document.getElementById("witch-icon3"));
dragElement(document.getElementById("witch-icon4"));
dragElement(document.getElementById("witch-icon5"));
dragElement(document.getElementById("witch-icon6"));
dragElement(document.getElementById("witch-icon7"));
dragElement(document.getElementById("witch-icon8"));
dragElement(document.getElementById("witch-icon9"));
dragElement(document.getElementById("witch-icon10"));
dragElement(document.getElementById("witch-icon11"));
dragElement(document.getElementById("witch-icon12"));
dragElement(document.getElementById("witch-icon13"));
dragElement(document.getElementById("witch-icon14"));

function dragElement(dragElement) {
 let pos1 = 0,
  pos2 = 0,
  pos3 = 0,
  pos4 = 0;
 dragElement.onpointerdown = pointerDrag;

 function elementDrag(e) {
  pos1 = pos3 - e.clientX;
  pos2 = pos4 - e.clientY;
  pos3 = e.clientX;
  pos4 = e.clientY;
  console.log(pos1, pos2, pos3, pos4);
  dragElement.style.top = `${dragElement.offsetTop - pos2}px`;
  dragElement.style.left = `${dragElement.offsetLeft - pos1}px`;
 }

 function stopElementDrag() {
  document.onpointerup = null;
  document.onpointermove = null;
 }

 function pointerDrag(e) {
  e.preventDefault();
  console.log(e);
  pos3 = e.clientX;
  pos4 = e.clientY;
  document.onpointermove = elementDrag;
  document.onpointerup = stopElementDrag;
 }
}
