// 슬라이드 제어 자바스크립트
document.addEventListener('keydown', (e) => {
    // 1. 현재 주소에서 파일명(page1.html 등)만 가져오기
    let path = window.location.pathname;
    let fileName = path.split("/").pop();

    // 2. 파일명에서 숫자만 추출 (예: page3.html -> 3)
    let currentPageNum = parseInt(fileName.replace(/[^0-9]/g, "")) || 1;

    // 3. 화살표 키 입력 처리
    if (e.key === "ArrowRight") {
        // 오른쪽 화살표: 다음 페이지 (9페이지가 끝이면 이동 안 함)
        if (currentPageNum < 9) {
            window.location.href = `page${currentPageNum + 1}.html`;
        }
    } else if (e.key === "ArrowLeft") {
        // 왼쪽 화살표: 이전 페이지 (1페이지가 처음이면 이동 안 함)
        if (currentPageNum > 1) {
            window.location.href = `page${currentPageNum - 1}.html`;
        }
    }
});

console.log("C언어 발표 제어 스크립트가 준비되었습니다!");