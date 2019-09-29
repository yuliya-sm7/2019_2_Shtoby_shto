import {hashRouter, router} from '../dev/modules/router.js';
import {createHeader} from '../dev/components/Header/headMenu.js';


document.addEventListener('DOMContentLoaded', start);

function start() {
  createHeader();
  window.addEventListener('hashchange', hashRouter);
  window.addEventListener('load', router);
}
