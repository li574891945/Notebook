<template>
    <div class="home">
        <tops></tops>
        <div id="main" class="content">
            <bookList></bookList>
        </div>
        <bottoms></bottoms>
    </div>
</template>
<style>
    @import "../assets/css/index.css";
 </style>
<script>
    import tops from '../components/tops.vue'
    import bottoms from '../components/bottoms.vue'
    import bookList from '../components/bookList.vue'
    // @ is an alias to /src
    export default {
        name: 'home',
        components: {
            tops,
            bottoms,
            bookList
        }
    }
</script>
