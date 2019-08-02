<template>
  <div class="lista">
    Lista {{ users.lenght }}
    <ul>
        <li v-bind:key="user.id" v-for="user in users">
            {{user.name}}
        </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'Lista',
  props: ['users']
}
</script>
