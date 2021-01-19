import { ref } from 'vue'


const getPost = (id) => {
    const post = ref(null);
    const error = ref(null);

    const load = async ()=> {
      try{
        const data = await fetch('http://localhost:3000/posts/'+id)
        if (!data.ok) throw Error('Post is not exist');

        // update posts value by passing data to It
        post.value = await data.json();

      }catch(err){
        error.value = err.message;
        console.error(error.value);
      } 
    }
    return { post, error, load }
}

export default getPost;