<script setup>
import { ref } from 'vue'
import { RouterLink, RouterView } from 'vue-router'

const sidebarOpen = ref(true)
const mobileMenuOpen = ref(false)

function toggleSidebar() {
  sidebarOpen.value = !sidebarOpen.value
}

function toggleMobileMenu() {
  mobileMenuOpen.value = !mobileMenuOpen.value
}

function closeMobileMenu() {
  mobileMenuOpen.value = false
}
</script>

<template>
  <div class="h-screen bg-gray-100 dark:bg-gray-900 flex overflow-hidden">
    <!-- 手機版遮罩 -->
    <div
      v-if="mobileMenuOpen"
      class="fixed inset-0 z-40 bg-gray-600 bg-opacity-75 transition-opacity md:hidden"
      @click="closeMobileMenu"
    ></div>

    <!-- 左側儀表板 -->
    <div
      :class="[
        'fixed inset-y-0 left-0 z-50 w-64 bg-white dark:bg-gray-800 shadow-lg transform transition-transform duration-300 ease-in-out md:translate-x-0 md:static md:inset-0',
        mobileMenuOpen ? 'translate-x-0' : '-translate-x-full',
        sidebarOpen ? 'md:w-64' : 'md:w-16',
      ]"
    >
      <!-- 儀表板標題區 -->
      <div
        class="flex items-center justify-between px-4 py-4 border-b border-gray-200 dark:border-gray-700"
      >
        <div v-if="sidebarOpen || mobileMenuOpen" class="flex items-center">
          <div
            class="w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg flex items-center justify-center"
          >
            <span class="text-white font-bold text-sm">HT</span>
          </div>
          <h1 class="ml-3 text-lg font-semibold text-gray-900 dark:text-white">Hendrix Tools</h1>
        </div>
        <div v-else class="flex justify-center w-full">
          <div
            class="w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg flex items-center justify-center"
          >
            <span class="text-white font-bold text-sm">HT</span>
          </div>
        </div>

        <!-- 桌面版折疊按鈕 -->
        <button
          @click="toggleSidebar"
          class="hidden md:flex p-1.5 rounded-lg text-gray-500 hover:text-gray-700 hover:bg-gray-100 dark:text-gray-400 dark:hover:text-gray-200 dark:hover:bg-gray-700 transition-colors"
        >
          <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              :d="sidebarOpen ? 'M11 19l-7-7 7-7M21 19l-7-7 7-7' : 'M13 5l7 7-7 7M5 5l7 7-7 7'"
            />
          </svg>
        </button>

        <!-- 手機版關閉按鈕 -->
        <button
          @click="closeMobileMenu"
          class="md:hidden p-1.5 rounded-lg text-gray-500 hover:text-gray-700 hover:bg-gray-100 dark:text-gray-400 dark:hover:text-gray-200 dark:hover:bg-gray-700 transition-colors"
        >
          <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>
      </div>

      <!-- 導航選單 -->
      <nav class="mt-6 px-3">
        <div class="space-y-1">
          <RouterLink
            to="/"
            class="flex items-center px-3 py-2.5 text-sm font-medium rounded-lg text-gray-700 dark:text-gray-200 hover:text-blue-600 hover:bg-blue-50 dark:hover:text-blue-400 dark:hover:bg-blue-900/20 transition-all duration-200 group"
            active-class="text-blue-600 bg-blue-50 dark:text-blue-400 dark:bg-blue-900/20"
            @click="closeMobileMenu"
          >
            <svg
              class="w-5 h-5 mr-3 flex-shrink-0"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
              />
            </svg>
            <span v-if="sidebarOpen || mobileMenuOpen">首頁</span>
          </RouterLink>

          <RouterLink
            to="/cpuid-parser"
            class="flex items-center px-3 py-2.5 text-sm font-medium rounded-lg text-gray-700 dark:text-gray-200 hover:text-blue-600 hover:bg-blue-50 dark:hover:text-blue-400 dark:hover:bg-blue-900/20 transition-all duration-200 group"
            active-class="text-blue-600 bg-blue-50 dark:text-blue-400 dark:bg-blue-900/20"
            @click="closeMobileMenu"
          >
            <svg
              class="w-5 h-5 mr-3 flex-shrink-0"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z"
              />
            </svg>
            <span v-if="sidebarOpen || mobileMenuOpen">CPUID 解析器</span>
          </RouterLink>
        </div>
      </nav>

      <!-- 底部用戶資訊 -->
      <div
        class="absolute bottom-0 left-0 right-0 p-4 border-t border-gray-200 dark:border-gray-700"
      >
        <div class="flex items-center">
          <div
            class="w-8 h-8 bg-gray-300 dark:bg-gray-600 rounded-full flex items-center justify-center"
          >
            <span class="text-sm font-medium text-gray-700 dark:text-gray-200">C</span>
          </div>
          <div v-if="sidebarOpen || mobileMenuOpen" class="ml-3">
            <p class="text-sm font-medium text-gray-900 dark:text-white">Chad</p>
            <p class="text-xs text-gray-500 dark:text-gray-400">開發者</p>
          </div>
        </div>
      </div>
    </div>

    <!-- 主要內容區域 -->
    <div class="flex-1 flex flex-col min-w-0 overflow-hidden">
      <!-- 頂部工具列 -->
      <header
        class="bg-white dark:bg-gray-800 shadow-sm border-b border-gray-200 dark:border-gray-700 z-30 flex-shrink-0"
      >
        <div class="px-4 sm:px-6 lg:px-8">
          <div class="flex justify-between items-center py-4">
            <!-- 手機版選單按鈕 -->
            <button
              @click="toggleMobileMenu"
              class="md:hidden inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 dark:text-gray-300 dark:hover:text-gray-200 dark:hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
              aria-label="開啟選單"
            >
              <svg class="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>

            <!-- 頁面標題區域 -->
            <div class="flex-1 md:ml-0 ml-4">
              <h2 class="text-lg font-semibold text-gray-900 dark:text-white">
                {{ $route.meta.title || '儀表板' }}
              </h2>
            </div>

            <!-- 右側工具 -->
            <div class="flex items-center space-x-4">
              <!-- 可以在這裡添加通知、設定等按鈕 -->
            </div>
          </div>
        </div>
      </header>

      <!-- 主要內容 -->
      <main class="flex-1 bg-gray-50 dark:bg-gray-900 overflow-y-auto">
        <div class="p-6">
          <RouterView />
        </div>
      </main>
    </div>
  </div>
