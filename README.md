## 프로젝트 개요
<img width="1440" height="900" alt="image" src="https://github.com/user-attachments/assets/c11d5b12-5611-4243-8d9f-f4f6ce75ed39" />

### 프로젝트 제목

판타시(Fanta-Poem) - 책을 읽고 시로 기록하는 독서 플랫폼

### 개발 목적

독서 후 느낀 감정과 생각을 **시(詩)라는 창의적 형식**으로 표현하게 함으로써, 기존 평점/리뷰 중심 플랫폼과 차별화된 독서 기록 경험을 제공합니다. 이를 통해 **풀스택 웹 개발 능력**을 향상시키고, 실제 서비스 운영에 필요한 사용자 인증, 콘텐츠 관리, 소셜 기능을 구현합니다.

### 주요 목표

- 사용자가 부담 없이 **짧은 시 형식**으로 독서 감상을 기록할 수 있는 플랫폼 제공
- 같은 책에 대한 **다양한 시각의 시**를 감상할 수 있는 커뮤니티 형성
- 개인의 독서 시 모음집을 만들어 **나만의 독서 아카이브** 구축
- 현대적인 웹 기술 스택을 활용한 **확장 가능한 서비스 아키텍처** 구현

---

## 주요 기능

### 1. 책 검색

- **기능**: 사용자가 읽은 책을 검색할 수 있습니다.
- **기술**:
    - 카카오 도서 검색 api 사용
        - https://developers.kakao.com/docs/latest/ko/daum-search/dev-guide#search-book
    - MongoDB에 사용자가 선택한 책 정보 저장

### 2. 시 작성 및 공개 설정

- **기능**: 책을 읽고 느낀 감정을 시로 작성합니다. 기본은 비공개(나만 보기)이며, 원하는 시만 공개로 전환 가능.
- **기술**:
    - `App Router`의 Server Actions을 활용한 시 저장 및 수정
    - 마크다운 에디터 지원으로 줄바꿈과 여백 표현 가능
    - 책의 특정 문장을 인용할 수 있는 기능 (인용구 추가)
    - **공개/비공개 토글 기능** (작성 시 또는 작성 후 변경 가능)
    - TanstackQuery 를 통해 저장된 시 실시간 업데이트

### 3. 시 갤러리 (커뮤니티)

- **기능**: **다른 사용자들이 공개한 시**를 감상하고, 좋아요와 댓글을 남길 수 있습니다. 비공개 시는 본인만 볼 수 있습니다.
- **기술**:
    - 무한 스크롤 구현 (`React-Query`의 `useInfiniteQuery`)
    - 책별, 최신순, 인기순 필터링 기능
    - **공개된 시만 조회**되도록 API에서 필터링 (`isPublic: true`)
    - 좋아요 및 댓글 기능 (낙관적 업데이트 적용)
    - `Zustand`를 활용한 필터 상태 관리

### 4. 마이 포엠북 (나만의 시집)

- **기능**: 내가 작성한 모든 시(공개/비공개 포함)를 시간순으로 모아보고, 통계를 확인할 수 있습니다.
- **기술**:
    - 사용자별 시 컬렉션 조회 (JWT 기반 인증으로 본인 데이터만 접근)
    - **공개/비공개 상태 표시** 및 토글 기능
    - 타임라인 형식의 UI로 독서 여정 시각화

### 5. 사용자 인증 시스템

- **기능**: 회원가입, 로그인, 프로필 관리
- **기술**:
    - `NextAuth.js`를 활용한 이메일/소셜 로그인 (Google, Kakao)
    - `Session` 기반 인증 + `JWT` 토큰 발급
    - 프로필 이미지 업로드 (Supabase Storage 연동)

### 6. 시 공유 및 링크 생성

- **기능**: 공개한 시를 SNS에 공유하거나 직접 링크를 복사하여 특정인에게만 공유 가능
- **기술**:
    - 시별 고유 URL 생성 (`/poem/[poemId]`)
    - Open Graph 메타 태그 추가로 SNS 미리보기 최적화
    - 링크 복사 버튼 (클립보드 API)
    - 공개 시만 외부 접근 가능하도록 권한 검증

---

## 디자인
<img width="2880" height="1810" alt="image" src="https://github.com/user-attachments/assets/78fa25a6-7c3b-453d-bcb6-a6b5538ef0c9" />
<strong>로그인 페이지</strong>
<table width="100%">
  <tr>
    <td align="center" width="33%">
      <img width="2880" height="2048" alt="image" src="https://github.com/user-attachments/assets/0108c89f-ee3e-419f-986e-76fdd8e0b97f" /><br/>
      <strong>서재</strong>
    </td>
    <td align="center" width="33%">
      <img width="2880" height="2048" alt="image" src="https://github.com/user-attachments/assets/94ccbfdc-47d1-47d1-9337-5e8bb6167ec8" /><br/>
      <strong>마이페이지</strong>
    </td>
  </tr>
</table>

<strong>메뉴 페이지</strong>
<table width="100%">
  <tr>
<td align="center" width="33%">
      <img width="2880" height="2048" alt="image" src="https://github.com/user-attachments/assets/5471f736-c8c7-4c42-b339-7016859064c9" /><br/>
      <strong>탐색</strong>
    </td>
    <td align="center" width="33%">
      <img width="2880" height="2048" alt="image" src="https://github.com/user-attachments/assets/26a592e2-996c-4095-83fe-9c826749136b" /><br/>
      <strong>로그아웃</strong>
    </td>
    </tr>
  </table><br/>
  
---

## 노션
https://tested-arrow-f94.notion.site/Fanta-Poem-281b7a0a1358806eab5fdf480372e67e?pvs=74
