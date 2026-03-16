// 2. 화살표 키 페이지 제어
document.addEventListener('keydown', (e) => {
    let path = window.location.pathname;
    let fileName = path.split("/").pop();
    let currentPageNum = parseInt(fileName.replace(/[^0-9]/g, "")) || 1;

    if (e.key === "ArrowRight") {
        if (currentPageNum < 9) window.location.href = `page${currentPageNum + 1}.html`;
    } else if (e.key === "ArrowLeft") {
        if (currentPageNum > 1) window.location.href = `page${currentPageNum - 1}.html`;
    }
});

console.log("화면 맞춤 완료! 이제 꽉 찬 화면으로 보일 거예요.");