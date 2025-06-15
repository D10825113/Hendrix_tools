<template>
  <div class="font-sans">
    <!-- 頁面標題區域 -->
    <div
      class="bg-white dark:bg-gray-800 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700 mb-6"
    >
      <div class="px-6 py-4">
        <div class="flex items-center">
          <div class="w-10 h-10 bg-blue-500 rounded-lg flex items-center justify-center mr-4">
            <svg class="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z"
              />
            </svg>
          </div>
          <div>
            <h1 class="text-2xl font-bold text-gray-900 dark:text-white">CPUID 解析工具</h1>
            <p class="text-gray-600 dark:text-gray-300">解析和分析 CPUID 十六進制值</p>
          </div>
        </div>
      </div>
    </div>

    <!-- 主要內容卡片 -->
    <div
      class="bg-white dark:bg-gray-800 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700"
    >
      <div class="p-6">
        <!-- 輸入區域 -->
        <section class="mb-6">
          <label
            for="cpuidHex"
            class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
          >
            輸入 CPUID 值:
          </label>
          <input
            id="cpuidHex"
            v-model="cpuidInput"
            type="text"
            placeholder="例如: 806F8"
            class="w-full px-4 py-3 bg-gray-50 dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-lg text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all"
            :class="{ 'border-red-500 focus:ring-red-500 focus:border-red-500': errorMessage }"
            @input="parseCPUID"
          />
        </section>

        <!-- 錯誤訊息 -->
        <section v-if="errorMessage" class="mb-6">
          <div
            class="p-4 bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-lg text-red-800 dark:text-red-300"
          >
            <div class="flex items-center">
              <svg class="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
              {{ errorMessage }}
            </div>
          </div>
        </section>

        <!-- 結果區域 -->
        <section v-if="cpuidData && !errorMessage" class="space-y-6">
          <!-- 二進制顯示 -->
          <div
            class="p-4 bg-gray-50 dark:bg-gray-700 border border-gray-200 dark:border-gray-600 rounded-lg"
          >
            <h3 class="text-lg font-semibold text-gray-900 dark:text-white mb-3">二進制表示</h3>
            <div
              class="font-mono text-sm break-all overflow-x-auto bg-gray-900 dark:bg-gray-800 p-3 rounded border"
            >
              <span v-for="(bit, index) in binaryDisplay" :key="index" :class="bit.class">
                {{ bit.value }}
              </span>
            </div>
          </div>

          <!-- 字段解析 -->
          <div
            class="p-4 bg-gray-50 dark:bg-gray-700 border border-gray-200 dark:border-gray-600 rounded-lg"
          >
            <h3 class="text-lg font-semibold text-gray-900 dark:text-white mb-3">字段解析</h3>
            <div class="space-y-3">
              <!-- 字段項目 -->
              <div class="flex items-center space-x-3">
                <span class="w-4 h-4 bg-yellow-500 rounded flex-shrink-0"></span>
                <span class="text-gray-700 dark:text-gray-300">
                  <strong>步進 (Stepping)</strong> (位元 0-3): {{ cpuidData.stepping }}
                </span>
              </div>
              <div class="flex items-center space-x-3">
                <span class="w-4 h-4 bg-cyan-500 rounded flex-shrink-0"></span>
                <span class="text-gray-700 dark:text-gray-300">
                  <strong>型號 (Model)</strong> (位元 4-7): {{ cpuidData.model }}
                </span>
              </div>
              <div class="flex items-center space-x-3">
                <span class="w-4 h-4 bg-amber-500 rounded flex-shrink-0"></span>
                <span class="text-gray-700 dark:text-gray-300">
                  <strong>系列 (Family)</strong> (位元 8-11): {{ cpuidData.family }}
                </span>
              </div>
              <div class="flex items-center space-x-3">
                <span class="w-4 h-4 bg-violet-500 rounded flex-shrink-0"></span>
                <span class="text-gray-700 dark:text-gray-300">
                  <strong>擴展型號 (Extended Model)</strong> (位元 16-19): {{ cpuidData.extModel }}
                </span>
              </div>
              <div class="flex items-center space-x-3">
                <span class="w-4 h-4 bg-emerald-500 rounded flex-shrink-0"></span>
                <span class="text-gray-700 dark:text-gray-300">
                  <strong>擴展系列 (Extended Family)</strong> (位元 20-27):
                  {{ cpuidData.extFamily }}
                </span>
              </div>
            </div>
          </div>

          <!-- 逐步解析 -->
          <div
            class="p-4 bg-gray-50 dark:bg-gray-700 border border-gray-200 dark:border-gray-600 rounded-lg"
          >
            <h3 class="text-lg font-semibold text-gray-900 dark:text-white mb-3">逐步解析</h3>
            <div class="font-mono text-sm space-y-2 text-gray-700 dark:text-gray-300">
              <div>
                <strong>系列:</strong> {{ cpuidData.fullFamily }}
                <span class="text-gray-500 dark:text-gray-400">{{ familyCalculation }}</span>
              </div>
              <div>
                <strong>型號:</strong> 0x{{ cpuidData.fullModel.toString(16).toUpperCase() }}
                <span class="text-gray-500 dark:text-gray-400">{{ modelCalculation }}</span>
              </div>
              <div><strong>步進:</strong> {{ cpuidData.stepping }}</div>
            </div>
          </div>

          <!-- 最終結果 -->
          <div
            class="p-4 bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-lg"
          >
            <h3 class="text-lg font-semibold text-blue-900 dark:text-blue-300 mb-3">最終結果</h3>
            <div class="font-mono text-lg font-bold text-blue-800 dark:text-blue-200">
              <strong>系列-型號-步進:</strong>
              <span class="bg-blue-100 dark:bg-blue-800 px-2 py-1 rounded ml-2">
                {{ cpuidData.fullFamily }}-{{ cpuidData.fullModel.toString(16).toUpperCase() }}-{{
                  cpuidData.stepping
                }}
              </span>
            </div>
          </div>
        </section>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'

