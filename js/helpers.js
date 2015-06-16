// Helper functions

// Screen
function Screen(width, height) {
	this.canvas = document.createElement("canvas");
	this.canvas.width = this.width = width;
	this.canvas.height = this.height = height;
	this.ctx = this.canvas.getContext("2d");

	document.body.appendChild(this.canvas);
};

Screen.prototype.drawSprite = function(sp, x, y) {
	this.ctx.drawImage(sp.image, sp.x, sp.y, sp.w, sp.h, x, y, sp.w, sp.h);
};

// Sprite
function Sprite(img, x, y, w, h) {
	this.img = img;
	this.x = x;
	this.y = y;
	this.w = w;
	this.h = h;
};


// InputHandler
function InputHandler() {
	this.down = {};
	this.pressed = {};

	var _this = this;
	document.addEventListener("keydown")
};

InputHandler.prototype.isDown = function(code) {

};

InputHandler.prototype.isPressed = function(code) {

};