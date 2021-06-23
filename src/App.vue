<template>
  <!--Hello!-->
  <div class="container">
    <Header  @Toggle-Add="toggleTasks" title="Task Tracker" :showAdd='showAdd'/>
    <transition name="switch">
      <div v-if="showAdd">
        <AddTask @add-Task='addTask' @Toggle-Add="toggleTasks" :showAdd ='showAdd' />
      </div>
    </transition>
    <Tasks id='TaskList'
      @toggle-reminder="ToggleReminder"
      @delete-Task="DeleteTask"
      :tasks="tasks"
    />
    <!--"I hope you like this app, it was hard to make :D" -Yassine Kharrat-->
    <transition name="footer">
      <Footer />
    </transition>
  </div>

</template>

<script>
import Header from "./components/header";
import Tasks from "./components/Tasks";
import AddTask from "./components/AddTask";
import Footer from "./components/footer";
import db from './fb';
import firebase from 'firebase/app';
import 'firebase/auth';

export default {
  name: "App",
  components: {
    Header,
    Tasks,
    AddTask,
    Footer,
  },
  data() {
    return {
      tasks: [],
      showAdd: false,
    };
  },
  methods: {
  
  /* Notification functions
  notifyMe() {
    if (!("Notification" in window)) {
      alert("This browser does not support system notifications");
    }
    else if (Notification.permission === "granted") {
      notify();
    }
    else if (Notification.permission !== 'denied') {
      Notification.requestPermission(function (permission) {
        if (permission === "granted") {
          notify();
        }
      });
    }
  },
  
  notify() {
    var notification = new Notification('TITLE OF NOTIFICATION', {
      icon: 'http://carnes.cc/jsnuggets_avatar.jpg',
      body: "Hey! You are on notice!",
    });

    notification.onclick = function () {
      window.open("http://carnes.cc");      
    };
    setTimeout(notification.close.bind(notification), 7000); 
  },
 */

    toggleTasks(){
    this.showAdd = !this.showAdd;
    },
    addTask(task){
      Notification.requestPermission();
    },
    // This delete function took greater time than other methods for now because 
    // it consists of checking whether or not the task we want to delete does exist in the list (the available tasks list) !
    // I tried to use the built-in change.type === 'removed' but it was kinda buggy. So i used to following structure
    // i removed the *task from the list and the database*, and believe me , it wasn't such an easy task :')
    async DeleteTask(id) {
      console.log(id)
      firebase.auth().onAuthStateChanged((user)=>{
        if (user){
          this.delete_listener(user.uid, id);
          }
        else{
          this.delete_listener("public", id);
        }
      })
      
    },
    // This one is the bad boy :(
    async ToggleReminder(id) {
      
      const rem = db.collection("tasks").doc(id).get()
      console.log(rem)
    },
    // for code visibility and clearence :D
    async refresh_listener(collection){
      db.collection(collection).onSnapshot(res => {
      const changes = res.docChanges();
      changes.forEach(change => {
        if(change.type === 'added'){
          this.tasks.push({
            ...change.doc.data(),
            id: change.doc.id
            })
          }
        })
      })
    },
    async delete_listener(collection,id){
    let task = db.collection(collection).doc(id)
        if (
        confirm(`Are you sure you want to delete ?`)
        ) {
        task.get().then((res) =>{
          this.tasks.forEach(elements =>{
            const target = Object.assign({}, elements);
            if (target.id === id){
              let index = this.tasks.indexOf(elements)
              if (index > -1){
                this.tasks.splice(index, 1)
              }
              task.delete();
            }
          })
        })
      }
    }
    // it ends here *such a relief*
  },
  // loads the data from firestore
  async created() {
    firebase.auth().signInAnonymously();
    firebase.auth().onAuthStateChanged((user)=>{
      if (user){
        this.refresh_listener(user.uid);
      }
      else{
        this.refresh_listener("public");
      }
    })
    
  },
  
};
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Itim&display=swap");

  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  html,
  body {
    font-family: Itim;
  }

  .container {
    max-width: 500px;
    margin: 30px auto;
    overflow: auto;
    min-height: 300px;
    border: 1px solid steelblue;
    padding: 30px;
    border-radius: 5px;
  }

  .btn {
    display: inline-block;
    background: black;
    color: aliceblue;
    border: none;
    padding: 10px 20px;
    margin: 5px;
    border-radius: 5px;
    cursor: pointer;
    text-decoration: none;
    font-size: 15px;
    font-family: inherit;
  }

  .btn:focus {
    outline: none;
  }

  .btn:active {
    transform: scale(0.98);
  }

  .btn-block {
    display: block;
    width: 100%;
  }

.switch-enter-from, .switch-leave-to{
  opacity: 0;
  transform: translateY(-20px);
}
.switch-enter-to, .switch-leave-from{
  opacity: 1;
  transform: translateY(0);
}
.switch-enter-active, .switch-leave-active{
  transition: all 0.5s ease;
}
</style>
