<template>
  <div class="comics">
    <ul>
        <li class="nostyle" v-bind:key="l.id" v-for="l in lista">
            <h3>{{ l.title }}</h3><br>
            <img v-bind:src="l.thumbnail.path+'/portrait_medium.jpg'"/>
        </li>

    </ul>
  </div>
</template>

<script>
export default {
  name: 'Comics',
  props: {
    msg: String,
    lista: Array
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
li.nostyle {
    list-style-type: none;
}
</style>
