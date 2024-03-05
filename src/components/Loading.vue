<template>
  <div class="load-container">
    <div class="loader"></div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.load-container {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  background: #b8aaaaa6;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 999999;
  backdrop-filter: blur(10px);
}
.loader {
  /* color of choise */
  --clr: #05a8aa;
  /* loading time of choice */
  --load-time: 2s;
  outline: 5px solid var(--clr);
  outline-offset: 5px;
  position: relative;
  overflow: hidden;
  border-radius: 5rem;
  /* width: 10rem; */
  /* height: 2rem; */
  padding: 1rem 5rem;
  /* use either padding or width + height*/
  /* I prefer the padding one */
  /* rotate: -90deg; */
  /* rotate if you want/need vertical loader */
}

.loader::after {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: var(--clr);
  z-index: 2;
  animation: loading var(--load-time) ease-in-out infinite;
}

@keyframes loading {
  0% {
    width: 0%;
  }

  100% {
    width: 100%;
  }
}
</style>
