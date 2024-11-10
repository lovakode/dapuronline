<template>
    <div class="flex">
      <label>
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
  