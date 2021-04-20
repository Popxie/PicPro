<template>
  <div id="app">
    <Main />
  </div>
</template>
<script>
import Main from './components/Main';

export default {
  name: 'App',
  components: {
    Main
  },
}
</script>

<style lang="scss">
* {
  margin: 0;
}
body,
#app {
  background: #000000;
}

</style>
