<template>
  <div class="card">
      <img :src="userEntity.picture.large">
      <div class="card-section">
        <h4>{{ userEntity.name.first }} {{ userEntity.name.last }}</h4>
        <p><strong>Address</strong>: {{ userEntity.location.state }}, {{ userEntity.location.city }}, 
        {{ userEntity.location.street }} {{ userEntity.location.building }}, {{ userEntity.location.zip }}</p>
      </div>
    </div>
</template>

<script lang="ts">
  import { Component, Prop, Vue } from 'vue-property-decorator';
  import userInterface from '../interfaces/userInterface.ts';
  import User from '../types/user.ts';

  @Component

  export default class UserCard extends Vue {
    
    @Prop({type: Object, default: null})
    public userEntity!: User
    resolve(path: String) {
      return path;
    }
  }
</script>