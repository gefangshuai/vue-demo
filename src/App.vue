<template>
  <div id="app">
    <my-nav></my-nav>
    <router-view></router-view>
    <my-footer></my-footer>
  </div>
</template>

<script>
import Nav from '@/components/nav'
import Footer from '@/components/footer'
export default {
  name: 'app',
  
  data() {
    return {
      activeIndex: '1'
    }
  },
  methods: {
    
  },
  components: {
    MyNav: Nav,
    MyFooter: Footer
  }
}
</script>
