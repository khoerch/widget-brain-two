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
      <TorqueChart />
    </div>
  </section>
</template>

<script>
import TorqueChart from './TorqueChart.vue'
import WhiteNavBar from './WhiteNavBar.vue'

export default {
  name: 'MainContent',
  props: {
    terminal: String,
    country: String
  },
  data() {
    return {
      // Different objects for the white nav bar component. Id value helps vue organize the lists
      terminalList: [{
          title: 'Dashboard',
          active: false,
          id: 1
        }, 
        {
          title: 'Asset Health',
          active: true,
          id: 2
        }, 
        {
          title: 'Work Orders',
          active: false,
          id: 3
        }
      ],
      assetList: [{
          title: 'Events',
          active: false,
          id: 1
        }, 
        {
          title: 'Position',
          active: false,
          id: 2
        }, 
        {
          title: 'Travel Time',
          active: false,
          id: 3
        }, 
        {
          title: 'Torque Profile',
          active: true,
          id: 4
        }, 
        {
          title: 'Work Orders',
          active: false,
          id: 5
        }, 
        {
          title: 'Alarm Analytics',
          active: false,
          id: 6
        }, 
      ]
    }
  },
  components: {
    TorqueChart,
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