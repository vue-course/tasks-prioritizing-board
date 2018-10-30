<template>
  <form class="task-form" v-on:submit="add">
    <input placeholder="Title" v-model="model.title">
    <textarea placeholder="Description" v-model="model.description">
    </textarea>
    <button type="submit">add</button>
  </form>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';

@Component
export default class AddTask extends Vue {
  model = {title: 'title' , description: 'desc'};

  add() {
    console.log(this.model.title);
    this.$emit('add-item', this.model);
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
