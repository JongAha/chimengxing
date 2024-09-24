function handleClick(action) {
    switch (action) {
        case 'avatar':
            alert('修改头像');
            break;
        case 'nickname':
            alert('修改昵称');
            break;
        case 'realname':
            alert('修改真实姓名');
            break;
        case 'loginPassword':
            alert('修改登录密码');
            break;
        case 'paymentPassword':
            // alert('修改支付密码');
            window.location.href = 'settingPayPwd.html';
            break;
        case 'save':
            alert('保存修改');
            break;
        case 'logout':
            alert('退出登录');
            break;
        default:
            break;
    }
}
