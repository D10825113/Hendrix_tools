<template>
  <div class="bg-gray-50 dark:bg-gray-900 min-h-screen">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <!-- Welcome Section -->
      <WelcomeSection />

      <!-- Tools Grid -->
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <ToolCard v-for="tool in tools" :key="tool.id" :tool="tool" />
      </div>

      <!-- Statistics -->
<<<<<<< HEAD
      <!-- <div
        class="mt-8 bg-white dark:bg-gray-800 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700"
      >
        <div class="px-6 py-4">
          <h3 class="text-lg font-semibold text-gray-900 dark:text-white mb-4">Tool Statistics</h3>
          <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div class="text-center">
              <div class="text-2xl font-bold text-blue-600 dark:text-blue-400">1</div>
              <div class="text-sm text-gray-600 dark:text-gray-400">Available Tools</div>
            </div>
            <div class="text-center">
              <div class="text-2xl font-bold text-green-600 dark:text-green-400">2</div>
              <div class="text-sm text-gray-600 dark:text-gray-400">Coming Soon</div>
            </div>
            <div class="text-center">
              <div class="text-2xl font-bold text-purple-600 dark:text-purple-400">1.0</div>
              <div class="text-sm text-gray-600 dark:text-gray-400">Version</div>
            </div>
          </div>
        </div> 
      </div> -->
=======
      <StatisticsSection :statistics="statistics" />
>>>>>>> a89f64c4aa75321179ac08c595574096145d2762
    </div>
  </div>
</template>

<script setup>
import { computed } from 'vue'
import WelcomeSection from '@/components/WelcomeSection.vue'
import ToolCard from '@/components/ToolCard.vue'
import StatisticsSection from '@/components/StatisticsSection.vue'
import { useTools } from '@/composables/useTools.js'

// 使用工具管理組合式函數
const { tools, getStatistics } = useTools()

// 統計數據計算
const statistics = computed(() => getStatistics())
</script>
