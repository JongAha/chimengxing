const regionInput = document.getElementById('region');
const addressInput = document.getElementById('address');
const recipientInput = document.getElementById('recipient');
const phoneInput = document.getElementById('phone');
const saveButton = document.getElementById('save-button');

function checkFormCompletion() {
    const isFormFilled = regionInput.value && addressInput.value && recipientInput.value && phoneInput.value;
    saveButton.disabled = !isFormFilled; // 根据是否填完来启用/禁用按钮
}

// 监听输入框的变化
regionInput.addEventListener('input', checkFormCompletion);
addressInput.addEventListener('input', checkFormCompletion);
recipientInput.addEventListener('input', checkFormCompletion);
phoneInput.addEventListener('input', checkFormCompletion);

function saveAddress() {
    const address = {
        region: regionInput.value,
        address: addressInput.value,
        recipient: recipientInput.value,
        phone: phoneInput.value
    };
    // 将地址保存到本地存储或发送到服务器
    console.log('保存的地址:', address.region, address.address, address.recipient, address.phone);
    
    alert('保存成功！');
    window.history.back(); // 返回上一页
}