var swiper = new Swiper('.authorizeTicketSwiper-container', {
    loop: true,
    navigation: {
        nextEl: '.swiperCustom-next',
        prevEl: '.swiperCustom-prev',
    },
    breakpoints: {
        320: {
            slidesPerView: 2,
            spaceBetween: 10
        },
        480: {
            slidesPerView: 2,
            spaceBetween: 10
        },
        640: {
            slidesPerView: 3,
            spaceBetween: 15
        },
        768: {
            slidesPerView: 4,
            spaceBetween: 0
        },
        1024: {
            slidesPerView: 8,
            spaceBetween: 20
        },
        1280: {
            slidesPerView: 8,
            spaceBetween: 30
        }
    }
});





// Exclusive Deals
document.addEventListener("DOMContentLoaded", function () {
    const tabLinks = document.querySelectorAll(".exclusiveTab-link");
    const tabContents = document.querySelectorAll(".exclusiveTab-content");

    tabLinks.forEach(link => {
        link.addEventListener("click", function (event) {
            event.preventDefault();

            // Remove active class from all tab links
            tabLinks.forEach(link => link.classList.remove("active"));

            // Hide all tab contents
            tabContents.forEach(content => content.classList.remove("show"));

            // Add active class to the clicked tab link
            this.classList.add("active");

            // Show the corresponding tab content
            const tabId = this.getAttribute("data-tab");
            document.getElementById(tabId).classList.add("show");
        });
    });
});


// slider
// document.addEventListener('DOMContentLoaded', function () {
//     var brandSwiper = new Swiper('.brandSlider-wrapper', {
//         loop: true,
//         freeMode: true, // Enable free mode for continuous scrolling
//         speed: 10000, // Higher speed for smooth continuous scrolling
//         autoplay: {
//             delay: 0,
//             disableOnInteraction: false,
//         },
//         slidesPerView: 6,
//         spaceBetween: 10,
//         centeredSlides: true,
//         allowTouchMove: true, // Enable manual swiping to allow dragging
//         mousewheel: false, // Enable mouse wheel control
//         breakpoints: {
//             640: {
//                 slidesPerView: 2.5,
//                 spaceBetween: 10,
//             },
//             768: {
//                 slidesPerView: 3.5,
//                 spaceBetween: 20,
//             },
//             1024: {
//                 slidesPerView: 4.5,
//                 spaceBetween: 30,
//             },
//             1200: {
//                 slidesPerView: 6,
//                 spaceBetween: 30,
//             },
//         },
//     });

//     var swiperContainer = document.querySelector('.brandsWrapper-cover');

//     swiperContainer.addEventListener('mouseenter', function () {
//         brandSwiper.autoplay.stop();
//     });

//     swiperContainer.addEventListener('mouseleave', function () {
//         brandSwiper.autoplay.start();
//     });
// });


$(document).ready(function () {
    var slider = $('.brandSlider-cover').slick({
        slidesToShow: 6,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 0,
        speed: 2500,
        cssEase: 'linear',
        infinite: true,
        variableWidth: true,
        arrows: false,
        pauseOnHover: false,
        responsive: [
            {
                breakpoint: 1200,
                settings: {
                    slidesToShow: 5
                }
            },
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 3
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 2
                }
            },
            {
                breakpoint: 576,
                settings: {
                    slidesToShow: 1
                }
            }
        ]
    });

    // Function to set tabindex to -1 for slick-active slides
    function setTabIndex() {
        $('.brand-slide').attr('tabindex', '-1'); // Set all to -1
        $('.slick-active').attr('tabindex', '-1'); // Override for active slides
    }

    // Set tabindex after the slider is initialized
    slider.on('init', function () {
        setTabIndex();
    });

    // Set tabindex after every slide change
    slider.on('afterChange', function () {
        setTabIndex();
    });

    // Initial call to set tabindex
    setTabIndex();

});



$(document).ready(function () {
    $('.clientTestimonial-box').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: false,
        arrows: true,
        autoplaySpeed: 1500,
        responsive: [
            {
                breakpoint: 1200,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: false
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    });

    var dotButtons = document.querySelectorAll('button.slick-arrow');
    dotButtons.forEach(function (button) {
        button.innerHTML = '';
    });
});


