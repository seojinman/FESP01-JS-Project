import app from './app.js';
const root = document.querySelector('#root');

root.appendChild(await app());
console.log('TODO App', location.href);