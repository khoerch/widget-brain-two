<template>
  <section class="sidebar">
    <header class="blue-header flex">
      <button class="flex">
        <font-awesome-icon icon="arrow-left" />
        <h2>TERMINAL OVERVIEW</h2>
      </button>
      <font-awesome-icon icon="bars" class="icon-bars"/>
    </header>
    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTny8XmbcOqIwsz6qGihPkEX8-QhNzS1eIrd5u7nNyGP79RSG-2tg" alt="location image">
    <div class="site-info">
      <h3>Terminal name</h3>
      <p>{{ terminal }}</p>
      <h3>Country Code</h3>
      <p>{{ country }}</p>
      <h3>Address</h3>
      <p>{{ address }}</p>
      <font-awesome-icon icon="map-marker-alt" class="icon-map" />
    </div>
  </section>
</template>

<script>
export default {
  name: 'SidebarLeft',
  props: {
    // Makes sure the prop inputs are strings, otherwise returns an error
    terminal: String,
    country: String,
    address: String,
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.sidebar {
	width: 35%;
  max-width: 350px;
}

h2 {
  font-size: 1.1em;
  margin: 0;
  padding-left: 10px;
  font-weight: 300;
}

img {
  width: 100%;
}

.site-info {
	padding: 20px;
  display: flex;
  flex-direction: column;
}

h3 {
  margin: 0;
  font-weight: 300;
  font-size: .8em;
}

p {
  margin: 3px 0 15px 0;
  font-size: 1.2em;
}

.icon-map {
  color: #4885ed;
  align-self: flex-end;
}

/* Rearranges the window and removes some info on smaller screens */
@media screen and (max-width: 1500px) {
	.sidebar {
		width: 100%;
    max-width: 100%;
	}
	.site-info, img {
		display: none;
	}
}
</style>