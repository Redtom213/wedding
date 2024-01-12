import '/assets/main.css'

import {createApp} from "vue";
import Swiper from 'https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.mjs'
import {SwiperSlide} from "swiper/vue";
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import App from './App.vue'


const app = createApp(App);

app.component('Swiper', Swiper);
app.component('SwiperSlide', SwiperSlide);

app.mount('#app');
