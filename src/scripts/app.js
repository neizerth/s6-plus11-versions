// core version + navigation, pagination modules:
import Swiper, { Navigation, Pagination } from 'swiper';
// import Swiper and modules styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import PaymentForm from '../components/PaymentForm';

new Swiper('.swiper', {
    // configure Swiper to use modules
    modules: [Navigation, Pagination],
});

document.addEventListener('DOMContentLoaded', () => {
    const container = document.querySelector('.payment-form');
    const form = new PaymentForm(container);
    form.init();
});