function recharge() {
    alert("充值功能未实现！");
}

function give() {
    alert("赠送功能未实现！");
}

function switchTab(tab) {
    const tabs = ['assetAll', 'assetExpenses', 'assetIncome'];
    const iframe = document.getElementById('asset-content-frame');
    switch (tab) {
        case 'assetAll':
            iframe.src = 'assetAll.html';
            break;
        case 'assetExpenses':
            iframe.src = 'assetExpenses.html';
            break;
        case 'assetIncome':
            iframe.src = 'assetIncome.html';
            break;
    }

    // 更新按钮状态
    const buttons = document.querySelectorAll('.tabbar button');
    buttons.forEach(button => {
        button.classList.remove('active');
        if (button.textContent === tabNameMapping(tab)) {
            button.classList.add('active');
        }
    });
}

function tabNameMapping(tab) {
    switch (tab) {
        case 'assetAll': return '全部';
        case 'assetExpenses': return '支出';
        case 'assetIncome': return '收入';
        default: return '';
    }
}