$('.nav-right a').click(function(){
   $(this).parent().siblings().children('.menu').hide()
   console.log($(this).parent().siblings().children('.menu'))
   $(this).siblings('.menu').toggle()
})
