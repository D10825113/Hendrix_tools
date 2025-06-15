/**
 * 主題管理組合式函數
 * 提供統一的顏色主題管理
 */
export function useTheme() {
    /**
     * 顏色主題配置
     */
    const colorThemes = {
        blue: {
            icon: 'bg-blue-500',
            badge: 'bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-300',
            button: 'bg-blue-600 hover:bg-blue-700 focus:ring-blue-500',
            text: 'text-blue-600 dark:text-blue-400'
        },
        gray: {
            icon: 'bg-gray-400',
            badge: 'bg-gray-100 text-gray-600 dark:bg-gray-700 dark:text-gray-400',
            button: 'bg-gray-600 hover:bg-gray-700 focus:ring-gray-500',
            text: 'text-gray-600 dark:text-gray-400'
        },
        green: {
            icon: 'bg-green-500',
            badge: 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300',
            button: 'bg-green-600 hover:bg-green-700 focus:ring-green-500',
            text: 'text-green-600 dark:text-green-400'
        },
        purple: {
            icon: 'bg-purple-500',
            badge: 'bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-300',
            button: 'bg-purple-600 hover:bg-purple-700 focus:ring-purple-500',
            text: 'text-purple-600 dark:text-purple-400'
        },
        red: {
            icon: 'bg-red-500',
            badge: 'bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-300',
            button: 'bg-red-600 hover:bg-red-700 focus:ring-red-500',
            text: 'text-red-600 dark:text-red-400'
        },
        yellow: {
            icon: 'bg-yellow-500',
            badge: 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-300',
            button: 'bg-yellow-600 hover:bg-yellow-700 focus:ring-yellow-500',
            text: 'text-yellow-600 dark:text-yellow-400'
        }
    }

    /**
     * 獲取顏色主題
     * @param {string} color - 顏色名稱
     * @returns {Object} 顏色主題配置
     */
    const getTheme = (color) => {
        return colorThemes[color] || colorThemes.blue
    }

    /**
     * 獲取圖標顏色類
     * @param {string} color - 顏色名稱
     * @returns {string} CSS 類名
     */
    const getIconColor = (color) => {
        return getTheme(color).icon
    }

    /**
     * 獲取徽章顏色類
     * @param {string} color - 顏色名稱
     * @returns {string} CSS 類名
     */
    const getBadgeColor = (color) => {
        return getTheme(color).badge
    }

    /**
     * 獲取按鈕顏色類
     * @param {string} color - 顏色名稱
     * @returns {string} CSS 類名
     */
    const getButtonColor = (color) => {
        return getTheme(color).button
    }

    /**
     * 獲取文本顏色類
     * @param {string} color - 顏色名稱
     * @returns {string} CSS 類名
     */
    const getTextColor = (color) => {
        return getTheme(color).text
    }

    return {
        colorThemes,
        getTheme,
        getIconColor,
        getBadgeColor,
        getButtonColor,
        getTextColor
    }
}
