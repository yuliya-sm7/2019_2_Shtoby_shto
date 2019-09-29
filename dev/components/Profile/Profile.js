import {doPut} from '../../modules/ajax';
import {getCookie} from "../../modules/cookies_util";
import {isCorrectName, isCorrectPassword} from "../../modules/validation";

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

  const username = document.getElementById('username');
  username.value=getCookie('login');

  const password = document.getElementById('password');
  password.value = getCookie('password');

  const button = document.getElementsByClassName('saveButton')[0];

  button.addEventListener('click', () => {
    const newName = document.getElementById('username');
    const newPassword = document.getElementById('password');

    const userId = getCookie('user_id');

    const checkPassword = isCorrectPassword(password, password);
    const checkName = isCorrectName(name);

    if (checkName.status && checkPassword.status){
    doPut(`/user/${userId}`, {'user': newName.value, 'password': newPassword.value})
        .then((response) => {
          if (response.status !== 200)
            alert(response.message);
          else {
            location.href = '#/';
          }
        }).catch((response) => {
          alert(`ошибка:${response}`);
        });
  } else{
    alert("Invalid data!")
    }
  });
}
