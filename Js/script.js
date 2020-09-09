const target = document.querySelectorAll('[data-anime]');
const targetPhoto = document.querySelector('[data-photo]')
const animationClass = 'animate'

const animarScroll = () => {
    const windowTop = window.pageYOffset + ((window.innerHeight * 3) / 4);
    target.forEach(function(elemento) {
        if(windowTop > elemento.offsetTop) {
            elemento.classList.add(animationClass);
        } else {
            elemento.classList.remove(animationClass)
        }
    })
}

setTimeout(function() {
    targetPhoto.classList.add(animationClass);
}, 500)

if (target.length) {
    window.addEventListener('scroll', function() {
        animarScroll();
    })
}