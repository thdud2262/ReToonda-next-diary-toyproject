# ReToonda
### 일상 다이어리 공유 서비스
나의 일상을 사진을 찍어 공유하는 일기 서비스를 제작해 보았습니다. Next.js프레임워크를 사용하여 프로젝트를 진행하고 있습니다.
<br>
<br>

## 🍎 배포 링크 Hosting URL, 개발 기간
####   ✔️ 개발기간 : 2023/09/01 ~ 9/30<br>
####   ✔️ 배포링크 : https://re-toonda.vercel.app<br>
####   ✔️ 개발BLOG : https://www.notion.so/fun-blog/62c954b0e4dd489089a9c71fb9616b13?v=6a09aa90e86b478b8aae0a60a80732c1<br>
<br>
<br>

## 🍋 구현 내용 
- **파일 시스템을 기반으로 한 라우팅을 사용**하였습니다. 파일과 폴더를 정의하여 정적 및 동적 라우팅을 구현하여 페이지를 만들었습니다.
- 페이지 별 공통 부분은 컴포넌트로 만들어 **중복 코드를 최대한 제거**하였습니다.
- database로는 **mongoDB를 사용**하여 데이터를 관리하고 있습니다.
- 라이브러리를 활용하여 **비밀번호 암호화, JWT token생성 및 쿠키 저장**하여 **로그인 및 회원가입 기능을 구현**하였습니다.
- token이 쿠키에 저장되어 있는 경우, 유저가 다시 로그인을 하지 않도록 **자동 로그인 기능**도 구현하였습니다.
- 각 컴포넌트에서 사용하는 데이터를 **contextAPI로 관리하여** props로만 데이터를 넘겨주지 않고도 데이터를 전역적으로 사용하였습니다.
- post, edit페이지의 중복되는 부분은 컴포넌트로 공통화 하였고, hooks을 직접 구현하여 서버로 요청하는 부분도 공통화 하였습니다.
- image업로드 부분은 utils 함수로 구현하여 필요한 모든 컴포넌트에서 사용할 수 있도록 구현하였습니다. 
<br>
<br>

## 🍊 프로젝트 세팅
#### 설치하기 Installation
```bash
> npm install
```

#### 개발 모드로 실행하기
```bash
> npm run dev
```

#### 프로덕션 모드로 실행하기
```bash
> npm run build   // 빌드 후
> npm start       // 프로젝트 실행
```
<br>
<br>

## 🍏 기술스택 Project Stack
- javascript
- next.js
- mongoDB
  <br>
  <br>
