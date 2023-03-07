<template lang="">
    <div class="swiper-container" id="floor1Swiper">
        <div class="swiper-wrapper">
            <div class="swiper-slide" v-for="(carousel) in list" :key="carousel.id">
                <img :src="carousel.imgUrl">
            </div>
        </div>
        <!-- 分页器 -->
        <div class="swiper-pagination"></div>
        <!-- 导航按钮 -->
        <div class="swiper-button-prev"></div>
        <div class="swiper-button-next"></div>
    </div>
</template>
<script>
import Swiper from "swiper";
export default {
  name: "Carousel",
  props: ["list"],
  watch: {
    list: {
      immediate: true,
      //监听到数据发生了改变，但是v-for动态渲染的结构无法确定
      handler() {
        //所以还是需要this.$nextTick
        this.$nextTick(() => {
          new Swiper(".swiper-container", {
            loop: true, // 循环模式选项
            // 分页器
            pagination: {
              el: ".swiper-pagination",
              clickable: true,
            },
            // 前进后退按钮
            navigation: {
              nextEl: ".swiper-button-next",
              prevEl: ".swiper-button-prev",
            },
            // 滚动条
            scrollbar: {
              el: ".swiper-scrollbar",
            },
          });
        });
      },
    },
  },
};
</script>
<style lang="">
</style>