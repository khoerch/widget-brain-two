<template>
	<div class="chart-content">
		<chart :chart-data="datacollectionClosed" class="chart-closed"></chart>
		<chart :chart-data="datacollectionOpen" class="chart-open"></chart>
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
			datacollectionOpen: null,
			datacollectionClosed: null
		};
	},
	mounted() {
    // fetch('http://wb-predictivemaintenance-api.prsp7vkew2.eu-central-1.elasticbeanstalk.com/api/TorqueValues')
		// 	.then(response => response.json())
		// 	.then(res => {
		// 		console.log(res);
		// 	})
		this.fillData();
	},
	methods: {
		fillData() {
			fetch('http://wb-predictivemaintenance-api.prsp7vkew2.eu-central-1.elasticbeanstalk.com/api/TorqueValues')
				.then(response => response.json())
				.then(data => data.filter(item => item.Profile === 14))
				.then(profile => {
					const profileClosed = profile.filter(item => item.Direction === 'Close')
					const position = []
					const averageOpen = []
					const lastOpen = []
					profileClosed.forEach(item => {
						position.push(item.Position)
						averageOpen.push(item.AverageTorque)
						lastOpen.push(item.LastTorque)
					});
					console.log([averageOpen, averageOpen, position])
					this.datacollectionClosed = {
						labels: position,
						datasets: [
							{
							label: "Average open torque",
							backgroundColor: "#f87979",
							data: averageOpen
							},
							{
							label: "Last open torque",
							backgroundColor: "#A5CC82",
							data: lastOpen
							}
						]
					};
				});
			
			this.datacollectionOpen = {
				labels: [
					"January",
					"February",
					"March",
					"April",
					"May",
					"June",
					"July",
					"August",
					"September",
					"October",
					"November",
					"December"
				],
				datasets: [
					{
					label: "GitHub Commits",
					backgroundColor: "#f87979",
					data: [70, 20, 12, 39, 100, 40, 95, 80, 80, 20, 12, 101]
					},
					{
					label: "Monthly incomes",
					backgroundColor: "#A5CC82",
					data: [205, 408, 188, 190, 58, 200, 190, 400, 164, 254, 290, 201]
					}
				]
			};
		},
	}
};
</script>

<style>
</style>