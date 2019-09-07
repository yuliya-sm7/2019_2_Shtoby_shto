const title = document.getElementsByTagName('h1')[0];
const button = document.getElementById('butt1');

var state = true

button.addEventListener('click', () => {
    title.innerText = state ? 'goodbye' : "HELLO";
    state = !state;
});
