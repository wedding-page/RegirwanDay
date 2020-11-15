/*
-----------------------------------------------
Theme: myWedding - Coming Soon HTML Template
Version 1.0
Author: EXSYthemes
-----------------------------------------------
// ========== TABLE OF CONTENTS ============ //
	1. PRELOADER
	2. GALLERY LIGHTBOX
    3. GOOGLE MAPS
    4. COUNTDOWN START
-----------------------------------------------*/

$('#preloader').delay(500).fadeOut('slow');

/* Preloader js */
$(window).on('load', function () {
    "use strict";

});
/* END Preloader js */

/* ***************** start document load **********************/
$(document).ready(function () {
    "use strict";

    $("#bgvideo").YTPlayer();
    var $tfront = $(".title-front").hide();
    var $tunder = $(".title-under").hide();
    $tfront.show().arctext({ radius: 250 });
    $tunder.show().arctext({ radius: 180, dir: -1 });

    /*========== Countdown start ================*/
    var clock;

    clock = $('#countdown').FlipClock({
        clockFace: 'DailyCounter',
        autoStart: false,
        minimumDigits: 9,
        callbacks: {
            stop: function () {
                $('.message').html('The clock has stopped!')
            }
        }
    });

    //var ts = new Date(2019, 6, 22, 21, 30, 0);
    //var ts = +new Date("June 29, 2019 07:00 GMT");
    var ts = new Date("December 12, 2020 09:00:00");
    // var ts = new Date("June 24, 2019 10:35:00");
    var date_now = new Date();
    var seconds = Math.floor((ts - (date_now)) / 1000);
    console.log(date_now);
    clock.setTime(seconds);
    clock.setCountdown(true);
    clock.start();

    /*========== Countdown end ================*/
}); 