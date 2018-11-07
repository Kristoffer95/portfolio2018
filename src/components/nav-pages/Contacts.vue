<template>
  <div id="contacts-wrapper">
    <div id="contacts" >
      <h1>This is the Contacts View</h1>
    </div>
  </div>
</template>

<script>
export default {
  name: 'contacts',
  data () {
    return {}
  }
}
</script>

<style lang="scss" scoped>
#contacts-wrapper {
  position: relative;
  width: 948px;
  #contacts{
    position: relative;
    width: 784px;
    margin: 0 auto;
    h1 {
      margin-top: 0px;
    }
  }
}
</style>
