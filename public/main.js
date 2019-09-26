import {
  reg,
} from './components/Login/login.js';

const application = document.getElementById('application');

const col = document.createElement('div');
col.innerHTML = `
<div class="row">
    <div class="column" id="col1"></div>
    <div class="column" id="col2"></div>
</div>`;

application.appendChild(col);
const left = document.getElementById('col1');
const right = document.getElementById('col2');

const login = document.createElement('button');
login.textContent = 'Залогинься и все увидишь';
login.type = 'button';
login.addEventListener('click', reg);

const screen = document.createElement('img');
screen.src = 'img/hero-a.svg';

const description = document.createElement('div');
description.innerHTML = '<h1>Мы создали</h1> <h1>Чтобы что</h1>';

left.appendChild(screen);
right.appendChild(description);
right.appendChild(login);
