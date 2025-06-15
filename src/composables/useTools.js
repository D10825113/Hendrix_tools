/**
 * @typedef {Object} Tool
 * @property {string} id - 工具的唯一標識
 * @property {string} title - 工具名稱
 * @property {string} description - 工具描述
 * @property {string} category - 工具分類
 * @property {string} version - 工具版本
 * @property {string|null} route - 路由路徑
 * @property {string} icon - 圖標類型
 * @property {'blue'|'gray'|'green'|'purple'|'red'|'yellow'} color - 主題色彩
 * @property {boolean} isAvailable - 是否可用
 */

/**
 * @typedef {Object} Statistic
 * @property {string|number} value - 統計值
 * @property {string} label - 統計標籤
 * @property {'blue'|'gray'|'green'|'purple'|'red'|'yellow'} color - 主題色彩
 */

/**
 * 工具管理組合式函數
 * @returns {Object} 包含工具和統計數據的對象
 */
export function useTools() {
    /** @type {Tool[]} */
    const tools = [
        {
            id: 'cpuid-parser',
            title: 'CPUID Parser',
            description: 'Parse and analyze CPUID hexadecimal values, extract CPU family, model, and stepping information, and provide visual binary representation.',
            category: 'System Tool',
            version: '1.0',
            route: '/cpuid-parser',
            icon: 'cpuid',
            color: 'blue',
            isAvailable: true
        },
        {
            id: 'coming-soon-1',
            title: 'More Tools Coming Soon',
            description: 'More useful developer tools will be added in future updates.',
            category: 'Stay Tuned',
            version: 'TBD',
            route: null,
            icon: 'plus',
            color: 'gray',
            isAvailable: false
        },
        {
            id: 'coming-soon-2',
            title: 'More Tools Coming Soon',
            description: 'More useful developer tools will be added in future updates.',
            category: 'Stay Tuned',
            version: 'TBD',
            route: null,
            icon: 'plus',
            color: 'gray',
            isAvailable: false
        }
    ]

    /**
     * 獲取統計數據
     * @returns {Statistic[]} 統計數據數組
     */
    const getStatistics = () => {
        const availableTools = tools.filter(tool => tool.isAvailable).length
        const comingSoonTools = tools.filter(tool => !tool.isAvailable).length

        return [
            {
                value: availableTools,
                label: 'Available Tools',
                color: 'blue'
            },
            {
                value: comingSoonTools,
                label: 'Coming Soon',
                color: 'green'
            },
            {
                value: '1.0',
                label: 'Version',
                color: 'purple'
            }
        ]
    }

    return {
        tools,
        getStatistics
    }
}
