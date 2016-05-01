import { State } from 'phaser';

/**
 * The Loader state is responsible for preloading all the global assets needed for the game.
 */
class Loader extends State {

    preload() {
        // Setup the preloader sprite
        this.loadbar = this.add.sprite(this.world.centerX, this.world.centerY, 'loadbar');
		this.loadbar.anchor.set(0.5);
        this.load.setPreloadSprite(this.loadbar);

        // Load the actual game assets
        this.load.image('phaser', 'images/phaser.png');
    }

    create() {
        this.game.state.start('main');
    }
}

export default Loader;
