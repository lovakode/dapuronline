<template>
    <div class="flex">
      <label 
        v-for="option in options" 
        :key="option.value" 
        :class="['p-2 cursor-pointer', { 'text-blue-500 border-blue-500 border-b-2 font-semibold': internalValue === option.value }]">
        <input 
        :name="name"
          type="radio" 
          :value="option.value" 
          class="hidden"
          v-model="internalValue"
        />
        {{ option.label }}
      </label>
    </div>
  </template>
  
  <script setup>
  import { defineProps, defineEmits, computed } from 'vue';

  const emit = defineEmits(['update:modelValue'])
  const props = defineProps({
    modelValue : {
        type : String,
        default : '',
    },
    options : {
        type : Array,
        default : [],
    },
    name : {
        type : String,
        default : 'radio'
    }
  });

// const selected = ref(props.modelValue);
  
// watch(() => props.modelValue, (newValue) => {
//     selected.value = newValue;
// });
const internalValue = computed({
    get: () => props.modelValue,
    set: (value) => emit('update:modelValue', value)
});
// const selectChange = (e) => {
    // console.log(e);
    // selected.value = newValue;
    // emit('update:modelValue', newValue);
// };
  // Selected radio value
  </script>
  
  <style scoped>
  /* Additional custom styles if needed */
  </style>
  