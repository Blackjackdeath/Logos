let a = 0;
let b = 0;
let c = 0;
$(function () {
    $('.box').each(function (index, element) {
        $(element).on('click', function () {
            $('.modalWindow').addClass('active')
            $(this).css({
                opacity: 0
            })
            a = $(this).offset().top;
            b = $(this).offset().left;
            c=index+1;
            $('.modalBox').css({
                top: a,
                left: b,
                backgroundColor: $(this).css('background-color'),
                display: 'block'
            }).animate({
                width: '300px',
                height: '300px',
                top: (window.innerHeight - 300) / 2,
                left: (window.innerWidth - 300) / 2
            }, 2000, 'linear')
        })
    })
    $('.modalBox').on('click', function () {
        $(this).animate({
            width: '150px',
            height: '150px',
            top: a,
            left: b
        }, 2000, 'linear', function () {
            $('.modalWindow').removeClass('active');
            $(this).css({
                display: 'none'
            })
            $(`.box:nth-of-type(${c})`).css({
                opacity: 1
            })
        })
        
    })

})