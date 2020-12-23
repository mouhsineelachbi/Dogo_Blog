<template>
  <div class="home">
      <h1> Home </h1>
      <input type="text" v-model="search">
      <p> searched term -  {{ search }}</p>

      <div v-for="name in matching" :key="name">
        {{ name }}
      </div>

      <button @click="handleClick">stop watching</button>
      
  </div>
</template>

<script>
import { computed, reactive, ref, watch, watchEffect } from 'vue';


export default {
  name: 'Home',
  setup () {

    let search = ref('');

    // watch(search, ()=> console.log('watch function ran'))

    // watchEffect(()=>{
    //   console.log('watchEffect function is ran '+search.value);
    // })


    // How to stop watch or watchEffect is to invoke them by 
    const Stopwatch = watch(search, ()=> console.log('watch function ran'))
    const StopwatchEffect = watchEffect(()=>{ console.log('watchEffect function is ran '+search.value); });

    function handleClick() {
      Stopwatch();
      StopwatchEffect();
    }
    // End stop watch and watchEffect

    let names = ref(['Mouhsine', 'java', 'python', 'javascript', 'Math', 'physics'])

    let matching = computed( () => {
      return names.value.filter( name => {
        return name.includes(search.value);

      })
    })

    return {  search, names, matching, handleClick }
  }
}
</script>
