function exchange() {
    alert("兑换功能未实现！");
}

function give() {
    alert("赠送功能未实现！");
}

function switchTab(tab) {
    const iframe = document.getElementById('equity-content-frame');
    switch (tab) {
        case 'equityAll':
            iframe.src = 'equityAll.html';
            break;
        case 'equityExpenses':
            iframe.src = 'equityExpenses.html';
            break;
        case 'equityIncome':
            iframe.src = 'equityIncome.html';
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
        case 'equityAll': return '全部';
        case 'equityExpenses': return '支出';
        case 'equityIncome': return '收入';
        default: return '';
    }
}