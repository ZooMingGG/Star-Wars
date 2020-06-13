"use strict";
$( document ).ready(function() {
    $(function () {
        res();
    });

    $('.owl-carousel').owlCarousel({
        loop:true,
        navClass:['left-arrow', 'right-arrow'],
        margin:20,
        nav:true,
        responsive:{
            0:{
                items:1
            },
            600:{
                items:2
            },
            900:{
                items:3
            },
            1200:{
                items:4
            }
        }
    });
});


