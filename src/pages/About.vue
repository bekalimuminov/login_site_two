<template>
  <router-view/>
  <router-link class="ml-[980px] mt-[10px] text-[40px] text-red-400" to="/">Home</router-link>
  <pre class="text-white">
    {{ Data }}
  </pre>
</template>
<script setup>
import { ref } from "vue";
import customApi from "../api/useApi.js";

const token = localStorage.getItem('token')
const Data = ref([])
const loading = ref(false)

async function getData() {
  try{
    loading.value = true
    const res = await customApi.get(`${import.meta.env.VITE_BASE_URL}/Courses`,{
      headers: {
        Authorization: `Bearer ${token}`
      }
    })
    Data.value = res.data
    console.log(seeData)
  }catch(err){
    console.log(err)
  }finally{
    loading.value = false
  }
}
getData()

</script>
