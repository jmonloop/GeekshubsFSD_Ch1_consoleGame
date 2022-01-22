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
// let toggle = document.getElementById('_right').classList.toggle;
// function moveCenter() {
//     document.getElementById('_left').classList.toggle('leftMove');
//     document.getElementById('_right').classList.toggle('rightMove');
// }



let switchedOn = false;
function switchOnOff() {
    if(switchedOn === false) {
        document.getElementById('_onOffswitch').classList.toggle('switchOn');
        document.getElementById('_screen').classList.toggle('screenOn');

        switchedOn = true;
    }
    if(switchedOn === true) {
        document.getElementById('_onOffswitch').classList.toggle('switchOff');
        document.getElementById('_screen').classList.toggle('screenOff');
        document.getElementById('game').classList.toggle('screenOff');
        
        switchedOn = false;
    }
}

function pressButton(elmnt) {
  document.getElementById(elmnt).classList.toggle('pressedButton')
  blueButton = true;

  // console.log("buttn");
}
function leaveButton(elmnt) {
  document.getElementById(elmnt).classList.remove('pressedButton')
  document.getElementById(elmnt).classList.add('button', 'grid', 'topButton');
}

  

//dragLeft function is called by clicking on the respective joystick. 
//it saves the initial position when click was done and substracts it from the final position while clicking.
function dragLeft() {
  dragLeftElement(document.getElementById("_joyLeft"));

  function dragLeftElement(elmnt) {
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

      // call a function whenever the cursor moves:
      document.onmousemove = elementDrag;
    }

    function elementDrag(e) {





      




      e = e || window.event;
      e.preventDefault();
      document.onmouseup = zeroingElement;

      // calculate the new cursor position:
      endX = (inX - e.clientX);  
      endY = inY - e.clientY;
      inX = e.clientX;
      inY = e.clientY;
      
      // set the element's new position:
      elmnt.style.top = (elmnt.offsetTop - endY) + "px";
      elmnt.style.left = (elmnt.offsetLeft - endX) + "px";

      // Limitates dragging when element arrives final position adding +-10 to zero position
      //left joystick zero: left40 top27
      if(elmnt.offsetLeft <= 30) {
        elmnt.style.left = 30 + "px";
      }
      if(elmnt.offsetLeft >= 50) {
        elmnt.style.left = 50 + "px";
      }
      if(elmnt.offsetTop <= 17) {
        elmnt.style.top = 17 + "px";
      }
      if(elmnt.offsetTop >= 37) {
        elmnt.style.top = 37 + "px";
      }

      // sets element position to its origin and stops draggin
      function zeroingElement() {
        elmnt.style.left = 40 + "px";
        elmnt.style.top = 27 + "px";
        closeDragElement();
      }
    }

    // stop moving when mouse button is released:
    function closeDragElement() {
      document.onmouseup = null;
      document.onmousemove = null;
    }
  }
}



function dragRight() {
  if (rightMovedOut === true) {
    dragRightElement(document.getElementById("_joyRight"));

    function dragRightElement(elmnt) {
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
  
      function elementDrag(e) {
        console.log(elmnt.offsetTop, "Rtop");
        console.log(elmnt.offsetLeft, "Rleft");
      
        e = e || window.event;
        e.preventDefault();
        document.onmouseup = zeroingElement;

        // calculate the new cursor position:
        endX = (inX - e.clientX);  
        endY = inY - e.clientY;
        inX = e.clientX;
        inY = e.clientY;

        // set the element's new position:
        elmnt.style.top = (elmnt.offsetTop - endY) + "px";
        elmnt.style.left = (elmnt.offsetLeft - endX) + "px";

        // Limitates dragging when element arrives final position adding +-10 to zeroing position
        // right joystick zero when assembled: left840 top290
        // right joystick zero when disassembled: left40 top290
        if(elmnt.offsetLeft <= 30) {
          elmnt.style.left = 30 + "px";
        }

        if(elmnt.offsetLeft >= 50) {
          elmnt.style.left = 50 + "px";
        }

        if(elmnt.offsetTop <= 280) {
          elmnt.style.top = 280 + "px";
        }
        if(elmnt.offsetTop >= 300) {
          elmnt.style.top = 300 + "px";
        }

        // sets element position to its origin and stops draggin
        function zeroingElement() {
          elmnt.style.left = 40 + "px";
          elmnt.style.top = 290 + "px";
          closeDragElement();
        }
      }
    }
  
    function closeDragElement() {
      // stop moving when mouse button is released:
      document.onmouseup = null;
      document.onmousemove = null;
    }
  }
}








      //Intitates control variables for blue player
      let blueButton = false;
      let listenbuttons = false;

      if(blueUp === true || blueDown === true || blueLeft === true || blueRight === true || blueButton === true){
        listenbuttons = true;
      }

