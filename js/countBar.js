function goBack() {
    window.location.href = `../../index.html?tab=${encodeURIComponent('mine')}&url=${encodeURIComponent('/pages/mine/index.html')}`;
    // window.history.back();
}

window.onload = function () {
    // 从 URL 中获取参数
    const urlParams = new URLSearchParams(window.location.search);
    const pageTitle = urlParams.get('title') || '默认标题';
    const pageUrl = urlParams.get('url') || '';

    // 设置页面标题
    document.getElementById('page-title').innerText = pageTitle;

    // 加载 iframe 内容
    document.getElementById('count-content-frame').src = `${pageUrl}`;
}
