<template>
  <div class="load-container ">
     <img src="@/assets/images/loading_logo.gif" alt="">
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
  
  .load-container img {
    width: 400px;
  }

  @keyframes loading {
    0% {
      width: 0%;
    }

    100% {
      width: 100%;
    }
  }

  @media (max-width: 1000px) {
    .load-container img {
      width: 200px;
    }
  }
</style>
