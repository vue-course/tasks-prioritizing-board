<template>
  <div>
    <AddTask @add-item="addItem"></AddTask>
    <TasksList :tasks="tasks"></TasksList>
  </div>
</template>

<script lang="ts">
import {Component, Prop, Vue} from 'vue-property-decorator';
import AddTask from '@/components/add-task.vue';
import TasksList from '@/components/tasks-list.vue';

@Component({
  components: {
      AddTask,
      TasksList,
  },
})
export default class Home extends Vue {
    public tasks;

    public addItem(item: any) {
         this.tasks.push( {title: item.title});
      //  this.tasks = [...this.tasks, {title: item.title}];
    }
}
</script>
