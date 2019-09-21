export function reg() {
    const application = document.getElementById('application');
    application.innerHTML = '';
    const cont  = document.createElement('div');
    cont.className = 'cont';
    application.appendChild(cont);

    const signin = ` 
    <div class="form sign-in">
        <h2>С возвращением,</h2>
        <form id="in">
            <label>
                <span>Email</span>
                <input name="email" type="email"/>
            </label>
            <label>
                <span>Password</span>
                <input name="password" type="password"/>
            </label>
        </form>
        <p class="forgot-pass">Забыли пароль? Ничем не можем вам помочь</p>
        <button type="submit" form="in">Войти</button>
        <button class="vk-btn">Войти через <span>ВКонтакте</span></button>
    </div>`;

    const image = `
        <div class="bmstu">
            <div class="img__text m--up">
                <h2>Первый раз?</h2>
                <p>Зарегистрируйтесь и откройте для себя множество новых возможностей!</p>
            </div>
            <div class="img__text m--in">
                <h2>Один из нас?</h2>
                <p>Если у вас уже есть аккаунт, просто войдите в систему. Мы скучали по вам!</p>
            </div>
            <div class="img__btn">
                <span class="m--up">Регистрация</span>
                <span class="m--in">Вход</span>
            </div>
        </div>`;

    const signup = `
    <div class="form sign-up">
        <h2>Время почувствовать себя как дома,</h2>
        <form id="up">
            <label>
                <span>Ваше имя</span>
                <input name="name" type="text"/>
            </label>
            <label>
                <span>Email</span>
                <input name="email" type="email"/>
            </label>
            <label>
                <span>Password</span>
                <input name="password" type="password"/>
            </label>
        </form>
        <button type="submit" form="up">Зарегистрироваться</button>
        <button class="vk-btn">Связать с аккаунтом <span>ВКонтакте</span></button>
    </div>`;

    cont.innerHTML = signin + `<div class="sub-cont">` + image + signup + `</div>`;

    const form = document.getElementById('in');
    form.addEventListener('submit', function(e) {
        e.preventDefault();
        const email = form.elements['email'].value;
        const password = form.elements['password'].value;
        alert("Ждем когда запилится сервер");
/*
        AjaxModule.doPost({
            url: '/signup',
            body: {email, password},
            callback(status, responseText) {
                if (status === 201) {
                    createProfile();
                    return;
                }

                const {error} = JSON.parse(responseText);
                alert(error);
            }
        });
 */
    });

    const form2 = document.getElementById('up');
    form2.addEventListener('submit', function(e) {
        e.preventDefault();
        const email = form2.elements['email'].value;
        const password = form2.elements['password'].value;
        const name = form2.elements['name'].value;
        alert("Ждем когда запилится сервер");
    });

// украшение
    document.querySelector('.img__btn').addEventListener('click', function () {
        document.querySelector('.cont').classList.toggle('s--signup');
    });
}