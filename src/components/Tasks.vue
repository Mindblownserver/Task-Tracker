<template>
  <div :key="task.id" v-for="task in tasks">
    <Task @toggle-reminder="$emit('toggle-reminder', task.id)" @delete-task="$emit('delete-Task', task.id)" :task="task" />
  </div>
</template>

<script>
import Task from "./Task";

export default {
  name: "Tasks",
  props: {
    tasks: Array
  },
  emits: ["delete-Task", "toggle-reminder"],
  components: {
    Task
  }
};
</script>
