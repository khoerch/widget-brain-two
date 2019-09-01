<template>
  <section class="main-content">
    <WhiteNavBar headings={{terminalList}}/>

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
      <Chart />
    </div>
  </section>
</template>

<script>
import Chart from './Chart.vue'
import WhiteNavBar from './WhiteNavBar.vue'

export default {
  name: 'MainContent',
  props: {
    terminal: String,
    country: String
  },
  data() {
    return {
      terminalList: [{
          title: 'Dashboard',
          active: false
        }, 
        {
          title: 'Asset Health',
          active: true
        }, 
        {
          title: 'Work Orders',
          active: false
        }
      ],
      assetList: ['Events', 'Position', 'Travel Time', 'Torque Profile', 'Work Orders', 'Alarm Analytics']
    }
  }
  components: {
    Chart,
    WhiteNavBar
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>