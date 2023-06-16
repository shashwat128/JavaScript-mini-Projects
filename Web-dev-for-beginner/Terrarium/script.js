dragElement(document.getElementById("plant1"));
dragElement(document.getElementById("plant2"));
dragElement(document.getElementById("plant3"));
dragElement(document.getElementById("plant4"));
dragElement(document.getElementById("plant5"));
dragElement(document.getElementById("plant6"));
dragElement(document.getElementById("plant7"));
dragElement(document.getElementById("plant8"));
dragElement(document.getElementById("plant9"));
dragElement(document.getElementById("plant10"));
dragElement(document.getElementById("plant11"));
dragElement(document.getElementById("plant12"));
dragElement(document.getElementById("plant13"));
dragElement(document.getElementById("plant14"));

/*"A closure is the combination of a function bundled together (enclosed) 
with references to its surrounding state (the lexical environment). 
In other words, a closure gives you access to an outer function’s scope 
from an inner function." Create a closure so that you can track the dragged element*/

function dragElement(terrariumElement) {
  //set 4 positions for positioning on the screen
  let pos1 = 0,
    pos2 = 0,
    pos3 = 0,
    pos4 = 0;
  terrariumElement.onpointerdown = pointerDrag;

  function pointerDrag(e) {
    e.preventDefault();
    console.log(e);
    // initial cursor position for position3 and position4
    pos3 = e.clientX;
    pos4 = e.clientY;
    // when the mouse moves, start the drag
    document.onpointermove = elementDrag;
    // when the mouse is lifted, stop the drag
    document.onpointerup = stopElementDrag;
  }

  function elementDrag(e) {
    // calculate the new cursor position
    pos1 = pos3 - e.clientX;

    pos2 = pos4 - e.clientY;
    //reset current location
    pos3 = e.clientX;

    pos4 = e.clientY;
    console.log(pos1, pos2, pos3, pos4);
    // element's new position:
    terrariumElement.style.top = terrariumElement.offsetTop - pos2 + "px";
    terrariumElement.style.left = terrariumElement.offsetLeft - pos1 + "px";
  }

  function stopElementDrag() {
    // stop mouse is released
    document.onpointerup = null;
    document.onpointermove = null;
  }
}
