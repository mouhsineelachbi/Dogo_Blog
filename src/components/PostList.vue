<template>
    <div class="post-list">
        <div v-for="post in posts" :key="post.id">
            <SinglePost :post="post"/>
        </div>
    </div>
</template>

<script>

import SinglePost from './SinglePost.vue';

export default {
    props: ['posts'],
    components: { SinglePost },
    // if we want to use props in the setup we do what comming 
    setup(props){
        props.posts.forEach(element => {
            console.log(element.title);
        });
    }

}
</script>

<style>

</style>