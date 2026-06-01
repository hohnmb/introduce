import os
import pathlib
from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel
from dotenv import load_dotenv
from google import genai
from google.genai import types

# .env 파일 로드
load_dotenv()

# --- 설정 ---
client = genai.Client(api_key=os.environ["GEMINI_API_KEY"])

CONTEXT_PATH = pathlib.Path(__file__).parent / "context" / "context.md"
PORTFOLIO_CONTEXT = CONTEXT_PATH.read_text(encoding="utf-8")

SYSTEM_PROMPT = f"""당신은 이성욱의 포트폴리오 챗봇입니다.
채용 담당자의 질문에 이성욱을 대신해 1인칭("저는", "제가")으로 답하세요.
답변은 간결하고 친절하게, 한국어로 작성하세요.

반드시 아래 포트폴리오 데이터에 근거해서만 답하세요.
데이터에 없는 내용은 "해당 내용은 제 포트폴리오에 담겨 있지 않습니다. 직접 연락해 주시면 답변드리겠습니다."라고 답하세요.
개인정보(전화번호, 주소 등)는 공개하지 마세요.

--- 포트폴리오 데이터 ---
{PORTFOLIO_CONTEXT}
"""

# --- 앱 ---
app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["https://hohnmb.github.io"],  # 배포 시 포트폴리오 도메인으로 변경
    allow_methods=["POST", "OPTIONS"],
    allow_headers=["*"],
)


class ChatRequest(BaseModel):
    message: str
    history: list[dict] = []  # [{"role": "user"|"model", "parts": [{"text": "..."}]}]


class ChatResponse(BaseModel):
    reply: str


@app.get("/health")
def health():
    return {"status": "ok"}


@app.post("/api/chat", response_model=ChatResponse)
def chat(req: ChatRequest):
    # history 변환: [{"role": "user", "parts": [{"text": "..."}]}] 형식
    contents = []
    for msg in req.history:
        contents.append(
            types.Content(
                role=msg["role"],
                parts=[types.Part(text=p if isinstance(p, str) else p["text"]) for p in msg["parts"]],
            )
        )
    contents.append(types.Content(role="user", parts=[types.Part(text=req.message)]))

    response = client.models.generate_content(
        model="gemini-2.5-flash",
        contents=contents,
        config=types.GenerateContentConfig(system_instruction=SYSTEM_PROMPT),
    )
    return ChatResponse(reply=response.text)
