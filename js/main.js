let leftMovedOut = false;
function moveLeft() {
    if (leftMovedOut === false) {
        // document.getElementById('_left').classList.toggle('leftMove');
        leftMovedOut = true;
    }  
}

let rightMovedOut = false;
function moveRight() {
    if (rightMovedOut === false) {
        document.getElementById('_right').classList.toggle('rightMove');
        rightMovedOut = true;
    }  
}

function moveCenter() {
    document.getElementById('_left').classList.toggle('leftMove');
    document.getElementById('_right').classList.toggle('rightMove');
}

let switchedOn = false;
function switchOnOff() {
    if(switchedOn === false) {
        document.getElementById('_onOffswitch').classList.toggle('switchOn');
        switchedOn = true;
    }
    if(switchedOn === true) {
        document.getElementById('_onOffswitch').classList.toggle('switchOff');
        switchedOn = false;
    }
}


    // pos3 --> inX
    // pos4 --> inY
    // pos1 --> endX
    // endY --> endY

// Make the DIV element draggable:
dragElement(document.getElementById("mydiv"));

function dragElement(elmnt) {
  var endX = 0, endY = 0, inX = 0, inY = 0;
  if (document.getElementById(elmnt.id + "header")) {
    // if present, the header is where you move the DIV from:
    document.getElementById(elmnt.id + "header").onmousedown = dragMouseDown;
    
  } 
  else {
    // otherwise, move the DIV from anywhere inside the DIV:
    elmnt.onmousedown = dragMouseDown;
  }

  function dragMouseDown(e) {
        e = e || window.event;
    e.preventDefault();
    // get the mouse cursor position at startup:
    inX = (e.clientX);
    initialX = (e.clientX);
    inY = e.clientY;
    document.onmouseup = closeDragElement;
    // call a function whenever the cursor moves:
    document.onmousemove = elementDrag;
  }

  // Luego hacer que vuelva a init al dejar de clicar
  function elementDrag(e) {
    console.log(elmnt.offsetTop, "manolo");

   
      // if (dummy === false){
      e = e || window.event;
      e.preventDefault();

      // calculate the new cursor position:
      endX = (inX - e.clientX);  
      endY = inY - e.clientY;
      inX = e.clientX;
      inY = e.clientY;

      let diffX = inX - endX;
      diffPerX = ((diffX * 100) / initialX);
      if(diffPerX < 0) {
        diffPerX *= -1
      }
      
      // set the element's new position:
      elmnt.style.top = (elmnt.offsetTop - endY) + "px";
      elmnt.style.left = (elmnt.offsetLeft - endX) + "px";
      // Limitates dragging when element arrives final position
      if(elmnt.offsetLeft <= 30)
      {
        elmnt.style.left = 30 + "px";
      }

      if(elmnt.offsetLeft >= 50)
      {
        elmnt.style.left = 50 + "px";
      }

      if(elmnt.offsetTop <= 17) {
        elmnt.style.top = 17 + "px";
      }
      if(elmnt.offsetTop >= 37) {
        elmnt.style.top = 37 + "px";
      }


  }

  function closeDragElement() {
    // stop moving when mouse button is released:
    document.onmouseup = null;
    document.onmousemove = null;
  }
}