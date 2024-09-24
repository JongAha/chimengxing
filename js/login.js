function handleLogin() {
    const phone = document.getElementById('phone').value;
    const password = document.getElementById('password').value;

    // 这里可以添加登录逻辑，比如验证手机号和密码
    if (phone && password) {
        alert('登录成功！');
    } else {
        alert('请输入手机号和密码！');
    }
}
