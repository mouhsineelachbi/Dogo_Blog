import { ref } from 'vue';


const getPosts = () => {
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
    return { posts, error, load }
}

export default getPosts;