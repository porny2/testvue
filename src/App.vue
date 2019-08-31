<template>
  <div>
      <h1>New Application</h1>
      <navbar />
      <router-view />

    <!-- <h1>Hello Kgis</h1>

    <p>vue.js training</p>
           <hello/>
            <hello>
              </hello>
              -->

  </div>
</template>

<style scoped>
h1 { color:green}
</style>

<script>
import Navbar from './components/Navbar'
// import Hello from './components/Hello'
export default {
   components: {
        navbar: Navbar
    }

  }

</script>




