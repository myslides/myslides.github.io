$('.nav-wrapper .item').click(function(e){
  if($(this).hasClass('active')){
    $(this).removeClass('active');
  }
  else{
    $('.nav-wrapper .item').removeClass('active');
    $(this).toggleClass('active');
  }
  
});