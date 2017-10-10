<template>
    <div class="container">
        Welcome to App Component.
        <div>
            <BoardComponent></BoardComponent>
        </div>
    </div>
</template>

<script>
import BoardComponent from './BoardComponent.vue'
    export default {
        components: {
            BoardComponent
        }
    }
</script>
