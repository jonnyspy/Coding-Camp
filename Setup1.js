
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
