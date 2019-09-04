<template>
	<div class="chart-content">
		<h2>OPEN</h2>
		<chart :chart-data="datacollectionOpen" class="chart chart-open"></chart>
		<h2>CLOSE</h2>
		<chart :chart-data="datacollectionClosed" class="chart chart-closed"></chart>
	</div>
</template>

<script>
import Chart from "./../Chart.js";
export default {
	components: {
		Chart
	},
	data() {
		return {
			// The data for charts will be filled in when the component is mounted. Chose profile 2 as it had interesting data. Could be updated to make the profile selectable by user.
			datacollectionOpen: null,
			datacollectionClosed: null,
			profile: 2,
		};
	},
	mounted() {
		this.fillData();
	},
	methods: {
		fillData() {
			fetch('http://wb-predictivemaintenance-api.prsp7vkew2.eu-central-1.elasticbeanstalk.com/api/TorqueValues')
				.then(response => response.json())
				.then(data => data.filter(item => item.Profile === this.profile))
				.then(profile => {
					// Filter for the at open and at close data sets
					const profileOpen = profile.filter(item => item.Direction === 'Open')
					const profileClosed = profile.filter(item => item.Direction === 'Close')

					// Make empty containers to push data into from the arrays above
					const position = []
					const averageOpen = []
					const lastOpen = []
					const averageClosed = []
					const lastClosed = []

					// Push the data into the empty arrays. Position only has to be set once since it's the same for both
					profileOpen.forEach(item => {
						position.push(item.Position)
						averageOpen.push(item.AverageTorque)
						lastOpen.push(item.LastTorque)
					});
					profileClosed.forEach(item => {
						averageClosed.push(item.AverageTorque)
						lastClosed.push(item.LastTorque)
					});

					// Assign the data above to the data sets for the charts
					this.datacollectionOpen = {
						labels: position,
						datasets: [
							{
								label: "Average open torque",
								backgroundColor: "#4885ed",
								data: averageOpen
							},
							{
								label: "Last open torque",
								backgroundColor: "#A3C2F6",
								data: lastOpen
							}
						]
					};
					this.datacollectionClosed = {
						labels: position,
						datasets: [
							{
								label: "Average open torque",
								backgroundColor: "#4885ed",
								data: averageClosed
							},
							{
								label: "Last open torque",
								backgroundColor: "#A3C2F6",
								data: lastClosed
							}
						]
					};
				});
		},
	}
};
</script>

<style scoped>
.chart-content {
	margin: 50px;
	color: rgb(85, 85, 85);
}

</style>