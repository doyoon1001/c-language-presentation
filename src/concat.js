// 1. 모든 요소가 화면에 꽉 차도록 강제 스타일 주입
const style = document.createElement('style');
style.innerHTML = `
  * { box-sizing: border-box; }
  body, html {
    margin: 0 !important;
    padding: 0 !important;
    width: 100vw !important;
    height: 100vh !important;
    overflow: hidden !important;
    display: flex !important;
    justify-content: center !important;
    align-items: center !important;
    background-color: black !important; /* 배경을 검은색으로 해서 영화처럼 */
  }

  /* 슬라이드 내용물(이미지나 메인 div)이 화면에 꽉 차도록 */
  body > div, body > img, .container {
    width: 100% !important;
    height: 100% !important;
    display: flex !important;
    flex-direction: column !important;
    justify-content: center !important;
    align-items: center !important;
    background-size: cover !important; /* 배경 이미지 꽉 채우기 */
    background-position: center !important;
  }
`;
document.head.appendChild(style);

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