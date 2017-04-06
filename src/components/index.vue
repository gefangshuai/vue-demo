<template>
  <div class="text-center">
    <h1>{{ msg }}</h1>
    <router-link to="/modal">点击打开Modal</router-link>
    <p>打开Modal后，可尝试按下 <code>Command + R</code> 试试神器的效果！</p>
  </div>
</template>

<script>
export default {
  name: 'hello',
  data() {
    return {
      msg: 'Welcome to My Vue.js App'
    }
  }
}
</script>
