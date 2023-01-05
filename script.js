function toggleMode(){
    const html = document.documentElement
    html.classList.toggle('light')

    const img = document.querySelector('#profile img')

    if(html.classList.contains('light')) {
         img.setAttribute('src', './assets/avatar-light.png')
         img.setAttribute('alt', 'Foto de Sandro Dionisio, que está usando uma camisa social Branca.')
        } else {
            img.setAttribute('src', './assets/avatar.png')
            img.setAttribute('alt', 'Foto de Sandro Dionisio sorrindo, que está usando um blusao florido.')
    }

}       