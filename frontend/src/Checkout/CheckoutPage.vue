<template>
  <div class="checkout-container">
    <StepBar 
      :length = '4'
    />
  </div>  
</template>

<script>
import StepBar from './StepBar.vue';
export default {
  name: 'CheckoutPage',
  components: {
    StepBar
  }
}
</script>

<style scoped>
.checkout-container {
  width: 75%;
  margin: 0 auto;
  margin-top: 45px;
  min-height: 300px;
  background-color: white;
}
</style>
