$('.nav-right a').click(function(){
   $(this).parent().siblings().children('.menu').hide()
   $(this).siblings().toggle()
})
