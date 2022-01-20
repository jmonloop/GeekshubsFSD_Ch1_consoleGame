let leftMovedOut = false;
function moveLeft() {
    if (leftMovedOut === false) {
        document.getElementById('_left').classList.toggle('leftMove');
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