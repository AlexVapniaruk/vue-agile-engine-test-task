<template>
  <div class="grid-wrap">
    <div class="grid">
      <slot/>
    </div>
    <pagination/>
  </div>
</template>

<script>
import Pagination from "./Pagination";
export default {
  name: "Grid",
  components: {Pagination}
}
</script>

<style lang="scss">
.grid {
  display: grid;
  grid-template-columns: 1fr;

  @media (min-width: 768px) {
    grid-template-columns: 1fr 1fr;
  }

  @media (min-width: 1024px) {
    grid-template-columns: 1fr 1fr 1fr;
  }
}
</style>