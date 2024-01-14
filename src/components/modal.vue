<template>
  <div class="modal" tabindex="-1" @click="closeModal">
    <swiper
        class="swiper"
        v-bind="swiperOptions"
    >
      <swiper-slide class="swiper-slide"
                    v-for="(photo, index) in photos" :key="index">
        <img :src="photo.src" :alt="photo.alt" :srcset="photo.srcset">
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
        initialSlide: this.indexProp,
      },
      photos: [
        { src: 'assets/images/photo01.webp', alt: '1', srcset: 'assets/images/photo01-256.webp 256w,assets/images/photo01-980.webp 980w,assets/images/photo01-1390.webp 1390w,assets/images/photo01-1700.webp 1700w,assets/images/photo01-1960.webp 1960w,'},
        { src: 'assets/images/photo02.webp', alt: '2', srcset: 'assets/images/photo02-256.webp 256w,assets/images/photo02-720.webp 720w,assets/images/photo02-980.webp 980w,assets/images/photo02-1200.webp 1200w,assets/images/photo02-1390.webp 1390w,' },
        { src: 'assets/images/photo03.webp', alt: '3', srcset: 'assets/images/photo03-256.webp 256w,assets/images/photo03-720.webp 720w,assets/images/photo03-980.webp 980w,assets/images/photo03-1200.webp 1200w,assets/images/photo03-1390.webp 1390w,' },
        { src: 'assets/images/photo04.webp', alt: '4', srcset: 'assets/images/photo04-256.webp 256w,assets/images/photo04-980.webp 980w,assets/images/photo04-1390.webp 1390w,assets/images/photo04-1700.webp 1700w,assets/images/photo04-1960.webp 1960w,' },
        { src: 'assets/images/photo05.webp', alt: '5', srcset: 'assets/images/photo05-256.webp 256w,assets/images/photo05-980.webp 980w,assets/images/photo05-1390.webp 1390w,assets/images/photo05-1700.webp 1700w,assets/images/photo05-1960.webp 1960w,' },
        { src: 'assets/images/photo06.webp', alt: '6', srcset: 'assets/images/photo06-256.webp 256w,assets/images/photo06-720.webp 720w,assets/images/photo06-980.webp 980w,assets/images/photo06-1240.webp 1240w,assets/images/photo06-1450.webp 1450w,' },
        { src: 'assets/images/photo07.webp', alt: '7', srcset: 'assets/images/photo07-256.webp 256w,assets/images/photo07-650.webp 650w,assets/images/photo07-880.webp 880w,assets/images/photo07-1067.webp 1067w,assets/images/photo07-1260.webp 1260w,' },
        { src: 'assets/images/photo08.webp', alt: '8', srcset: 'assets/images/photo08-256.webp 256w,assets/images/photo08-720.webp 720w,assets/images/photo08-980.webp 980w,assets/images/photo08-1200.webp 1200w,' },
        { src: 'assets/images/photo09.webp', alt: '9', srcset: 'assets/images/photo09-256.webp 256w,assets/images/photo09-710.webp 710w,assets/images/photo09-960.webp 960w,assets/images/photo09-1170.webp 1170w,assets/images/photo09-1338.webp 1338w,' },
        { src: 'assets/images/photo10.webp', alt: '10', srcset: 'assets/images/photo10-256.webp 256w,assets/images/photo10-700.webp 700w,assets/images/photo10-960.webp 960w,assets/images/photo10-1160.webp 1160w,assets/images/photo10-1333.webp 1333w,' },
        { src: 'assets/images/photo11.webp', alt: '11', srcset: 'assets/images/photo11-256.webp 256w,assets/images/photo11-700.webp 700w,assets/images/photo11-960.webp 960w,assets/images/photo11-1160.webp 1160w,assets/images/photo11-1333.webp 1333w,' },
        { src: 'assets/images/photo12.webp', alt: '12', srcset: 'assets/images/photo12-256.webp 256w,assets/images/photo12-980.webp 980w,assets/images/photo12-1390.webp 1390w,assets/images/photo12-1700.webp 1700w,assets/images/photo12-1960.webp 1960w,' },
        { src: 'assets/images/photo13.webp', alt: '13', srcset: 'assets/images/photo13-256.webp 256w,assets/images/photo13-980.webp 980w,assets/images/photo13-1390.webp 1390w,assets/images/photo13-1700.webp 1700w,assets/images/photo13-1960.webp 1960w,' },
        { src: 'assets/images/photo14.webp', alt: '14', srcset: 'assets/images/photo14-256.webp 256w,assets/images/photo14-750.webp 750w,assets/images/photo14-1030.webp 1030w,assets/images/photo14-1250.webp 1250w,assets/images/photo14-1432.webp 1432w,' },
        { src: 'assets/images/photo15.webp', alt: '15', srcset: 'assets/images/photo15-256.webp 256w,assets/images/photo15-980.webp 980w,assets/images/photo15-1390.webp 1390w,assets/images/photo15-1700.webp 1700w,assets/images/photo15-1960.webp 1960w,' },
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