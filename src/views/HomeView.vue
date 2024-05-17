<template>
  <main>
    <HomeScreen />
  </main>
</template>

<script>
import HomeScreen from '../components/HomeScreen.vue';

export default {
  components: {
    HomeScreen,
  },
};
</script>

<style>
.home-screen {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
}
</style>
