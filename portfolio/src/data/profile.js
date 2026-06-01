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
      { name: "TypeScript", level: "Intermediate" },
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
      "수어·음성·텍스트 인식 기술을 통합한 다자간 화상 상담 웹 서비스. Mediapipe HandLandmarker로 손 랜드마크를 추출하고 ml-knn 분류기로 한글 자모를 인식하는 수어 파이프라인을 브라우저 단독으로 구현했습니다.",
    stack: [
      "React",
      "Zustand",
      "TailwindCSS",
      "StompJS",
      "OpenVidu",
      "Mediapipe",
      "ml-knn",
    ],
    contributions: [
      "전체 UI 구조 및 주요 페이지 설계 (홈 / 로그인 / 상담 / 화상회의)",
      "OpenVidu 기반 다자간 실시간 화상 회의 프론트엔드 구현",
      "WebSocket(StompJS)을 활용한 실시간 채팅 데이터 동기화",
      "Mediapipe HandLandmarker로 손 랜드마크를 추출하고 ml-knn(k=3) 분류기로 한글 자모 22클래스 인식 파이프라인 구현",
      "Whisper STT 결과와 수어 인식 결과를 통합하여 UI에 실시간 반영",
      "Zustand를 활용한 전역 상태 관리 및 실시간 인식 결과 동기화",
    ],
    troubles: [
      {
        problem:
          "손이 다음 동작으로 넘어가는 전이 구간에서 의도하지 않은 자모가 연속 입력되고, 같은 제스처가 수십 번 중복 인식되는 문제가 발생.",
        approach:
          "3단계 디바운싱 설계 — ① 직전 처리 후 1초 이내 다른 제스처 무시(전이 구간 필터), ② 동일 제스처 2초 이내 재인식 차단, ③ 연속 3프레임 동일 분류일 때만 확정. 자음→모음 holdTime과 된소리 토글 매핑으로 음절 단위 입력 흐름 안정화.",
        result:
          "22개 제스처 클래스에 대해 사용자가 의도한 자모만 입력되도록 안정화. 실사용 시연 환경에서 무결한 한글 문장 입력 가능.",
      },
      {
        problem:
          "OpenVidu가 관리하는 video 엘리먼트에 직접 추론을 붙이자 스트림 재생성 시 추론이 끊기고 비디오 노드가 충돌하는 문제 발생.",
        approach:
          "비디오 노드 정리·부착 순서를 직렬화(50ms timeout)하고, HandLandmarker를 GPU delegate로 초기화. 이전 프레임 추론이 끝나기 전 다음 추론 진입을 막는 processingRef 플래그로 큐 적체 방지.",
        result:
          "다자간 화상 회의 중에도 끊김 없이 수어 인식이 동작하고, 채널 입·퇴장 반복 시에도 추론 루프가 메모리 누수 없이 정상 종료.",
      },
    ],
    github: "https://github.com/hohnmb/ssafy-secondpjt",
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
    stack: ["React 19", "TypeScript", "Zustand", "TailwindCSS", "@hello-pangea/dnd", "Axios", "Vite", "FSD"],
    contributions: [
      "@hello-pangea/dnd 기반 스프린트 보드 드래그앤드롭 구현 — 서버 응답을 기다리지 않는 낙관적 UI 업데이트로 즉각적인 상호작용 확보",
      "드롭 위치 전후 이슈의 position 값을 활용해 전체 재정렬 없이 단일 이슈 순서만 갱신",
      "FSD 아키텍처 도입 + Steiger 린트로 단방향 의존 강제 → 신규 기능 변경 범위를 슬라이스 내부로 한정해 유지보수성 향상",
      "Zustand 전역 상태 관리 및 로그인·설정·프로필 페이지 구현",
    ],
    troubles: [
      {
        problem:
          "기능이 늘며 도메인 간 import가 얽혀 수정 범위 파악이 어려워지고, 두 명이 병렬 개발 시 충돌이 잦아짐.",
        approach:
          "FSD로 마이그레이션해 app/pages/widgets/features/entities/shared 6개 레이어로 분리하고, Steiger 플러그인으로 단방향 의존 규칙을 자동 검증(개발 서버 실행 시 즉시 검사).",
        result:
          "신규 기능의 변경 범위가 슬라이스 내부로 한정되어 사이드 이펙트 감소. 프론트엔드 2명이 페이지를 병렬 개발해도 충돌이 거의 없어 코드 리뷰 효율 향상.",
      },
      {
        problem:
          "droppableId를 '{상태}-{컴포넌트ID}' 형식으로 인코딩했는데, 일부 컴포넌트 ID에 하이픈이 포함돼 split('-') 파싱 시 ID가 잘리는 문제 발생.",
        approach:
          "첫 토큰만 상태로 취하고 나머지를 slice(1).join('-')로 재조합해 ID 형식을 바꾸지 않고 파서를 견고화. 데이터 로딩 완료 전 드래그 시에는 findActiveSprintId로 활성 스프린트 ID를 동적 보완.",
        result:
          "컴포넌트 ID 형식과 무관하게 이동이 정상 동작하고, 첫 진입 직후 드래그해도 오류 없이 처리됨.",
      },
    ],
    github: "https://github.com/hohnmb/ssafy-finalpjt",
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
    github: "https://github.com/hohnmb/ssafy-first_pjt",
    stack: ["React", "TypeScript", "Phaser3", "STOMP/SockJS", "OpenVidu", "WebRTC"],
    contributions: [
      "Phaser 9개 씬을 SceneManager로 라우팅해 서버 phase와 클라이언트 씬 상태를 1:1 동기화, 7인 동시 접속 환경에서 게임 흐름 일관성 확보",
      "4종 직업 스킬을 전략 패턴으로 분리해 직업 추가 시 본체 수정 없이 확장 가능한 구조 설계",
      "STOMP over SockJS 좌표 동기화에 100ms 트윈 보간 + 3px 스냅 임계값을 결합해 네트워크 지터 환경의 캐릭터 떨림 해소",
      "Phaser Light2D 파이프라인 + 직업별 시야 반경 차등 + 파티클 이펙트로 야간 긴장감 시각화",
    ],
    troubles: [
      {
        problem:
          "7인 동시 이동 시 다른 플레이어 캐릭터가 미세하게 떨려 보여 게임 몰입을 저해.",
        approach:
          "송신 빈도를 늘리지 않고 수신 측에 100ms 트윈 보간을 적용하되, 좌표 오차가 3px을 넘으면 즉시 스냅하는 비대칭 보정 적용.",
        result:
          "동일 송신량에서 시각적 떨림이 사라지고, 큰 위치 오차는 즉시 보정돼 '순간이동' 현상도 동시 해결.",
      },
      {
        problem:
          "씬 전환 시 이전 BGM이 정리되지 않아 중복 재생되고, 캐릭터 물리 body가 detach되는 라이프사이클 누수 발생.",
        approach:
          "BGM 정리·자동재생 잠금 해제를 BGMController 단일 책임 객체로 캡슐화하고, 씬 shutdown 훅을 일원화. reinitializePlayer 복구 경로 추가.",
        result:
          "씬 입·퇴장을 반복해도 BGM 중복·물리 누수 없이 정상 종료.",
      },
    ],
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
    year: "2026.05 – 2026.07",
    title: "서울시 매력일자리 AI 프론트엔드 실무과정",
    place: "이젠아카데미DX교육센터",
    desc: "Next.js(App Router), Zustand, TanStack Query, TypeScript, Prisma, GitHub Actions CI/CD 등 실무 중심 학습. 생성형 AI 도구(Claude Code, Cursor) 활용 바이브코딩 경험.",
  },
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
    title: "브라우저에서 수어를 입력하기까지 — Mediapipe + ml-knn 파이프라인",
    summary:
      "21개 관절 좌표에서 15개 각도 피처를 직접 설계하고 KNN 분류기로 한글 자모 22클래스를 인식한 과정. 오인식·중복 입력을 막기 위한 3단계 디바운싱 구조와, OpenVidu 화상 스트림 위에서 추론을 끊김 없이 붙이기까지의 기록.",
    date: "2025.04",
    tag: "말랑 프로젝트",
    status: "작성 예정",
  },
  {
    title: "FSD로 다시 그린 폴더 구조 — Bizkit 마이그레이션 기록",
    summary:
      "단일 폴더 구조의 한계를 마주한 시점, Feature-Sliced Design을 선택한 이유와 옮기는 과정. Steiger 린트로 단방향 의존을 강제하고, 다음엔 TanStack Query와 Vitest를 도입하겠다고 다짐한 이야기.",
    date: "2025.05",
    tag: "Bizkit · 아키텍처",
    status: "작성 예정",
  },
  {
    title: "비전공 신입이 4번의 팀 프로젝트에서 얻은 것",
    summary:
      "물류 현장에서 프론트엔드까지. 좋은 코드를 짜는 것만큼 '다른 사람도 같은 규칙으로 짤 수 있는 구조'를 만드는 게 중요하다는 것, 그리고 사용자의 소통 경험이 기술보다 먼저라는 것을 배운 SSAFY 1년의 회고.",
    date: "2025.07",
    tag: "회고",
    status: "작성 예정",
  },
];
