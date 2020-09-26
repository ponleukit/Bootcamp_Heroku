<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <TasksList/>
  </div>
</template>

<script>
import TasksList from './components/TasksList.vue';
import '../node_modules/materialize-css/dist/css/materialize.min.css';
import '../node_modules/materialize-css/dist/js/materialize.min.js';
export default {
  name: 'App',
  components: {
    TasksList
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
