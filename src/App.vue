<script setup lang="ts">
  import Nav from './components/Nav.vue'
  import Footer from './components/Footer.vue';
  import { onMounted } from 'vue'

  onMounted(() => {
    document.dispatchEvent(new Event('render-event'))
  })

</script>

<template>
  <Nav />
  <router-view />
  <Footer />
</template>
