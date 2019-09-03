<template>
  <header class="flex">
    <h1>PREDICTIVE MAINTENANCE</h1>
    <div class="profile flex">
      <button class="header-items-right flex">
        <p>{{ user }}</p>
        <font-awesome-icon icon="chevron-down" />
      </button>
      <font-awesome-icon icon="power-off" class="icon-power header-items-right" />
    </div>
  </header>
</template>

<script>
export default {
  name: 'HeaderTitle',
  props: {
    user: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
header, button {
  justify-content: space-between;
}

header {
  padding-left: 100px;
  padding-right: 30px;
  border-bottom: solid rgb(219, 219, 219) 1px;
}

h1 {
  font-size: 1em;
  border-left: rgb(138, 138, 138) 2px solid;
  padding: 15px;
  margin: 5px;
}

.header-items-right {
  margin: 10px;
}

p {
  margin-right: 10px;
}
</style>