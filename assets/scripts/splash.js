let splash = document.querySelector('.splash-screen');
let main = document.getElementById('main');
splash.addEventListener('click', () => {
    splash.classList.add('hideSplash')
    main.classList.remove('hidden')
})
