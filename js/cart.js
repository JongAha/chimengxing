// 全选功能
document.getElementById('selectAllCheckbox').addEventListener('change', function () {
    const checkboxes = document.querySelectorAll('.product-card input[type="checkbox"]');
    checkboxes.forEach(checkbox => {
        checkbox.checked = this.checked;
    });
});


document.addEventListener('DOMContentLoaded', (event) => {
    const closeIframeBtn = document.getElementById('closeIframeBtn');
    const overlay = document.getElementById('overlay');

    closeIframeBtn.addEventListener('click', () => {
        overlay.style.display = 'none';
    });

    // Optionally, you can add a click event listener to the overlay itself to close it, except for the iframe area  
    overlay.addEventListener('click', (event) => {
        if (event.target === overlay) {
            overlay.style.display = 'none';
        }
    });
});

function checkout() {
    document.getElementById("overlay").style.display = "flex";
}