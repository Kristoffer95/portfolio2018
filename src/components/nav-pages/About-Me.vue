<template>
  <div id="about-me-wrapper">
    <div id="about-me" >
      <h1>This is the About Me View</h1>
    </div>
  </div>
</template>

<script>
export default {
  name: 'aboutme',
  data () {
    return {}
  }
}
</script>

<style lang="scss" scoped>
#about-me-wrapper {
  position: relative;
  width: 948px;
  #about-me{
    position: relative;
    width: 784px;
    margin: 0 auto;
    h1 {
      margin-top: 0px;
    }
  }
}
</style>
