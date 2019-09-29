const template = require('./headMenu.pug');

export function createHeader() {
    const headerContent = document.getElementById('header');
    headerContent.innerHTML = template();
}