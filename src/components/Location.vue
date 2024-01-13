<!-- Location.vue -->

<template>
  <section id="location">
    <div class="row">
      <div class="col-md-offset-2 col-md-8" style="padding-top: 100px; text-align: center">
        <div style="margin-bottom: 60px">
          <span style="font-family: MapoFlowerIsland, sans-serif !important; font-weight: bold">아름다운 봄날<br>소중한 분들을 초대합니다.</span>
        </div>
        <h3 style="font-family: BookkMyungjo-Bd7, sans-serif !important;" class="inline _font-main">오시는 길</h3>
        <div style="margin-top: 10px; font-family: BookkMyungjo-Bd7, sans-serif !important;">
          <span style="font-size: 14px">서울특별시 동작구 보라매로5길 15 전문건설회관 3층</span>
        </div>
      </div>
      <div class="col-md-offset-2 col-md-8 animation fadeIn animated" style="visibility: visible; padding-top: 10px; padding-bottom: 30px">
        <div style="margin-top: 20px; position: relative; overflow: hidden;">
          <naverMap></naverMap>
          <div data-aos="fade-up" style="font-size: 14px; font-weight: bold; padding-top: 20px; padding-bottom: 20px; display: flex; align-items: center; justify-content: center" class="aos-init aos-animate">
            <a href="https://kko.to/t5dHSoxHDr" target="_blank">
              <div style="display: flex; align-items: center; justify-content: center; padding: 0px 5px; margin-right: 10px">
                <img src="https://play-lh.googleusercontent.com/Nvrf8Z89_3S8H6YnOLgyAbe-PSSeCZnJDA8zv7LY04hEvi8atTgp_fmQ5RZ591Qpxh5G=w480-h960-rw" style="width: 30px; border-radius: 20%; margin-right: 5px" alt="">
                <span style="font-family: BookkMyungjo-Bd7, sans-serif !important;">카카오맵</span>
              </div>
            </a>
            <a href="https://naver.me/GqBsKyQO" target="_blank">
              <div style="display: flex; align-items: center; justify-content: center; padding: 0px 5px; padding-right: 10px">
                <img src="https://play-lh.googleusercontent.com/yB6ePH3QA0EMU8qTqM5tOPtpZ8bZeIYhb9Oi2RHOy9YvK5fdxIlbN1H46QtdHNC_1g=w480-h960-rw" style="width: 30px; border-radius: 20%; margin-right: 5px" alt="">
                <span style="font-family: BookkMyungjo-Bd7, sans-serif !important;">네이버 지도</span>
              </div>
            </a>
          </div>
        </div>
        <div style="font-family: BookkMyungjo-Bd7, sans-serif !important; font-size: 14px">
          <span>
            • 지하철: 신림선, 보라매병원역(전문건설회관) 하차<br>
            * 2번 출구와 연결되어 있습니다.<br>
            • 주차: 전문건설회관 지하주차장 이용<br>
            * 주차는 3시간 무료입니다.<br>
            • 식사는 3층에서 오후 12시부터 가능합니다.<br>
          </span>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import naverMap from "@/components/naverMap.vue";
export default {
  components: {
    naverMap,
  },
};

</script>

<style scoped>

</style>
