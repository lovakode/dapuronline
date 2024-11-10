<template>
    <div id="page-header">
        <div class="content-header">
            <h2 class="text-xl font-semibold mb-0 me-auto">{{ pageTitle }}</h2>

            <div class="relative">
                
                <el-dropdown>
                    <button type="button" class="nav-link fc-dropdown">
                        <img src="/images/user.jpeg" alt="user-image" class="rounded-full h-10">
                    </button>
                    <template #dropdown>
                        <el-dropdown-menu>
                        <el-dropdown-item>Action 1</el-dropdown-item>
                        <el-dropdown-item>Action 2</el-dropdown-item>
                        <el-dropdown-item>Action 3</el-dropdown-item>
                        <el-dropdown-item disabled>Action 4</el-dropdown-item>
                        <el-dropdown-item divided>Action 5</el-dropdown-item>
                        </el-dropdown-menu>
                    </template>
                </el-dropdown>
                <!-- <div class="fc-dropdown fc-dropdown-open:opacity-100 hidden opacity-0 w-44 z-50 transition-[margin,opacity] duration-300 mt-2 bg-white shadow-lg border rounded-lg p-2 border-gray-200 dark:border-gray-700 dark:bg-gray-800">
                    <a class="flex items-center py-2 px-3 rounded-md text-sm text-gray-800 hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-gray-300" href="pages-gallery.html">
                        <i class="mgc_pic_2_line  me-2"></i> 
                        <span>Gallery</span>
                    </a>
                    <a class="flex items-center py-2 px-3 rounded-md text-sm text-gray-800 hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-gray-300" href="apps-kanban.html">
                        <i class="mgc_task_2_line  me-2"></i> 
                        <span>Kanban</span>
                    </a>
                    <a class="flex items-center py-2 px-3 rounded-md text-sm text-gray-800 hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-gray-300" href="auth-login.html">
                        <i class="mgc_lock_line  me-2"></i> 
                        <span>Lock Screen</span>
                    </a>
                    <hr class="my-2 -mx-2 border-gray-200 dark:border-gray-700">
                    <a class="flex items-center py-2 px-3 rounded-md text-sm text-gray-800 hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-gray-300" href="auth-login.html">
                        <i class="mgc_exit_line  me-2"></i> 
                        <span>Log Out</span>
                    </a>
                </div> -->
            </div>
        </div>
    </div>
</template>
<script setup>
import { computed } from 'vue';
import { useRoute } from 'vue-router';
const route = useRoute(); 
const pageTitle = computed(() => route.meta.title || 'Default Title');
</script>