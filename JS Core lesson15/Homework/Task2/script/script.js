$(document).ready(function(){
   let s='';
   s=$('#s1').text()+$('b.s2').text()+$('#second i').text()+$('q[title]').text()+$('a[target="_blank"]').text()+$('span.extra:odd').text();
   alert(s);
})
