<template>
  <router-view/>
  <router-link class="ml-[980px] mt-[10px] text-[40px] text-red-400" to="/">Home</router-link>
  <div class="max-w-[1400px] w-full mx-auto">
    <div class="flex flex-wrap gap-y-10 justify-around">
      <div class="text-white text-center font-bold py-5 rounded-xl shadow-lg shadow-red-500 w-[300px] p-3" v-for="item in Data">
        <p>{{item.id}}</p>
        <p>{{item.Name}}</p>
        <p>{{item.duration}}</p>
        <p>{{item.description}}</p>
      </div>
    </div>
  </div>
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
