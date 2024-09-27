function switchAccount(card) {
    const overlay = document.getElementById('overlay');
    overlay.style.display = 'flex'; // 显示遮罩层

    setTimeout(() => {
        overlay.style.display = 'none'; // 隐藏遮罩层
        // 这里可以添加页面跳转的逻辑，例如：
        window.location.href = `../../index.html?tab=${encodeURIComponent('mine')}&url=${encodeURIComponent('/pages/mine/index.html')}`;
    }, 1000); // 1秒后执行跳转逻辑
}


function goBack() {
    window.history.back();
}