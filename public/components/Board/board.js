const template = require('./board.pug');
/**
 * Генерирует Канбан-доску
 */
export function createBoard() {
  const html = template();
  const application = document.getElementById('application');
  application.innerHTML = html;
}
