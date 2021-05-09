<template>
  <form @submit="onSubmit" class="add-form">
    <div class="form-control">
      <div class='whole-thing'></div>
      <label>Task</label>
      <input type="text" v-model="label" name="text" placeholder="Add Task" />
    </div>
    <div class="form-control">
      <label>Day & Time</label>
      <input
        type="date"
        name="day"
        v-model="day"
        placeholder= "Any Day & Time"
      />
      <p class="para">{{Current_date()}} by default</p>
    </div>
    <div class="form-control form-control-check">
      <label>Set Reminder</label>
      <input type="checkbox" v-model="reminder" name="reminder" />
    </div>

    <input type="submit" value="Save Task" :class="[label ?'btn1' : 'btn' ,'btn-block']" />
  </form>
</template>

<script >
export default{
    name: 'AddTask',
    data (){
        return{
            label: "",
            day: "",
            reminder : true
        }
    },
    methods: {
        Current_date(){
            const current = new Date();
            const date = `${current.getDate()}/${current.getMonth()+1}/${current.getFullYear()}`;
            return date;
        },
        onSubmit(e){
            e.preventDefault();
            if(!this.label){
                alert("Please add task");
                return;
            }
            if (this.day == ''){
                const current = new Date();
                const date = `${current.getDate()}/${current.getMonth()+1}/${current.getFullYear()}`;
                this.day = date;
            }
            const newTask = {
//                id: Math.floor(Math.random() * 10000),
                text: this.label,
                day: this.day,
                reminder: this.reminder,
            }
            
            this.$emit('add-Task', newTask)

            this.label = '';
            this.day = '';
            this.reminder = true;
        }
    },
}
</script>

<style scoped>
.add-form {
  margin-bottom: 30px;
}
.form-control {
  margin: 30px 0;
}
.form-control label {
  display: block;
}
.form-control input {
  width: 100%;
  height: 40px;
  margin: 5px;
  padding: 3px 7px;
  font-size: 17px;
}
.form-control-check {
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.form-control-check label {
  flex: 1;
}
.form-control-check input {
  flex: 2;
  height: 20px;
}
.para{
    margin-left: 12px;
    color: gray;
}

.btn1 {
  display: inline-block;
  background: darkgreen;
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

.btn1:focus {
  outline: none;
}

.btn1:active {
  transform: scale(0.98);
}



</style>