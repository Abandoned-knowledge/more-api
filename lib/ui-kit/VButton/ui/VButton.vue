<script setup lang="ts">
interface props {
  label: string;
}
const { label } = defineProps<props>();
</script>

<template>
  <button class="border border-red-400 p-4">{{ label }}</button>
</template>
