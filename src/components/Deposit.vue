<template>
  <div class="deposit">
    <button>存錢</button>
  </div>
</template>

<script>
export default {
  name: "deposit",
  props: {
    money: {
      type: Number,
      required: true
    }
  },
  methods: {
    deposit() {
      return this.$emit("deposit");
    }
  }
};
</script>
