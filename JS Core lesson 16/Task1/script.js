$(function () {
    $('.circle').on('click', function () {
        let t = 0;
        let l = 0;
        let w = 0;
        let h = 0;
        let r = 0;
        let g = 0;
        let b = 0;
        t = Math.round(Math.random() * (window.innerHeight - 200));
        l = Math.round(Math.random() * (window.innerWidth - 200));
        w = Math.round(Math.random() * 200) + 20;
        h = Math.round(Math.random() * 200) + 20;
        r = Math.round(Math.random() * 255);
        g = Math.round(Math.random() * 255);
        b = Math.round(Math.random() * 255);
        $(this).animate({
            top: `${t}px`,
            left: `${l}px`,
            width: `${w}px`,
            height: `${h}px`,
            backgroundColor: `rgb(${r}, ${g}, ${b})`
        },1000)

    })

})