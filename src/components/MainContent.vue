<template>
  <section class="main-content">
    <WhiteNavBar :heading="terminalList"/>
    <div class="asset-overview">
      <header class="blue-header flex">
        <div class="blue-header-left flex">
          <h2 class="left-item">Asset overview</h2>
          <font-awesome-icon icon="arrow-right" class="left-item" />
          <div class="orange-marker left-item"></div>
          <h2 class="left-item">Master station 1-1</h2>
        </div>
        <font-awesome-icon icon="map-marker-alt" />
      </header>
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
.main-content {
	width: 100%;
	background: rgb(231, 231, 231);
}

.asset-overview {
	margin: 20px;
	background: white;
  box-shadow: 0 0 5px darkgray;
}

h2 {
  font-size: 1.1em;
  margin: 0;
  padding-left: 10px;
  font-weight: 300;
}

.orange-marker {
  background: orange;
  height: 16px;
  width: 16px;
  border: solid 3px white;
  border-radius: 100%;
}

.left-item {
  margin: 5px 10px;
}
</style>