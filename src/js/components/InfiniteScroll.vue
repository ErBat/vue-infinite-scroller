<template>
  <div>
    <div v-if="loading" class="loader"></div>
  </div>
</template>

<script lang="ts">
  import { Component, Prop, Vue } from 'vue-property-decorator';

  @Component

  export default class InfiniteScroll extends Vue {
    @Prop({type: Boolean, default: null})
    public loading!: Boolean;

    scroll (): void {
      window.onscroll = () => {
        let bottomOfWindow = Math.max(window.pageYOffset, 
        document.documentElement.scrollTop, 
        document.body.scrollTop) + 
        window.innerHeight === document.documentElement.offsetHeight;

        if (bottomOfWindow) {
          if(this.loading) return;
          this.$emit("loadMore");
        }
      }
    }

    mounted() {
      this.scroll();
    }
    
  }
</script>