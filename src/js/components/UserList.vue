<template>
  <div>
    <UserCard
      v-for="user in users"
      :key="user.id.value"
      :userEntity="user"
    >
    </UserCard>
  </div>
</template>

<script lang="ts">
  import { Component, Prop, Vue } from 'vue-property-decorator';
  import UserCard from './UserCard.vue';
  import User from '../types/user.ts';

  @Component({
    components: { UserCard }
  })

  export default class UserList extends Vue {
    @Prop({type: Array, default: null})
    public users!: User[]
    
  }
</script>