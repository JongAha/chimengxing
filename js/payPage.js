function decreaseQuantity() {
    var quantity = parseInt(document.getElementById('quantity').value);
    if (quantity > 1) {
        quantity--;
        document.getElementById('quantity').value = quantity;
    }
}

function increaseQuantity() {
    var quantity = parseInt(document.getElementById('quantity').value);
    quantity++;
    document.getElementById('quantity').value = quantity;
}

function submitOrder() {
    // 这里可以添加表单验证逻辑  
    // 如果验证通过，则跳转到指定页面  
    // 例如：window.location.href = 'success.html';  
    alert('订单提交成功！'); // 仅为示例，实际应跳转到成功页面或进行其他处理  
}