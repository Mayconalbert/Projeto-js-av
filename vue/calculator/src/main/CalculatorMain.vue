<template>
    <div class="calculator">
        <CalculatorDisplay />
        <CalculatorButton />
        <CalculatorButton />
       
    </div>
  
</template>

<script>
import CalculatorDisplay from '../components/CalculatorDisplay.vue'
import CalculatorButton from '../components/CalculatorButton.vue'
export default {
    components:{ CalculatorButton, CalculatorDisplay}

}
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