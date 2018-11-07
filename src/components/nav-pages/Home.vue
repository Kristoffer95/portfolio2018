<template>
  <div id="home-wrapper">
    <div id="home" >
      <h1>This is the Home View</h1>
    </div>
  </div>
</template>

<script>
export default {
  name: 'home',
  data () {
    return {}
  }
}
</script>

<style lang="scss" scoped>
#home-wrapper {
  position: relative;
  width: 948px;
  #home{
    position: relative;
    width: 784px;
    margin: 0 auto;
    h1 {
      margin-top: 0px;
    }
  }
}
</style>
