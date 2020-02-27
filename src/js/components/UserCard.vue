<template>
  <div class="card">
      <img src="https://get.foundation/sites/docs/assets/img/generic/rectangle-1.jpg">
      <div class="card-section">
        <h4>This is a card.</h4>
        <p>It has an easy to override visual style, and is appropriately subdued.</p>
      </div>
    </div>
</template>

<script>
export default {
  props:{
    title: String,
    image: String,
  }

}
</script>