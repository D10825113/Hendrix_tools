<template>
  <div class="bg-gray-50 dark:bg-gray-900">
    <div class="max-w-7xl mx-auto">
      <!-- Welcome Section -->
      <div
        class="bg-white dark:bg-gray-800 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700 mb-6"
      >
        <div class="px-6 py-8">
          <div class="text-center">
            <div
              class="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-600 rounded-2xl flex items-center justify-center mx-auto mb-4"
            >
              <span class="text-white font-bold text-xl">HT</span>
            </div>
            <h1 class="text-3xl font-bold text-gray-900 dark:text-white sm:text-4xl">
              Welcome to Hendrix Tools
            </h1>
            <p class="mt-4 text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              A collection of useful developer tools to enhance your productivity
            </p>
          </div>
        </div>
      </div>

      <!-- Tools Grid -->
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <!-- CPUID Parser Tool Card -->
        <div
          class="bg-white dark:bg-gray-800 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700 hover:shadow-md transition-shadow duration-200"
        >
          <div class="p-6">
            <div class="flex items-center mb-4">
              <div class="w-12 h-12 bg-blue-500 rounded-lg flex items-center justify-center">
                <svg
                  class="w-6 h-6 text-white"
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
              </div>
              <div class="ml-4">
                <h3 class="text-lg font-semibold text-gray-900 dark:text-white">CPUID Parser</h3>
                <span
                  class="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-300"
                >
                  System Tool
                </span>
              </div>
            </div>
            <p class="text-gray-600 dark:text-gray-300 mb-4">
              Parse and analyze CPUID hexadecimal values, extract CPU family, model, and stepping
              information, and provide visual binary representation.
            </p>
            <div class="flex items-center justify-between">
              <router-link
                to="/cpuid-parser"
                class="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-colors duration-200"
              >
                Open Tool
                <svg class="ml-2 -mr-1 w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                  <path
                    fill-rule="evenodd"
                    d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                    clip-rule="evenodd"
                  />
                </svg>
              </router-link>
              <span class="text-sm text-gray-500 dark:text-gray-400">v1.0</span>
            </div>
          </div>
        </div>

        <!-- Coming Soon Tools -->
        <div
          class="bg-white dark:bg-gray-800 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700 opacity-60"
        >
          <div class="p-6">
            <div class="flex items-center mb-4">
              <div class="w-12 h-12 bg-gray-400 rounded-lg flex items-center justify-center">
                <svg
                  class="w-6 h-6 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M12 6v6m0 0v6m0-6h6m-6 0H6"
                  />
                </svg>
              </div>
              <div class="ml-4">
                <h3 class="text-lg font-semibold text-gray-600 dark:text-gray-400">
                  More Tools Coming Soon
                </h3>
                <span
                  class="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-gray-100 text-gray-600 dark:bg-gray-700 dark:text-gray-400"
                >
                  Stay Tuned
                </span>
              </div>
            </div>
            <p class="text-gray-500 dark:text-gray-400 mb-4">
              More useful developer tools will be added in future updates.
            </p>
            <div class="flex items-center justify-between">
              <button
                disabled
                class="inline-flex items-center px-4 py-2 border border-gray-300 dark:border-gray-600 text-sm font-medium rounded-md text-gray-400 bg-gray-100 dark:bg-gray-700 cursor-not-allowed"
              >
                Coming Soon
              </button>
              <span class="text-sm text-gray-400">TBD</span>
            </div>
          </div>
        </div>

        <div
          class="bg-white dark:bg-gray-800 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700 opacity-60"
        >
          <div class="p-6">
            <div class="flex items-center mb-4">
              <div class="w-12 h-12 bg-gray-400 rounded-lg flex items-center justify-center">
                <svg
                  class="w-6 h-6 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M12 6v6m0 0v6m0-6h6m-6 0H6"
                  />
                </svg>
              </div>
              <div class="ml-4">
                <h3 class="text-lg font-semibold text-gray-600 dark:text-gray-400">
                  More Tools Coming Soon
                </h3>
                <span
                  class="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-gray-100 text-gray-600 dark:bg-gray-700 dark:text-gray-400"
                >
                  Stay Tuned
                </span>
              </div>
            </div>
            <p class="text-gray-500 dark:text-gray-400 mb-4">
              More useful developer tools will be added in future updates.
            </p>
            <div class="flex items-center justify-between">
              <button
                disabled
                class="inline-flex items-center px-4 py-2 border border-gray-300 dark:border-gray-600 text-sm font-medium rounded-md text-gray-400 bg-gray-100 dark:bg-gray-700 cursor-not-allowed"
              >
                Coming Soon
              </button>
              <span class="text-sm text-gray-400">TBD</span>
            </div>
          </div>
        </div>
      </div>

      <!-- Statistics -->
      <div
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
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HomeView',
}
</script>
