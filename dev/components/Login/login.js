import {checkEmail} from '../../modules/validation.js';
import {checkPassword} from '../../modules/validation.js';
import {checkName} from '../../modules/validation.js';
import {doPost} from '../../modules/ajax.js';
import {createBoard} from '../Board/board.js';

const template = require('./login.pug');

import {getCookie, setCookie, deleteCookie} from '../../modules/cookies_util';

/**
 * Генерирует страницу регистрации
 */
export function reg() {
    const application = document.getElementById('application');
    application.innerHTML = template();

    const formIn = document.getElementById('in');
    formIn.addEventListener('submit', (e) => {
        e.preventDefault();
        const email = formIn.elements['email'].value;
        const password = formIn.elements['password'].value;
        if (checkEmail(email) && checkPassword(password, password)) {
            doPost('/login', {'login': email, 'password': password})
                .then((response) => {
                    if (response.status !== 200) {
                        alert(response.message);
                    } else {
                        setCookie('user_id', response.user.id);
                        setCookie('login', response.user.login);
                        setCookie('password', response.user.password);
                        createBoard();
                    }
                }).catch(() => {
                console.log('login unsuccesful');
            });
        } else {
            const area = document.getElementsByClassName('errorArea').item(0);
            area.innerText = "Некорректная почта или пароль!";
        }
    });

    const formUp = document.getElementById('up');
    formUp.addEventListener('submit', (e) => {
        e.preventDefault();
        const email = formUp.elements['email'].value;
        const password = formUp.elements['password'].value;
        const name = formUp.elements['name'].value;
        if (checkEmail(email) && checkPassword(password, password) && checkName(name)) {
            doPost('/registration', {'login': email, 'password': password})
                .then((response) => {
                    setCookie('user_id', response.user.id);
                    setCookie('login', response.user.login);
                    setCookie('password', response.user.password);
                    createBoard();
                })
                .catch(() => {
                    alert('такой пользователь мол есть уже');
                });
        } else {
            const area = document.getElementsByClassName('errorArea').item(1);
            area.innerText = "Некорректный ввод!";
        }
    });

    // украшение
    document.querySelector('.img__btn').addEventListener('click', function () {
        document.querySelector('.cont').classList.toggle('s--signup');
    });
}
