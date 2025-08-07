<template>
  <component
    :is="tag"
    v-bind="attrs"
    :class="['base-link', className]"
    @click="handleClick"
  >
    <slot></slot>
  </component>
</template>

<script setup lang="ts">
import { useRouter } from 'vue-router';
import { useAttrs } from 'vue';
import { scrollToTop } from '../utils';

const router = useRouter();

// 接收的props
const props = defineProps({
  to: {
    type: [String, Object],
    required: true
  },
  tag: {
    type: String,
    default: 'a'
  },
  className: {
    type: String,
    default: ''
  }
});

// 透传其他属性
const attrs = useAttrs();

// 处理点击事件
const handleClick = (e: MouseEvent) => {
  e.preventDefault();
  
  // 判断是字符串路径还是路由对象
  const target = typeof props.to === 'string' ? { path: props.to } : props.to;
  
  // 先进行路由跳转
  router.push(target).then(() => {
    // 跳转完成后滚动到顶部
    scrollToTop();
  });
};
</script>

<style lang="scss" scoped>
.base-link {
  cursor: pointer;
  text-decoration: none;
  
  &:hover {
    text-decoration: none;
  }
}
</style> 