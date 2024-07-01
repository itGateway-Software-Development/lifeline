<template>
    <div class="product-card">
        <img :src="product.image" alt="" />
        <div class="divider"></div>
        <div class="ingredient">
          <span
            class="rounded-pill"
            v-for="(ingre, i) in product.ingredients"
            :key="i"
            >{{ ingre }}</span
          >
        </div>
        <h2 class="mb-2">{{ product.name }}</h2>
        <router-link :to="`/product/${product.id}`">Detail</router-link>
      </div>
</template>

<script>
    export default {
        props: ['product']
    }
</script>

<style scoped>
.product-card {
    background-color: #eee;
    border-radius: 5px;
    padding: 0 0 10px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
  
  .product-card img {
    width: 100%;
    height: 200px;
    object-fit: contain;
    margin: 20px auto;
  }
  
  .product-card .divider {
    width: 100%;
    height: 1px;
    background: var(--main-color);
    margin: -10px 0 15px;
  }
  
  .ingredient {
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    gap: 10px;
  }
  
  .ingredient span {
    background: var(--sec-color);
    color: #fff;
    padding: 0px 15px;
    font-size: 12px;
  }
  
  .product-card h2 {
    margin: 10px auto 0px;
    font-weight: bold;
    font-size: 24px;
    text-align: center;
  }
  
  .product-card a {
    border: 2px solid var(--main-color);
    padding: 3px 15px;
    border-radius: 5px;
    text-decoration: none;
  }


</style>
