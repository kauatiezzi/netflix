//variaveis de contagem da direção

var num = 300;
var num2 = 300;

//slide do botão direito

var btnRight = document.getElementById('btnright');

btnRight.addEventListener('click', () => {

    var limi = document.getElementById('limitador').getBoundingClientRect().left;

    var limit = Math.round(limi);

    var er = document.getElementById('btnright').getBoundingClientRect().left;

    var ref = Math.round(er);

    var slideContainer = document.getElementById('container');

    var carrossel = document.getElementById('carrossel');


    if (limit > ref) {

        slideContainer.style.transform = 'translateX(-' + num + 'px)';

        num = num + 300;

        num2 = num2 - 300;

    } else {

        var stoped = ref * slideContainer.clientWidth / carrossel.clientWidth - carrossel.clientWidth + 100;

        var stopedRound = Mtah.round(stoped);

        slideContainer.style.transform = 'translateX(-' + stopedRound + 'px)';


    }


});


//slide botão esquerdo

var btnLeft = document.getElementById('btnleft');

btnLeft.addEventListener('click', () => {


    var limi = document.getElementById('limitador').getBoundingClientRect().left;

    var limit = Math.round(limi);

    var er = document.getElementById('btnleft').getBoundingClientRect().left;

    var ref = Math.round(er);

    var slideContainer = document.getElementById('container');

    var carrossel = document.getElementById('carrossel');

    var slide = slideContainer.getBoundingClientRect().left;

    if (slide < ref) {

        slideContainer.style.transform = 'translateX(' + num2 + 'px)';

        num = num - 300;
        num2 = num2 + 300;

    } else {

        slideContainer.style.transform = 'translateX(0)';

        num = 300;

    }


});

document.addEventListener('DOMContentLoaded', () => {
    const startDate = new Date('2024-10-07T23:00:00'); // Ajuste para a data inicial do relacionamento
    const counterElement = document.getElementById('timeTogether');

    function updateCounter() {
        const now = new Date();
        const diff = now - startDate;

        const days = Math.floor(diff / (1000 * 60 * 60 * 24));
        const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
        const minutes = Math.floor((diff / (1000 * 60)) % 60);
        const seconds = Math.floor((diff / 1000) % 60);

        counterElement.textContent = `${days} dias, ${hours} horas, ${minutes} minutos e ${seconds} segundos`;
    }

    updateCounter();
    setInterval(updateCounter, 1000);
});
