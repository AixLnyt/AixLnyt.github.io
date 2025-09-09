// site-runtime.js
// 設定網站啟用日期（請依實際上線日調整）
var siteLaunchDate = new Date('2024-11-20T00:00:00');
var sessionStart = new Date();
function formatSessionRuntime(ms) {
    var seconds = Math.floor(ms / 1000) % 60;
    var minutes = Math.floor(ms / 1000 / 60) % 60;
    var hours = Math.floor(ms / 1000 / 60 / 60) % 24;
    var days = Math.floor(ms / 1000 / 60 / 60 / 24);
    return `${days} 天 ${hours} 時 ${minutes} 分 ${seconds} 秒`;
}
function formatSiteRuntime(from, to) {
    var years = to.getFullYear() - from.getFullYear();
    var months = to.getMonth() - from.getMonth();
    var days = to.getDate() - from.getDate();
    var hours = to.getHours() - from.getHours();
    var minutes = to.getMinutes() - from.getMinutes();
    var seconds = to.getSeconds() - from.getSeconds();
    if (seconds < 0) { seconds += 60; minutes--; }
    if (minutes < 0) { minutes += 60; hours--; }
    if (hours < 0) { hours += 24; days--; }
    if (days < 0) {
        var prevMonth = new Date(to.getFullYear(), to.getMonth(), 0);
        days += prevMonth.getDate();
        months--;
    }
    if (months < 0) { months += 12; years--; }
    return `${years} 年 ${months} 個月 ${days} 天 ${hours} 時 ${minutes} 分 ${seconds} 秒`;
}
function updateSiteRuntime() {
    var now = new Date();
    var sessionDiff = now - sessionStart;
    var text = `瀏覽已運行：${formatSessionRuntime(sessionDiff)}\n網站已運行：${formatSiteRuntime(siteLaunchDate, now)}`;
    var el = document.getElementById('runtime');
    if (el) el.innerText = text;
}
updateSiteRuntime();
setInterval(updateSiteRuntime, 1000);
// 每秒更新一次網站運行時間