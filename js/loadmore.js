$(document).ready(function() {
    let count = $('.house__item').length,
        start = 4,
        show = 2;

    $('.house__item').addClass('d-none');
    $('.house__item:lt(' + start + ')').removeClass('d-none');

    $('.show_more_js').click(function(e) {
        e.preventDefault();
        $(this).addClass('loading');

        // let load = $(this).data('load'),
        //     more = $(this).data('more');

        start = (start + show <= count) ? start + show : count;

        // $(this).text(load);

        setTimeout(() => {

            $('.house__item:lt(' + start + ')').removeClass('d-none');

            if ($('.house__item:not(.d-none)').length == count) {
                $(this).parent().remove();
            }

            $(this).removeClass('loading');


            // $(this).text(more);
        }, 1000);


    });

});
// a(href="#" data-load="загрузкка" data-more="Показать еще работы").show_more_js Показать еще работы
