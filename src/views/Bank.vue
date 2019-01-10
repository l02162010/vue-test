<template>
  <div class="bank">
    {{balance}}
    <button class="deposit" @click="deposit">存錢</button>
    <button class="withdraw" @click="withdraw">領錢</button>
  </div>
</template>

<script>
export default {
  name: "bank",
  data() {
    return {
      balance: 10,
      money: 0
    };
  },
  methods: {
    deposit() {
      if (typeof this.money === "number" && this.money >= 0) {
        this.balance += this.money;
      }
    },
    withdraw() {
      var result = /^\d+/.test(this.money);
      if (result && this.money <= this.balance) {
        this.balance -= this.money;
      }
    }
  }
};
</script>
