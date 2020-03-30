<template>
 <div>
   <IntroHome></IntroHome>
   <WhereToListen></WhereToListen>
 </div>
</template>

<static-query>
query {
  metadata {
    siteName
  }
}
</static-query>
<script>
  import IntroHome from '~/components/IntroHome.vue'
  import WhereToListen from '~/components/WhereToListen.vue'
  
  export default {
    components: {
      IntroHome,
      WhereToListen
    }
  }
</script>

<style>

</style>
