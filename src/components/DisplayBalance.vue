<template>
  <div class="displayBalance">
    {{balance}}
  </div>
</template>

<script>
export default {
  name: "displayBalance",
  props: {
    balance: {
      type: Number,
      required: true
    }
  }
};
</script>
