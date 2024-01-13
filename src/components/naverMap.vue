<template>
  <div id="map-canvas" style="width:100%;height:400px;"></div>
</template>

<script>

export default {
  components: {
  },
};

const script = document.createElement("script");

script.src = "https://openapi.map.naver.com/openapi/v3/maps.js?ncpClientId=se2uxskgrn";
script.async = true;
script.defer = true;
document.head.appendChild(script);

script.onload = () => {
  const map = new window.naver.maps.Map("map-canvas", {
    center: new window.naver.maps.LatLng(37.4920760, 126.9243308),
    zomm: 15,
    draggable: false,
    pinchZoom: false,
    scrollWheel: false,
    zoomControl: true, //줌 컨트롤의 표시 여부
    zoomControlOptions: { //줌 컨트롤의 옵션
      position: naver.maps.Position.TOP_RIGHT
    }
  })

  const marker = new naver.maps.Marker({
    position: new naver.maps.LatLng(37.4920760, 126.9243308),
    map: map
  });
}



</script>

<style scoped>

</style>