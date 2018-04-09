<template>
  <figure class="image-container">
    <img
      :src="imageSource"
      :alt="alt"
      class="image-container__image"
    >
    <image-link :img-id="imgId"/>
  </figure>
</template>

<script>
import ImageLink from './ImageLink.vue'

export default {
  props: {
    imgId: {
      type: Number,
      required: true
    },
    file: {
      type: String,
      required: true
    },
    alt: {
      type: String,
      required: true
    }
  },
  components: {
    ImageLink
  },
  computed: {
    imageSource () {
      return `/i/${this.file}`
    }
  }
}
</script>

<style>

.image-container {
  width: 100%;
}

.image-container__image {
  height: 240px;
  height: 75vmin;
  max-height: calc(.7 * 35rem);
  min-height: 240px;
  object-fit: contain;
  object-position: center;
  width: 100%;
}

.image-container__link::before {
  background: url(~assets/img/anchor.svg) center no-repeat;
  background-size: contain;
  content: "";
  display: block;
  flex: 0 0 .9rem;
  width: .9rem;
  height: .9rem;
  margin-right: .5rem;
}

</style>
