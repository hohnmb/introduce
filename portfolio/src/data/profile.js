export const profile = {
  name: "이성욱",
  nameEn: "Lee Seonguk",
  title: "Frontend Developer",
  tagline: "React 기반 UI 구현과 실시간 처리에 강점을 가진\n프론트엔드 개발자",
  intro:
    "물류 현장에서의 4년이 가르쳐 준 것은, 작은 개선 하나가 전체 흐름을 바꾼다는 사실이었습니다. 이제는 사용자가 직접 닿는 화면에서 그 변화를 만들고자 합니다.",
  contact: {
    email: "hohnmb@naver.com",
    phone: "010-5268-9729",
    github: "hohnmb",
    location: "Seoul, Korea",
    portfolio:
      "https://dandelion-shell-e87.notion.site/1b958e99fe8980c8bfa0f8b467eb7f21",
  },
};

export const skills = [
  {
    group: "Frontend",
    items: [
      { name: "React", level: "Upper Intermediate", primary: true },
      { name: "JavaScript", level: "Intermediate" },
      { name: "TypeScript", level: "Basic" },
      { name: "Vue.js", level: "Intermediate" },
      { name: "TailwindCSS", level: "Intermediate" },
      { name: "HTML/CSS", level: "Intermediate" },
    ],
  },
  {
    group: "State & Realtime",
    items: [
      { name: "Zustand", level: "Intermediate", primary: true },
      { name: "WebSocket (StompJS)", level: "Intermediate" },
      { name: "OpenVidu", level: "Intermediate" },
      { name: "WebRTC", level: "Basic" },
    ],
  },
  {
    group: "Tools & Collaboration",
    items: [
      { name: "Git / GitHub", level: "Intermediate" },
      { name: "Jira", level: "Intermediate" },
      { name: "Figma", level: "Basic" },
      { name: "Notion", level: "Intermediate" },
      { name: "Vite", level: "Intermediate" },
      { name: "Axios", level: "Intermediate" },
      { name: "Postman", level: "Intermediate" },
      { name: "Phaser3", level: "Basic" },
    ],
  },
];

export const projects = [
  {
    id: "mallang",
    name: "말랑 (MalLang)",
    subtitle: "사회적 약자를 위한 AI 소통 플랫폼",
    period: "2025.02 – 2025.04",
    role: "프론트엔드 팀장 · 팀 7명",
    summary:
      "수어·음성·텍스트 인식 기술을 통합한 다자간 화상 상담 웹 서비스. Python으로 작성된 수어 인식 모델을 브라우저 환경으로 포팅하고, Web Worker로 메인 스레드를 보호해 화상 회의 중에도 실시간 인식이 끊김 없이 동작하도록 구현했습니다.",
    stack: [
      "React",
      "Zustand",
      "TailwindCSS",
      "StompJS",
      "OpenVidu",
      "Mediapipe",
      "TensorFlow.js",
    ],
    contributions: [
      "전체 UI 구조 및 주요 페이지 설계 (홈 / 로그인 / 상담 / 화상회의)",
      "OpenVidu 기반 다자간 실시간 화상 회의 프론트엔드 구현",
      "WebSocket(StompJS)을 활용한 실시간 채팅 데이터 동기화",
      "Mediapipe 기반 수어 인식 AI 모델을 JavaScript 환경으로 포팅·연동",
      "Whisper STT 결과와 수어 인식 결과를 통합하여 UI에 실시간 반영",
      "Zustand를 활용한 전역 상태 관리 및 실시간 인식 결과 동기화",
    ],
    trouble: {
      problem:
        "Mediapipe 수어 인식 모델이 Python 환경에 최적화되어 있어 브라우저에서 직접 실행이 어렵고, 실시간 처리 시 프레임 드랍이 발생.",
      approach:
        "TensorFlow.js + WebAssembly로 모델을 JS 환경으로 이식하고, Web Worker로 추론 연산을 메인 스레드와 분리해 UI 렌더링과 병렬 처리.",
      result:
        "화상 회의 중에도 인식 결과가 끊김 없이 표시되는 안정적인 실시간 수어 인식 구현.",
    },
    featured: true,
  },
  {
    id: "bizkit",
    name: "Bizkit",
    subtitle: "경량화된 협업 관리 툴 (Jira 클론)",
    period: "2025.04 – 2025.05",
    role: "프론트엔드",
    summary:
      "이슈 관리와 팀 협업 기능에 집중한 경량 프로젝트 관리 웹 애플리케이션. FSD(Feature-Sliced Design) 아키텍처로 마이그레이션해 신규 기능 추가 시 변경 범위를 슬라이스 내부로 한정시켰습니다.",
    stack: ["React", "JavaScript", "FSD"],
    contributions: [
      "FSD 아키텍처를 적용해 features / entities / shared 단위로 코드 분리",
      "일정 관리, 태스크 분류, 진행도 시각화 UI 구현",
      "기능 단위 모듈화로 신규 기능 추가 시 기존 코드 영향 최소화",
      "반응형 레이아웃 및 재사용 가능한 컴포넌트 설계",
    ],
    trouble: {
      problem:
        "초기 단일 폴더 구조로 진행하다 기능이 늘어나며 컴포넌트 간 의존성이 얽히고 수정 범위 파악이 어려워짐.",
      approach:
        "FSD 구조로 마이그레이션하여 슬라이스 단위로 책임을 분리하고, 상위 레이어가 하위 레이어만 참조하는 단방향 의존 규칙을 강제.",
      result:
        "신규 기능 추가 시 변경 범위가 슬라이스 내부로 한정되어 사이드 이펙트가 줄고, 팀원 간 코드 리뷰 효율이 향상됨.",
    },
    featured: true,
  },
  {
    id: "now-our-school",
    name: "지금 우리 학교는",
    subtitle: "웹 기반 실시간 마피아 게임",
    period: "2025.01 – 2025.02",
    role: "프론트엔드 · 팀 7명",
    summary:
      "WebRTC 음성 채팅과 Phaser3 게임 엔진을 결합한 실시간 멀티플레이어 마피아 게임. throttling과 보간(interpolation)으로 네트워크 부하를 줄이고 캐릭터 움직임의 끊김을 해소했습니다.",
    stack: ["React", "JavaScript", "Phaser3", "WebSocket", "WebRTC"],
    contributions: [
      "Phaser3 기반 게임 맵, 캐릭터 스프라이트, 충돌 감지 로직 구현",
      "직업군별(생존자 / 감염자 / 의사) 특수 능력 및 상호작용 기능 개발",
      "WebSocket을 활용한 플레이어 위치 및 게임 상태 실시간 동기화",
      "파티클 시스템 기반 시각 이펙트 및 BGM 연동",
    ],
    trouble: {
      problem:
        "다수 플레이어의 위치 정보를 매 프레임 송수신하자 네트워크 부하와 렉 발생.",
      approach:
        "위치 변경량이 임계값을 넘을 때만 이벤트를 송신하도록 throttling 적용, 수신 측에는 보간 처리.",
      result:
        "네트워크 메시지 전송량이 감소하고 캐릭터 움직임의 끊김 현상이 해소됨.",
    },
  },
  {
    id: "film-fit",
    name: "Film-Fit",
    subtitle: "AI 기반 영화 추천 서비스",
    period: "2024.11",
    role: "팀장 · 풀스택 · 팀 2명",
    summary:
      "장르 선호도와 TF-IDF 기반 검색 알고리즘을 활용한 맞춤형 영화 추천 플랫폼.",
    stack: ["Vue.js", "Vuex", "Django REST Framework", "JavaScript"],
    contributions: [
      "프로젝트 기획 및 전체 아키텍처 설계 (팀장 역할)",
      "TMDB API, YouTube API 연동을 통한 영화 정보 및 예고편 기능 구현",
      "TF-IDF 벡터화 + 코사인 유사도 기반 한글 검색 시스템 구현",
      "Django REST Framework를 활용한 백엔드 API 개발 및 Vue 프론트엔드 연동",
    ],
  },
];

