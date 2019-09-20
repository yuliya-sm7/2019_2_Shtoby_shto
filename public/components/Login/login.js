export function reg() {
    application.innerHTML = `
<div class="cont">
    <div class="form sign-in">
        <h2>С возвращением,</h2>
        <label>
            <span>Email</span>
            <input type="email"/>
        </label>
        <label>
            <span>Password</span>
            <input type="password"/>
        </label>
        <p class="forgot-pass">Забыли пароль? Ничем не можем вам помочь</p>
        <button type="button" class="submit">Войти</button>
        <button type="button" class="vk-btn">Войти через <span>ВКонтакте</span></button>
    </div>
    <div class="sub-cont">
        <div class="img">
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
        </div>
        <div class="form sign-up">
            <h2>Время почувствовать себя как дома,</h2>
            <label>
                <span>Ваше имя</span>
                <input type="text"/>
            </label>
            <label>
                <span>Email</span>
                <input type="email"/>
            </label>
            <label>
                <span>Password</span>
                <input type="password"/>
            </label>
            <button type="button" class="submit">Зарегистрироваться</button>
            <button type="button" class="vk-btn">Связать с аккаунтом <span>ВКонтакте</span></button>
        </div>
    </div>
</div>
`;
    document.querySelector('.img__btn').addEventListener('click', function () {
        document.querySelector('.cont').classList.toggle('s--signup');
    });
}