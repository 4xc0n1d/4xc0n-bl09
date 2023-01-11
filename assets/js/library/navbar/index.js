$(function () {
    var bar = '';

    bar += '<div class="main-wrapper">';
        bar += '<header class="edu-header disable-transparent  header-sticky">';
            bar += '<div class="container">';
                bar += '<div class="row align-items-center">';
                    bar += '<div class="col-lg-6 col-xl-2 col-md-6 col-6">';
                        bar += '<div class="logo">';
                            bar += '<a href="/">';
                                bar += '<img class="logo-light" src="/assets/images/logo/logo-light.svg" alt="Site Logo">';
                            bar += '</a>';
                        bar += '</div>';
                    bar += '</div>';
                    bar += '<div class="col-lg-8 d-none d-xl-block">';
                        bar += '<nav class="mainmenu-nav d-none d-lg-block">';
                            bar += '<ul class="mainmenu">';
                                bar += '<li class="has-droupdown"><a href="javascript:void(0)">Framework</a>';
                                    bar += '<ul class="submenu">';
                                        bar += '<li><a href="https://icons.axcon.my.id/" target="_blank">Icons</a></li>';
                                        bar += '<li><a href="https://modal.axcon.my.id/" target="_blank">Modal</a></li>';
                                        bar += '<li><a href="https://button.axcon.my.id/" target="_blank">Button</a></li>';
                                        bar += '<li><a href="https://tooltip.axcon.my.id/" target="_blank">Tooltip</a></li>';
                                    bar += '</ul>';
                                bar += '</li>';

                                bar += '<li><a href="/privacy">Privacy</a></li>';

                                bar += '<li><a href="https://faq.axcon.my.id/">Help Center</a></li>';

                                bar += '<li><a href="https://blog.axcon.my.id/">Blog</a></li>';

                            bar += '</ul>';
                        bar += '</nav>';
                    bar += '</div>';
                    bar += '<div class="col-lg-6 col-xl-2 col-md-6 col-6">';
                        bar += '<div class="header-right d-flex justify-content-end">';
                            bar += '<div class="header-quote">';
                                bar += '<div class="quote-icon">';
                                    bar += '<a href="https://www.instagram.com/axcon.id/">';
                                        bar += '<i class="ax-instagram"></i>';
                                    bar += '</a>';
                                bar += '</div>';

                                bar += '<div class="quote-icon">';
                                    bar += '<a href="https://www.tiktok.com/@axcon.id">';
                                        bar += '<i class="ax-tiktok"></i>';
                                    bar += '</a>';
                                bar += '</div>';

                                bar += '<div class="hamberger quote-icon d-block d-xl-none">';
                                    bar += '<button class="hamberger-button">';
                                        bar += '<i class="ax-menu"></i>';
                                    bar += '</button>';
                                bar += '</div>';
                            bar += '</div>';
                        bar += '</div>';
                    bar += '</div>';
                bar += '</div>';
            bar += '</div>';
        bar += '</header>';

        bar += '<div class="popup-mobile-menu">';
            bar += '<div class="inner">';
                bar += '<div class="header-top">';
                    bar += '<div class="logo">';
                        bar += '<a href="/">';
                            bar += '<img src="/assets/images/logo/logo-light.svg" alt="Site Logo">';
                        bar += '</a>';
                    bar += '</div>';
                    bar += '<div class="close-menu">';
                        bar += '<button class="close-button">';
                            bar += '<i class="ax-clear"></i>';
                        bar += '</button>';
                    bar += '</div>';
                bar += '</div>';

                bar += '<ul class="mainmenu">';
                    bar += '<li class="has-droupdown"><a href="javascript:void(0)">Framework</a>';
                        bar += '<ul class="submenu">';
                            bar += '<li><a href="https://icons.axcon.my.id/" target="_blank">Icons</a></li>';
                            bar += '<li><a href="https://modal.axcon.my.id/" target="_blank">Modal</a></li>';
                            bar += '<li><a href="https://button.axcon.my.id/" target="_blank">Button</a></li>';
                            bar += '<li><a href="https://tooltip.axcon.my.id/" target="_blank">Tooltip</a></li>';
                        bar += '</ul>';
                    bar += '</li>';

                    bar += '<li><a href="/privacy">Privacy</a></li>';

                    bar += '<li><a href="https://faq.axcon.my.id/">Help Center</a></li>';

                    bar += '<li><a href="https://blog.axcon.my.id/">Blog</a></li>';

                bar += '</ul>';
            bar += '</div>';
        bar += '</div>';

        bar += '<script src="/assets/js/vendor/modernizr.min.js"></script>';
        bar += '<script src="/assets/js/vendor/jquery.js"></script>';
        bar += '<script src="/assets/js/vendor/bootstrap.min.js"></script>';
        bar += '<script src="/assets/js/vendor/sal.min.js"></script>';
        bar += '<script src="/assets/js/vendor/backtotop.js"></script>';
        bar += '<script src="/assets/js/vendor/magnifypopup.js"></script>';
        bar += '<script src="/assets/js/vendor/slick.js"></script>';
        bar += '<script src="/assets/js/vendor/countdown.js"></script>';
        bar += '<script src="/assets/js/vendor/jquery-appear.js"></script>';
        bar += '<script src="/assets/js/vendor/odometer.js"></script>';
        bar += '<script src="/assets/js/vendor/isotop.js"></script>';
        bar += '<script src="/assets/js/vendor/imageloaded.js"></script>';
        bar += '<script src="/assets/js/vendor/lightbox.js"></script>';
        bar += '<script src="/assets/js/vendor/wow.js"></script>';
        bar += '<script src="/assets/js/vendor/paralax.min.js"></script>';
        bar += '<script src="/assets/js/vendor/paralax-scroll.js"></script>';
        bar += '<script src="/assets/js/vendor/jquery-ui.js"></script>';
        bar += '<script src="/assets/js/vendor/tilt.jquery.min.js"></script>';
        bar += '<script src="/assets/js/main.js"></script>';

    $("#navbar").html(bar);
});

function getValueByName(name) {
    var url = document.getElementById('Axcon').getAttribute('src');
    var param = new Array();
    if (url.indexOf("?") != -1) {
        var source = url.split("?")[1];
        items = source.split("&");
        for (var i = 0; i < items.length; i++) {
            var item = items[i];
            var parameters = item.split("=");
            if (parameters[0] == "id") {
                return parameters[1];
            }
        }
    }
}