let currentTab = 'home';

window.onload = () => {
    // 从 URL 中获取参数
    const urlParams = new URLSearchParams(window.location.search);
    const tab = urlParams.get('tab');
    const pageUrl = urlParams.get('url');

    if (tab == 'mine') {
        activateTab(tab, 'imgs/mine-icon-active.png', 'imgs/mine-icon.png', pageUrl);
    } else {
        // 默认激活主页
        activateTab(currentTab, 'imgs/home-icon-active.png', 'imgs/home-icon.png', 'pages/home/index.html');
    }
}

function activateTab(tab, activeIcon, inactiveIcon, url) {
    const tabs = ['home', 'category', 'cart', 'mine'];
    currentTab = tab;


    // 更新iframe的src
    document.getElementById('home-content-frame').src = url;
    
    tabs.forEach(t => {
        const navItem = document.getElementById(`${t}-icon`).parentElement;
        const icon = document.getElementById(`${t}-icon`);
        const textElement = document.getElementById(`${t}-text`);

        if (t === currentTab) {
            icon.src = activeIcon; // 设置激活状态的图标
            textElement.style.color = '#F1C601'; // 激活状态的文字颜色
        } else {
            icon.src = `imgs/${t}-icon.png`; // 设置未激活状态的图标
            textElement.style.color = '#888'; // 恢复未激活状态的文字颜色
        }
    });
}
