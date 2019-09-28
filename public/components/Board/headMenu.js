const template = require('./headMenu.pug');

export function createHeader() {
    console.log('creating header')

    const headerContent = document.getElementById('header');
    
    // const leftHeadMenuItems={
    // home: `Домой`,
    // create: `Создать`,
    // };

// const rightHeadMenuItems={
//     profile: `Профиль`,
//     notifications: `Уведомления`,
//     info: `Информация`,
//     mainPage: `Trello`,
//     };

    function createHeadMenu() {
        headerContent.innerHTML = template();
    // headerContent.innerHTML='';
    // headerContent.id = "header";
    // headerContent.style = "line-height: 50px";
    
    // Object.keys(leftHeadMenuItems).forEach(function (key) {
    //     const headMenuItem = document.createElement('a');
    //     headMenuItem.textContent = leftHeadMenuItems[key];
    //     headMenuItem.href = `/#${key}`;
    //     headMenuItem.dataset.section = key;
        
    //     headerContent.appendChild(headMenuItem);
    // });
    // Object.keys(rightHeadMenuItems).forEach(function (key) {
    //     const headMenuItem = document.createElement('a');
    //     headMenuItem.style = "float: right";
    //     headMenuItem.textContent = rightHeadMenuItems[key];
    //     headMenuItem.href = `/#${key}`;
    //     headMenuItem.dataset.section = key;
        
    //     headerContent.appendChild(headMenuItem);
    // });
    }

    createHeadMenu();
}