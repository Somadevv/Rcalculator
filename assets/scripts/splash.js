let splash = document.querySelector('.splash-screen');
let main = document.getElementById('main');
splash.addEventListener('click', () => {
    console.log('asd')
    splash.classList.add('hideSplash')
    main.classList.remove('hidden')
})
