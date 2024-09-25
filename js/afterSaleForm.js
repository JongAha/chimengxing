document.getElementById('imageUpload').addEventListener('click', function () {
    // 在这里你可以添加选择图片的代码，例如使用文件输入  
    let fileInput = document.createElement('input');
    fileInput.type = 'file';
    fileInput.accept = 'image/*';
    fileInput.click();

    fileInput.addEventListener('change', function (event) {
        let file = event.target.files[0];
        if (file) {
            // 在这里处理文件上传，例如显示图片预览或上传到服务器  
            console.log('Selected file:', file);
        }
    });
});

document.getElementById('submitBtn').addEventListener('click', function () {
    let description = document.getElementById('problemDescription').value;
    if (description.trim() === '') {
        alert('请填写问题描述');
        return;
    }

    // 在这里你可以处理提交逻辑，例如验证输入或发送数据到服务器  
    alert('提交成功');

    // 模拟页面跳转（可以替换为实际的URL）  
    // window.location.href = 'success.html';
});