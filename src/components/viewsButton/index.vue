<template>
  <div :class="[type, size]" class="btn" @click="$emit('click')">
    <slot></slot>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  props: {
    type: {
      type: String,
      default: "default",
    },
    size: {
      type: String,
      default: "large",
    },
  },
  created() {},

  methods: {},
};
</script>

<style scoped>
.btn {
  width: 100px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 4px;
  border-radius: 5px;
  cursor: pointer;
}
div {
  background-color: #eee;
  color: #000;
}
.default {
  background-color: #eee;
  color: #000;
}
.success {
  background-color: blue;
  color: white;
}
.mini {
  width: 50px;
  height: 30px;
}
</style>
