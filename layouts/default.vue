<template>
  <main class="container">
    <header class="main-header">
      <h1 aria-label="Interessiert mich nicht">¯\_(ツ)_/¯</h1>
    </header>
    <nuxt/>
  </main>
</template>

<style>
html {
  font-family: "Helvetica Neue", "Helvetica", Arial, sans-serif;
  font-size: 100%;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
}

body {
  color: #333;
}

*, *:before, *:after {
  box-sizing: border-box;
  margin: 0;
}

.container {
  min-height: 100vh;
}

.main-header {
  background-color: aliceblue;
  color: #333;
  padding: 32px;
  padding: 5vmin 10vmin;
}

.monospaced {
  color: #333;
  background-color: #ddd;
  font-family: monospace;
  overflow: scroll;
  padding: .25em;
}

</style>
