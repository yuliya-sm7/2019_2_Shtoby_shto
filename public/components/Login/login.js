import {isCorrectEmail} from '../../modules/validation.js';
import {isCorrectPassword} from '../../modules/validation.js';
import {isCorrectName} from '../../modules/validation.js';
import {doPost} from '../../modules/ajax.js';
import {createBoard} from '../../components/Board/board.js';

const template = require('./login.pug');

/**
 * Генерирует страницу регистрации
 */
export function reg() {
    const application = document.getElementById('application');
    application.innerHTML = template();

    const formIn = document.getElementById('in');
    formIn.addEventListener('submit', function (e) {
        e.preventDefault();
        const email = formIn.elements['email'].value;
        const password = formIn.elements['password'].value;
        const checkEmail = isCorrectEmail(email);
        const checkPassword = isCorrectPassword(password, password);
        if (checkEmail.status && checkPassword.status) {
            doPost('/registration', {'login': email, 'password': password})
                .then((response) => {
                    if (response.status !== 200) {
                        alert(response.message);
                    } else createBoard()
                })
                .catch(() => createBoard()); // временно
        } else {
            const area = document.getElementsByClassName('errorArea').item(0);
            area.innerText = [checkEmail.err, checkPassword.err].join(' ');
        }
    });

    const formUp = document.getElementById('up');
    formUp.addEventListener('submit', function (e) {
        e.preventDefault();
        const email = formUp.elements['email'].value;
        const password = formUp.elements['password'].value;
        const name = formUp.elements['name'].value;
        const checkEmail = isCorrectEmail(email);
        const checkPassword = isCorrectPassword(password, password);
        const checkName = isCorrectName(name);
        if (checkEmail.status && checkPassword.status && checkName.status) {
            doPost('/registration', {'login': email, 'password': password, 'name': name})
                .then(() => createBoard())
                .catch(() => createBoard()); // временно
        } else {
            const area = document.getElementsByClassName('errorArea').item(1);
            area.innerText = [checkEmail.err, checkPassword.err, checkName.err]
                .join(' ');
        }
    });

    // украшение
    document.querySelector('.img__btn').addEventListener('click', function () {
        document.querySelector('.cont').classList.toggle('s--signup');
    });
}
