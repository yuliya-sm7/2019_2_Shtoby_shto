/**
 * Проверяет коректность ника
 * @param {String} nickname
 * @return {boolean} validate
 */
export function checkName(nickname = '') {
  return nickname.match(/^[a-zA-Z][a-zA-Z0-9_.,-]{4,14}$/);
}

/**
 * Проверяет коректность почты
 * @param {String} email
 * @return {boolean} validate
 */
export function checkEmail(email = '') {
  return email.match(
      /^([a-z0-9_\\-]+\.)*[a-z0-9_\\-]+@([a-z0-9][a-z0-9\\-]*[a-z0-9]\.)+[a-z]{2,4}$/i,
  );

}

/**
 * Проверяет коректность пароля
 * @param {String} password1 Пароль
 * @param {String} password2 И его повторение
 * @return {boolean} validate
 */
export function checkPassword(password1 = '', password2 = '') {
  return password1.length >= 6 && password1 === password2;
}
