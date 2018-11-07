<template>
  <div id="project-wrapper">
    <div id="project" >
      <h1>This is the Project View</h1>
    </div>
  </div>
</template>

<script>
export default {
  name: 'project',
  data () {
    return {}
  }
}
</script>

<style lang="scss" scoped>
#project-wrapper {
  position: relative;
  width: 948px;
  #project{
    position: relative;
    width: 784px;
    margin: 0 auto;
    h1 {
      margin-top: 0px;
    }
  }
}
</style>
