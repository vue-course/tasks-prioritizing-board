<template>
  <div>
    <Task v-for="task of tasks" :task="task"> </Task>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import Task from '@/components/task.vue';

@Component({
    components: {
        Task,
    },
})
export default class TasksList extends Vue {
    public tasks: any;

    mounted() {
        console.log(this.tasks);
    }

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
h3 {
  margin: 40px 0 0;
}
.task-form {
  display: flex;
  flex-direction: column;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
