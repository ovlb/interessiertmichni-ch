<template>
  <section class="content">
    <image-container
      v-if="currentImage"
      :img-id="currentImage.id"
      :file="currentImage.file"
      :alt="currentImage.alt"
    />
    <the-placeholder v-else />
    <section class="app-control">
      <a
        @click.prevent="onButtonClick"
        :href="imageLink"
        aria-label="Neues Bild laden"
        class="app-icon app-icon--reload js-reload"
      />
    </section>
  </section>
</template>

<script>
import ImageContainer from '~/components/ImageContainer.vue'
import ThePlaceholder from '~/components/ThePlaceholder.vue'
import getRandomIndex from '~/ressource/getRandomIndex'

export default {
  components: {
    ImageContainer,
    ThePlaceholder
  },
  data () {
    return {
      imageCount: this.$store.state.images.length,
      shadowCurrentImage: null
    }
  },
  computed: {
    currentImage: {
      get () {
        return this.shadowCurrentImage
      },
      set (newImage) {
        this.$router.push({ path: `/${newImage.id}` })
        this.shadowCurrentImage = newImage
      }
    }
  },
  methods: {
    onButtonClick () {
      const i = getRandomIndex(this.imageCount)
      const newImage = this.$store.state.images[i]

      if (newImage.id === this.currentImage.id) {
        this.onButtonClick()
      } else {
        this.currentImage = newImage
      }
    },
    pushImageRoute (id) {

    }
  },
  mounted () {
    const { images } = this.$store.state
    const routeId = parseInt(this.$route.params.id)
    let newImage

    if (routeId) {
      newImage = images.find((img) => img.id === routeId)
    } else {
      const i = getRandomIndex(this.imageCount)
      newImage = images[i]
    }

    this.currentImage = newImage
  }
}
</script>

<style>

.app-icon {
  background-color: transparent;
  background-position: center;
  background-repeat: no-repeat;
  background-size: contain;
  border: 0;
  width: 2.25rem;
  height: 2.25rem;
}

.app-icon--reload {
  background-image: url(~assets/img/reload.svg);
}

.content {
  padding: 32px;
  padding: 10vmin;
  margin: 0 auto;
  max-width: 35rem;
}

.app-control {
  display: flex;
  justify-content: center;
  margin-top: 32px;
  margin-top: 2vmin;
}

</style>
