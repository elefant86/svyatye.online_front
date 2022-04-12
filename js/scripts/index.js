import iconLogo from '../../images/svg/logo.svg';
import iconSearch from '../../images/svg/search.svg';
import iconArrow from '../../images/svg/arrow.svg';
import iconLongArrow from '../../images/svg/long-arrow.svg';
import iconSocialTelegram from '../../images/svg/social-telegram.svg';
import iconSocialVK from '../../images/svg/social-vk.svg';
import iconSocialYoutube from '../../images/svg/social-youtube.svg';
import iconSocialDzen from '../../images/svg/social-dzen.svg';
import iconSocialRutube from '../../images/svg/social-rutube.svg';

var body = document.querySelector('body');
var btnMenu = document.querySelector('.js-menu-open');
var nav = document.querySelector('.nav');

btnMenu.addEventListener("click", () => {
    nav.classList.toggle("active");
    body.classList.toggle("menuactive");
});