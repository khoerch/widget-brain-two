<template>
  <nav>
    <ul class="nav-white">
      <li v-for="value in list">
        {{ value }}
      </li>
    </ul>
  </nav>
</template>

<script>
export default {
  name: 'WhiteNavBar',
  props: {
    
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>