<template>
  <figure class="image-container">
    <img
      :src="imageSource"
      :alt="alt"
      class="image-container__image"
    >
    <p class="monospaced image-container__link">{{ imageLink }}</p>
  </figure>
</template>

<script>
export default {
  props: {
    file: {
      type: String,
      required: true
    },
    alt: {
      type: String,
      required: true
    }
  },
  computed: {
    imageSource () {
      return `/i/${this.file}`
    },
    imageLink () {
      return `https://www.interessiertmichni.ch/i/${this.file}`
    }
  },
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

.image-container__link {
  background-color: unset;
  display: flex;
  margin-top: -.2rem;
}

.image-container__link::before {
  background: url(~assets/img/anchor.svg) center no-repeat;
  background-size: contain;
  content: "";
  display: block;
  flex: 0 0 1rem;
  width: 1rem;
  height: 1rem;
  margin-right: .5rem;
}

</style>
