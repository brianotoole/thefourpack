// Uses GSAP (TweenMax) + ScrollMagic
import ScrollMagic from "scrollmagic/scrollmagic/uncompressed/ScrollMagic";
import "scrollmagic/scrollmagic/uncompressed/plugins/animation.gsap";
import "scrollmagic/scrollmagic/uncompressed/plugins/debug.addIndicators";
import TweenMax from "gsap/src/uncompressed/TweenMax";
import TimelineMax from "gsap/src/uncompressed/TimelineMax";

// init GSAP TimelineMax & ScrollMagic controllers
var tl = new TimelineMax();
var tl1 = new TimelineMax();
var tl2 = new TimelineMax();
var controller = new ScrollMagic.Controller();
var heroItems = $('.hero > *');
var introItems = $('.section-intro > *');

function slideInHeroItems() {
    heroItems.each(function() {
        tl.add(
            TweenMax.from($(this), 0.15, {
                autoAlpha: 0,
                y: 5,
                ease: Power0.easeOut
            })
        );
    })
}

function slideUpIntroItems() {
    introItems.each(function() {
        tl.add(
            TweenMax.from($(this), 0.15, {
                autoAlpha: 0,
                y: 5,
                ease: Power0.easeOut
            })
        );
    })
}

function staggerInServices() {
    var newsScene = new ScrollMagic.Scene({
            //scene options
            triggerElement: "#trigger-services",
            triggerHook: 0.8,
            reverse: false
        })
        .setTween(tl1)
        //.addIndicators() //debug only
        .addTo(controller);
    return tl1.staggerFrom(".service__item", 0.15, { y: 5, autoAlpha: 0, ease: Power1.easeOut }, 0.15);
}

function slideUpFooter() {
    var newsScene = new ScrollMagic.Scene({
            //scene options
            triggerElement: "#trigger-contact",
            triggerHook: 0.8,
            reverse: false
        })
        .setTween(tl2)
        //.addIndicators() //debug only
        .addTo(controller);
    return tl2.from(".btn-contact", 0.25, { y: 0, autoAlpha: 0, ease: Power0.easeOut }, 0.25);
}


// On ready
$(function() {
    // If home page
    if ($(".home").length > 0) {
        slideInHeroItems();
        slideUpIntroItems();
        staggerInServices();
        slideUpFooter();
    }
});