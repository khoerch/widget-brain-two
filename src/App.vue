// User and terminal information are passed as strings but could be dynamically added for a fully functioned site
<template>
  <div id="app">
    <HeaderTitle user="Kevin Hoercher"/>
    <main>
      <SidebarLeft terminal="WEST" country="NLD"/>
      <MainContent />
    </main>
  </div>
</template>

<script>
import HeaderTitle from './components/HeaderTitle.vue'
import SidebarLeft from './components/SidebarLeft.vue'
import MainContent from './components/MainContent.vue'

export default {
  name: 'app',
  components: {
    HeaderTitle,
    SidebarLeft,
    MainContent
  }
}
</script>

<style>
* {
  box-sizing: border-box;
}

body {
	font-family: Arial, sans-serif;
	margin: 0;
	color: rgb(138, 138, 138);
}

ul {
	list-style-type: none;
	margin: 0;
	padding: 0;
}

button {
	border: none;
	background: none;
	color: inherit;
	padding: 5px;
}

main {
	display: flex;
}

.flex {
	display: flex;
	align-items: center;
}

.blue-header {
	justify-content: space-between;
	margin: 0;
	padding: 10px 15px 10px 20px;
	background: #4885ed;
	color: white;
}

/* Rearranges the window and removes some info on smaller screens */
@media screen and (max-width: 1500px) {
  main {
    flex-direction: column;
  }
}
</style>
