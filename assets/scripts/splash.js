let splashView = document.querySelector('.splash-main');
let splash = document.getElementById('splash');
let main = document.getElementById('main');
splash.addEventListener('click', () => {
    splashView.classList.add('hideSplash')
    main.classList.remove('hideSplash')
})
