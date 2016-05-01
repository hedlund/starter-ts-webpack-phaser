/**
 * The Main state is where the acyual game should begin.
 * In this simple example we're jst displaying a Phaser logo.
 */
class Main extends Phaser.State {

    public create(): void {
        // Display the Phaser logo
        const logo = this.add.sprite(this.world.centerX, this.world.centerY, 'phaser');
        logo.anchor.set(0.5);
    }
}

export default Main;
