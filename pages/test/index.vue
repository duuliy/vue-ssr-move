<template>
    <section class="container">
        555
        <div class="ggg">
            666
        </div>
        <mt-button type="primary">primary</mt-button>
    </section>
</template>

<script>
export default {
  head: {
    script: [{ src: "signalr-client/signalr.min.js" }]
  },
  data() {
    return {};
  },
  created() {},
  mounted() {
    console.log(signalR);
  }
};
</script>

<style type="text/css" scoped lang='less'>
.container{
    .ggg{
        color:red;
    }
}
</style>
