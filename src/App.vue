<template>
    <div id="app">
        <Main></Main>
    </div>
</template>

<script>

    import Main from "./views/Main";

    export default {
        name: 'app',
        components: {
            Main
        }
    }
</script>

<style>
    #app {
        font-family: 'Avenir', Helvetica, Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        text-align: center;
        color: #2c3e50;
        margin-top: 0px;
    }
</style>
