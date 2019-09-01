<template>
  <section class="main-content">
    <nav>
      <ul class="nav-inner">
        <li>Dashboard</li>
        <li class="active">Asset Health</li>
        <li>Work Orders</li>
      </ul>
    </nav>

    <div class="chart-content">
      <h2 class="blue-header">Asset overview</h2>
      <nav>
        <ul class="nav-inner">
          <li>Events</li>
          <li>Position</li>
          <li>Travel Time</li>
          <li class="active">Torque Profile</li>
          <li>Work Orders</li>
          <li>Alarm Analytics</li>
        </ul>
      </nav>
      
    </div>
  </section>
</template>

<script>
export default {
  name: 'HeaderTitle',
  props: {
    terminal: String,
    country: String
  },
  components: {
    
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>