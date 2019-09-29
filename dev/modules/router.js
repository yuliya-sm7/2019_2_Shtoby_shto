import {profile} from "../components/Profile/Profile";
import {viewPUG} from "../components/PUG/viewPug";
import {reg} from "../components/Login/login";
import {createBoard} from "../components/Board/board";
import Utils from "../components/services/Utils";
import {viewMain} from "../components/Main/main";

const routes = {
    '/': viewMain,
    '/profile': profile,
    '/pug': viewPUG,
    '/login': reg,
    '/board': createBoard
};

export const router = async () => {
    const content = document.getElementById('application');
    const request = Utils.parseRequestUrl();
    const parsedURL = (request.resource ? '/' + request.resource : '/');

    const page = routes[parsedURL];
    page();
};

export const hashRouter = async () => {
    console.log('hash changed');
    await router();
};