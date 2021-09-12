let Randommizer = () => Math.round(Math.random() * 255);
function ball() {
    let t = 0;
    let l = 0;
    t = Math.round(Math.random() * (window.innerHeight - 200));
    l = Math.round(Math.random() * (window.innerWidth - 200));
    $('.circle').animate({
        top: `${t}px`,
        left: `${l}px`,
        borderColor: `rgb(${Randommizer()}, ${Randommizer()}, ${Randommizer()})`
    }, 1000, 'easeInOutExpo')
}
function color() {
    $('.circle').animate({
        backgroundColor: `rgb(${Randommizer()}, ${Randommizer()}, ${Randommizer()})`
    }, 500)
}
$(function () {
    let disco;
    let discoC;
    $(document).ready(function(){
        disco = setInterval(ball, 500);
        discoC = setInterval(color, 500);
    })
       
    
})