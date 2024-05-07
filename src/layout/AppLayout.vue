<template>
  <div>
    <Mouse></Mouse>
    <Loadding></Loadding>
    <AppTopbar></AppTopbar>
    <AppHeader></AppHeader>
    <AppSearch></AppSearch>
    <router-view></router-view>
    <AppBack></AppBack>
    <AppFooter></AppFooter>
  </div>
</template>
<script setup>
import { ref, onBeforeMount, computed,watchEffect } from "vue";
import { useRoute } from "vue-router";
import AppFooter from "./AppFooter.vue";
import AppHeader from "./AppHeader.vue";
import AppTopbar from "./AppTopbar.vue";
import AppSearch from "./AppSearch.vue";
import AppBack from "./AppBack.vue";
import Loadding from "../components/Effect/Preloader.vue";
import Mouse from "../components/Effect/Mouse.vue";


</script>
