<template>
  <div class="page">
    <ul>
      <li v-for="produto in produtos" :key="produto.id">
        <button class="menos" @click="produto.valor -=500">-</button>
        <button class="mais" @click="produto.valor +=500">+</button>

        <h4><b>{{produto.nome}}</b></h4>
        <hr>
          Valor: R$ {{produto.valor}},00
          <span v-if="produto.valor === 1000"><b> - PROMOCAO </b>
          </span>
      </li>
    </ul>
  </div>
</template>

<script>

export default {
  data(){
    return{
      produtos:[
        {
          id: 1,
          nome: "Mypush",
          valor: 1000
        },
        {
          id: 2,
          nome: "Data Engine",
          valor: 2000
        },
        {
          id: 3,
          nome:"People",
          valor: 1500
        }
      ]
    }
  },
  computed:{
    valorTotal (){
      return this.produtos.reduce((sum, produto) =>{
          return sum + produto.valor
      }, 0)
    }
  }
}
</script>

<style scoped>
  ul{
    list-style-type: none;
  }
  li{
    border-style: solid;
    box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.3);
    width: 20%;
    text-align: center;
    float: left;
    margin-right: 10px;
  }
</style>