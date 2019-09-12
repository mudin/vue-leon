<template>
  <div class="content">
    <vue-leon
      ref="leon"
      :options="options"
      :controll="controll"
      class="leon-holder"
    ></vue-leon>
    <button @click="drawing">animate</button>
  </div>
</template>

<script>
import VueLeon from "vue-leon";

export default {
  name: "Example",
  components: {
    VueLeon
  },
  data() {
    return {
      options: {
        text: "Hello World",
        size: 100,
        weight: 200
      },
      controll: {
        points: false,
        box: false,
        grids: false,
        roundCap: false,
        multiply: false,
      }
    };
  },
  mounted(){
    this.drawing();
  },
  methods: {
    drawing() {
      this.$refs.leon.drawing();
    }
  }
};
</script>
<style scoped>
.content {
  width: 100%;
  height: 100%;
}
.content .leon-holder {
  width: 100%;
  height: 100%;
}

.content button {
  position:absolute;
  margin: 5px;
  top:0;
}
</style>  