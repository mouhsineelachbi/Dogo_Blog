<template>
  <div class="home">
      Home
      <p ref="p">Hello my name is {{ name }} and I'm {{ age }} years old</p>
      <button @click="handleClick">Click me</button>
  </div>
</template>

<script>
import { ref } from 'vue';


export default {
  name: 'Home',
  setup () {
    let name = 'Mouhsine'
    let age = 25;

    //  Creating a ref to the paragraphe in the template
    let p = ref(null);

    function handleClick () {
      console.log(p.value);
      p.value.classList.add('test')
      p.value.textContent = 'this is a lie'
    }

    return {  name, age,  handleClick, p }
  }
}
</script>
