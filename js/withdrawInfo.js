document.addEventListener('DOMContentLoaded', function () {
    const sendCaptchaButton = document.getElementById('sendCaptcha');

    sendCaptchaButton.addEventListener('click', function () {
        alert('验证码已发送！');
        // 这里可以添加实际发送验证码的逻辑
    });

    const submitButton = document.getElementById('submitButton');

    submitButton.addEventListener('click', function () {
        alert('提现请求已提交！');
        // 这里可以添加实际提交提现信息的逻辑
    });
});

function goBack() {
    window.history.back();
}