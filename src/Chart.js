import { Bar, mixins } from 'vue-chartjs'

export default {
    extends: Bar,
    mixins: [mixins.reactiveProp],
    props: {
        chartData: {
          type: Object,
          default: null
        },
        options: {
          type: Object,
          default: null
        }
      },
    data() {
        return {
            options: { //Chart.js options. The options seem to be overwritten when the data is loaded from the API. Still debugging...
                scales: {
                    yAxes: [{
                        ticks: {
                            beginAtZero: true
                        },
                        gridLines: {
                            display: false
                        },
                        scaleLabel: {
                            display: true,
                            labelString: 'Valve position'
                        }
                    }],
                    xAxes: [{
                        gridLines: {
                            display: false
                        },
                        scaleLabel: {
                            display: true,
                            labelString: 'Required torque (%)'
                        }
                    }]
                },
                legend: {
                    display: true,
                    labels: {
                        usePointStyle: true,
                    }
                },
                responsive: true,
                maintainAspectRatio: false,
            }
        }
    },
    mounted() {
        this.renderChart(this.chartData, this.options)
    }

}