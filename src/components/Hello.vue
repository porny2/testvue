<template>
  <div>
    <h1> My Hello </h1>

<div v-if="show">
            <p>John</p>
        </div>
        <hr />
        <div v-if="!show">
            <p>Hidden</p>
        </div>

    <h3>Counter {{ counter }}</h3>
     <button @click="updateCounter">Update</button>
     <br>
         <input type="text" v-model="name" />
        <p>{{ name }}</p>

         <div>
        <input type="number" v-model="amount" />
        <p>Amount: {{ amount }}</p>
          <div v-if="show">
        <p>VAT: {{ vat }}</p>
         </div>
        <p>VAT Amount: {{ vatAmount }}</p>
         <button @click="show=!show">Toggle</button>
        
         <p v-for="(x, y) in numbers" :key="y">{{ x }}</p>

           <p>
            <a href="https://google.com">Google</a>
        </p>
        <p>
            <a :href="url" target="_blank">{{ url }}</a>
        </p>
    
    </div>
  </div>
</template>

<script>

export default {
   computed: {
        vatAmount() {
            return this.vat + this.amount
        },
        vat() {
            return (this.amount * 7) / 100
        }
    },
    data() { 
        return {
        counter :1,
        name: 'John',
        amount :100,
        show: true,
         numbers: [10, 20, 30, 40, 50],
         url: 'https://google.com'
        }
    } ,
     
    methods: {
        updateCounter() {
            this.counter+=1
            
        }
 

}
}
</script>

<style>

h1 { color:rgb(38, 0, 128)}

</style>