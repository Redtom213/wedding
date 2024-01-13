<!-- Gallery.vue -->

<template>
  <section id="gallery">
    <div class="container">
      <h2>갤러리</h2>
      <modal
          v-if="modalOpen"
          @sendClose="closeModal"
          :indexProp="this.selectedPhotoIndex"
      />
      <ul class="galleryList">
        <li v-for="(photo, index) in photos" :key="index">
          <a href="#" class="img" @click="openModal(index)">
            <img :src="photo.src" :alt="photo.alt">
          </a>
        </li>
      </ul>
    </div>
  </section>
</template>

<script>
import { Swiper, SwiperSlide } from 'swiper/vue';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import Modal from "@/components/modal.vue";

export default {
  components: {
    Modal,
    Swiper,
    SwiperSlide,
  },

  data() {
    return {
      photos: [
        { src: 'assets/images/photo01.webp', alt: '1', srcset: 'assets/images/photo01.webp 256w,assets/images/photo01.webp 980w,assets/images/photo01.webp 1390w,assets/images/photo01.webp 1700w,assets/images/photo01.webp 1960w,'},
        { src: 'assets/images/photo02.webp', alt: '2', srcset: 'assets/images/photo02.webp 256w,assets/images/photo02.webp 720w,assets/images/photo02.webp 980w,assets/images/photo02.webp 1200w,assets/images/photo02.webp 1390w,' },
        { src: 'assets/images/photo03.webp', alt: '3', srcset: 'assets/images/photo03.webp 256w,assets/images/photo03.webp 720w,assets/images/photo03.webp 980w,assets/images/photo03.webp 1200w,assets/images/photo03.webp 1390w,' },
        { src: 'assets/images/photo04.webp', alt: '4', srcset: 'assets/images/photo04.webp 256w,assets/images/photo04.webp 980w,assets/images/photo04.webp 1390w,assets/images/photo04.webp 1700w,assets/images/photo04.webp 1960w,' },
        { src: 'assets/images/photo05.webp', alt: '5', srcset: 'assets/images/photo05.webp 256w,assets/images/photo05.webp 980w,assets/images/photo05.webp 1390w,assets/images/photo05.webp 1700w,assets/images/photo05.webp 1960w,' },
        { src: 'assets/images/photo06.webp', alt: '6', srcset: 'assets/images/photo06.webp 256w,assets/images/photo06.webp 720w,assets/images/photo06.webp 980w,assets/images/photo06.webp 1240w,assets/images/photo06.webp 1450w,' },
        { src: 'assets/images/photo07.webp', alt: '7', srcset: 'assets/images/photo07.webp 256w,assets/images/photo07.webp 650w,assets/images/photo07.webp 880w,assets/images/photo07.webp 1067w,assets/images/photo07.webp 1260w,' },
        { src: 'assets/images/photo08.webp', alt: '8', srcset: 'assets/images/photo08.webp 256w,assets/images/photo08.webp 720w,assets/images/photo08.webp 980w,assets/images/photo08.webp 1200w,' },
        { src: 'assets/images/photo09.webp', alt: '9', srcset: 'assets/images/photo09.webp 256w,assets/images/photo09.webp 710w,assets/images/photo09.webp 960w,assets/images/photo09.webp 1170w,assets/images/photo09.webp 1338w,' },
        { src: 'assets/images/photo10.webp', alt: '10', srcset: 'assets/images/photo10.webp 256w,assets/images/photo10.webp 700w,assets/images/photo10.webp 960w,assets/images/photo10.webp 1160w,assets/images/photo10.webp 1333w,' },
        { src: 'assets/images/photo11.webp', alt: '11', srcset: 'assets/images/photo11.webp 256w,assets/images/photo11.webp 700w,assets/images/photo11.webp 960w,assets/images/photo11.webp 1160w,assets/images/photo11.webp 1333w,' },
        { src: 'assets/images/photo12.webp', alt: '12', srcset: 'assets/images/photo12.webp 256w,assets/images/photo12.webp 980w,assets/images/photo12.webp 1390w,assets/images/photo12.webp 1700w,assets/images/photo12.webp 1960w,' },
        { src: 'assets/images/photo13.webp', alt: '13', srcset: 'assets/images/photo13.webp 256w,assets/images/photo13.webp 980w,assets/images/photo13.webp 1390w,assets/images/photo13.webp 1700w,assets/images/photo13.webp 1960w,' },
        { src: 'assets/images/photo14.webp', alt: '14', srcset: 'assets/images/photo14.webp 256w,assets/images/photo14.webp 750w,assets/images/photo14.webp 1030w,assets/images/photo14.webp 1250w,assets/images/photo14.webp 1432w,' },
        { src: 'assets/images/photo15.webp', alt: '15', srcset: 'assets/images/photo15.webp 256w,assets/images/photo15.webp 980w,assets/images/photo15.webp 1390w,assets/images/photo15.webp 1700w,assets/images/photo15.webp 1960w,' },
      ],
      modalOpen: false,
      selectedPhotoIndex: 0,
      scrollPosition: '',
      body: '',

    };
  },
  methods: {
    openModal(index) {
      this.scrollPosition = window.scrollY;
      this.body = document.querySelector('body');
      this.body.style.overflow = 'hidden';
      this.body.style.position = 'fixed';
      this.body.style.top = `-${this.scrollPosition}px`;
      this.body.style.left = '0';
      this.body.style.right= '0';
      this.selectedPhotoIndex = index;
      this.modalOpen = true;
    },
    closeModal() {
      this.body.style.removeProperty('overflow');
      this.body.style.removeProperty('position');
      this.body.style.removeProperty('top');
      this.body.style.removeProperty('left');
      this.body.style.removeProperty('right');
      window.scrollTo(0, this.scrollPosition);
      this.modalOpen = false;
    },
  },
};
</script>

<style>
.container h2 {
  font-family: BookkMyungjo-Bd7, sans-serif !important;
}
</style>
