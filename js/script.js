(function ($) {
  $(document).ready(function() {

    // generate random numbers for captcha

    function randomNumber(min, max) {
      return Math.floor(Math.random() * (max - min + 1) + min);
    }

    // gemerate captcha equation

    function generateCaptcha() {
      $('.captchaGeneratedEq').html([randomNumber(1, 50), '+', randomNumber(10, 50), '='].join(' '));
    }

    generateCaptcha();

    $('.captchaRefreshEq').click(function() {
      generateCaptcha();
    });


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
                max: 40
                // message: 'The username must be more than 6 and less than 30 characters long'
            },
            regexp: {
                regexp: /^[a-zA-Z0-9a-яА-Я ]+$/,
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
        },
        message: {
          validators: {
            notEmpty: {
              
            },
            stringLength: {
              min: 4,
              max: 300
            },
          }
        },
        captcha: {
          feedbackIcons: false,
          validators: {
            callback: {
              message: 'Вычислено неправильно',
              callback: function(value, validator, $field) {
                var items = $('.captchaGeneratedEq').html().split(' ');
                var sum   = parseInt(items[0]) + parseInt(items[2]);
                return value == sum;
              }
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
            $frm.parent().html(response.data);
          });
        }
      });
      return false;

    })
    .on('error.form.bv', function(e) {
      generateCaptcha();
    });

  });

})(jQuery);
