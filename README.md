# widget-brain-two
This is an updated version of the technical test. I made a more substantial version of the application

## Updates
* Used node and the Vue CLI to emulate a production build
* Solved the issue with the API request. Made a basic error in the initial 2-hour assessment. Realized I was not converting the data to JSON. Fixed this issue
* Read more on chart.js and vue-chartjs and incorporated them into the application
* Filtered the data from the API for torque data at open and close
* Passed the data to two charts 
* Spent some time on the styling to match the example. I'm sure there's a Google theme I could install, but I enjoyed the practice of styling with basic CSS
* Also added some basic responsive elements to move the sidebar when the screen size gets smaller

## Difficulties
* Ran into trouble with the options for the chart. When the data for the charts are passed through from the API, the options prop seems to be overwritten and lost.
* This prevents be from labeling the axis and changing the size of the charts
* Also believe this creates some weird effects when resizing the window on the browser

## Further functionality
* The buttons could be more dynamic. For example, the nav bars could have the 'active' class assigned when clicked to adjust the blue text and border
* The sidebar could slide back and forth on button clicks
* Could add a dropdown of options when the username is selected at the top

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Run your tests
```
npm run test
```

### Lints and fixes files
```
npm run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).
