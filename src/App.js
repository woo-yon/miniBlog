//import './App.css';
//import Button from './component/ui/Button';
//import TextInput from './component/ui/TextInput';
// 버튼,텍스트 형태확인용 연결

//240109수업
import React from "react";
import styled from "styled-components";
import MainPage from "./component/page/MainPage";
import PostViewPage from "./component/page/PostViewPage";
import PostWritePage from "./component/page/PostWritePage";

import { BrowserRouter,Routes,Route } from "react-router-dom";
//=> 리액트를 위한 라우팅 라이브러리 react-router-dom
//=> 각 경로에 따라 다른 컴포넌트를 보여 주도록 만들어져 있다
//=> 내가 작업한 리액트 파일들 간의 이동을 도와준다
//=> 웹사이트에서 라우팅은 사용자가 원하는 경로로 보내는 과정
//=> 더 깊이 이해하는 것이 노드.
//=> 라우팅을 쉽게 구현할 수 있도록 리액트 컴포넌트 형태로 작성이 되도록 하는 라이브러리
//=> react-router-dom을 이용해서 라우팅을 할 수 있게 하는 명령 컴포넌트 3가지 기억하기
//  1.BrowserRouter 컴포넌트 (내가 지정한 게 아닌 이미 설정 되어진 컴포넌트)
//  => 웹브라우저에서 react-router-dom을 사용해서 라우팅을 할 수 있도록 해준다
//  => 웹브라우저에서 history를 이용하여 경로를 탐색할 수 있게 해주는 컴포넌트
//  => Routes,Route의 부모영역으로 사용
//  2.Routes 컴포넌트
//  => 실제로 라우팅 경로를 구성할 수 있게 하는 컴포넌트
//  => Route들을 둘러싼 컴포넌트:상위 컴포넌트 -> 여러 개의 Route를 children으로 가짐
//  3.Route 컴포넌트
//  => 실제로 라우팅 경로를 구성할 수 있게 하는 컴포넌트
//  => Routes의 하위 컴포넌트, Path(경로), element(요소)라는 props를 가지게 되어져 있다
//  => element : 경로가 일치할 경우 찾아서 읽을(렌더링) 리액트 요소
//               사용자가 주소창에 새로운 경로를 입력하거나 웹사이트 내에서 경로 이동이 일어나게 되면 Routes 컴포넌트는 하위 Route 컴포넌트 중에서 현재 경로와 가장 일치하는 요소 경로를 찾아 해당하는 element를 보여준다
//               (파일명이 달라도 알아서 비슷한 파일 찾아서 연결해줌)




const MainTitleText=styled.p`
  font-size:24px;
  font-weight:bold;
  text-align:center;
`;


function App(props) {
  return (
    // <div className="App">
    //   <Button></Button>
    //   <TextInput></TextInput>
    //   {/* 불러온 버튼,텍스트 사용해주기 */}
    // </div>

    //240109수업
    <BrowserRouter>
      <MainTitleText>블로그 제목</MainTitleText>
      {/* 스타일 지정해준 뒤 태그 추가하기 */}
        <Routes>
          <Route index element={<MainPage/>}/>
          {/* index 형식으로 삽입할 땐 path 없이 index라는 props를 가진 Route로 라우팅 됨
          =>이게 보통 메인 첫 번째 페이지에서의 설정값 */}
          <Route path="post-write" element={<PostWritePage/>}/>
          {/* 하위 컴포넌트에서 path로 설정한 경로를 Route의 path로 설정해서 해당 element 컴포넌트로 이동시킴 */}
          <Route path="post/:postId" element={<PostViewPage/>}/>
          {/* :postId는 동적으로 변하는 파라미터를 위한 값이 된다.
          이때 보통 경로에 :(콜론)을 사용하고 Id를 입력한다.
          그렇게 되면 실제 컴포넌트 부분에서 useParams() 훅을 사용해 아이디를 해당 값으로 가지고 온다.
          => 각각의 값으로 Id가 들어있는데 그걸 가지고 올 수 있다 */}
        </Routes>
    </BrowserRouter>

  );
}

export default App;