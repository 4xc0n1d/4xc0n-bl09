$(function () {
    var bar = '';

    bar += '<footer class="eduvibe-footer-one edu-footer footer-style-default">';
        bar += '<div class="footer-top">';
            bar += '<div class="container eduvibe-animated-shape">';
                bar += '<div class="row g-5">';
                    bar += '<div class="col-lg-3 col-md-6 col-sm-12 col-12">';
                        bar += '<div class="edu-footer-widget">';
                            bar += '<div class="logo">';
                                bar += '<a href="/">';
                                    bar += '<img class="logo-light" src="https://axcon.my.id/assets/images/logo/logo-dark.svg" alt="Axcon">';
                                bar += '</a>';
                            bar += '</div>';
                            bar += '<p class="description">';
                                bar += 'Framework yang dibangun secara free agar kalian dapat menggunakan dengan baik';
                            bar += '</p>';
                            bar += '<ul class="social-share">';
                                bar += '<li><a href="https://www.instagram.com/axcon.id/"><i class="ax-instagram"></i></a></li>';
                                bar += '<li><a href="https://www.tiktok.com/@axcon.id"><i class="ax-tiktok"></i></a></li>';
                            bar += '</ul>';
                        bar += '</div>';
                    bar += '</div>';

                    bar += '<div class="col-lg-3 col-md-6 col-sm-6 col-12">';
                        bar += '<div class="edu-footer-widget explore-widget">';
                            bar += '<h5 class="widget-title">Framework</h5>';
                            bar += '<div class="inner">';
                                bar += '<ul class="footer-link link-hover">';
                                    bar += '<li><a href="https://icons.axcon.my.id/" target="_blank"><i class="ax-chevrons-right"></i>Icons</a></li>';
                                    bar += '<li><a href="https://modals.axcon.my.id/" target="_blank"><i class="ax-chevrons-right"></i>Modals</a></li>';
                                    bar += '<li><a href="https://button.axcon.my.id/" target="_blank"><i class="ax-chevrons-right"></i>Button</a></li>';
                                    bar += '<li><a href="https://tooltip.axcon.my.id/" target="_blank"><i class="ax-chevrons-right"></i>Tooltip</a></li>';
                                bar += '</ul>';
                            bar += '</div>';
                        bar += '</div>';
                    bar += '</div>';

                    bar += '<div class="col-lg-3 col-md-6 col-sm-6 col-12">';
                        bar += '<div class="edu-footer-widget quick-link-widget">';
                            bar += '<h5 class="widget-title">Useful Links</h5>';
                            bar += '<div class="inner">';
                                bar += '<ul class="footer-link link-hover">';
                                    bar += '<li><a href="contact-us.html"><i class="ax-chevrons-right"></i>Contact Us</a></li>';
                                    bar += '<li><a href="pricing.html"><i class="ax-chevrons-right"></i>Pricing Plan</a></li>';
                                    bar += '<li><a href="faq.html"><i class="ax-chevrons-right"></i>FAQ</a></li>';
                                    bar += '<li><a href="purchase-guide.html"><i class="ax-chevrons-right"></i>Terms & Conditions</a></li>';
                                bar += '</ul>';
                            bar += '</div>';
                        bar += '</div>';
                    bar += '</div>';

                    bar += '<div class="col-lg-3 col-md-6 col-sm-6 col-12">';
                        bar += '<div class="edu-footer-widget">';
                            bar += '<h5 class="widget-title">Contact Info</h5>';
                            bar += '<div class="inner">';
                                bar += '<div class="widget-information">';
                                    bar += '<ul class="information-list">';
                                        bar += '<li>';
                                            bar += '<i class="ax-chevrons-right"></i>';
                                            bar += '<a target="_blank" href="mailto:axconid@gmail.com">axconid@gmail.com</a>';
                                        bar += '</li>';
                                    bar += '</ul>';
                                bar += '</div>';
                            bar += '</div>';
                        bar += '</div>';
                    bar += '</div>';
                bar += '</div>';

                bar += '<div class="shape-dot-wrapper shape-wrapper d-md-block d-none">';
                    bar += '<div class="shape-image shape-image-1">';
                        bar += '<img src="https://axcon.my.id/assets/images/shapes/shape-21-01.png" alt="Axcon" />';
                    bar += '</div>';
                    bar += '<div class="shape-image shape-image-2">';
                        bar += '<img src="https://axcon.my.id/assets/images/shapes/shape-35.png" alt="Axcon" />';
                    bar += '</div>';
                bar += '</div>';
            bar += '</div>';
        bar += '</div>';

        bar += '<div class="copyright-area copyright-default">';
            bar += '<div class="container">';
                bar += '<div class="row">';
                    bar += '<div class="col-lg-12">';
                        bar += '<div class="inner text-center">';
                            bar += '<p>';
                                bar += '&copy; Copyright 2022 <strong><span>Axcon</span></strong>. All Rights Reserved';
                            bar += '</p>';
                        bar += '</div>';
                    bar += '</div>';
                bar += '</div>';
            bar += '</div>';
        bar += '</div>';
    bar += '</footer>';

    $("#footer").html(bar);
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