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