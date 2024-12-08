# 📖 오늘의 책님

<img width="400" height="400" alt="오늘의책님" src="https://github.com/user-attachments/assets/98b67146-f073-4a12-ade2-870108c6dc6b">

- 배포URL : [오늘의 책님](https://book.bobcost.kr/)

## 프로젝트 소개

지루하고 심심했던 일상에 활력을 불어넣는 재미있는 웹사이트입니다.
연애에 관한 질문을 던지거나, 랜덤한 답변을 통해 웃음을 찾고, 오늘의 메뉴를 추천받아 편리하게 드셔보세요!
또한, 흥미로운 결과를 친구나 지인과 쉽게 카카오톡 공유할 수 있는 기능도 제공합니다.

## 1. 개발 환경

- Front : Next15, React18, Zustand, Module.css
- Back-end : X ( 로컬 스토리지 & Zustand 상태 ) 
- 버전 및 이슈관리 : Github
- 서비스 배포 환경 : Vercel
- 이미지 출처 : Pinterest
- 라이브러리 : @next/third-parties (Google Analytics), next-themes (다크모드)  

## 2. 채택한 개발 기술 과 그 이유


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

![](https://velog.velcdn.com/images/owen1127/post/2d815a66-d0b7-4892-a788-457956885efe/image.png)


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


## 3. 프로젝트 구조

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

## 4. 기획 및 개발 기간

### 기획 기간

- 24.11.14 ~ ( 프로젝트 도중에 Test를 통한 기획 조금씩 변경 ) 
  
 <img width="400" height="300" alt="기획사항이미지" src="https://github.com/user-attachments/assets/8bd41778-826b-4961-bfdc-8857f563648d">



### 개발 기간

- 전체 개발 기간 : 24.11.17 ~ 24.12.07
- UI 구현 : 24.11.17
- 기능 구현 :

## 5. 페이지별 기능

## 6. 트러블 슈팅

## 7. 개선 목표

- 모바일에서도 TTS를 사용 할 수 있도록 기능을 개선 해야 할 것 같다.
- 여러 테스트를 도입해야 할 것 같다. ( ex) 유틸리티 함수 유닛테스트, E2E 테스트를 통한 사용자 흐름 테스트 ) 
- 새로운 기획을 통한 기능 추가 ( ex) AI 메뉴를 만들어 AI에게 질문을 하여 답변해주는 그런 기능도 좋을 것 같다.)  

## 8. 프로젝트 후기
