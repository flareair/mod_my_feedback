(function ($) {
  $(document).ready(function() {
    $('.myFeedbackForm > form').bootstrapValidator({
      // To use feedback icons, ensure that you use Bootstrap v3.1.0 or later
      feedbackIcons: {
        valid: 'glyphicon glyphicon-ok',
        invalid: 'glyphicon glyphicon-remove',
        validating: 'glyphicon glyphicon-refresh'
      },
      fields: {
        username: {
          message: 'The username is not valid',
          validators: {
            notEmpty: {
                message: 'The username is required and cannot be empty'
            },
            stringLength: {
                min: 6,
                max: 30,
                message: 'The username must be more than 6 and less than 30 characters long'
            },
            regexp: {
                regexp: /^[a-zA-Z0-9]+$/,
                message: 'The username can only consist of alphabetical and number'
            },
            different: {
                field: 'password',
                message: 'The username and password cannot be the same as each other'
            }
          }
        },
        email: {
          validators: {
            notEmpty: {
                message: 'The email address is required and cannot be empty'
            },
            emailAddress: {
                message: 'The email address is not a valid'
            }
          }
        }
      },
      // onSuccess: function(e) {
      //   e.preventDefault;
      //   console.log('Done!');
      // }
    })
    .on('success.form.bv', function(e) {
      var $frm = $(this);
      e.preventDefault;
      var data = JSON.stringify($frm.serializeArray());
      var request = {
        'option' : 'com_ajax',
        'module' : 'my_feedback',
        'format' : 'json',
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
          });
        }
      });
      return false;

    });
  });

})(jQuery)
