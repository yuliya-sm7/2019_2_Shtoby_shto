/**
 * Проверяет коректность ника
 * @param {String} nickname
 * @return {Object.<boolean, error>} validate
 */
export function isCorrectName(nickname = '') {
  if (!nickname.match(/^[a-zA-Z][a-zA-Z0-9_.,-]{4,14}$/)) {
    return {status: false, err: 'Используйте только латинские буквы и цифры!'};
  }
  return {status: true, err: ''};
}

/**
 * Проверяет коректность почты
 * @param {String} email
 * @return {Object.<boolean, error>} validate
 */
export function isCorrectEmail(email = '') {
  if (
    !email.match(
        /^([a-z0-9_\\-]+\.)*[a-z0-9_\\-]+@([a-z0-9][a-z0-9\\-]*[a-z0-9]\.)+[a-z]{2,4}$/i,
    )
  ) {
    return {status: false, err: 'Некорректная почта!'};
  }
  return {status: true, err: ''};
}

/**
 * Проверяет коректность пароля
 * @param {String} password1 Пароль
 * @param {String} password2 И его повторение
 * @return {Object.<boolean, error>} validate
 */
export function isCorrectPassword(password1 = '', password2 = '') {
  if (password1 !== password2) {
    return {status: false, err: 'Пароли не совпадают!'};
  }
  if (password1.length < 6) {
    return {status: false, err: 'Пароль слишком короткий!'};
  }
  return {status: true, err: ''};
}
