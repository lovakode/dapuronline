<template>
    <div class="badge" :class="type">
        <div class="badge-icon">
            <svg width="6" height="6" viewBox="0 0 6 6" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                <rect width="6" height="6" rx="3" fill="currentColor"/>
            </svg>
        </div>
        <slot></slot>
    </div>    
</template>
<style lang="scss" scoped>

.badge {
    @apply py-1 px-3 text-xs inline-flex align-middle justify-center text-center rounded-3xl border font-semibold;

    >.badge-icon {
        @apply me-2 my-auto;
    }

    &.primary {
        // @apply border-gray-500;
        border-color : #021C7A;
        color : #021C7A;
        background : #ECF0FD;
    }

    &.secondary {
        border-color : #E7E8EB;
        color : #0F1424;
    }
    
    &.danger {
        background: #FEF3F2;
        border-color : #FF5343;
        color : #FF5343;
    }
    
    &.success {
        background: #ECFDF3;
        border-color : #027A48;
        color : #027A48;
    }

    &.warning {
        background: #FFF3D1;
        border-color : #FCC738;
        color : #FCC738;
    }
}
</style>

<script setup>


const props = defineProps({
    type : {
        type : String,
        default : 'secondary'
    }
});


</script>