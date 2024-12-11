# 📖 오늘의 책님

<img width="400" height="400" alt="오늘의책님" src="https://github.com/user-attachments/assets/98b67146-f073-4a12-ade2-870108c6dc6b">

- 배포URL : [오늘의 책님](https://book.bobcost.kr/)

## 프로젝트 소개 💡

지루하고 심심했던 일상에 활력을 불어넣는 재미있는 반응형 웹사이트입니다.
연애에 관한 질문을 던지거나, 랜덤한 답변을 통해 웃음을 찾고, 오늘의 메뉴를 추천받아 편리하게 드셔보세요!
또한, 흥미로운 결과를 친구나 지인과 쉽게 카카오톡 공유할 수 있는 기능도 제공합니다.

## 1. 개발 환경 💡

- Front : Next15, React18, Zustand, Module.css
- Back-end : X ( 로컬 스토리지 & Zustand 상태 ) 
- 버전 및 이슈관리 : Github
- 서비스 배포 환경 : Vercel
- 이미지 출처 : Pinterest
- 라이브러리 : @next/third-parties (Google Analytics), next-themes (다크모드)  

## 2. 채택한 개발 기술 과 그 이유 💡

#### Next15 
> Next 15 사용 이유  

- SEO 최적화를 위한 Nextjs 사용
- React19 지원 및 React 18 이랑도 하위 호환성 유지
- 하이드레이션 오류가 발생할 경우 문제 해결방안 제안
- 최신버전의 Next15 사용경험 및 이슈 발생시 해결방안
- 페이지 로딩속도 향상

#### React18 
> React 18 사용 이유 

3일 전에 React19 안정화 발표가 나왔지만 프로젝트를 시작 당시 아직 React19 가 안정화 되지 않아서 가장 최신버전의 React18을 사용하게 되었다. 

<img width="700" height="400" alt="오늘의책님" src="https://velog.velcdn.com/images/owen1127/post/2d815a66-d0b7-4892-a788-457956885efe/image.png">



#### Style ( module.css ) 
> ModuleCss 사용 이유 


- `tailwindCss` 이미 사용한 경험이 있고 
- `css-in-js`는 next 공식문서에서 서버 컴포넌트와 호환성이 좋지 않다고 하여 사용하지 않게 되었다. 
![](https://velog.velcdn.com/images/owen1127/post/a8efefa3-d311-4a89-abeb-1b0e006cf0f1/image.png)


결론 : `Module.css` 를 한번도 사용해보지 않았고, 장점과 단점이 궁금해서 사용하게 되었다. 

#### State ( Zustand ) 

> Zustand 사용 이유 

- Redux보다 더 작은 번들 사이즈
- 코드의 간결함과 직관적인 구현
- persist 내장 미들웨어를 사용함으로 간단한 Storage 저장 

#### Typescript 
> Typescript 사용 이유 

코드에 정적 타입을 추가하여 개발 중 버그를 줄이고, 코드의 가독성과 유지보수성을 높이기 위해서 사용했다. 


## 3. 프로젝트 구조 💡

```bash
📂src
├── 📂app // 페이지 폴더(Route) 및 layout
├── 📂components // 페이지에서 사용되는 컴포넌트 폴더
├── 📂data // 랜덤한 답변 및 음식 데이터.ts 폴더 
├── 📂hooks // 커스텀 훅 폴더
├── 📂models // 타입 폴더
├── 📂stores // 클라이언트 상태관리 폴더
├── 📂styles // 글로버 스타일 폴더
└── 📂utils // 유틸성 함수 폴더
```

## 4. 기획 및 개발 기간 💡

### 기획 기간

- 24.11.14 ~ ( 프로젝트 도중에 Test를 통한 기획 조금씩 변경 ) 

### 개발 기간

- 전체 개발 기간 : 24.11.17 ~ 24.12.07

### 기획 사항 

<img width="400" height="300" alt="기획사항이미지" src="https://github.com/user-attachments/assets/8bd41778-826b-4961-bfdc-8857f563648d">

## 5. 페이지별 기능 및 개발 사항 💡

### Common ( 공통 ) 

#### 💎 css rem 단위를 통한 반응형 웹 제작 

#### 💎 CategoryState 인터페이스 및 Store 정리
- 이 인터페이스는 카테고리와 관련된 상태를 관리합니다. 각 카테고리(예: 질문, 음식, 사랑 등)와 그에 대한 답변 및 질문을 상태로 관리할 수 있도록 구조화되어 있습니다. 
- **`category`**: 선택된 카테고리와 해당 카테고리의 ID, 색상을 포함한 `Category` 객체입니다.
- **`answers`**: 각 카테고리별 답변을 저장하는 객체로, `CategoryAnswers` 형식을 따릅니다. 예를 들어, 질문, 사랑, 음식에 대한 답변을 저장할 수 있습니다.
- **`questions`**: 각 카테고리별 질문을 저장하는 객체입니다. `CategoryQuestions` 형식을 따릅니다. 예를 들어, 질문, 사랑, 음식에 대한 질문이 담깁니다.
- **`selectCategory`**: 특정 카테고리를 선택하는 함수입니다. 이 함수는 선택된 카테고리의 정보를 업데이트합니다.
- **`removeCategory`**: 선택된 카테고리를 제거하는 함수입니다.
- **`removeAnswer`**: 선택된 카테고리의 답변을 제거하는 함수입니다.
- **`removeQuestion`**: 선택된 카테고리의 질문을 제거하는 함수입니다.
- **`updateAnswer`**: 카테고리의 답변을 수정하는 함수입니다.
- **`updateQuestion`**: 카테고리의 질문을 수정하는 함수입니다. `text` 파라미터로 수정할 질문 내용을 전달합니다.
- **`againAnswer`**: 답변을 다시 설정하는 함수입니다.

이 상태 관리 방식은 사용자가 선택한 카테고리에 대한 답변과 질문을 실시간으로 업데이트하거나 초기화할 수 있게 도와줍니다.


#### 💎 BookOpenState 인터페이스 및 Store 정리

- 이 인터페이스는 "책 커버 오픈 상태"를 관리합니다. 사용자가 책 커버를 열었는지, 닫았는지를 관리할 수 있습니다.
- **`isOpen`**: 책 커버가 열려있는지 여부를 나타내는 `boolean` 값입니다. `true`이면 책 커버가 열린 상태이고, `false`이면 닫힌 상태입니다.
- **`setOpen`**: 책 커버 상태를 변경하는 함수입니다. 이 함수를 통해 `isOpen` 값을 `true` 또는 `false`로 변경할 수 있습니다.
- **`initializeOpenState`**: 책 커버 상태를 초기화하는 함수입니다. 예를 들어, 페이지를 새로 고침할 때 커버 상태를 `false`로 리셋할 수 있습니다.

#### 💎Giscus를 활용한 댓글 기능구현 

#### / ( 메인 페이지 ) 

<img width="300" alt="image" src="https://github.com/user-attachments/assets/388794a2-86c9-4d2b-950d-0a9c45b68830">

> 기능설명
- 각 페이지를 이동 할 수 있다. 
- Header 에서는 날짜 및 페이지를 이동할 시 뒤로 갈 수 있는 기능을 가지고 있다. 
- Footer 에서는 제작자, 다크모드 및 오늘의 답변 페이지로 이동시 카카오톡 공유 기능을 가지고 있다. 


#### /question, /love ( 오늘의 질문 및 오늘의 연애 ) 

<img width="360" height="500" alt="image" src="https://github.com/user-attachments/assets/ee5ab4ff-754d-4af5-b5d4-1681a2d7f8bd">
<img width="360" height="500" alt="image" src="https://github.com/user-attachments/assets/029d1fa3-364c-41ad-871c-dcc8b0d00914">
<img width="360" height="500" alt="image" src="https://github.com/user-attachments/assets/58f815e8-8a5a-4328-869e-cd7f5598a4d3">
<img width="360" height="500" alt="image" src="https://github.com/user-attachments/assets/8812ca97-7412-499a-984d-ddc9de8bd2e4">

> 기능설명
- InputAll ( InputText.tsx, InputResult.tsx 포함됨 ) 이라는 컴포넌트로 재사용성을 극대화 하였다. 
- 입력창에 질문을 할 경우 Data.ts에 가지고 있는 랜덤한 답변을 받을 수 있다. 
- TTS 기능을 가지고 있다. 

#### /food ( 오늘의 메뉴 ) 

<img width="360" height="500" alt="image" src="https://github.com/user-attachments/assets/c1bb2d9f-6ca0-41fa-8a0d-123ad02d6a15">

> 기능설명
- 직접 제작한 룰렛 애니메이션을 통한 메뉴추천


#### /answer ( 오늘의 답변 ) 

<img width="360" height="500" alt="스크린샷 2024-12-08 오후 4 46 21" src="https://github.com/user-attachments/assets/ad02a5a3-2fb7-4c0a-b35c-decb8185b5fb">

> 기능설명
- 카카오톡 공유
- 내가 질문한 내용과 답변 확인
- encodeURIComponent 와 JSON.stringify를 활용해 데이터를 안전하게 URL 전달 

## 6. 트러블 슈팅


#### 트러블1
Hydration failed because the server rendered HTML didn't match the client 에러가 발생했습니다. 이 에러는 서버에서 렌더링된 HTML과 클라이언트에서 렌더링된 HTML이 일치하지 않을 때 발생합니다.

#### 트러블1해결
이 문제는 suppressHydrationWarning을 사용하여 해결했습니다. 이 방법은 React에서 발생하는 Hydration 경고를 억제하는데 사용되며, shadcn 라이브러리에서 권장하는 해결책입니다. 이를 통해 서버와 클라이언트의 렌더링 불일치 경고를 억제할 수 있습니다.

<html lang="en" suppressHydrationWarning>  


#### 트러블2 
zustand를 설치하려던 도중 계속 설치가 되지않아서 error log 를 봐보니  zustand는 현재 react 19를 지원하지 않는다.  

#### 트러블2해결  
react19를 react18안정화된 버전으로 다운그레이하였다. 이후  zustand는 무사히 설치가 잘되었다. 

npm install react@18 react-dom@18

<br/>

#### 트러블3
next-themes를 사용하여 다크모드를 구현하는 도중, 버튼에 hover 상태를 적용할 때 module.css와 호환되지 않는 문제가 발생했습니다. 다크모드 상태에서는 버튼의 hover 스타일이 잘 적용되지만, 라이트모드에서는 hover 스타일이 적용되지 않았습니다.

#### 트러블3 해결
onMouseEnter와 onMouseLeave 이벤트를 활용하여 hover 상태를 동적으로 변경함으로써, module.css와 next-themes 간의 호환성 문제를 해결할 수 있었습니다. 또한, hover 로직을 useHover라는 커스텀 훅으로 배치하고,  버튼 컴포넌트를 만들어서 여러 컴포넌트에서 재사용할 수 있도록 효율적으로 관리할 수 있었습니다.

<br/>

#### 트러블4 
PC 버전에서 텍스트를 Web Speedh API 로 음성을 들려주는 도중  두번씩 음성이 나오는 에러 발생 

#### 트러블4 해결 

조건문으로 window.speechSynthesis.speaking (음성이 진행여부) 를 확인하고 return 으로 중복을 방지하며 또한  사용하고있는 SpeechSynthesisUtterance (Object) 로 onend 음성 합성이 완료되었을 때 실행되는 콜백 함수를 사용하여 음성종료를 알린다. 


## 7. 개선 목표

- 모바일에서도 TTS를 사용 할 수 있도록 기능을 개선 해야 할 것 같다.
- 여러 테스트를 도입해야 할 것 같다. ( ex) 유틸리티 함수 유닛테스트, E2E 테스트를 통한 사용자 흐름 테스트 ) 
- 새로운 기획을 통한 기능 추가 ( ex) AI 메뉴를 만들어 AI에게 질문을 하여 답변해주는 그런 기능도 좋을 것 같다.)  

