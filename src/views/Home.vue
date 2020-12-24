<template>
  <div class="home">
      <h1> Home </h1>
      <PostList :posts="posts"/>
  </div>
</template>

<script>
import PostList from '../components/PostList.vue'
import { computed, reactive, ref, watch, watchEffect } from 'vue';


export default {
  name: 'Home',
  components: { PostList },
  setup () {
    const posts = ref([
      { title: 'Welcome to the blog', body: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat nihil nisi doloribus suscipit magni iusto porro harum, eveniet natus dicta vel modi accusamus reiciendis, unde vero debitis cupiditate ratione. Consectetur velit, eveniet labore vero ad ipsa sint quis dolorum. Blanditiis perferendis eos quisquam obcaecati commodi error, suscipit, a autem corrupti magni voluptatibus quo eligendi praesentium atque dolor veritatis totam! Iste, autem facilis? Sed veniam voluptate dolores similique, perspiciatis, itaque repellendus minus rerum praesentium molestias fugit quidem est neque ullam enim ducimus doloribus reiciendis a voluptatum. Quod facere molestiae, in quo itaque quasi vero, rerum sit commodi odit perspiciatis necessitatibus labore?', id: 1 },
      { title: 'Top 5 css tips', body: 'lorem ipsum' , id: 2 },
    ]);

    return { posts }
  }
}
</script>
