<template>
    <el-config-provider>
        <div id="page-wrapper" :class="classContainer">
            <AppSidebar/>

            <AppHeader/>
            <main id="page-container" >
                <slot />
            </main>

        </div>
    </el-config-provider>
</template>

<script setup>
    import { computed } from 'vue';
    
    const classContainer =computed(() => {
        return {
            'sidebar-o' : true,
        }
    });
</script>