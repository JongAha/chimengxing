document.addEventListener('DOMContentLoaded', function () {

});


function contractBtn(e) {

    const text = e.textContent;
    if (text === "去签订") {
        window.top.location.href = "contractSign.html";
    } else {
        alert("去查看");
    }
    
}