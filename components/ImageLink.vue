<template>
  <p
    @click="copyLink"
    aria-label="Link in die Zwischenablage kopieren"
    tabindex="-1"
    class="monospaced image-container__link"
  >
    {{ imageLink }}
  </p>
</template>

<script>
export default {
  props: {
    imgId: {
      type: Number,
      required: true
    }
  },
  computed: {
    imageLink () {
      return `https://www.interessiertmichni.ch/${this.imgId}/`
    }
  },
  methods: {
    copyLink () {}
  }
}
</script>

<style>

.image-container__link {
  align-items: center;
  background-color: unset;
  border: none;
  display: flex;
  margin-top: -.2rem;
  line-height: 1;
}

.image-container__link:focus {
  border-bottom: 1px solid #333;
  outline: none;
}

</style>
