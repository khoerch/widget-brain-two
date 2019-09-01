<template>
  <section class="sidebar">
    <h2 class="blue-header">Terminal Overview</h2>
    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTny8XmbcOqIwsz6qGihPkEX8-QhNzS1eIrd5u7nNyGP79RSG-2tg" alt="location image">
    <div class="site-info">
      <h3>Terminal name</h3>
      <p>{{ terminal }}</p>
      <h3>Country Code</h3>
      <p>{{ country }}</p>
      <h3>Address</h3>
      <p></p>
    </div>
  </section>
</template>

<script>
export default {
  name: 'HeaderTitle',
  props: {
    terminal: String,
    country: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>