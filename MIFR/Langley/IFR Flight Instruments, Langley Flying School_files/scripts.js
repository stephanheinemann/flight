$(function () {
    $('#jumbotron').carousel();

    $('.datepicker').attr('autocomplete', 'off').datepicker({
        changeMonth: true,
        changeYear: true,
        dateFormat: 'yy-mm-dd',
        yearRange: '1950:2050'
    });

    $('form').keydown(function (event) {
        if (event.which == 13 && event.target.tagName != 'TEXTAREA') {
            event.preventDefault();
        }
    });

    $('form').submit(function (event) {
        event.preventDefault();
        event.stopPropagation();

        var $button = $(this).find('button[type="submit"]').prop('disabled', true).text('Please wait...'),
            out = {form: $(this).attr('id')},
            $form = $(this);

        $(this).find('input[type="text"], input[type="hidden"], textarea').each(function () {
            out[$(this).attr('id')] = $(this).val();
        });

        $(this).find('select').each(function () {
            out[$(this).attr('id')] = $(this).val();
        });

        $(this).find('.controls[id]').each(function () {
            out[$(this).attr('id')] = [];
            var mbrs = out[$(this).attr('id')];

            $(this).find(':checked').each(function () {
                mbrs.push($(this).parent('label').text());
            });
        });

        $.ajax({
            type: "POST",
            url: '/forms.php',
            data: {json: JSON.stringify(out)},
            success: function(data) {
                $form.find('.modal').modal('hide');
        
                $form.find('.alert-danger').remove();
                $form.find('.help-block').remove();
                $form.find('.control-group').removeClass('error');
        
                if (data.status === 'ok') {
                    $button.text('Success!');
                    
                    $('<div class="alert alert-success"><strong>Success!</strong> ' + data.message + '</div>').insertBefore($form.find('.form-actions'));
        
                    if($.isFunction($form.data('success'))) {
                        $form.data('success')(data);
                    }
                } else {
                    $button.prop('disabled', false).text('Submit');
        
                    for (var k in data.validation) {
                        var $group = $form.find('#' + k).closest('.control-group'),
                            $controls = $group.children('.controls'),
                            $help = $controls.children('.help-block');
        
                        $group.addClass('error');
                        $controls.append($('<span />').addClass('help-block').append(data.validation[k]));
                    }
                    
                    $('<div class="alert alert-danger"><strong>Error!</strong> please check the form for errors</div>').insertBefore($form.find('.form-actions'));
        
                    if($('#recaptcha').size()) {
                        Recaptcha.reload();
                    };
                }
            },
            error: function(jqXHR, textStatus, errorThrown) {
                $button.prop('disabled', false).text('Submit');
                $('<div class="alert alert-danger"><strong>Error!</strong> ' + jqXHR.statusText + '</div>').insertBefore($form.find('.form-actions'));
            },
            dataType: 'json'
        });
    });

    if ($('#recaptcha').size()) {
        Recaptcha.create('6Ld0z98SAAAAANetmjVkm913yobs2uNIx8Ff35r1', 'recaptcha', {theme: 'blackglass'});
    };

    $('#registration_international').data('success', function(data) {
        document.location.href = data.redirect;
    });
});
