$(function () {

    verificarCliqueMenu();

    function verificarCliqueMenu() {
        $('a').click(function () {
            var href = $(this).attr('href');
            $.ajax({
                'beforeSend': function () {
                    console.log("Estamos chamando o beforesend!");
                },
                'url': href,
                'error': function () {
                    console.log("Ocorreu um erro!")
                },
                'success': function (data) {
                    $('#container').html(data).fadeIn();
                    //$(data).appendTo('#container').fadeIn();
                }
            })

            return false;
        })
    }

});