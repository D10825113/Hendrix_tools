function parseCPUID() {
  const input = document.getElementById("cpuidHex").value.trim();
  const result = document.getElementById("result");
  result.textContent = "";

  if (!/^[0-9a-fA-F]+$/.test(input)) {
    result.textContent = "❌ 請輸入有效的十六進位 CPUID";
    return;
  }

  const cpuid = parseInt(input, 16);

  const stepping = cpuid & 0xF;
  const model = (cpuid >> 4) & 0xF;
  const family = (cpuid >> 8) & 0xF;
  const extModel = (cpuid >> 16) & 0xF;
  const extFamily = (cpuid >> 20) & 0xFF;

  const fullFamily = (family === 0xF) ? (family + extFamily) : family;
  const fullModel = (family === 0x6 || family === 0xF)
    ? ((extModel << 4) | model)
    : model;

  result.textContent =
    //`CPUID   : 0x${input.toUpperCase()}\n` +
    `Family  : ${fullFamily}\n` +
    `Model   : 0x${fullModel.toString(16).toUpperCase()}\n` +
    `Stepping: ${stepping}`;
}
