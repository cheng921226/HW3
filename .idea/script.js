function handleNext() {
    const email = document.getElementById('emailInput').value;
    if (email.trim() === '') {
        alert('請輸入電子郵件地址或電話號碼');
    } else {
        alert('你輸入的是：' + email);
        // 在這裡可以接上伺服器的驗證 API 等功能
    }
}
