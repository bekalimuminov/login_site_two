<template>
  <router-view/>
  <div>
    <p class="text-[40px]">hello</p>
    <button @click="logout.lagout()" class="bg-black text-white p-4 rounded-[20px]">logout</button>
  </div>
</template>
<script setup>
import {auth} from "../stores/auth.js";

const logout = auth()

</script>