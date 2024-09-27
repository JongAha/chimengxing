document.addEventListener('DOMContentLoaded', function () {
    const toggleButton = document.querySelector('.toggle-button');
    toggleButton.addEventListener('click', function () {
        // 添加切换功能代码
        window.top.location.href = `changeAccount.html`;
    });
});

function navigateToOrder(url,index) {
    const tab = ["orderAll", "pendingPayment", "pendingDelivery", "pendingReceipt", "pendingReview", "afterSale"];
    window.top.location.href = `../order/index.html?tab=${encodeURIComponent(tab[index])}&url=${encodeURIComponent(url)}`;

}


function navigateToTools(url,index) {
    const title = ["我的地址", "分享","资产管理","兑换股权","设置","我的粉丝"];
    window.top.location.href = `../tools/index.html?title=${encodeURIComponent(title[index])}&url=${encodeURIComponent(url)}`;
}


function navigateToCount(url, index) {
    const title = ["今日收益", "我的车辆", "我的车辆"];
    window.top.location.href = `countBar.html?title=${encodeURIComponent(title[index])}&url=${encodeURIComponent(url)}`;
    // window.top.location.href = `./${url}`;    
}