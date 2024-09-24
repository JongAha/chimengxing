let activeTab = 'all';

window.onload = function() {
    // 从 URL 中获取参数
    const urlParams = new URLSearchParams(window.location.search);
    const pageTab = urlParams.get('tab') || 'orderAll';
    const pageUrl = urlParams.get('url') || '';

    // Update the active tab
    changeTab(pageTab);

    // Update the content
    document.getElementById('order-content-frame').src = `./${pageUrl}`;
}
function changeTab(tab) {

    // Update the active tab
    activeTab = tab || pageTab;

    // Update tab classes
    const tabs = document.querySelectorAll('.tab');
    tabs.forEach(t => {
        t.classList.remove('active');
        console.log(t.innerText);
        
        if (t.innerText === tabNameMapping(tab)) {
            t.classList.add('active');
        }
    });

    // Change iframe src based on active tab
    document.getElementById('order-content-frame').src = `${tab}.html`;
}

function tabNameMapping(tab) {
    switch (tab) {
        case 'orderAll': return '全部';
        case 'pendingPayment': return '待付款';
        case 'pendingDelivery': return '待发货';
        case 'pendingReceipt': return '待收货';
        case 'pendingReview': return '待评价';
        case 'afterSale': return '售后';
        default: return '';
    }
}

function goBack() {
    window.location.href = `../../index.html?tab=${encodeURIComponent('mine')}&url=${encodeURIComponent('/pages/mine/index.html')}`;
}

function searchOrder() {
    const keyword = document.getElementById('search-input').value;
    // window.location.href = `/pages/order/order.html?keyword=${encodeURIComponent(keyword)}`;
    alert('搜索:'+ keyword);
}
