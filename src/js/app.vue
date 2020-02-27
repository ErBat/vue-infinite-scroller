<template>
  <div class="grid-container">
    <div class="grid-x grid-margin-x">
      <div class="cell small-4 small-offset-4">
        <UserCard>
        </UserCard>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
  import Vue from 'vue';
  import Component from 'vue-class-component';
  import UserCard from './components/UserCard.vue';
  @Component({
    components: { UserCard }
  })
  export default class App extends Vue {

  }
</script>