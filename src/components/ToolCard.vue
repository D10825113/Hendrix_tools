<template>
  <div
    :class="[
      'bg-white dark:bg-gray-800 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700 transition-all duration-200',
      {
        'hover:shadow-md': tool.isAvailable,
        'opacity-60': !tool.isAvailable,
      },
    ]"
  >
    <div class="p-6">
      <div class="flex items-center mb-4">
        <div :class="['w-12 h-12 rounded-lg flex items-center justify-center', iconColorClass]">
          <div v-html="iconComponent" class="w-6 h-6 text-white"></div>
        </div>
        <div class="ml-4">
          <h3
            :class="[
              'text-lg font-semibold',
              tool.isAvailable
                ? 'text-gray-900 dark:text-white'
                : 'text-gray-600 dark:text-gray-400',
            ]"
          >
            {{ tool.title }}
          </h3>
          <span
            :class="[
              'inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium',
              badgeColorClass,
            ]"
          >
            {{ tool.category }}
          </span>
        </div>
      </div>
      <p
        :class="[
          'mb-4',
          tool.isAvailable
            ? 'text-gray-600 dark:text-gray-300'
            : 'text-gray-500 dark:text-gray-400',
        ]"
      >
        {{ tool.description }}
      </p>
      <div class="flex items-center justify-between">
        <router-link
          v-if="tool.isAvailable && tool.route"
          :to="tool.route"
          :class="[
            'inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2',
            buttonColorClass,
          ]"
        >
          Open Tool
          <ArrowRightIcon class="ml-2 -mr-1 w-4 h-4" />
        </router-link>
        <button
          v-else
          disabled
          class="inline-flex items-center px-4 py-2 border border-gray-300 dark:border-gray-600 text-sm font-medium rounded-md text-gray-400 bg-gray-100 dark:bg-gray-700 cursor-not-allowed"
        >
          Coming Soon
        </button>
        <span
          :class="[
            'text-sm',
            tool.isAvailable ? 'text-gray-500 dark:text-gray-400' : 'text-gray-400',
          ]"
        >
          v{{ tool.version }}
        </span>
      </div>
    </div>
  </div>
</template>

<script setup>
import { computed } from 'vue'
import { useIcons } from '@/composables/useIcons.js'
import { useTheme } from '@/composables/useTheme.js'

const { getIcon, ArrowRightIcon } = useIcons()
const { getIconColor, getBadgeColor, getButtonColor } = useTheme()

const props = defineProps({
  tool: {
    type: Object,
    required: true,
  },
})

const iconComponent = computed(() => getIcon(props.tool.icon))
const iconColorClass = computed(() => getIconColor(props.tool.color))
const badgeColorClass = computed(() => getBadgeColor(props.tool.color))
const buttonColorClass = computed(() => getButtonColor(props.tool.color))
</script>
