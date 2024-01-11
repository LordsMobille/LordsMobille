import Alpine from 'alpinejs';
import collapse from '@alpinejs/collapse'
import {mobileMenu} from './store/mobile-menu';
import {stopScroll} from './store/stop-scroll';
import {socialForm} from "./components/socialForm";




document.addEventListener('alpine:init', () => {
    Alpine.plugin(collapse);

    Alpine.store("mobileMenu", mobileMenu);
    Alpine.store("stopScroll", stopScroll);

    Alpine.data("socialForm", socialForm);
});


window.Alpine = Alpine

Alpine.start();
