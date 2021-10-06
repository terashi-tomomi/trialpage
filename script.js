// モダール
$(function () {
  $('#openModal').click(function(){
      $('#modalArea').fadeIn();
  });
  $('#closeModal , #modalBg').click(function(){
    $('#modalArea').fadeOut();
  });
});

// アコーディオンメニュー
$(function(){
     $(".dropdown").hide();
     $(".triger").click(function(){
          $(".triger").prev().slideToggle();
          $(this).toggleClass("close");
            $('.btn-more').toggleClass('open', 200);
     });
});





