<template>
  <div id="app">
    <div id="sidebar-wrapper">
      <left-sidebar />
    </div>
    <router-view />
  </div>
</template>

<script>
import leftSidebar from './components/leftSidebar.vue'
export default {
  name: 'App',
  data () {
    return {}
  },
  components: {
    leftSidebar
  }
}
</script>

<style lang='scss'>
@import url('https://fonts.googleapis.com/css?family=Ubuntu:300,300i,400,400i,500,500i,700,700i');
body {
  margin: 0;
  padding: 0;
  border: 0;
  background-color: #cdcdcd;
  #app {
    position: relative;
    background-color: white;
    max-width: 1280px;
    margin-top: 0;
    margin: 0 auto;
    height: 1000px;
    display: flex;
    #sidebar-wrapper {
      position: relative;
      width: 332px;
      min-width: 332px;
      height: 200px;
      // border: 5px solid black;
    }
  }
}
</style>
