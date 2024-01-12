<template>
  <div class="modal" tabindex="-1" @click="closeModal">
    <swiper
        class="swiper"
        v-bind="swiperOptions"
    >
      <swiper-slide class="swiper-slide"
                    v-for="(photo, index) in photos" :key="index">
        <img :src="photo.src" :alt="photo.alt">
      </swiper-slide>
    </swiper>
  </div>
</template>

<script>

import {Swiper, SwiperSlide} from "swiper/vue";

export default {
  props: {
    indexProp:{
      default:0,
    }
  },
  components:{
    Swiper,
    SwiperSlide,
  },

  data() {
    return {
      swiperOptions:{
        slidesPerView: 1,
        spaceBetween : 20,
        loop:true,
        centeredSlides: true,    //센터모드
        autoHeight: true,
        initialSlide: this.indexProp,
      },
      photos: [
        { src: 'public/assets/images/photo01.jpg', alt: '1' },
        { src: 'public/assets/images/photo02.jpg', alt: '2' },
        { src: 'public/assets/images/photo03.jpg', alt: '3' },
        { src: 'public/assets/images/photo04.jpg', alt: '4' },
        { src: 'public/assets/images/photo05.jpg', alt: '5' },
        { src: 'public/assets/images/photo06.jpg', alt: '6' },
        { src: 'public/assets/images/photo07.jpg', alt: '7' },
        { src: 'public/assets/images/photo08.jpg', alt: '8' },
        { src: 'public/assets/images/photo09.jpg', alt: '9' },
        { src: 'public/assets/images/photo10.jpg', alt: '10' },
        { src: 'public/assets/images/photo11.jpg', alt: '11' },
        { src: 'public/assets/images/photo12.jpg', alt: '12' },
        { src: 'public/assets/images/photo13.jpg', alt: '13' },
        { src: 'public/assets/images/photo14.jpg', alt: '14' },
        { src: 'public/assets/images/photo15.jpg', alt: '15' },
      ],
    }
  },
  methods:{
    closeModal() {
      this.$emit('sendClose')
    },
  },
}
</script>

<style scoped>
.swiper {
  display: flex;
  position: relative;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: rgba(0, 0, 0, 0.7);
  text-align: center;
}

.swiper-slide {
  text-align:center;
  display:flex; /* 내용을 중앙정렬 하기위해 flex 사용 */
  align-items:center; /* 위아래 기준 중앙정렬 */
  justify-content:center; /* 좌우 기준 중앙정렬 */
  height: auto;
}

.swiper-slide img {
  max-height: 100vh;
  max-width: 100vw;
  margin: 0 auto; /* it centers any block level element */
}
</style>