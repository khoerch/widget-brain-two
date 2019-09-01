// The two nav bars have the same styling so I created a component to be used for both

<template>
  <nav>
    <ul class="nav-white">
      <!-- Creates a list from each value in the array. Applies a class 'active' if class prop is true -->
      <li v-for="value in heading" :key="value" :class="{ 'active' : value.active }">
        <button>{{ value.title }}</button>
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