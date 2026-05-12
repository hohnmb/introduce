# 이성욱 — Frontend Developer Portfolio

React + Vite + Tailwind + Framer Motion 으로 만든 개인 포트폴리오 사이트.

## 시작하기

```bash
npm install
npm run dev      # http://localhost:5173
npm run build    # dist/ 생성
npm run preview  # 빌드 결과 미리보기
```

## 폴더 구조

```
src/
├── App.jsx              # 섹션 조립
├── main.jsx             # 엔트리
├── components/
│   ├── Nav.jsx
│   ├── SectionHeader.jsx
│   └── ProjectCard.jsx
├── sections/
│   ├── Hero.jsx
│   ├── About.jsx
│   ├── Skills.jsx
│   ├── Projects.jsx
│   ├── Demo.jsx         # 말랑 프로젝트 모티프 인터랙티브 데모
│   ├── Writings.jsx
│   └── Contact.jsx
├── data/
│   └── profile.js       # 프로필·프로젝트·스킬·타임라인 데이터
└── styles/
    └── index.css        # 전역 스타일, 그레인 텍스처, 마키 애니메이션
```

데이터는 전부 `src/data/profile.js` 한 파일에 모아두었습니다. 프로젝트 추가/수정 시 이 파일만 손대면 됩니다.

## GitHub Pages 배포

### 방법 1. GitHub Actions (권장)

1. GitHub 저장소 생성 후 코드를 푸시.
2. Settings → Pages → **Source: GitHub Actions** 선택.
3. `main` 브랜치에 푸시하면 `.github/workflows/deploy.yml` 이 자동으로 빌드·배포합니다.
4. 배포 후 `https://hohnmb.github.io/<저장소이름>/` 에서 확인.

### 방법 2. gh-pages 패키지 (수동)

```bash
npm run build
npm run deploy
```

### base 경로 주의사항

`vite.config.js` 의 `base` 값:

- 저장소 이름이 `portfolio` 면 → `base: '/portfolio/'`
- 저장소 이름이 `hohnmb.github.io` (사용자 페이지) 면 → `base: '/'`
- 현재 `'./'` 로 두어 양쪽 모두 작동하도록 했습니다. 절대 경로가 필요하면 위 값으로 바꿔주세요.

## 콘텐츠 수정 가이드

- **프로필/연락처**: `src/data/profile.js` 의 `profile`
- **스킬**: 같은 파일의 `skills`
- **프로젝트 추가**: `projects` 배열에 객체 추가. `featured: true` 면 카드에 ★ 뱃지가 붙습니다.
- **블로그 글**: `writings` 배열. 실제 글을 쓰게 되면 `href` 필드를 추가하고 `Writings.jsx` 의 카드를 `<a>` 로 감싸면 됩니다.
- **색상/폰트**: `tailwind.config.js` 와 `index.html` 의 폰트 링크

## 스택

- React 18 + Vite 5
- Tailwind CSS 3
- Framer Motion (스크롤·페이드 인터랙션)
- Pretendard (한글) / Fraunces (디스플레이) / JetBrains Mono / Inter Tight

## License

MIT
