import {checkEmail} from '../../modules/validation.js';
import {checkPassword} from '../../modules/validation.js';
import {checkName} from '../../modules/validation.js';
import {doPost} from '../../modules/ajax.js';
import {createBoard} from '../Board/board.js';

const template = require('./login.pug');

// import {getCookie, setCookie, deleteCookie } from '../../modules/cookies_util';

/**
 * Генерирует страницу регистрации
 */
export function reg() {
  const application = document.getElementById('application');
  application.innerHTML = template();

  const formIn = document.getElementsByTagName('form')[0];
  formIn.addEventListener('submit', (e) => {
    e.preventDefault();
    const email = formIn.elements['email'].value;
    const password = formIn.elements['password'].value;
    const area = document.getElementsByClassName('errorArea').item(0);

    if (checkEmail(email) && checkPassword(password, password)) {
      doPost('/login', {'login': email, 'password': password})
          .then((response) => {
            if (response.status !== 200) {
              area.innerText = response.message;
            } else {
              // setCookie('user_id', response.user.id);
              // setCookie('login', response.user.login);
              // setCookie('password', response.user.password);
              createBoard();
            }
          }).catch(() => {
            console.log('login unsuccesful');
          });
    } else {
      area.innerText = 'Некорректная почта или пароль!';
    }
  });

  const formUp = document.getElementsByTagName('form')[1];;
  formUp.addEventListener('submit', (e) => {
    e.preventDefault();
    const email = formUp.elements['email'].value;
    const password = formUp.elements['password'].value;
    const name = formUp.elements['name'].value;
    const area = document.getElementsByClassName('errorArea').item(1);

    if (checkEmail(email) && checkPassword(password, password) && checkName(name)) {
      doPost('/registration', {'login': email, 'password': password})
          .then((response) => {
            // setCookie('user_id', response.user.id);
            // setCookie('login', response.user.login);
            // setCookie('password', response.user.password);
            createBoard();
          })
          .catch(() => {
              area.innerText = 'такой пользователь мол есть уже';
          });
    } else {
      area.innerText = 'Некорректный ввод!';
    }
  });

  // украшение
  document.querySelector('.img__btn').addEventListener('click', function() {
    document.querySelector('.cont').classList.toggle('s--signup');
  });
}
