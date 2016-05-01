/* eslint-disable import/no-unresolved */
import 'pixi';
import 'p2';
import Phaser from 'phaser';
import Boot from './states/Boot';
import Loader from './states/Loader';
import Main from './states/Main';
import './Game.css';


class Game extends Phaser.Game {

    constructor() {
        super(800, 600, Phaser.AUTO, 'app', null);
        this.state.add('boot', Boot, false);
        this.state.add('loader', Loader, false);
        this.state.add('main', Main, false);
        this.state.start('boot');
    }
}

new Game();
