<template>
  <div class="grid-container">
    <div class="grid-x grid-margin-x">
      <div class="cell small-4 small-offset-4">
        <UserList
          :users="users"
        >
        </UserList>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
  import { Component, Prop, Vue } from 'vue-property-decorator'
  import UserList from './components/UserList.vue';
  import User from './types/user.ts';
  const axios = require('axios').default;
  

  @Component({
    components: { UserList }
  })

  export default class App extends Vue {
    private userEntity: User = new User("Ivan", "Ivanovich", "Morgenshtern");
    private users: User[] = [];
    private loading: Boolean = false;
    scroll (): void {
      var that = this;
      window.onscroll = () => {
        let bottomOfWindow = Math.max(window.pageYOffset, document.documentElement.scrollTop, document.body.scrollTop) + window.innerHeight === document.documentElement.offsetHeight

        if (bottomOfWindow) {
          if(that.loading) return;
          that.fetchUser();
        }
      }
    }
    fetchUser() {
      var that = this;
      axios.get('http://localhost:3000/')
        .then(function (response: {data: {user: User}}) {
          that.users.push(response.data.user);
          console.log(that.loading)
          that.loading = false;
        })
        .catch(function (error: string) {
          that.loading = false;
        })
    }
    mounted() {
      for(var i = 0; i < 5; i++) {
        this.fetchUser();
      }
      this.scroll();
    }
  }
</script>