// The two nav bars have the same styling so I created a component to be used for both

<template>
  <nav>
    <ul class="nav-white flex">
      <!-- Creates a list from each value in the array. Applies a class 'active' if class prop is true -->
      <li v-for="value in heading" :key="value.id" :class="{ 'active' : value.active }">
        <button>{{ value.title.toUpperCase() }}</button>
      </li>
    </ul>
  </nav>
</template>

<script>
export default {
  name: 'WhiteNavBar',
  props: {
    heading: Array,
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.active {
	color: #4885ed;
	border-bottom: solid 4px #4885ed;
}

.nav-white {
	background: white;
	padding: 0 15px;
  border-bottom: solid 1px rgb(196, 196, 196);
}

.nav-white > li {
	padding: 10px 20px;
}

button {
  font-weight: bold;
}
</style>