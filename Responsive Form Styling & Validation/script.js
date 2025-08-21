$(document).ready(function () {
    $('#loginForm').submit(function (e) {
        e.preventDefault();
        const email = $('#email').val().trim();
        const password = $('#password').val().trim();

        if (email === '' || password === '') {
            $('#message').text('Please fill all fields.').css('color', 'red');
            $('.card').addClass('shake');
            setTimeout(() => $('.card').removeClass('shake'), 500);
        } else {
            $('#message').text('Signed in successfully!').css('color', 'green');
        }
    });

    // Password show/hide toggle
    $('#togglePwd').on('click', function () {
        const input = $('#password');
        const type = input.attr('type') === 'password' ? 'text' : 'password';
        input.attr('type', type);
        $(this).toggleClass('fa-eye fa-eye-slash');
    });
});
