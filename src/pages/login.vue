<template>
  <form @submit.prevent="handleLogin()" class="space-y-5 ml-[850px] mt-[400px]">

    <label class="text-white mb-[5px]">login</label>
    <div>
      <input v-model="number" type="text" placeholder="login" class="w-[300px] mb-[10px] px-4 py-2 border rounded-[10px] focus:ring-2 focus:ring-indigo-500 focus:outline-none transition"/>
    </div>

    <label class="text-white mb-[5px]">password</label>
    <div>
      <input v-model="password" type="text" placeholder="parol" class="w-[300px] px-4 py-2 border rounded-[10px] focus:ring-2 focus:ring-indigo-500 focus:outline-none transition"/>
    </div>


    <button type="submit" class="w-[300px] py-2 bg-indigo-600 text-white rounded-[10px] hover:bg-indigo-700  font-semibold">Sign In</button>

  </form>
</template>
<script setup>
import {ref} from "vue";

const password = ref('')
const number = ref('')

import { auth } from "../stores/auth.js";
const userStore = auth()

function handleLogin() {
  userStore.login({
    phoneNumber: number.value,
    password: password.value,
  })
}
</script>