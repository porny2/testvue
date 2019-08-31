<template>
 <div>
        <section class="section">
            <div class="container">

                <h1> new Application</h1>
                <navbar />
                <router-view />

            </div>
        </section>
    </div>
</template>

<style scoped>
h1 { color:green}
</style>

<script>
import 'bulma/css/bulma.min.css'
import Navbar from './components/Navbar'
// import Hello from './components/Hello'
export default {
   components: {
        navbar: Navbar
    }

  }

</script>




