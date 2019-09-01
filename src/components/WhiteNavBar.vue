<template>
  <nav>
    <ul class="nav-white">
      <li v-for="value in heading" :key="value" :class="value.active">
        {{ value.title }}
      </li>
    </ul>
  </nav>
</template>

<script>
export default {
  name: 'WhiteNavBar',
  props: {
    heading: Array,
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>