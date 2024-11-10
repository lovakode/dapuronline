<template>
    <div>
        <div class="text-base font-normal text-zinc-400">
            {{ label }}
        </div>
        <div class="text-base font-normal text-gray-900">
            <slot></slot>
        </div>
    </div>    
</template>

<script setup>
import { defineProps } from 'vue';

defineProps({
    label : String
});

</script>