<template>
  <div class="bankParent">
    <display-balance :balance="balance"></display-balance>
    <withdraw @withdraw="withdraw" :balance="balance" :money="money"></withdraw>
    <deposit @deposit="deposit" :balance="balance" :money="money"></deposit>
  </div>
</template>

<script>
import axios from "axios";
import DisplayBalance from "@/components/DisplayBalance.vue";
import Withdraw from "@/components/Withdraw.vue";
import Deposit from "@/components/Deposit.vue";
export default {
  name: "bankParent",
  components: {
    Withdraw,
    Deposit,
    DisplayBalance
  },
  data() {
    return {
      balance: 10,
      money: 0
    };
  },
  methods: {
    withdraw() {
      var result = /^\d+/.test(this.money);
      if (result && this.money <= this.balance) {
        this.balance -= this.money;
      }
    },
    async deposit() {
      const response = await axios.get("mock/service");
      var result = /^\d+/.test(this.money);
      if (result && this.money >= 0) {
        console.log(response);
        this.balance += response.data;
      }
    }
  }
};
</script>
