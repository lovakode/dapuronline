<template>
<div class="flex w-screen flex-wrap text-slate-800">
    <div class="relative hidden h-screen select-none flex-col justify-center rounded-e-3xl bg-blue-600 text-center md:flex md:w-2/3">
        <img class="mx-auto w-11/12 max-w-lg rounded-lg object-cover" src="/images/login.png" />
    </div>
    <div class="flex w-full flex-col md:w-1/3 px-12">
        <div class="mx-auto pt-12">
            <a href="#" class="text-center mb-4">
                <img src="/images/logo.png" class="w-40"/>
            </a>
            <div class=" text-center text-lg font-bold">
                Login Admin
            </div>
            <div class="text-md text-center">Masukan data akunmu</div>
        </div>
        <div class="pt-12">
            <el-form @submit.prevent="onSubmit" label-position="top">
                <el-form-item label="Email">
                    <el-input size="large" v-model="form.email"/>
                </el-form-item>
                <el-form-item label="Password">
                    <el-input size="large" v-model="form.password"/>
                </el-form-item>
                <el-button size="large" native-type="submit" type="primary" class="w-full !rounded-full py-3">
                    Login
                </el-button>
            </el-form>
        </div>
    </div>
</div>

</template>


<script setup>
import { ref } from 'vue';
const router = useRouter();
definePageMeta({
  layout: 'guest'
})


const form = ref({
    email : null,
    password : null
})

const onSubmit = () => {
    router.push('/dashboard');
}
</script>