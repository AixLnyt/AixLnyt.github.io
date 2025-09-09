// 色調選擇器功能 for vivia 主題
window.addEventListener('DOMContentLoaded', function() {
    let root = document.documentElement;
    let hueBtn = document.getElementById('hue-btn');
    let huePicker = document.getElementById('hue-picker');
    let hueRange = document.getElementById('hue-range');
    let hueValue = document.getElementById('hue-value');

    // 每次載入都設為 250
    if (hueRange && hueValue) {
        hueRange.value = 250;
        hueValue.textContent = 250;
        root.style.setProperty('--primary-hue', 250);
    }

    // 點擊色調按鈕顯示/隱藏選擇器
    if (hueBtn && huePicker) {
        hueBtn.addEventListener('click', function(e) {
            e.stopPropagation();
            if (huePicker.style.display === 'none') {
                huePicker.style.display = 'block';
            } else {
                huePicker.style.display = 'none';
            }
        });
    }

    // 點擊外部隱藏色調選擇器
    document.addEventListener('click', function(e) {
        if (huePicker && huePicker.style.display === 'block' && !huePicker.contains(e.target) && e.target !== hueBtn) {
            huePicker.style.display = 'none';
        }
    });

    // 色調選擇即時套用（不記憶）
    if (hueRange && hueValue) {
        hueRange.addEventListener('input', function() {
            let val = hueRange.value;
            hueValue.textContent = val;
            root.style.setProperty('--primary-hue', val);
        });
    }
});
