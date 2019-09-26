import compileFileClient from 'pug';
/**
 * Генерирует Канбан-доску
 */
export function createBoard() {
  const html = compileFileClient('board.pug', {name: 'Aaaaaaaa'});
  const application = document.getElementById('application');
  application.innerHTML = html;
}