## 8. 프로젝트 후기
- 제네릭 타입을 자주 사용해보지 않았는데, 각 컴포넌트가 독립적으로 동작하면서도 높은 유연성과 편리함을 제공한다는 점을 실감했다.
- @svgr/webpack을 사용하여 SVG를 React 컴포넌트처럼 처리하는 방식을 사용하여 코드의 간결함과 재사용성을 늘릴 수 있다는 것을 알게되었다.
- localStorage 는 CSR에서 사용이 가능하여 nextjs 에서는 사용할 때 불편한 점이 있다는 것을 알게되었다. 또한 해결방법은 접근 하기 전에 client side인지, 즉 mounted 된 이후인지를 체크하면 되었다.
- DB가 없는 관계로 다른 사람에게 내 결과를 공유하려고 encodeURIComponent 와 JSON.stringify를 활용해 데이터를 URL로 안전하게 전달하고, decodeURIComponent와 JSON.parse로 쉽게 복원할 수 있어, 복잡한 데이터를 깔끔하고 신뢰성 있게 관리할 수 있어 좋았다.
- 카카오톡 공유 API를 공식문서로만 직접 확인하며, 카카오톡의 공유기능을 사용할 수 있는 경험을 쌓아서 좋았다.
- JSDOC을 사용하며 타입의 안전성과 함께 문서화를 쉽게 병행할 수 있어 매우 유용했다.
