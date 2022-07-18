$(document).ready(function() {

    function preloader() {
        $(()=>{

            setTimeout( () => {
                let p = $('#preloader');
                p.addClass('hide');

                setTimeout( () => {
                    p.remove()
                },700);

            },700);
        });
    }
    preloader();

    // https://github.com/michalsnik/aos
    AOS.init({
        disable: 'mobile',
        // anchorPlacement: 'bottom-bottom',
        duration: 1000, // values from 0 to 3000, with step 50ms
    });

    AOS.init({
        disable: function () {
            var maxWidth = 768;
            return window.innerWidth < maxWidth;
        }
    });


    function openMobileNav() {
        $('.header__toggle').click(function(event) {
            $('.header__bottom').toggleClass('header__bottom_open');
            $('.header__toggle').toggleClass('header__toggle_open');
            $( 'body' ).toggleClass( 'nav-open' );
        });
    };

    openMobileNav();

    function openSidebar() {
        $('.sidebar__toggle').click(function(event) {
            $('.sidebar__toggle').toggleClass('sidebar__toggle_hide');
            $('.sidebar__list').toggleClass('sidebar__list_hide');
        });
    };
    openSidebar();

    function activeNav() {
        $('.navbar__item').on('click', function() {
            $('.navbar__item').removeClass('current');
            $(this).addClass('current');
            $('.header__bottom').removeClass('header__bottom_open');
            $('.header__toggle').removeClass('header__toggle_open');
            $( 'body' ).removeClass( 'nav-open' );
        })
    };
    activeNav();

    $('.js-slider').slick({
        dots: true,
        autoplay: true,
        autoplaySpeed: 5000,
        appendArrows: $('.services__arrow'),
        prevArrow: '<i class="icon-arrow_left"></i>',
        nextArrow: '<i class="icon-arrow_right"></i>',

        speed: 1000,
        adaptiveHeight: true,
        slidesToShow: 3,
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    arrows:false,
                    slidesToShow: 1,
                }
            },
        ]
    })

    $('.js-slider-orders').slick({
        dots: true,
        autoplay: true,
        autoplaySpeed: 5000,
        appendArrows: $('.orders__arrow'),
        prevArrow: '<i class="icon-arrow_left"></i>',
        nextArrow: '<i class="icon-arrow_right"></i>',

        speed: 1000,
        adaptiveHeight: true,
        slidesToShow: 3,
        infinite: false,
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    arrows:false,
                    slidesToShow: 1,
                }
            },
        ]
    })

    $('.js-slider-steps').slick({
        dots: false,
        arrows:false,
        speed: 1000,
        adaptiveHeight: true,
        slidesToShow: 3,
        infinite: false,
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    arrows:false,
                    slidesToShow: 1,
                    dots: true,
                }
            },
        ]
    })

    $('.select').select2({
        placeholder: $(this).data('placeholder'),
        minimumResultsForSearch: Infinity
    });

    function showModal() {
        $('.requisition_js').on('click', function (e) {
            e.preventDefault();
             $('#requisition').modal('show');
        });
    }
    showModal();

    function showModalPrivacy() {
        $('.privacy_js').on('click', function (e) {
            e.preventDefault();
             $('#privacy').modal('show');
        });
    }
    showModalPrivacy();


    // start animate numbers
    function onVisible( selector, callback, repeat = false ) {

        let options = {
            threshold: [ 0.5 ]
        };
        let observer = new IntersectionObserver( onEntry, options );
        let elements = document.querySelectorAll( selector );

        for ( let elm of elements ) {
            observer.observe( elm );
        }

        function onEntry( entry ) {
            entry.forEach( change => {
                let elem = change.target;
                // console.log(change);
                // console.log(elem.innerHTML);
                if ( change.isIntersecting ) {
                    if ( !elem.classList.contains( 'show' ) || repeat ) {
                        elem.classList.add( 'show' );
                        callback( elem );
                    }
                }
            } );
        }
    }

    onVisible( '.animate_numbers_js', function ( e ) {
        animateNumber( e, e.innerHTML );
    } );

    function animateNumber( elem, final, duration = 1500 ) {
        let start = 0;
        // console.log('init');
        setInterval( function () {
            if ( final >= start ) {
                elem.innerHTML = start++;
            }
        }, duration / final );
    }
    // end animate numbers

    function navigation() {
        $("#navbar").on("click","a", function (event) {
            let id  = $(this).attr('href');
            let top = $(id).offset().top;
            $('body,html').animate({scrollTop: top}, 1500);
        });
    }
    navigation();

    function downloadPrice() {
        $('.download_price_js').on('click', function (e) {
            e.preventDefault();
            let id  = '#priceList';
            let top = $(id).offset().top;
            $('body,html').animate({scrollTop: top}, 1500);
        });
    }
    downloadPrice();

    function addDataFancybox() {
        let item = $('.itemForDataFancybox_js');
        let num = 0;

        item.each(function(index, el) {
            $(this).find('a').attr('data-fancybox', num);
            num++;
        });
    }
    addDataFancybox();


    $(function(){
        $("#tel,#modal-tel").mask("+375 ( 9 9 ) 9 9 9 - 9 9 - 9 9");
    });

})
