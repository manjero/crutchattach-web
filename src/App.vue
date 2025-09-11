<template>
  <div class="w-screen min-h-screen flex justify-center bg-white">
    <div class="w-full max-w-[1792px] mx-auto">
      <MainSplit />
      <div>
        <div id="root">
          <div class="yIDCqA"></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Main from './components/MainSplit.vue';

export default {
  name: 'App',
  components: { MainSplit: Main }
}
</script>
