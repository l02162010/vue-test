import { shallowMount } from "@vue/test-utils";
import BankParent from "@/views/BankParent.vue";
// import Withdraw from "@/components/Withdraw.vue";
import Deposit from "@/components/Deposit.vue";
// import DisplayBalance from "@/components/DisplayBalance.vue";
jest.mock("axios", () => ({
  get: jest.fn(() => Promise.resolve({ data: 3 }))
}));

describe("BankParent", () => {
  // it("DisplayBalance", () => {
  //   const wrapper = shallowMount(BankParent);
  //   const DisplayBalanceWrapper = wrapper.find(DisplayBalance);
  //   expect(DisplayBalanceWrapper.props().balance).toBe(10);
  // });
  it("原本帳戶有 10 元，存入 5 元之後，帳戶餘額變 15 元", done => {
    const wrapper = shallowMount(BankParent);
    wrapper.vm.balance = 10;
    wrapper.vm.money = 5;
    wrapper.find(Deposit).vm.$emit("deposit");
    wrapper.vm.$nextTick(() => {
      expect(wrapper.vm.balance).toBe(15);
      done();
    });
  });
  // it("原本帳戶有 10 元，存入 -5 元之後，帳戶餘額還是 10 元（不能存入小於等於零的金額）", () => {
  //   const wrapper = shallowMount(BankParent);
  //   wrapper.vm.balance = 10;
  //   wrapper.vm.money = -5;
  //   wrapper.find(Deposit).vm.$emit("deposit");
  //   const DisplayBalanceWrapper = wrapper.find(DisplayBalance);
  //   expect(DisplayBalanceWrapper.props().balance).toBe(10);
  // });
  // it("原本帳戶有 10 元，領出 5 元之後，帳戶餘額變 5 元", () => {
  //   const wrapper = shallowMount(BankParent);
  //   wrapper.vm.balance = 10;
  //   wrapper.vm.money = 5;
  //   wrapper.find(Withdraw).vm.$emit("withdraw");
  //   const DisplayBalanceWrapper = wrapper.find(DisplayBalance);
  //   expect(DisplayBalanceWrapper.props().balance).toBe(5);
  // });
  // it("原本帳戶有 10 元，試圖領出 20 元，帳戶餘額還是 10 元，但無法領出（餘額不足）", () => {
  //   const wrapper = shallowMount(BankParent);
  //   wrapper.vm.balance = 10;
  //   wrapper.vm.money = 20;
  //   wrapper.find(Withdraw).vm.$emit("withdraw");
  //   const DisplayBalanceWrapper = wrapper.find(DisplayBalance);
  //   expect(DisplayBalanceWrapper.props().balance).toBe(10);
  // });
  // it("原本帳戶有 10 元，領出 -5 元之後，帳戶餘額還是 10 元（不能領出小於或等於零的金額）", () => {
  //   const wrapper = shallowMount(BankParent);
  //   wrapper.vm.balance = 10;
  //   wrapper.vm.money = -5;
  //   wrapper.find(Withdraw).vm.$emit("withdraw");
  //   const DisplayBalanceWrapper = wrapper.find(DisplayBalance);
  //   expect(DisplayBalanceWrapper.props().balance).toBe(10);
  // });
});
// 存錢功能
// 原本帳戶有 10 元，存入 5 元之後，帳戶餘額變 15 元
// 原本帳戶有 10 元，存入 -5 元之後，帳戶餘額還是 10 元（不能存入小於等於零的金額）
// 領錢功能
// 原本帳戶有 10 元，領出 5 元之後，帳戶餘額變 5 元
// 原本帳戶有 10 元，試圖領出 20 元，帳戶餘額還是 10 元，但無法領出（餘額不足）
// 原本帳戶有 10 元，領出 -5 元之後，帳戶餘額還是 10 元（不能領出小於或等於零的金額）
