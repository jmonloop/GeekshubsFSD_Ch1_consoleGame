function moveLeft() {
    document.getElementById('_left').classList.toggle('leftMove');
}

function moveRight() {
    document.getElementById('_right').classList.toggle('rightMove');
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
    
}