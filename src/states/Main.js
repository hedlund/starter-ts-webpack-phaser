import { State, Filter } from 'phaser';
import fragmentSrc from '../shaders/cubething.frag';

/**
 * The Main state is where the acyual game should begin.
 * In this simple example we're jst displaying a Phaser logo.
 */
class Main extends State {

    create() {
        // Create a filter containing the frament shader
        this.filter = new Filter(this.game, null, fragmentSrc);
        this.filter.setResolution(this.world.width, this.world.height);

        // Add a sprite for the shader effect
        const sprite = this.add.sprite();
        sprite.width = 800;
        sprite.height = 600;
        sprite.filters = [ this.filter ];

        // Display the Phaser logo
		const logo = this.add.sprite(this.world.centerX, this.world.centerY, 'phaser');
		logo.anchor.set(0.5);
	}

    update() {
        this.filter.update();
    }
}

export default Main;