// 響應式數據
const cpuidInput = ref('')
const errorMessage = ref('')
const cpuidData = ref(null)
const binaryDisplay = ref([])

// 常數定義
const FIELD_COLORS = {
  stepping: 'bg-yellow-500 text-white',
  model: 'bg-cyan-500 text-white',
  family: 'bg-amber-500 text-white',
  extModel: 'bg-violet-500 text-white',
  extFamily: 'bg-emerald-500 text-white',
  reserved: 'bg-gray-500 text-white',
}

// 計算屬性
const familyCalculation = computed(() => {
  if (!cpuidData.value) return ''
  const { family, extFamily } = cpuidData.value
  return family === 0xf ? `(${family} + ${extFamily})` : '(Use Family value directly)'
})

const modelCalculation = computed(() => {
  if (!cpuidData.value) return ''
  const { family, model, extModel } = cpuidData.value
  return family === 0x6 || family === 0xf
    ? `((${extModel} << 4) | ${model})`
    : '(Use Model value directly)'
})

// 輔助函數
const getBitFieldType = (bitPosition) => {
  if (bitPosition >= 0 && bitPosition <= 3) return 'stepping'
  if (bitPosition >= 4 && bitPosition <= 7) return 'model'
  if (bitPosition >= 8 && bitPosition <= 11) return 'family'
  if (bitPosition >= 16 && bitPosition <= 19) return 'extModel'
  if (bitPosition >= 20 && bitPosition <= 27) return 'extFamily'
  return 'reserved'
}

const validateInput = (input) => {
  if (!input) return { isValid: true, message: '' }

  if (!/^[0-9a-fA-F]+$/.test(input)) {
    return { isValid: false, message: '❌ 請輸入有效的十六進制 CPUID 值' }
  }

  if (input.length > 8) {
    return { isValid: false, message: '❌ CPUID 不應超過 32 位元（8 個十六進制數字）' }
  }

  return { isValid: true, message: '' }
}

const generateBinaryDisplay = (binaryStr) => {
  const display = []

  for (let i = 0; i < 32; i++) {
    const bit = binaryStr[i]
    const bitPos = 31 - i
    const fieldType = getBitFieldType(bitPos)
    const colorClass = FIELD_COLORS[fieldType]

    display.push({
      value: bit,
      class: `${colorClass} px-1 mx-px rounded font-bold`,
    })

    // Add space every 4 bits for readability
    if ((i + 1) % 4 === 0 && i < 31) {
      display.push({ value: ' ', class: '' })
    }
  }

  return display
}

const extractCpuidFields = (cpuid) => {
  const stepping = cpuid & 0xf
  const model = (cpuid >> 4) & 0xf
  const family = (cpuid >> 8) & 0xf
  const extModel = (cpuid >> 16) & 0xf
  const extFamily = (cpuid >> 20) & 0xff

  const fullFamily = family === 0xf ? family + extFamily : family
  const fullModel = family === 0x6 || family === 0xf ? (extModel << 4) | model : model

  return {
    stepping,
    model,
    family,
    extModel,
    extFamily,
    fullFamily,
    fullModel,
  }
}

// 主要方法
const parseCPUID = () => {
  const input = cpuidInput.value.trim()

  // 重置狀態
  errorMessage.value = ''
  cpuidData.value = null
  binaryDisplay.value = []

  if (!input) return

  // 驗證輸入
  const validation = validateInput(input)
  if (!validation.isValid) {
    errorMessage.value = validation.message
    return
  }

  try {
    const cpuid = parseInt(input, 16)
    const binaryStr = cpuid.toString(2).padStart(32, '0')

    // 生成二進制顯示
    binaryDisplay.value = generateBinaryDisplay(binaryStr) // 提取 CPUID 字段
    cpuidData.value = extractCpuidFields(cpuid)
  } catch (error) {
    errorMessage.value = '❌ 解析 CPUID 時發生錯誤'
    console.error('CPUID parsing error:', error)
  }
}
</script>

<style scoped>
/* 自定義樣式 */
</style>
