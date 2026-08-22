<template>
  <div class="calculator">
    <CalculatorDisplay value="1000" />
    <CalculatorButton label="AC" triple @onClick="clearMemory" />
    <CalculatorButton label="/" operation @onClick="setOperation" />
    <CalculatorButton label="7" @onClick="addDigit" />
    <CalculatorButton label="8" @onClick="addDigit" />
    <CalculatorButton label="9" @onClick="addDigit" />
    <CalculatorButton label="*" operation @onClick="setOperation" />
    <CalculatorButton label="4" @onClick="addDigit" />
    <CalculatorButton label="5" @onClick="addDigit" />
    <CalculatorButton label="6" @onClick="addDigit" />
    <CalculatorButton label="-" operation />
    <CalculatorButton label="1" @onClick="addDigit" />
    <CalculatorButton label="2" @onClick="addDigit" />
    <CalculatorButton label="3" @onClick="addDigit" />
    <CalculatorButton label="+" operation />
    <CalculatorButton label="0" double @onClick="addDigit"  />
    <CalculatorButton label="." @onClick="addDigit" />
    <CalculatorButton label="=" operation @onClick="setOperation" />
  </div>
</template>

<script>
import CalculatorDisplay from "../components/CalculatorDisplay.vue";
import CalculatorButton from "../components/CalculatorButton.vue";
export default {
  components: { CalculatorButton, CalculatorDisplay },
  methods: {
    clearMemory() {
      console.log('Limpar memória');
    },
    setOperation(operation) {
      console.log('Operation ' + operation);
    },
    addDigit(n) {
      console.log('Digito ' + n);
    },
  }
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
