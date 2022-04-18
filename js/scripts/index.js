import iconLogo from '../../images/svg/logo.svg';
import iconSearch from '../../images/svg/search.svg';
import iconArrow from '../../images/svg/arrow.svg';
import iconLongArrow from '../../images/svg/long-arrow.svg';
import iconSocialTelegram from '../../images/svg/social-telegram.svg';
import iconSocialVK from '../../images/svg/social-vk.svg';
import iconSocialYoutube from '../../images/svg/social-youtube.svg';
import iconSocialDzen from '../../images/svg/social-dzen.svg';
import iconSocialRutube from '../../images/svg/social-rutube.svg';
import iconWave from '../../images/svg/wave.svg';
import iconLike from '../../images/svg/like.svg';
import iconShare from '../../images/svg/share.svg';
import iconFile from '../../images/svg/file.svg';
import iconStarRotate from '../../images/svg/star-rotate.svg';
import iconSubmit from '../../images/svg/submit.svg';



import Swiper, { Navigation, Pagination } from 'swiper';
import WaveSurfer from 'wavesurfer.js';


var body = document.querySelector('body');
var btnMenu = document.querySelector('.js-menu-open');
var btnSearch = document.querySelector('.js-search-open');
var inputSearch = document.querySelector('.header-search');

var nav = document.querySelector('.nav');
var container = document.querySelector('.container');
var containerStyle = window.getComputedStyle(container);


btnMenu.addEventListener("click", () => {
    nav.classList.toggle("active");
    body.classList.toggle("menuactive");
});

btnSearch.addEventListener("click", () => {
    inputSearch.classList.toggle("active");
    
    if (inputSearch.classList.contains("active")) {
        setTimeout(() => {
            inputSearch.querySelector('input').focus();
        }, 300)
    }
});


var longreadHeadImg = document.querySelector('.longread-head__img');
if(longreadHeadImg) {
    var pageblockcontent = document.querySelector('.page-block__content');
    console.log(longreadHeadImg);
    longreadHeadImg.style.width = window.screen.width + 'px';
    var containerSize = container.offsetWidth - parseFloat(containerStyle.paddingLeft) - parseFloat(containerStyle.paddingRight);
    longreadHeadImg.style.marginLeft = -((containerSize - pageblockcontent.offsetWidth) / 2) - (window.screen.width - containerSize) / 2 + 'px';

    var wideImg = document.querySelectorAll('.longread img.wide');
    wideImg.forEach((element) => {
        element.style.width = window.screen.width + 'px';
        element.style.marginLeft = -((containerSize - pageblockcontent.offsetWidth) / 2) - (window.screen.width - containerSize) / 2 + 'px';
    })

    var wideSwiper = document.querySelectorAll('.longread .swiper');
    wideSwiper.forEach((element) => {
        element.style.width = window.screen.width + 'px';
        element.style.marginLeft = -((containerSize - pageblockcontent.offsetWidth) / 2) - (window.screen.width - containerSize) / 2 + 'px';
    })

    const swiper = new Swiper('.swiper', {
        modules: [Navigation, Pagination],
        slidesPerView: 4,
        spaceBetween: 30,
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
    });
}

window.addEventListener("load", () => {
    var audioContainers = document.querySelectorAll('.article-audio__player');
    audioContainers.forEach((audioContainer) => {
        var urlMedia = audioContainer.getAttribute('data-url');
        var waveData = JSON.parse(audioContainer.getAttribute('data-wave'));

        var btnPlayer = audioContainer.querySelector('.js-audio-play');

        console.log(audioContainer.querySelector('.player'));

        var wavesurfer = WaveSurfer.create({
            container: audioContainer.querySelector('.player'),
            backend: 'MediaElement',
            waveColor: '#b1b1b1',
            progressColor: '#C92140',
            cursorColor: 'transparent',
            barWidth: 1,
            barRadius: 0,
            cursorWidth: 1,
            height: 120,
            barGap: 5
        });

        wavesurfer.load(urlMedia, waveData);

        wavesurfer.on('pause', function () {
            btnPlayer.classList.remove("paused");
        });

        wavesurfer.on('play', function () {
            btnPlayer.classList.add("paused");
        });

        btnPlayer.addEventListener("click", () => {
            wavesurfer.playPause();
        })
    })


    /*var wavesurfer = WaveSurfer.create({
        container: document.querySelector('.player'),
        backend: 'MediaElement',
        waveColor: '#b1b1b1',
        progressColor: '#C92140',
        cursorColor: 'transparent',
        barWidth: 1,
        barRadius: 0,
        cursorWidth: 1,
        height: 120,
        barGap: 5
    });*/
      
   // var mediaElt = document.querySelector('audio');
   // wavesurfer.load('audio/audio-2.mp3');

    /*
        */


    /*wavesurfer.on('ready', function () {
        setTimeout(() => {
        wavesurfer.exportPCM(32, 10000, false).then(function(value) {
            console.log("fullfill", value)
            //self.wavesurfer.load( source, value )
          }, function(reason) {
           console.log("reject", value)
          });
        }, 10000);
    });*/

    const tablet = window.matchMedia('(max-width: 1100px)');
    if (tablet.matches) {
        var articleElements = document.querySelectorAll('.article-elements');
        articleElements.forEach((articleElement) => {
            console.log(articleElement);

            let options = {
                modules: [Navigation, Pagination],
                slidesPerView: 1,
                spaceBetween: 0,
                navigation: {
                    nextEl: articleElement.querySelector('.swiper-button-next'),
                    prevEl: articleElement.querySelector('.swiper-button-prev'),
                },
                breakpoints: {
                    767: {
                        slidesPerView: 2
                    }
                }
            };

            /*if(articleElement.classList.contains('swiper-dbl')) {
                options.slidesPerView =
                options.slidesPerGroup = 2;
            }*/

            console.log(options);

            const swiperArticles = new Swiper(articleElement, options);
        });
    }

    
})