function bomberman() {
  const canvas = document.getElementById('game');
  const context = canvas.getContext('2d');
  const grid = 12;
  const numRows = 13;
  const numCols = 25;

  // create a new canvas and draw the soft wall image. then we can use this
  // canvas to draw the images later on
  const softWallCanvas = document.createElement('canvas');
  const softWallCtx = softWallCanvas.getContext('2d');
  softWallCanvas.width = softWallCanvas.height = grid;

  softWallCtx.fillStyle = 'black';
  softWallCtx.fillRect(0, 0, grid, grid);
  softWallCtx.fillStyle = '#a9a9a9';

  // 1st row brick
  softWallCtx.fillRect(1, 1, grid - 2, 20);
  // softWallCtx.fillRect(2, 1, grid - 2, 20);

  // 2nd row bricks
  softWallCtx.fillRect(0, 23, 20, 18);
  softWallCtx.fillRect(22, 23, 42, 18);

  // 3rd row bricks
  softWallCtx.fillRect(0, 43, 42, 20);
  softWallCtx.fillRect(44, 43, 20, 20);

  // create a new canvas and draw the soft wall image. then we can use this
  // canvas to draw the images later on
  const wallCanvas = document.createElement('canvas');
  const wallCtx = wallCanvas.getContext('2d');
  wallCanvas.width = wallCanvas.height = grid;

  wallCtx.fillStyle = 'black';
  wallCtx.fillRect(0, 0, grid, grid);
  wallCtx.fillStyle = 'white';
  wallCtx.fillRect(0, 0, grid - 2, grid - 2);
  wallCtx.fillStyle = '#a9a9a9';
  wallCtx.fillRect(2, 2, grid - 4, grid - 4);

  // create a mapping of object types
  const types = {
    wall: '▉',
    softWall: 1,
    bomb: 2
  };

  // keep track of all entities
  let entities = [];

  // keep track of what is in every cell of the game using a 2d array. the
  // template is used to note where walls are and where soft walls cannot spawn.
  // '▉' represents a wall
  // 'x' represents a cell that cannot have a soft wall (player start zone)
  let cells = [];
  const template = [
    ['▉','▉','▉','▉','▉','▉','▉','▉','▉','▉','▉','▉','▉','▉','▉'],
    ['▉','x','x',   ,   ,   ,   ,   ,   ,   ,   ,   ,'x','x','▉'],
    ['▉','x','▉',   ,'▉',   ,'▉',   ,'▉',   ,'▉',   ,'▉','x','▉'],
    ['▉','x',   ,   ,   ,   ,   ,   ,   ,   ,   ,   ,   ,'x','▉'],
    ['▉',   ,'▉',   ,'▉',   ,'▉',   ,'▉',   ,'▉',   ,'▉',   ,'▉'],
    ['▉',   ,   ,   ,   ,   ,   ,   ,   ,   ,   ,   ,   ,   ,'▉'],
    ['▉',   ,'▉',   ,'▉',   ,'▉',   ,'▉',   ,'▉',   ,'▉',   ,'▉'],
    ['▉',   ,   ,   ,   ,   ,   ,   ,   ,   ,   ,   ,   ,   ,'▉'],
    ['▉',   ,'▉',   ,'▉',   ,'▉',   ,'▉',   ,'▉',   ,'▉',   ,'▉'],
    ['▉','x',   ,   ,   ,   ,   ,   ,   ,   ,   ,   ,   ,'x','▉'],
    ['▉','x','▉',   ,'▉',   ,'▉',   ,'▉',   ,'▉',   ,'▉','x','▉'],
    ['▉','x','x',   ,   ,   ,   ,   ,   ,   ,   ,   ,'x','x','▉'],
    ['▉','▉','▉','▉','▉','▉','▉','▉','▉','▉','▉','▉','▉','▉','▉']
  ];

  // populate the level with walls and soft walls
  function generateLevel() {
    cells = [];

    for (let row = 0; row < numRows; row++) {
      cells[row] = [];

      for (let col = 0; col < numCols; col++) {

        // 90% chance cells will contain a soft wall
        if (!template[row][col] && Math.random() < 0.90) {
          cells[row][col] = types.softWall;
        }
        else if (template[row][col] === types.wall) {
          cells[row][col] = types.wall;
        }
      }
    }
  }

  // blow up a bomb and its surrounding tiles
  function blowUpBomb(bomb) {

    // bomb has already exploded so don't blow up again
    if (!bomb.alive) return;

    bomb.alive = false;

    // remove bomb from grid
    cells[bomb.row][bomb.col] = null;

    // explode bomb outward by size
    const dirs = [{
      // up
      row: -1,
      col: 0
    }, {
      // down
      row: 1,
      col: 0
    }, {
      // left
      row: 0,
      col: -1
    }, {
      // right
      row: 0,
      col: 1
    }];
    dirs.forEach((dir) => {
      for (let i = 0; i < bomb.size; i++) {
        const row = bomb.row + dir.row * i;
        const col = bomb.col + dir.col * i;
        const cell = cells[row][col];

        // stop the explosion if it hit a wall
        if (cell === types.wall) {
          return;
        }

        // center of the explosion is the first iteration of the loop
        entities.push(new Explosion(row, col, dir, i === 0 ? true : false));
        cells[row][col] = null;

        // bomb hit another bomb so blow that one up too
        if (cell === types.bomb) {

          // find the bomb that was hit by comparing positions
          const nextBomb = entities.find((entity) => {
            return (
              entity.type === types.bomb &&
              entity.row === row && entity.col === col
            );
          });
          blowUpBomb(nextBomb);
        }

        // stop the explosion if hit anything
        if (cell) {
          return;
        }
      }
    });
  }

  // bomb constructor function
  function Bomb(row, col, size, owner) {
    this.row = row;
    this.col = col;
    this.radius = grid * 0.4;
    this.size = size;    // the size of the explosion
    this.owner = owner;  // which player placed this bomb
    this.alive = true;
    this.type = types.bomb;

    // bomb blows up after 3 seconds
    this.timer = 3000;

    // update the bomb each frame
    this.update = function(dt) {
      this.timer -= dt;

      // blow up bomb if timer is done
      if (this.timer <= 0) {
        return blowUpBomb(this);
      }

      // change the size of the bomb every half second. we can determine the size
      // by dividing by 500 (half a second) and taking the ceiling of the result.
      // then we can check if the result is even or odd and change the size
      const interval = Math.ceil(this.timer / 500);
      if (interval % 2 === 0) {
        this.radius = grid * 0.4;
      }
      else {
        this.radius = grid * 0.5;
      }
    };

    // render the bomb each frame
    this.render = function() {
      const x = (this.col + 0.5) * grid;
      const y = (this.row + 0.5) * grid;

      // draw bomb
      context.fillStyle = 'black';
      context.beginPath();
      context.arc(x, y, this.radius, 0, 2 * Math.PI);
      context.fill();

      // draw bomb fuse moving up and down with the bomb size
      const fuseY = (this.radius === grid * 0.5 ? grid * 0.15 : 0);
      context.strokeStyle = 'white';
      context.lineWidth = 5;
      context.beginPath();
      context.arc(
        (this.col + 0.75) * grid,
        (this.row + 0.25) * grid - fuseY,
        10, Math.PI, -Math.PI / 2
      );
      context.stroke();
    };
  }

  // explosion constructor function
  function Explosion(row, col, dir, center) {
    this.row = row;
    this.col = col;
    this.dir = dir;
    this.alive = true;

    // show explosion for 0.3 seconds
    this.timer = 300;

    // update the explosion each frame
    this.update = function(dt) {
      this.timer -= dt;

      if (this.timer <=0) {
        this.alive = false;
      }
    };

    // render the explosion each frame
    this.render = function() {
      const x = this.col * grid;
      const y = this.row * grid;
      const horizontal = this.dir.col;
      const vertical = this.dir.row;

      // create a fire effect by stacking red, orange, and yellow on top of
      // each other using progressively smaller rectangles
      context.fillStyle = '#D72B16';  // red
      context.fillRect(x, y, grid, grid);

      context.fillStyle = '#F39642';  // orange

      // determine how to draw based on if it's vertical or horizontal
      // center draws both ways
      if (center || horizontal) {
        context.fillRect(x, y + 6, grid, grid - 12);
      }
      if (center || vertical) {
        context.fillRect(x + 6, y, grid - 12, grid);
      }

      context.fillStyle = '#FFE5A8';  // yellow

      if (center || horizontal) {
        context.fillRect(x, y + 12, grid, grid - 24);
      }
      if (center || vertical) {
        context.fillRect(x + 12, y, grid - 24, grid);
      }
    };
  }

  // player character (just a simple circle)
  const player = {
    row: 1,
    col: 1,
    numBombs: 1,
    bombSize: 3,
    radius: grid * 0.35,
    render() {
      const x = (this.col + 0.5) * grid;
      const y = (this.row + 0.5) * grid;

      context.save();
      context.fillStyle = 'white';
      context.beginPath();
      context.arc(x, y, this.radius, 0, 2 * Math.PI);
      context.fill();
    }
  }

  // game loop
  let last;
  let dt;
  function loop(timestamp) {
    requestAnimationFrame(loop);
    context.clearRect(0,0,canvas.width,canvas.height);

    // calculate the time difference since the last update. requestAnimationFrame
    // passes the current timestamp as a parameter to the loop
    if (!last) {
      last = timestamp;
    }
    dt = timestamp - last;
    last = timestamp;

    // update and render everything in the grid
    for (let row = 0; row < numRows; row++) {
      for (let col = 0; col < numCols; col++) {
        switch(cells[row][col]) {
          case types.wall:
            context.drawImage(wallCanvas, col * grid, row * grid);
            break;
          case types.softWall:
            context.drawImage(softWallCanvas, col * grid, row * grid);
            break;
        }
      }
    }

    // update and render all entities
    entities.forEach((entity) => {
      entity.update(dt);
      entity.render();
    });

    // remove dead entities
    entities = entities.filter((entity) => entity.alive);

    player.render();
  }

  // listen to keyboard events to move the snake

  document.getElementById('_joyLeft').addEventListener('mousedown', function() {
    console.log("moving");
    
    let row = player.row;
    let col = player.col;
    
  // left arrow key
  if (blueLeft == true) {
    col--;
    console.log("left");
  }
  // up arrow key
  else if (blueUp == true) {
    row--;
    console.log("up");
  }
  // right arrow key
  else if (blueRight == true) {
    col++;
    console.log("right");
  }
  // down arrow key
  else if (blueDown == true) {
    row++;
    console.log("down");
  }
  // space key (bomb)
  else if (
    blueButton == true && !cells[row][col] &&
    // count the number of bombs the player has placed
    entities.filter((entity) => {
      return entity.type === types.bomb && entity.owner === player
    }).length < player.numBombs
  ) {
    // place bomb
    const bomb = new Bomb(row, col, player.bombSize, player);
    entities.push(bomb);
    cells[row][col] = types.bomb;
  }

  // don't move the player if something is already at that position
  if (!cells[row][col]) {
    player.row = row;
    player.col = col;
  }
  });

  // start the game
  generateLevel();
  requestAnimationFrame(loop);
  }
