<template>
  <div class="container">
    <Header @Toggle-Add="toggleTasks" title="Task Tracker" :showAdd='showAdd'/>
    <div v-if="showAdd">
      <AddTask @add-Task='addTask' />
    </div>
    <Tasks
      @toggle-reminder="ToggleReminder"
      @delete-Task="DeleteTask"
      :tasks="tasks"
    />
    <Footer />
  </div>

</template>

<script>
import Header from "./components/header";
import Tasks from "./components/Tasks";
import AddTask from "./components/AddTask"
import Footer from "./components/footer"

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
      showAdd: false
    };
  },
  methods: {
  
  
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


    toggleTasks(){
    this.showAdd = !this.showAdd;
    },


    async addTask(task){
      Notification.requestPermission();
      const res = await fetch("api/tasks", {
        method: "POST",
        headers: {
          'Content-type': 'application/json',
        },
        body: JSON.stringify(task),
      });
      const data = await res.json();

      this.tasks = [...this.tasks,data];
      this.showAdd = !this.showAdd;
    },

    async DeleteTask(id) {
      if (
        confirm(`Are you sure you want to delete "${this.tasks[id - 1].text}"?`)
      ) {
        const res = await fetch(`api/tasks/${id}`, {
          method: 'DELETE',
        });
        
        res.status === 200 ? (this.tasks = this.tasks.filter(task => task.id !== id)) : (alert('Error removing task!'))

      }
    },
    // This one is the bad boy :(
    async ToggleReminder(id) {
      const res = await fetch(`api/tasks/${id}`);
      const taskToToggle = await res.json();
      const updTask = { ...taskToToggle, reminder: !taskToToggle.reminder }
      const results = await fetch(`api/tasks/${id}`, {
        method: 'PUT',
        headers: {
          'Content-type': 'application/json',
        },
        body: JSON.stringify(updTask),
      })
      const data = await results.json();
      console.log(data)
      this.tasks = this.tasks.map((task) =>
        task.id === id ? { ...task, reminder: data.reminder } : task
      )
      /*
      const updTask = { ...taskToToggle, reminder: taskToToggle.reminder }
      const results = await fetch(`api/tasks/${id}`, {
        method: 'PUT',
        headers: {
          'Content-type': 'application/json',
        },
        body: JSON.stringify(updTask),
      })
      console.log(typeof taskToToggle);
      const data = await res.json()
      this.tasks = this.tasks.map((task) =>
        task.id === id ? { ...task, reminder: !data.reminder } : task
      )
      */
    },
    // it ends here *such a relief*
    async fetchInfo(){
      const res = await fetch("api/tasks");
      const results = await res.json();
      return results;
    }
  },
  async created() {
    this.tasks = await this.fetchInfo();
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
</style>
