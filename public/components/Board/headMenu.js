const application = document.getElementById('application');

const leftHeadMenuItems={
    home: `Домой`,
    create: `Создать`,
};

const rightHeadMenuItems={
    profile: `Профиль`,
    notifications: `Уведомления`,
    info: `Информация`,
    mainPage: `Trello`,
};

function createHeadMenu() {
    application.innerHTML='';
    application.id = "header";
    application.style = "line-height: 50px";

    Object.keys(leftHeadMenuItems).forEach(function (key) {
        const headMenuItem = document.createElement('a');
        headMenuItem.textContent = leftHeadMenuItems[key];
        headMenuItem.href = `/${key}`;
        headMenuItem.dataset.section = key;

        application.appendChild(headMenuItem);
    });
    Object.keys(rightHeadMenuItems).forEach(function (key) {
        const headMenuItem = document.createElement('a');
        headMenuItem.style = "float: right";
        headMenuItem.textContent = rightHeadMenuItems[key];
        headMenuItem.href = `/${key}`;
        headMenuItem.dataset.section = key;

        application.appendChild(headMenuItem);
    });
}

createHeadMenu();