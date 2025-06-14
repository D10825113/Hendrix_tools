# Hendrix Tools 🛠️

一個專業的處理器工具集合，專注於系統硬體資訊解析與分析。

## 特色功能

### CPUID Parser Tool

- **即時解析**: 輸入 CPUID 值即時顯示詳細解析結果
- **視覺化顯示**: 彩色編碼的二進制位元顯示，清楚標示各個欄位
- **智能計算**: 自動計算 Family、Model、Stepping 等關鍵資訊
- **響應式設計**: 支援桌面和行動裝置的現代化介面

## 快速開始

### 在線使用

直接開啟 `src/index.html` 即可使用 CPUID 解析工具。

### 本地部署

```bash
# 克隆專案
git clone https://github.com/your-username/Hendrix_tools.git

# 進入專案目錄
cd Hendrix_tools

# 在瀏覽器中開啟
# Windows
start src/index.html

# macOS
open src/index.html

# Linux
xdg-open src/index.html
```

## 📋 使用說明

### CPUID Parser Tool

1. **輸入 CPUID 值**

   - 支援十六進制格式（如：`806F8`）
   - 自動驗證輸入格式

2. **查看解析結果**

   - **Stepping**: 處理器版本號
   - **Model**: 處理器型號
   - **Family**: 處理器家族
   - **Extended Model**: 擴展型號
   - **Extended Family**: 擴展家族

3. **二進制視覺化**
   - 🟡 **Stepping** (Bits 0-3)
   - 🔵 **Model** (Bits 4-7)
   - 🟠 **Family** (Bits 8-11)
   - 🟣 **Extended Model** (Bits 16-19)
   - 🟢 **Extended Family** (Bits 20-27)

## 技術規格

- **前端框架**: Vue.js 3 (CDN)
- **UI 框架**: Tailwind CSS
- **相容性**: 現代瀏覽器 (Chrome, Firefox, Safari, Edge)
- **響應式**: 支援桌面、平板、手機

## CPUID 背景知識

CPUID 是 x86 處理器的標準指令，用於識別處理器的特性和能力。每個處理器都有唯一的 CPUID 值，包含以下資訊：

- **Family**: 處理器架構家族
- **Model**: 特定的處理器型號
- **Stepping**: 處理器的修訂版本
- **Extended Fields**: 用於支援更多處理器型號

## 使用案例

- **系統管理員**: 快速識別伺服器處理器資訊
- **軟體開發者**: 檢查處理器相容性
- **硬體工程師**: 分析處理器規格
- **教學用途**: 理解 CPUID 結構

