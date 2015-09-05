$(document).ready(function() {
    $('.navhover').hover(
      function(){
        $('#navmenu').slideDown(200);
      },
      function(){
        $('#navmenu').slideUp(200);
      }
    );
});
