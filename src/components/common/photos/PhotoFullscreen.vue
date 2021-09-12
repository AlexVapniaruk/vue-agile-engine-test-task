<template>
  <div class="photo-fullscreen">
    <div class="photo-fullscreen__black">
      <div class="photo-fullscreen__photo-wrap">
        <img :src="photo.full_picture" alt="">
        <div class="photo-fullscreen__info">
          <div>
            {{ photo.camera }}
          </div>
          <div>
            {{ photo.tags }}
          </div>
          <div>
            {{ photo.author }}
          </div>
        </div>
      </div>
      <button @click="close">CLOSE</button>
    </div>
  </div>
</template>

<script>
import {mapState, mapActions} from 'vuex'

export default {
  name: "PhotoFullscreen",

  props: {
    id: {
      type: String,
      required: true
    }
  },

  computed: {
    ...mapState({
      photo: state => state.photos.photo
    })
  },

  created() {
    this.getPhoto({id: this.$props.id});
  },

  methods: {
    ...mapActions({
      'getPhoto': 'photos/getPhoto'
    }),
    close() {
      this.$emit('close')
    }
  }
}
</script>

<style lang="scss">
.photo-fullscreen {
  position: absolute;
  overflow-y: auto;
  top: 0;
  left: 0;
  width: 100%;
  min-height: 100%;
  z-index: 99;

  &__black {
    background: rgba(0, 0, 0, 0.8);
    width: 100%;
    height: 100%;
  }

  &__photo-wrap {
    text-align: center;
    position: relative;

  }

  &__info {
    position: absolute;
    bottom: 20px;
    color: white;
    font-size: 1.5rem;
    text-align: center;
    width: 100%;
  }
}
</style>