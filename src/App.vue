<template>
    <div class="container">
        Welcome to App Component.
        <div>
            <FirstComponent></FirstComponent>
        </div>
    </div>
</template>

<script>
import FirstComponent from './FirstComponent.vue'
    export default {
        components: {
            FirstComponent
        }
    }
</script>
