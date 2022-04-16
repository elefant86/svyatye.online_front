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

import Swiper, { Navigation, Pagination } from 'swiper';

var body = document.querySelector('body');
var btnMenu = document.querySelector('.js-menu-open');
var nav = document.querySelector('.nav');
var container = document.querySelector('.container');
var containerStyle = window.getComputedStyle(container);


btnMenu.addEventListener("click", () => {
    nav.classList.toggle("active");
    body.classList.toggle("menuactive");
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