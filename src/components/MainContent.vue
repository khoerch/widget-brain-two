<template>
  <section class="main-content">
    <WhiteNavBar :heading="terminalList"/>

    <div class="chart-content">
      <h2 class="blue-header">Asset overview</h2>
      <WhiteNavBar :heading="assetList"/>
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
      assetList: [{
          title: 'Events',
          active: false
        }, 
        {
          title: 'Position',
          active: false
        }, 
        {
          title: 'Travel Time',
          active: false
        }, 
        {
          title: 'Torque Profile',
          active: true
        }, 
        {
          title: 'Work Orders',
          active: false
        }, 
        {
          title: 'Alarm Analytics',
          active: false
        }, 
      ]
    }
  },
  components: {
    Chart,
    WhiteNavBar,
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>