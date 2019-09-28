import {reg} from './components/Login/login.js';
import {viewPUG} from './components/PUG/viewPug.js';

const template = require('./main.pug');
const application = document.getElementById('application');
const html = template();
application.innerHTML = html;
const login = document.getElementById('login');
login.addEventListener('click', reg);
const mops = document.getElementById('mops');
mops.addEventListener('click', viewPUG);