<template>
  <div id="app">
    <HelloWorld></HelloWorld>
    <Calculator></Calculator>
    <Total></Total>

  </div>
</template>

<script>

import HelloWorld from './components/HelloWorld'
import Calculator from './components/Calculator'
import Total from './components/Total'



export default {
  components:{
    HelloWorld,
    Calculator,
    Total
  }
}
</script>
