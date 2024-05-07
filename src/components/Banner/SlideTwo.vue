<template>
    <section class="banner__inner-page bg-image pt-180 pb-180 bg-image"
            :data-background="'src/assets/images/banner/'+props.img">
            <div class="shape2 wow slideInLeft" data-wow-delay="00ms" data-wow-duration="1500ms">
                <img src="../../assets/images/banner/inner-banner-shape2.png" alt="shape">
            </div>
            <div class="shape1 wow slideInLeft" data-wow-delay="200ms" data-wow-duration="1500ms">
                <img src="../../assets/images/banner/inner-banner-shape1.png" alt="shape">
            </div>
            <div class="shape3 wow slideInRight" data-wow-delay="200ms" data-wow-duration="1500ms">
                <img class="sway__animationX" src="../../assets/images/banner/inner-banner-shape3.png" alt="shape">
            </div>
            <div class="container">
                <h2 class="wow fadeInUp" data-wow-delay="00ms" data-wow-duration="1500ms">{{props.title}}</h2>
                <div class="breadcrumb-list wow fadeInUp" data-wow-delay="200ms" data-wow-duration="1500ms">
                    <!-- <a href="index.html">Home</a> -->
                     <router-link to="/">Home</router-link>
                    <span><i class="fa-regular fa-angles-right mx-2"></i>About
                        Us</span>
                </div>
            </div>
        </section>
</template>
<script setup>
import { ref, onBeforeMount, computed } from "vue";

const emit = defineEmits(["close"]);

const props = defineProps({
  title: {
    type: String,
    default: null,
  },
  img: {
    type: String,
    default: null,
  },
});



</script>