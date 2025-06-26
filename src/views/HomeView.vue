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
      <StatisticsSection :statistics="statistics" />
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
