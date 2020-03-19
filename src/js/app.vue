<template>
  <div class="grid-container">
    <div class="grid-x grid-margin-x">
      <div class="cell small-4 small-offset-4">
        <UserList
          :users="users"
        >
        </UserList>
        <InfiniteScroll @loadMore="loadMore" :loading="loading">
        </InfiniteScroll>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
  import { Component, Prop, Vue } from 'vue-property-decorator'
  import UserList from './components/UserList.vue';
  import InfiniteScroll from './components/InfiniteScroll.vue';
  import User from './types/user.ts';
  const axios = require('axios').default;
  

  @Component({
    components: { UserList, InfiniteScroll }
  })

  export default class App extends Vue {
    private userEntity: User = new User("Ivan", "Ivanovich", "Morgenshtern");
    private users: User[] = [];
    private loading: Boolean = false;

    fetchUser() {
      var that = this;
      axios.get('http://localhost:3000/')
        .then(function (response: {data: {user: User}}) {
          that.users.push(response.data.user);
          that.loading = false;
        })
        .catch(function (error: string) {
          that.loading = false;
        })
    }

    loadMore (){
      if(this.loading) return;
      this.loading = true;
      this.fetchUser();
    }

    mounted() {
      for(var i = 0; i < 5; i++) {
        this.fetchUser();
      }
    }
  }
</script>