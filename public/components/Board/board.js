import {doPost} from "../../modules/ajax";
import {main} from "../../main";
const template = require('./board.pug');

/**
 * Генерирует Канбан-доску
 */
export function createBoard() {
    const html = template();
    const application = document.getElementById('application');
    application.innerHTML = html;
    const logout = document.getElementById('logout');
    logout.addEventListener('click', () => {
      doPost('/logout', {})
          .then(() => main())
    })
}
