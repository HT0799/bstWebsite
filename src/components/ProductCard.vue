<template>
  <el-card class="product-card" shadow="hover">
    <div class="product-image">
      <img :src="product.image" :alt="product.name">
    </div>
    <div class="product-content">
      <h3>{{ product.name }}</h3>
      <p>{{ product.description }}</p>
      <router-link :to="`/products/${product.id}`" class="btn">了解更多</router-link>
    </div>
  </el-card>
</template>

<script setup lang="ts">
interface Product {
  id: string | number;
  name: string;
  description: string;
  image: string;
}

defineProps<{
  product: Product
}>()
</script>

<style lang="scss" scoped>
.product-card {
  height: 100%;
  display: flex;
  flex-direction: column;
  transition: transform 0.3s;

  &:hover {
    transform: translateY(-5px);
  }
}

.product-image {
  height: 200px;
  overflow: hidden;
  
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: transform 0.5s;
    
    &:hover {
      transform: scale(1.05);
    }
  }
}

.product-content {
  padding: 1rem;
  flex: 1;
  display: flex;
  flex-direction: column;
  
  h3 {
    margin-bottom: 0.5rem;
    font-size: 1.2rem;
  }
  
  p {
    color: #666;
    margin-bottom: 1rem;
    flex: 1;
  }
  
  .btn {
    align-self: flex-start;
    margin-top: auto;
  }
}
</style> 