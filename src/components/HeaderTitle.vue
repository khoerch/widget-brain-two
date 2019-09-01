<template>
  <header>
    <h1>| PREDICTIVE MAINTENANCE</h1>
    <div class="profile">
      <p>{{ user }}</p>
      <button>^</button>
    </div>
  </header>
</template>

<script>
export default {
  name: 'HeaderTitle',
  props: {
    user: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>