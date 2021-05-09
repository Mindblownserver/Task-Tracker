<template>
    <header>
        <h1>{{title}}</h1>
        <Button @ToggleAdd="Toggle" :text="showAdd ? 'Close menu' : 'Add Task'" :color="showAdd ? 'FireBrick' : 'ForestGreen'"/>
    </header>
</template>

<script>
import Button from './button'

export default {
    name: 'Header',
    props: {
        title: String,
        showAdd: Boolean
    },
    components: {
        Button
    },
    emits: ['ToggleAdd'],
    methods: {
        Toggle(){
            this.$emit('ToggleAdd');
        }
    },
}
</script>

<style scoped>
header{
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 20px;
}
</style>