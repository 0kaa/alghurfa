$(
    function () {
        $('#section-1').owlCarousel({
            items: 1,
            nav: true,
            loop: false,
            rtl: true,
            navText: ['<i class="fa fa-arrow-left"></i>', '<i class="fa fa-arrow-right"></i>'],
            responsive: {
                0: {
                    nav: false,
                },
                800: {
                    nav: true,
                    dots: false
                },
            }
        });

        $('#section-3').owlCarousel({
            items: 2,
            nav: false,
            loop: true,
            rtl: true,
            margin: 20,
            center: true,
            responsive: {
                0: {
                    items: 1,
                },
                800: {
                    items: 2,
                },
            }
        });

        $('#section-correspondence').owlCarousel({
            items: 3,
            rtl: true,
            // dots: true,
            margin: 10,
            responsive: {
                0: {
                    items: 1,
                },
                600: {
                    items: 2,
                },
                1000: {
                    items: 3,
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