export const timeline = [
  {
    year: "2024.07 – 2025.07",
    title: "삼성청년SW·AI아카데미 (SSAFY)",
    place: "삼성SDS 멀티캠퍼스",
    desc: "Python·JavaScript·Vue·React 기반 풀스택 교육 이수. React 프로젝트 3건 수행 (FE 팀장 2회).",
  },
  {
    year: "2019.10 – 2024.01",
    title: "데이홈",
    place: "물류 주임/계장",
    desc: "제품 검수 및 품질 관리, 입출고 관리, 현장 운영 전반 담당. 반복 업무 환경에서 오류를 최소화하기 위한 체크리스트와 검수 절차 개선.",
  },
  {
    year: "2018.02 – 2019.10",
    title: "육군 병장 제대",
    place: "군 복무",
    desc: "병역 의무 이행 후 만기 전역.",
  },
  {
    year: "2016.03 – 2018.02",
    title: "아세아항공직업전문학교",
    place: "항공정비부사관과 졸업",
    desc: "항공기체정비기능사 · 항공기관정비기능사 자격 취득.",
  },
];

export const writings = [
  {
    title: "Python 수어 인식 모델을 브라우저로 옮기기까지",
    summary:
      "Mediapipe 기반 모델을 TensorFlow.js로 포팅하고 Web Worker로 추론 스레드를 분리한 과정. 프레임 드랍을 어떻게 잡았는가.",
    date: "2025.04",
    tag: "말랑 프로젝트",
    status: "작성 예정",
  },
  {
    title: "FSD로 다시 그린 폴더 구조 — Bizkit 마이그레이션 기록",
    summary:
      "단일 폴더 구조의 한계를 마주한 시점, Feature-Sliced Design을 선택한 이유와 옮기는 과정에서 배운 것들.",
    date: "2025.05",
    tag: "Bizkit · 아키텍처",
    status: "작성 예정",
  },
  {
    title: "비전공 신입이 4번의 팀 프로젝트에서 얻은 것",
    summary:
      "물류 현장에서 프론트엔드까지. SSAFY 1년의 회고와 협업에서 배운 것들.",
    date: "2025.07",
    tag: "회고",
    status: "작성 예정",
  },
];
