
//variables
PImage playerSprite;

var room = 0;
var blockSize = 8;

var playerX = 0;
var playerY = 0;
var playerXSpeed = 0;
var playerYSpeed = 0;
var keys = [];

var AIR = 0;
var PORTAL = 100;
var WATER = 50;

var portalLocations = [];

var isOnGround = true;

void setup() {
	size(1000,512);
	
	//load images
	playerSprite = loadImage("Sprites/Player");
	
}

void keyPressed() {
	keys[keyCode] = true;
}
void keyReleased() {
	keys[keyCode] = false;
}

//rooms fields here
var rooms = [
	[[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,100,0],[0,1,0,0],[1,1,1,1]],
	[],
	[],
	[],
	[],
	[],
	[],
	[],
	[],
	[],
	[],
	[],
	[],
	[],
	[],
	[],
];

//current room field
var field = [];

function drawPlayer() {
	fill(255,0,0);
	rect(playerX,playerY,blockSize,blockSize);
	//image(playerSprite,playerX,playerY,blockSize,blockSize)
	
	playerX += playerXSpeed;
	playerY += playerYSpeed;
	playerYSpeed += 0.1
	
	if (keys[RIGHT]) {
		playerXSpeed += 0.1;
	}
	if (keys[LEFT]) {
		playerXSpeed -= 0.1;
	}
	if (keys[UP] && isOnGround) {
		playerYSpeed -= 3;
	}
	
	
	if (playerYSpeed > 0) {
		var playerXBlock = round(playerX/blockSize);
		var playerYBlock = round(playerY/blockSize);
		
		if (field[playerYBlock+1][playerXBlock] != AIR) {
			playerYSpeed = 0;
			playerY = playerYBlock*blockSize;
			isOnGround = true;
		}
		
	}
	else{
		isOnGround = false;
	}
	
	if (playerXSpeed > 0) {
		var playerXBlock = round((playerX+blockSize/2)/blockSize);
		var playerYBlock = round(playerY/blockSize);
		
		if (field[playerYBlock][playerXBlock] != AIR) {
			playerXSpeed = 0;
			playerX = playerXBlock*blockSize-blockSize;
		}
		
	}
	
	if (playerXSpeed < 0) {
		var playerXBlock = round((playerX-blockSize/2)/blockSize);
		var playerYBlock = round(playerY/blockSize);
		
		if (field[playerYBlock][playerXBlock] != AIR) {
			playerXSpeed = 0;
			playerX = playerXBlock*blockSize+blockSize;
		}
		
	}

	
	
};
function drawBlock(type,x,y) {
	switch(type) {
		case AIR:
			noStroke();
			fill(100,150,255);
			rect(x*blockSize,y*blockSize,blockSize,blockSize);
		break;
		
		case 1:
			noStroke();
			fill(100,100,100);
			rect(x*blockSize,y*blockSize,blockSize,blockSize);
		break;
	}
}
draw = function() {
	background(0,0,0);
	
	field = rooms[room];
	
	for(var i = 0; i < field.length; i += 1) {
		for(var j = 0; j < field[i].length; j += 1) {
			drawBlock(field[i][j],j,i);
			if (field[i][j] == PORTAL) {
				portalLocations[portalLocations.length] = [i*blockSize,j*blockSize];
			}
		}
	}
	
	for(var i = 0; i < portalLocations.length; i += 1) {
		for(var j = 0; j < portalLocations.length; j += 1) {
			if (i == j) {
				//portalLocations.remove(j);
			}
		}
	}
	

	drawPlayer();
	
};