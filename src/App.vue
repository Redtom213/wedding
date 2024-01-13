<template>
  <div>
    <Title/>
    <Invitation/>
    <Call/>
    <Gallery/>
    <Location/>
    <Contact/>
  </div>
</template>

<script>
import Title from '@/components/Title.vue';
import Invitation from '@/components/Invitation.vue';
import Call from '@/components/Call.vue';
import Gallery from '@/components/Gallery.vue';
import Location from "@/components/Location.vue";
import Contact from "@/components/Contact.vue";


export default {
  components: {
    Location,
    Title,
    Invitation,
    Call,
    Gallery,
    Contact,
  },

  mounted() {
  },
  methods: {
  },
};
</script>

<style scoped>
</style>
