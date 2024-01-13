<!-- Call.vue -->

<template>
  <section id="call">
    <div class="banner">
      <p>소중한 시간을 함께 하고 싶습니다.</p>
    </div>
    <ul class="phone">
      <li>
        <a :href="'tel:' + groomPhoneNumber">
          <img src="@/assets/images/malePhoneIcon.png" alt="신랑에게 전화하기">
        </a>
        <p style="margin-top: 0px">신랑에게 전화하기</p>
      </li>
      <li>
        <a :href="'tel:' + bridePhoneNumber">
          <img src="@/assets/images/femalePhoneIcon.png" alt="신부에게 전화하기">
        </a>
        <p style="margin-top: 0px">신부에게 전화하기</p>
      </li>
    </ul>
  </section>
</template>

<script>
export default {
  data() {
    return {
      groomPhoneNumber: '010-7499-5198', // Update with the actual phone numbers
      bridePhoneNumber: '010-8949-3858', // Update with the actual phone numbers
    };
  },
  // Add component-specific logic here
};
</script>

<style scoped>
.banner p{
  font-family: BookkMyungjo-Bd7, sans-serif !important;
}
.phone p{
  font-family: BookkMyungjo-Bd7, sans-serif !important;
}
</style>
