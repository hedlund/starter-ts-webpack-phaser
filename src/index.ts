import hello from './hello';
import './index.css';

const root: HTMLElement = document.getElementById('app');
root.appendChild(hello());
