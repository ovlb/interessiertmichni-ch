<template>
  <div
    aria-label="Bitte warten"
    class="placeholder"
  >
    <span
      aria-hidden="true"
      class="shruggy"
    >
      <span class="shruggy--part shruggy--left">¯\_</span>
      <span class="shruggy--part shruggy--center">(ツ)</span>
      <span class="shruggy--part shruggy--right">_/¯</span>
    </span>
  </div>
</template>

<script>
export default {

}
</script>

<style>

@keyframes shruggyLeft {
  from {
    transform: translateY(0);
    transform-origin: left bottom;
  }

  50% {
    transform: translateY(-3%) rotate(-2deg);
    transform-origin: left bottom;
  }

  to {
    transform-origin: left bottom;
    transform: translateY(0);
  }
}

@keyframes shruggyRight {
  from {
    transform-origin: right bottom;
    transform: translateY(0);
  }

  50% {
    transform: translateY(-3.33333%) rotate(2deg);
    transform-origin: right bottom;
  }

  to {
    transform-origin: right bottom;
    transform: translateY(0);
  }
}

.shruggy {
  display: flex;
}

.shruggy--part {
  display: block;
}

.shruggy--left {
  animation: shruggyLeft 1s linear infinite both;
}

.shruggy--right {
  transform-origin: left bottom;
  animation: shruggyRight 1s linear infinite both;
}

.placeholder {
  align-items: center;
  background: aliceblue;
  height: 66vmin;
  display: flex;
  font-size: 3rem;
  justify-content: center;
  max-height: calc(.66 * 35rem);
}

</style>
