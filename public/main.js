import {
    reg
} from './components/Login/login.js'

const application = document.getElementById('application');

const login = document.createElement('button');
login.textContent = 'Залогинься!';
login.type = 'button';
login.className = 'submit';
login.addEventListener('click', reg);

const screen = document.createElement('img');
screen.src = "hero-a.svg";

application.appendChild(login);
application.appendChild(screen);
