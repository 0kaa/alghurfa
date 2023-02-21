$(
    function () {
        $('#section-1').owlCarousel({
            items: 1,
            nav: true,
            loop: false,
            rtl: true,
            dots: false,
            navText: ['<i class="fa fa-arrow-left"></i>', '<i class="fa fa-arrow-right"></i>'],
            responsive: {
                0: {
                    nav: false,
                    dots: true
                },
                1024: {
                    nav: true,
                },
            }
        });

        $('#section-3').owlCarousel({
            items: 2,
            nav: false,
            loop: true,
            rtl: true,
            dots: false,
            margin: 20,

            responsive: {
                0: {
                    items: 1,
                    dots: true,
                },
                800: {
                    stagePadding: 50,
                    items: 2,
                },
            }
        });

        $('#section-correspondence').owlCarousel({
            items: 3,
            rtl: true,
            dots: false,
            loop: true,
            margin: 10,
            responsive: {
                0: {
                    items: 1,
                    dots: true,
                },
                600: {
                    items: 2,
                },
                1000: {
                    items: 3,

                }
            }

        })

        $('#circles-section').owlCarousel({
            items: 3,
            rtl: true,
            loop: true,
            dots: false,
            margin: 20,
            responsive: {
                0: {
                    items: 1,
                    dots: true,                    
                    margin: 35,
                    stagePadding: 50,
                },
                600: {
                    items: 2,
                    dots: true,
                },
                1350: {
                    items: 3
                }
            }

        })
        $('.archive-filter-item').click(function () {
            $('.archive-filter-item').removeClass('active !bg-primary');
            $(this).addClass('active !bg-primary');
            $('.overlay').addClass('active');
        });
        $(document).click(function (e) {
            if (!$(e.target).closest('.archive-filter-item').length) {
                $('.archive-filter-item').removeClass('active !bg-primary');
                $('.overlay').removeClass('active');
            }
        });

        // Header nav toggler in mobile
        $('.menu-toggler').click(function () {
            $('.menu-list').toggleClass('active');
        });
        $('.close-menu').click(function () {
            $('.menu-list').removeClass('active');
        });

        $('.archive-filter-button').click(function () {
            $('.filter-menu').toggleClass('active');
        });

        // Close filter menu
        $('.close-filter-menu').click(function () {
            $('.filter-menu').removeClass('active');
        });
    }
)