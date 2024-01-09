import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
  // React.StricMode : 불필요한 부모 태그를 없애는 역할:<div> </div>
  // -제품모드(브라우저에 업로드 되었을 때)에서는 동작하지 않음
  // -props가 없고 부모에서 strict모드로 선언이 되면 모든 자식에 대해서 strict모드가 실행됨
  //  ex)) app을 넣을 시 개발자 모드로 app의 전체에 버그가 있는지 확인해줌
  //  -컴포넌트가 불완전한 랜더링으로 인한 버그를 찾기 위해서 재랜더링함(항상 랜더링을 두 번 호출)
  //  => 불 필요한 div 형식의 부모 태그를 줄일 수 있음
  //  -개발모드, 개발 시 버그를 찾을 수 있게 해주는 컴포넌트
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();