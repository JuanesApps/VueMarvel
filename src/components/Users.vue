<template>
  <div class="users">
    <h1>Componente Users</h1>
    <Lista :users="users"></Lista>
  </div>
</template>

<script>

import Lista from './Lista'

export default {
  name: 'Users',
  data: function(){
      return{
          users:[
            {id: '1', name: 'Juan'},
            {id:'2', name: 'Luis'}
        ]
      }
  },
  components:{
      Lista
  },
  props: {}
}
</script>
