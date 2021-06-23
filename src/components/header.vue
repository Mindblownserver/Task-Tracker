<template>
    <header class="fade">
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

.fade{
  animation: fadeIn 1.5s;
  -webkit-animation: fadeIn 1.5s;
  -moz-animation: fadeIn 1.5s;
  -o-animation: fadeIn 1.5s;
  -ms-animation: fadeIn 1.5s;
}
@keyframes fadeIn {
  0% {opacity:0;}
  100% {opacity:1;}
}

@-moz-keyframes fadeIn {
  0% {opacity:0;}
  100% {opacity:1;}
}

@-webkit-keyframes fadeIn {
  0% {opacity:0;}
  100% {opacity:1;}
}

@-o-keyframes fadeIn {
  0% {opacity:0;}
  100% {opacity:1;}
}

@-ms-keyframes fadeIn {
  0% {opacity:0;}
  100% {opacity:1;}
}

</style>