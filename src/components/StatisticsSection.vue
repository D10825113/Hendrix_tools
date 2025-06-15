<template>
  <div
    class="mt-8 bg-white dark:bg-gray-800 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700"
  >
    <div class="px-6 py-4">
      <h3 class="text-lg font-semibold text-gray-900 dark:text-white mb-4">Tool Statistics</h3>
      <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div v-for="stat in statistics" :key="stat.label" class="text-center">
          <div :class="['text-2xl font-bold', getColorClass(stat.color)]">
            {{ stat.value }}
          </div>
          <div class="text-sm text-gray-600 dark:text-gray-400">
            {{ stat.label }}
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { useTheme } from '@/composables/useTheme.js'

const { getTextColor } = useTheme()

defineProps({
  statistics: {
    type: Array,
    required: true,
  },
})

const getColorClass = (color) => getTextColor(color)
</script>
