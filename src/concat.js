// 1. 모든 페이지에 공통 CSS 주입 (화면 짤림 방지 및 중앙 정렬)
const style = document.createElement('style');
style.innerHTML = `
  body, html {
    margin: 0 !important;
    padding: 0 !important;
    width: 100% !important;
    height: 100% !important;
    overflow: auto !important; /* 내용이 너무 크면 스크롤 허용, 필요 없으면 hidden으로 변경 */
    display: flex !important;
    flex-direction: column !important;
    justify-content: flex-start !important;
    align-items: center !important;
    background-color: white;
  }
  /* 이미지나 큰 요소들이 화면 너비를 넘지 않도록 제한 */
  img, table, div { 
    max-width: 95vw !important; 
    height: auto !important;
  }
`;
document.head.appendChild(style);

// 2. 화살표 키 페이지 제어
document.addEventListener('keydown', (e) => {
    // 현재 파일명에서 숫자 추출
    let path = window.location.pathname;
    let fileName = path.split("/").pop();
    let currentPageNum = parseInt(fileName.replace(/[^0-9]/g, "")) || 1;

    if (e.key === "ArrowRight") {
        // 오른쪽 화살표: 다음 페이지
        if (currentPageNum < 9) {
            window.location.href = `page${currentPageNum + 1}.html`;
        }
    } else if (e.key === "ArrowLeft") {
        // 왼쪽 화살표: 이전 페이지
        if (currentPageNum > 1) {
            window.location.href = `page${currentPageNum - 1}.html`;
        }
    }
});

console.log("C언어 발표 제어 및 스타일 교정 스크립트 로드 완료!");