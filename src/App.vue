<template>
  <div>
    <Title/>
    <Invitation/>
    <Call/>
    <Gallery/>
  </div>
</template>

<script>
import Title from '@/components/Title.vue';
import Invitation from '@/components/Invitation.vue';
import Call from '@/components/Call.vue';
import Gallery from '@/components/Gallery.vue';

export default {
  components: {
    Title,
    Invitation,
    Call,
    Gallery,
  },

  mounted() {
    // Your script logic for initialization (if needed)
  },
  methods: {
    modal() {
      // Define the modal function here (if needed)
    },
    copyToClipboard(text) {
      // Define the copy_to_clipboard function here (if needed)
    },
  },
};
</script>

<style scoped>
/* Add your styles here with scoped attribute */
</style>
