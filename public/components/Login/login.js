import {isCorrectEmail} from '../../modules/validation.js';
import {isCorrectPassword} from '../../modules/validation.js';
import {isCorrectName} from '../../modules/validation.js';
import {doPost} from '../../modules/ajax.js';
import {createBoard} from '../../components/Board/board.js';

/**
 * Генерирует страницу регистрации
 */
export function reg() {
  const application = document.getElementById('application');
  application.innerHTML = '';
  const cont = document.createElement('div');
  cont.className = 'cont';
  application.appendChild(cont);

  const signin = ` 
    <div class="form sign-in">
        <h2>С возвращением,</h2>
        <form id="in">
            <label>
                <span>Email</span>
                <input name="email" type="email" value="aaa@mail.ru" />
            </label>
            <label>
                <span>Password</span>
                <input name="password" type="password" value="qwerty"/>
            </label>
        </form>
        <p class="forgot-pass">Забыли пароль? Ничем не можем вам помочь</p>
        <div class="errorArea"></div>
        <button type="submit" form="in">Войти</button>
        <button class="vk-btn">Войти через <span>ВКонтакте</span></button>
    </div>`;

  const image = `
        <div class="bmstu">
            <div class="img__text m--up">
                <h2>Первый раз?</h2>
                <p>Зарегистрируйтесь и откройте для себя
                 множество новых возможностей!</p>
            </div>
            <div class="img__text m--in">
                <h2>Один из нас?</h2>
                <p>Если у вас уже есть аккаунт, 
                просто войдите в систему. 
                Мы скучали по вам!</p>
            </div>
            <div class="img__btn">
                <span class="m--up">Регистрация</span>
                <span class="m--in">Вход</span>
            </div>
        </div>`;

  const signup = `
    <div class="form sign-up">
        <h2>Время почувствовать себя как дома,</h2>
        <form id="up">
            <label>
                <span>Ваше имя</span>
                <input name="name" type="text"/>
            </label>
            <label>
                <span>Email</span>
                <input name="email" type="email"/>
            </label>
            <label>
                <span>Password</span>
                <input name="password" type="password"/>
            </label>
        </form>
        <div class="errorArea"></div>
        <button type="submit" form="up">Зарегистрироваться</button>
        <button class="vk-btn">Связать с аккаунтом 
            <span>ВКонтакте</span>
        </button>
    </div>`;

  cont.innerHTML = signin + `<div class="sub-cont">` +
        image + signup + `</div>`;

  const formIn = document.getElementById('in');
  formIn.addEventListener('submit', function(e) {
    e.preventDefault();
    const email = formIn.elements['email'].value;
    const password = formIn.elements['password'].value;
    const checkEmail = isCorrectEmail(email);
    const checkPassword = isCorrectPassword(password, password);
    if (checkEmail.status && checkPassword.status) {
      doPost('/signin', {email, password})
          .then(()=>createBoard())
          .catch(()=>createBoard()); // временно
    } else {
      const area = document.getElementsByClassName('errorArea').item(0);
      area.innerText = [checkEmail.err, checkPassword.err].join(' ');
    }
  });

  const formUp = document.getElementById('up');
  formUp.addEventListener('submit', function(e) {
    e.preventDefault();
    const email = formUp.elements['email'].value;
    const password = formUp.elements['password'].value;
    const name = formUp.elements['name'].value;
    const checkEmail = isCorrectEmail(email);
    const checkPassword = isCorrectPassword(password, password);
    const checkName = isCorrectName(name);
    if (checkEmail.status && checkPassword.status && checkName.status) {
      doPost('/signup', {email, password, name})
          .then(createBoard())
          .catch(()=>createBoard()); // временно
    } else {
      const area = document.getElementsByClassName('errorArea').item(1);
      area.innerText = [checkEmail.err, checkPassword.err, checkName.err]
          .join(' ');
    }
  });

  // украшение
  document.querySelector('.img__btn').addEventListener('click', function() {
    document.querySelector('.cont').classList.toggle('s--signup');
  });
}
