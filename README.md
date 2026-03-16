# C언어 팀플 발표 자료

## 🚀 개요
본 프로젝트는 C언어의 역사, 특징, 장단점, 그리고 현대 IT 산업에서의 중요성을 다루는 발표 자료입니다. 4명의 팀원이 협업하여 제작했습니다.

## 📂 프로젝트 구조
- `page1.html` ~ `page9.html`: 각 슬라이드를 구성하는 HTML 파일
- `src/concat.js`: 모든 슬라이드를 하나로 합치는 스크립트

## 🛠️ 사용 방법

### 1. 개별 슬라이드 보기
각 HTML 파일은 독립적으로 실행 가능합니다.
```bash
open page1.html
open page2.html
...
```

### 2. 모든 슬라이드 합치기
발표 시 사용할 단일 HTML 파일을 생성하려면 `src/concat.js`를 실행하세요.

**실행 방법:**
```bash
node src/concat.js
```

**결과:**
- `final_presentation.html`: 모든 슬라이드가 합쳐진 최종 파일
- `src/concat.js`는 실행 후 자동으로 삭제됩니다.

## 🎨 기술 스택
- **HTML5**: 웹 표준 기반 슬라이드 제작
- **Tailwind CSS**: 유틸리티 우선 CSS 프레임워크
- **Font Awesome**: 아이콘 라이브러리
- **JavaScript**: 슬라이드 합치기 기능

## 👥 팀원
- 김도윤
- 김준영
- 이윤호
- 장원준
