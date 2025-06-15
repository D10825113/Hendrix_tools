/**
 * 圖標組合式函數
 * 提供統一的圖標管理
 */
export function useIcons() {
    // CPUID 圖標
    const CpuidIcon = `
      <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" 
              d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" />
      </svg>
    `

    // 加號圖標
    const PlusIcon = `
      <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" 
              d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
      </svg>
    `

    // 右箭頭圖標
    const ArrowRightIcon = {
        template: `
      <svg fill="currentColor" viewBox="0 0 20 20">
        <path fill-rule="evenodd" 
              d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" 
              clip-rule="evenodd" />
      </svg>
    `
    }    /**
     * 獲取圖標組件
     * @param {string} iconName - 圖標名稱
     * @returns {string} SVG 字符串
     */
    const getIcon = (iconName) => {
        const iconMap = {
            cpuid: CpuidIcon,
            plus: PlusIcon
        }
        return iconMap[iconName] || PlusIcon
    }    
    return {
        CpuidIcon,
        PlusIcon,
        ArrowRightIcon,
        getIcon
    }
}
