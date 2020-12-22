<template>
  <div class="home">
      Home
      <p>Hello my name is {{ name }} and I'm {{ age }} years old</p>
      <button @click="handleClick">Click me</button>
  </div>
</template>

<script>


export default {
  name: 'Home',
  setup () {
    let name = 'Mouhsine'
    let age = 25;

    function handleClick () {
      console.log('You clicked me')
    }

    return {  name, age,  handleClick }
  }
}
</script>
