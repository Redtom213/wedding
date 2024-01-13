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
        { src: 'assets/images/photo01.jpg', alt: '1' },
        { src: 'assets/images/photo02.jpg', alt: '2' },
        { src: 'assets/images/photo03.jpg', alt: '3' },
        { src: 'assets/images/photo04.jpg', alt: '4' },
        { src: 'assets/images/photo05.jpg', alt: '5' },
        { src: 'assets/images/photo06.jpg', alt: '6' },
        { src: 'assets/images/photo07.jpg', alt: '7' },
        { src: 'assets/images/photo08.jpg', alt: '8' },
        { src: 'assets/images/photo09.jpg', alt: '9' },
        { src: 'assets/images/photo10.jpg', alt: '10' },
        { src: 'assets/images/photo11.jpg', alt: '11' },
        { src: 'assets/images/photo12.jpg', alt: '12' },
        { src: 'assets/images/photo13.jpg', alt: '13' },
        { src: 'assets/images/photo14.jpg', alt: '14' },
        { src: 'assets/images/photo15.jpg', alt: '15' },
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
