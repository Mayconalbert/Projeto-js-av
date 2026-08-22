<template>
  <div class="calculator">
    <CalculatorDisplay value="1000" />
    <CalculatorButton label="AC" triple @onCalcButtonClink="clearMemory" />
    <CalculatorButton label="/" operation @onClacButtonClink="setOperation" />
    <CalculatorButton label="7" @onClacButtonClink="addDigit" />
    <CalculatorButton label="8" />
    <CalculatorButton label="9" />
    <CalculatorButton label="*" operation />
    <CalculatorButton label="4" />
    <CalculatorButton label="5" />
    <CalculatorButton label="6" />
    <CalculatorButton label="-" operation />
    <CalculatorButton label="1" />
    <CalculatorButton label="2" />
    <CalculatorButton label="3" />
    <CalculatorButton label="+" operation />
    <CalculatorButton label="0" double />
    <CalculatorButton label="." />
    <CalculatorButton label="=" operation />
  </div>
</template>

<script>
import CalculatorDisplay from "../components/CalculatorDisplay.vue";
import CalculatorButton from "../components/CalculatorButton.vue";
export default {
  components: { CalculatorButton, CalculatorDisplay },
  methods: {
    clearMemory() {
      console.log("Limpar memória");
    },
    setOperation(operation) {
      console.log("Operantion " + operation);
    },
    addDigit(n) {
      console.log("Digito " + n);
    },
  },
};
</script>

<style>
.calculator {
  height: 320px;
  width: 235px;
  border-radius: 5px;
  overflow: hidden;

  display: grid;
  grid-template-columns: repeat(4, 25%);
  grid-template-rows: 1fr 48px 48px 48px 48px 48px;
}
</style>
