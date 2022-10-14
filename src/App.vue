<template>
  <div id="app">
    <!-- 头部组件 -->
    <Header />

    <!-- 一级路由出口 -->
    <router-view />

    <!-- 底部组件 -->
    <Footer />
  </div>
</template>

<script>
import Header from './components/Header'
import Footer from './components/Footer'

export default {
  name: 'App',
  components: {
    Header,
    Footer
  }
}
</script>

<style lang="less">
// style 属性多了一个 lang 属性，值为 less
// 这个 style 里面的代码按照 less 语法进行解析，就可以在 style 中写 less 代码
</style>
