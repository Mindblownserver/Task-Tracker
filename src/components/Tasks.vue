<template>
  <transition name="switch" mode="out-in">
    <div v-if="tasks.length">
      <transition-group name='list'>
        <div :key="task.id" v-for="task in tasks">
          <Task @toggle-reminder="$emit('toggle-reminder', task.id)" @delete-task="$emit('delete-Task', task.id)" :task="task" />
        </div>
      </transition-group>
      </div>
    <div v-else>
      <div class="rest">
        <img src="../assets/HaveSomeRest.png" alt="">
        <p style="text-align: center;">:I</p>
      </div>
    </div>
  </transition>
</template>

<script>
import Task from "./Task";

export default {
  name: "Tasks",
  props: {
    tasks: Array,
    id: String,
  },
  emits: ["delete-Task", "toggle-reminder", "deleteTask"],
  components: {
    Task
  }
};
</script>

<style>
/*list transitions */
.list-enter-from{
  opacity: 0;
  transform: scale(0.5);
}
.list-enter-to{
  opacity: 1;
  transform: scale(1);
}
.list-enter-active{
  transition: all 0.3s ease;
}
.list-leave-from{
  opacity: 1;
  transform: scale(1);
}
.list-leave-to{
  opacity: 0;
  transform: scale(0.4);
}
.list-leave-active{
  transition: all 0.3s ease-out;
}

.rest{
  text-align: center;
  margin-bottom: 50px;
  margin-top: 50px;
  color: rgb(99, 99, 99);
}
/* switch transition*/
.switch-enter-from, .switch-leave-to{
  opacity: 0;
  transform: translateY(20px);
}
.switch-enter-to, .switch-leave-from{
  opacity: 1;
  transform: translateY(0);
}
.switch-enter-active, .switch-leave-active{
  transition: all 0.5s ease;
}
</style>
