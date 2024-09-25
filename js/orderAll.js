function utilsButton(state) {
    const func = ["售后", "催发货", "确认收货", "发布评论", "去支付", "查看详情"];

    switch (state) {
        case 0:
            navigateToOrderFun("afterSaleForm.html", func[state]);
            break;
        case 1:
            alert(func[state]);
            break;
        case 2:
            alert(func[state]);
            break;
        case 3:
            navigateToOrderFun("orderReview.html", func[state]);
            break;
        case 4:
            alert(func[state]);
            break;
        case 5:
            alert(func[state]);
            break;
    }
    // alert(func[state]);
}

function navigateToOrderFun(url, title) {
    window.top.location.href = `orderBar.html?title=${encodeURIComponent(title)}&url=${encodeURIComponent(url)}`;
}