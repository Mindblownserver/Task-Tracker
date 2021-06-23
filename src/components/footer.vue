<template >
    <footer class="fade">
        <p>2021 &copy; Yassine Kharrat</p>
    </footer>
</template>

<script>
export default {
    name: "Footer"
}
</script>


<style scoped>
a{
    color: rgb(20, 20, 20);
}
p{
    font-weight: bold;
    
}
footer{
    text-align: center;

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