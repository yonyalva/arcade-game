// Enemies our player must avoid
var Enemy = function(sprite, x, y, speed) {
    // Variables applied to each of our instances go here,
    // we've provided one for you to get started

    // The image/sprite for our enemies, this uses
    // a helper we've provided to easily load images
    this.sprite = sprite;
    this.x = x;
    this.y = y;
	this.speed = speed;
};

// Update the enemy's position, required method for game
// Parameter: dt, a time delta between ticks
Enemy.prototype.update = function(dt) {
	this.x += this.speed;
   if (this.x > 500) {
     this.x = -20;
   }
    // You should multiply any movement by the dt parameter
    // which will ensure the game runs at the same speed for
    // all computers.
};

// Draw the enemy on the screen, required method for game
Enemy.prototype.render = function() {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};

// Now write your own player class
var Player = function() {
 this.sprite = 'images/char-cat-girl.png';
 this.x = 202;
 this.y = 415;
};
Player.prototype.update = function(dt) {
	if (this.x > 400) {
     this.x = 400;
   }
   if (this.x < 0) {
     this.x = 0;
   }
   if (this.y > 450) {
     this.y = 450;
   }
   if (this.y < 0 ) {
	   this.y = 0;
	popopModule()
   }
};
Player.prototype.render = function() {
 ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};
Player.prototype.handleInput = function (dt) {
 switch (dt) {
   case "up":
     this.y -= 50;
     break;
   case "down":
     this.y += 50;
     break;
   case "left":
     this.x -= 50;
     break;
   case "right":
     this.x += 50;
     break;
 }
};
// This class requires an update(), render() and
// a handleInput() method.


// Now instantiate your objects.
// Place all enemy objects in an array called allEnemies

const enemy1 = new Enemy ('images/char-horn-girl.png',100,70,1);
const enemy2 = new Enemy ('images/Rock.png',-150,145,1);
const enemy3 = new Enemy ('images/enemy-bug.png',0,240,3);
const enemy4 = new Enemy ('images/enemy-bug.png',-200,70,3);
const enemy5 = new Enemy ('images/char-horn-girl.png',-250,240,2);
const enemy6 = new Enemy ('images/enemy-bug.png',50,145,3);
let allEnemies = [enemy1, enemy2, enemy3, enemy4, enemy5, enemy6];
// Place the player object in a variable called player
var player = new Player();

// This listens for key presses and sends the keys to your
// Player.handleInput() method. You don't need to modify this.
document.addEventListener('keyup', function(e) {
    var allowedKeys = {
        37: 'left',
        38: 'up',
        39: 'right',
        40: 'down'
    };

    player.handleInput(allowedKeys[e.keyCode]);
});

// check collisions function
function checkCollisions(){
	
 allEnemies.forEach(function(enemy) {

if ((player.x < enemy.x + 70) &&
   (player.x + 70 > enemy.x) &&
   (player.y < enemy.y + 70) &&
	  (70 + player.y > enemy.y)){

		player.x = 202;
		player.y =415;
	  }
	  });
}

// popop modal code

// Get the modal
const modal = document.getElementById('myModal');


// When the user wins, open the modal 
function popopModule() {
    modal.style.display = "block";
	document.querySelector(".button").focus();
}

// button that closes the modal
const btn = document.querySelector(".button");

// When the user clicks the button, close the modal 
btn.onclick = function() {
    modal.style.display = "block";
	location.reload();
}

