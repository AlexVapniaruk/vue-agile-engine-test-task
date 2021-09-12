<template>
  <div class="photos">
    <grid>
      <grid-element
          v-for="photo in photos"
          :key="photo.id"
          class="photos__item"
          @click.native="previewPhoto(photo)">
        <img :src="photo.cropped_picture" alt="">
      </grid-element>
    </grid>
    <photo-fullscreen
        v-if="activePhotoId"
        :id="activePhotoId"
        @close="closePhotoFullscreen"/>
  </div>
</template>

<script>
import Grid from "../common/Grid";
import GridElement from "../common/GridElement";
import {mapState, mapActions} from 'vuex';
import PhotoFullscreen from "../common/photos/PhotoFullscreen";

export default {
  //should be renamed to `pictures` because of api, to make general naming in project
  name: "Photos",

  data() {
    return {
      activePhotoId: false
    }
  },

  components: {PhotoFullscreen, GridElement, Grid},

  computed: {
    ...mapState({
      photos: state => state.photos.photos
    })
  },

  created() {
    window.auth.getToken();//should be placed on upper level
    this.getPhotos();
  },

  methods: {
    ...mapActions({
      'getPhotos': 'photos/getPhotos'
    }),
    previewPhoto(photo) {
      this.activePhotoId = photo.id
    },
    closePhotoFullscreen() {
      this.activePhotoId = false
    }
  }
}
</script>

<style lang="scss">
.photos {

  &__item {
    text-align: center;
    cursor: pointer;
  }
}
</style>