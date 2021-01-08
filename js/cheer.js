
const play = document.querySelector('#cta');

const svgContainer = document.getElementById('svg-cheer');
const animItem = bodymovin.loadAnimation({
    wrapper: svgContainer,
    animType: 'svg',
    loop: false,
    autoplay: false,
    path: './assets/cheer.json'
});

play.addEventListener('click', () => {
    svgContainer.classList.remove('hide');
    animItem.goToAndPlay(0,true);
})

animItem.addEventListener('complete', () => {
    svgContainer.classList.add('hide');
    
})