</template>

<style scoped>
/* 過渡動畫 */
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

/* 側邊欄過渡 */
.sidebar-transition {
  transition: width 0.3s ease-in-out;
}

/* 路由連結活動狀態 */
.router-link-active {
  color: #2563eb !important;
  background-color: rgba(37, 99, 235, 0.1) !important;
}

/* 暗色模式下的活動狀態 */
.dark .router-link-active {
  color: #60a5fa !important;
  background-color: rgba(59, 130, 246, 0.2) !important;
}

/* 響應式設計優化 */
@media (max-width: 768px) {
  .sidebar-overlay {
    backdrop-filter: blur(4px);
  }
}

/* 自定義滾動條 */
.overflow-auto::-webkit-scrollbar {
  width: 6px;
}

.overflow-auto::-webkit-scrollbar-track {
  background: transparent;
}

.overflow-auto::-webkit-scrollbar-thumb {
  background-color: rgba(156, 163, 175, 0.5);
  border-radius: 3px;
}

.overflow-auto::-webkit-scrollbar-thumb:hover {
  background-color: rgba(156, 163, 175, 0.7);
}

.dark .overflow-auto::-webkit-scrollbar-thumb {
  background-color: rgba(107, 114, 128, 0.5);
}

.dark .overflow-auto::-webkit-scrollbar-thumb:hover {
  background-color: rgba(107, 114, 128, 0.7);
}
</style>
