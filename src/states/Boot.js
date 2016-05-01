import { State, ScaleManager } from 'phaser';

/**
 * The Boot state is responsible for preloading the loadbar, and then configure the global settings.
 */
class Boot extends State {

    preload() {
        this.load.image('loadbar', 'images/loadbar.png');
    }

    create() {
        // Set the background color
        this.stage.backgroundColor = '#000';

		// Prevent the browser from pausing the game (and it's timers) if the tab loses focus
		this.stage.disableVisibilityChange = true;

		// Scale on all devices
		this.scale.pageAlignHorizontally = true;
		this.scale.pageAlignVertically = true;
		this.scale.scaleMode = ScaleManager.SHOW_ALL;

		// Other typical settings
		//this.stage.scale.minWidth = 480;
		//this.stage.scale.minHeight = 260;
		//this.stage.scale.maxWidth = 1024;
		//this.stage.scale.maxHeight = 768;
		//this.stage.scale.forceLandscape = true;
		//this.stage.scale.setScreenSize(true);
		//this.input.maxPointers = 1;

        // If we're in development mode add the phase-debug plugin
        if (process.env.NODE_ENV === 'development') {
            const Debug = require('phaser-debug');
            this.add.plugin(Debug);
        }

		// Start the loader state
		this.game.state.start('loader');
    }
}

export default Boot;
