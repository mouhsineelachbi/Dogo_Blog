<template>
  <div class="home">
      <h1> Home </h1>
      
      <div v-if="error"> {{ error }} </div>
      
      <div v-if="posts.length">
        <PostList :posts="posts"/>
      </div>

      <div v-else>
        <p>Loading....</p>
      </div>
      
  </div>
</template>

<script>
import PostList from '../components/PostList.vue'
import { computed, reactive, ref, watch, watchEffect } from 'vue';


export default {
  name: 'Home',
  components: { PostList },
  setup () {
    const posts = ref([]);
    const error = ref(null);

    const load = async ()=> {
      try{
        const data = await fetch('http://localhost:3000/posts')
        if (!data.ok) throw Error('No data available');

        // update posts value by passing data to It
        posts.value = await data.json();

      }catch(err){
        error.value = err.message;
        console.error(error.value);
      }
     
    }

    load();

    return { posts, error }
  }
}
</script>
