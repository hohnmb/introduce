# Cloud Run 배포 가이드

## 사전 준비

1. [Google Cloud Console](https://console.cloud.google.com)에서 프로젝트 생성
2. Gemini API Key 발급: [Google AI Studio](https://aistudio.google.com/apikey)
3. gcloud CLI 설치 및 로그인:

```bash
gcloud auth login
gcloud config set project YOUR_PROJECT_ID
```

---

## 배포 (3단계)

### 1. Container Registry에 이미지 빌드 & 푸시

```bash
cd chatbot-api

gcloud builds submit --tag gcr.io/YOUR_PROJECT_ID/portfolio-chatbot
```

### 2. Cloud Run 배포

```bash
gcloud run deploy portfolio-chatbot \
  --image gcr.io/YOUR_PROJECT_ID/portfolio-chatbot \
  --platform managed \
  --region asia-northeast3 \
  --allow-unauthenticated \
  --set-env-vars GEMINI_API_KEY=your_api_key_here
```

> `asia-northeast3` = 서울 리전 (한국 사용자 기준 가장 빠름)

### 3. 배포 URL 확인

배포 완료 후 터미널에 URL이 출력됩니다:
```
Service URL: https://portfolio-chatbot-xxxx-uc.a.run.app
```

---

## 프론트엔드 환경변수 설정

`portfolio/.env.local` 파일 생성:

```
VITE_CHAT_API_URL=https://portfolio-chatbot-xxxx-uc.a.run.app
```

GitHub Pages 배포 시 `.env.production` 또는 GitHub Actions secret으로 주입하세요.

---

## CORS 설정 (선택)

현재 `main.py`는 `allow_origins=["*"]`로 설정되어 있습니다.
보안을 위해 포트폴리오 도메인만 허용하려면 main.py에서 변경:

```python
allow_origins=["https://hohnmb.github.io"],
```

---

## 로컬 테스트

```bash
cd chatbot-api

# 환경변수 설정
cp .env.example .env
# .env 파일에 GEMINI_API_KEY 입력

# 의존성 설치
pip install -r requirements.txt

# 서버 실행
uvicorn main:app --reload --port 8080
```

API 테스트:
```bash
curl -X POST http://localhost:8080/api/chat \
  -H "Content-Type: application/json" \
  -d '{"message": "가장 자신 있는 기술이 뭔가요?"}'
```

---

## 비용 참고

Cloud Run은 요청이 없을 때 자동으로 0으로 스케일다운되어 **비용이 0**입니다.
무료 티어: 월 200만 요청, 360,000 vCPU-초 — 포트폴리오 트래픽에서 사실상 무료.

---

## 폴더 구조

```
chatbot-api/
├── main.py              # FastAPI 앱 (Gemini 연동)
├── requirements.txt
├── Dockerfile
├── .env.example
├── DEPLOY.md            # 이 파일
└── context/
    └── context.md       # RAG 소스 데이터 (이력서 + 포트폴리오 통합본)
```
