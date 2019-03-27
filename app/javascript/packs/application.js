/* eslint no-console:0 */
// This file is automatically compiled by Webpack, along with any other files
// present in this directory. You're encouraged to place your actual application logic in
// a relevant structure within app/javascript and only use these pack files to reference
// that code so it'll be compiled.
//
// To reference this file, add <%= javascript_pack_tag 'application' %> to the appropriate
// layout file, like app/views/layouts/application.html.erb

import 'bootstrap';



var worker = null;
var loaded = 0;

function increment() {
    $('#counter').html(loaded+'%');
    $('#drink').css('top', (100-loaded*.9)+'%');
    if(loaded==25) $('#cubes div:nth-child(1)').fadeIn(100);
    if(loaded==50) $('#cubes div:nth-child(2)').fadeIn(100);
    if(loaded==75) $('#cubes div:nth-child(3)').fadeIn(100);
    if(loaded==100) {
        $('#lemon').fadeIn(100);
        $('#straw').fadeIn(300);
        loaded = 0;
        stopLoading();
        setTimeout(startLoading, 1000);
    }
    else loaded++;
}

function startLoading() {
    $('#lemon').hide();
    $('#straw').hide();
    $('#cubes div').hide();
    worker = setInterval(increment, 30);
}
function stopLoading() {
    clearInterval(worker);
}

startLoading();

$(document).ready(function() {
      $(window).on('scroll', function() {
        if (Math.round($(window).scrollTop()) > 100) {
          $('.navbar').addClass('scrolled');
        } else {
          $('.navbar').removeClass('scrolled');
        }
      });
    });



