// import {reg} from './components/Login/login.js';
// import {viewPUG} from './components/PUG/viewPug.js';
// import {createBoard} from './components/Board/board.js';
// import {profile} from "./components/Profile/profile.js";

import Utils from './components/services/Utils.js'

const routes = {
  // '/': reg,
  // '/profile': profile,
  // '/pug': viewPug,
};

const router = async () => {
  // const header
  const content = document.getElementById('application');
  const request = Utils.parseRequestUrl();
  const parsedURL = (request.resource ? '/' + request.resource : '/');

  const page = routes[parsedURL];
  page(content);
};

const hashRouter = async () => {
  console.log('hash changed');
  router();
};

window.addEventListener('hashchange', hashRouter);

window.addEventListener('load', router);
