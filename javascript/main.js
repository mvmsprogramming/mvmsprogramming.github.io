$(document).ready(function() {
  var $openOrClose = false;
    $('.navbutton').click(
      function(){
        if($openOrClose = false) {
          $('#navmenu').slideDown(200);
          $openOrClose = true;
        } else {
          $('#navmenu').slideUp(200);
          $openOrClose = false;
        }
      }
    );
});
