import {doPut} from '../../modules/ajax';
import {getCookie} from '../../modules/cookies_util';
import {checkName, checkPassword, checkEmail} from '../../modules/validation';

/**
 * Work with profile
 *
 * @param {Object} app your application
 * @returns {} tabsName some info in header
 */
export function profile() {
  const template = require('./Profile.pug');
  const application = document.getElementById('application');

  application.innerHTML = template();
  application.innerHTML += ` <link rel="stylesheet" href="./Profile.css">`;

  const username = document.getElementById('username');
  username.value=getCookie('login');

  const password = document.getElementById('password');
  password.value = getCookie('password');

  const button = document.getElementsByClassName('saveButton')[0];

  button.addEventListener('click', () => {
    const newName = document.getElementById('username');
    const newPassword = document.getElementById('password');

    const userId = getCookie('user_id');

    const checkPassword = checkPassword(newPassword.value, newPassword.value);
    const checkName = checkEmail(newName.value);

    if (checkName.status && checkPassword.status) {
      doPut(`/user/${userId}`, {'login': newName.value, 'password': newPassword.value})
          .then((response) => {
            if (response.status !== 200) {
              console.log(response.message);
            } else {
              location.href = '#/';
            }
          }).catch((response) => {
            alert(`ошибка:${response}`);
          });
    } else {
      alert(`Invalid data! ${checkName.status ? '' : checkName.err}, ${checkPassword.status ? '' : chechName.err}`);
    }
  });
}
