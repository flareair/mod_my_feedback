(function ($) {
  $(document).ready(function() {
    $('.myFeedbackForm > form').bootstrapValidator({
      // To use feedback icons, ensure that you use Bootstrap v3.1.0 or later
      feedbackIcons: {
        valid: 'fa fa-check fa-lg fa-fw',
        invalid: 'fa fa-times fa-lg fa-fw',
        validating: 'fa fa-refresh fa-lg fa-fw'
      },
      fields: {
        username: {
          // message: 'The username is not valid',
          validators: {
            notEmpty: {
                // message: 'The username is required and cannot be empty'
            },
            stringLength: {
                min: 4,
                max: 20,
                // message: 'The username must be more than 6 and less than 30 characters long'
            },
            regexp: {
                regexp: /^[a-zA-Z0-9]+$/,
                // message: 'The username can only consist of alphabetical and number'
            },
            // different: {
            //     field: 'password',
            //     message: 'The username and password cannot be the same as each other'
            // }
          }
        },
        email: {
          validators: {
            notEmpty: {
                // message: 'The email address is required and cannot be empty'
            },
            emailAddress: {
                // message: 'The email address is not a valid'
            }
          }
        }
      },
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
            $frm.parent().html('<p>Ваши данные отправлены!</p>');
          });
        }
      });
      return false;

    });
  });

})(jQuery)
