let check=true;
$(document).ready(function(){
    $('.boxPhoneFoneF').slideDown({
        duration:120000,
        progress:function(a,prog,ms){ 
            if ((ms<60000)&(check==true)) {
                check=false;
                 $('.boxPhoneFoneTimerH').text('1');
             }
             if(ms==0){
                $('.boxPhoneFoneTimerH').text('0');
             }
        },
        easing:"linear"
    })
})