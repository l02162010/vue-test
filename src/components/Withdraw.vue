<template>
  <div class="withdraw">
    <button @click="withdraw">領錢</button>
  </div>
</template>

<script>
export default {
  name: "withdraw",
  props: {
    money: {
      type: Number,
      required: true
    },
    balance: {
      type: Number,
      required: true
    }
  },
  methods: {
    withdraw() {
      return this.$emit("withdraw");
    }
  }
};
</script>
