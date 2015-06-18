// create and instance of the game class
function Game() {

	// set the initial config
	this.config = {
		gameWidth: 500,
		gameHeight: 300,
		fps: 50
	};

// All state is in the variables below
this.lives = 3;
this.width = 0;
this.height = 0;
this.gameBound = {left: 0, top: 0, right: 0, bottom: 0};

// the state stack
this.stateStack = [];

// Input/output
this.pressedKeys = {};
this.gameCanvas = null;
}

// Initialize the Game with a gameCanvas
Game.prototype.intitialize = function(gameCanvas) {

	// Set the game canvas
	this.gameCanvas = gameCanvas;

	// Set the game width and height
	this.width = gameCanvas.width;
	this.height = gameCanvas.height;

	// Set the state game bounds
	this.gameBounds = {
		left: gameCanvas.width / 2 - this.config.gameWidth / 2,
		right: gameCanvas.width / 2 + this.config.gameWidth / 2,
		top: gameCanvas.height / 2 - this.config.gameHeight / 2,
		bottom: gameCanvas.height / 2 + this.config.gameHeight / 2,
	};
};

Game.prototype.currentState = function() {
	return this.stateStack.length > 0 ? this.stateStack[this.stateStack.length - 1] : null;
};

Game.prototype.moveToState = function(state) {
	// Are we already in a state?
	if(this.currentState()) {

		// Before we pop the current state, see if the state has a leave function. If it does we can call it
		if(this.currentState().leave {
			this.currentState().leave(game);
		}

		this.stateStack.pop();
	}

	// If theres an enter function for the new state, call it.
	if(state.enter) {
		state.enter(game);
	}

	// Set the current state.
	this.stateStack.push(state);
};

Game.prototype.pushState = function (state) {

	// if theres an enter function for the new state, call it.
	if(state.enter) {
		state.enter(game);
	}
	// Set the current state
	this.stateStack.push(state);
	};

Game.prototype.popState = function() {

	// Leave and pop the state.
	if (this.currentState()) {
		if(this.currentState().leave) {
			this.currentState().leave(game);
		}

		// Set the current state.
		this.stateStack.pop();
		}
	}
};

// The main loop
function gameLoop(game) {
	var currentState = game.currentState();
	if (currentState) {

		// Delta t is the time to update/draw
		var dt = 1 / game.config.fps;

		// Get the drawing context.
		var ctx = game.gameCanvas.getcontext("2d");

		// Update if we have an update function. Also draw if we have a draw function
		if(currentState.update) {
			currentState.update(game, dt);
		}
		if (currentState.draw) {
			currentState.draw(game, dt, ctx);
		}
	}
}