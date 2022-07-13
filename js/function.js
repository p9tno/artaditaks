$(document).ready(function() {


    function openMobileNav() {
        $('.header__toggle').click(function(event) {
            $('.header__bottom').toggleClass('header__bottom_open');
            $('.header__toggle').toggleClass('header__toggle_open');
            $('.header__mobilbg').toggleClass('header__mobilbg_open');
            $( 'body' ).toggleClass( 'nav-open' );
        });
    };

    openMobileNav();

    function openSidebar() {
        $('.sidebar__toggle').click(function(event) {
            console.log('Показ меню');
            $('.sidebar__toggle').toggleClass('sidebar__toggle_hide');
            $('.sidebar__list').toggleClass('sidebar__list_hide');
        });
    };
    openSidebar();

    function activeNav() {
        $('.navbar__item').on('click', function() {
            $('.navbar__item').removeClass('current');
            $(this).addClass('current');
        })
    };
    activeNav();

    $('.js-slider').slick({
        dots: true,
        // autoplay: true,
        // autoplaySpeed: 5000,
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

    $('.select').select2({
        placeholder: $(this).data('placeholder'),
        minimumResultsForSearch: Infinity
    });








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

    onVisible( '.programsInfo__number', function ( e ) {
        animateNumber( e, e.innerHTML );
    } );

    function animateNumber( elem, final, duration = 1000 ) {
        let start = 0;
        // console.log('init');
        setInterval( function () {
            if ( final > start ) {
                elem.innerHTML = start++;
            }
        }, duration / final );
    }
    // end animate numbers


    // scrollTop

    // $(document).ready(function(){
    //     //отменяем стандартную обработку нажатия по ссылке
    //     $("#menuHeader,#goForm,#menuFooter,#toTop").on("click","a", function (event) {
    //         event.preventDefault();
    //         //забираем идентификатор блока с атрибута href
    //         let id  = $(this).attr('href'),
    //         //узнаем высоту от начала страницы до блока на который ссылается якорь
    //             top = $(id).offset().top;
    //             //анимируем переход на расстояние - top за 1500 мс
    //         $('body,html').animate({scrollTop: top}, 1500);
    //     });
    //
    // });
    //
    // $(document).ready(function(){
    // 	$(window).scroll(function(){
    // 		if($(window).scrollTop()>500){
    // 			$('#toTop').fadeIn(900)
    // 		}else{
    // 			$('#toTop').fadeOut(700)
    // 		}
    // 	});
    // });

    // end scrollTop

    function scrollAnchor() {
        $("#menuHeader,#goForm,#menuFooter,#toTop").on("click","a", function (event) {
            event.preventDefault();
            //забираем идентификатор блока с атрибута href
            let id  = $(this).attr('href'),
            //узнаем высоту от начала страницы до блока на который ссылается якорь
                top = $(id).offset().top;
                //анимируем переход на расстояние - top за 1500 мс
            $('body,html').animate({scrollTop: top}, 1500);
        });

    }
    scrollAnchor();

})
