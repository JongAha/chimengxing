document.getElementById('imageContainer').addEventListener('click', function () {
    let fileInput = document.createElement('input');
    fileInput.type = 'file';
    fileInput.accept = 'image/*';
    fileInput.click();

    fileInput.addEventListener('change', function (event) {
        let file = event.target.files[0];
        if (file) {
            let reader = new FileReader();
            reader.onload = function (e) {
                document.getElementById('selectedImage').src = e.target.result;
            };
            reader.readAsDataURL(file);
        }
    });
});

document.getElementById('stars').addEventListener('click', function (event) {
    let target = event.target;
    if (target.classList.contains('star')) {
        let rating = target.getAttribute('data-rating');
        let stars = document.querySelectorAll('.star');
        stars.forEach(star => {
            if (star.getAttribute('data-rating') <= rating) {
                star.classList.add('selected');
            } else {
                star.classList.remove('selected');
            }
        });
    }
});

document.getElementById('submitBtn').addEventListener('click', function () {
    let evaluation = document.getElementById('evaluationInput').value;
    if (evaluation.trim() === '') {
        alert('请填写评价内容');
        return;
    }

    let rating = document.querySelectorAll('.star.selected').length;
    if (rating === 0) {
        alert('请给出综合评价');
        return;
    }

    // 在这里可以处理提交逻辑，例如发送数据到服务器  
    alert('评价提交成功');

    // 模拟页面跳转（可以替换为实际的URL）  
    // window.location.href = 'success.html';
});