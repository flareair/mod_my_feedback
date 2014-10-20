(function ($) {
  $(document).ready(function() {
    $('.myFeedbackForm > form').submit(function(e) {
      var $frm = $(this);
      e.preventDefault;
      var data = JSON.stringify($frm.serializeArray());
      var request = {
        'option' : 'com_ajax',
        'module' : 'my_feedback',
        'format' : 'json',
        'firstname' : $frm.find('input[name="firstname"]').val(),
        'lastname': $frm.find('input[name="lastname"]').val(),
        'data': data
      };
      $.ajax({
        type : 'POST',
        data : request,
        success: function (response) {
          // console.log(request);
          console.log(response);
          console.log(data);
          $frm.fadeOut('slow', function() {
            $frm.parent().html('<p>Принято!</p>');
            $('.formDebug').load(document.URL+' .formDebug');
          });
        }
      });
      return false;
    });
  });

})(jQuery)
