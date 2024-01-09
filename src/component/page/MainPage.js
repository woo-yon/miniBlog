//import React, { useEffect } from "react";
//=> 리액트 문법
import { useNavigate } from 'react-router-dom';
//=> 리액트 라우터 덤 사용 (리액트에서 다른 페이지로 이동하기 위해 사용)
//=> 1. a  (잘 사용하진 않으나, 리액트에서 외부에 있는 페이지나 프로젝트와의 연결을 위해 사용)
//=>    a태그를 의미/html에서의 기본 태그-> 기본이라서 import할 필요X
//=>    페이지의 전체를 로드함-> 그래서 속도가 느려짐-> 그래서 프레임워크 활용
//=>    a태그를 사용하면 useRef,useState 등의 훅이라는 개념을 사용할 수 없다
//=>    useRef,useState 등에서 수정을 해둔 변수, 상태값을 유지할 수 없다
//=>    라우터 사용에 방해가 된다

//=> 2. Link
//=>    react-router-dom을 사용해야 사용가능함
//=>    url에 영향을 주며 필요한 부분만 로드함
//=>    useRef, useState등을 유지하면서 속도 저하없이 화면의 전환 효과를 줄 수 있다
//=>    url도 필요한 부분만 건드려서 로드함 / 클릭 시 바로 이동하게 하기 위한 간단한 동작 시 주로 사용한다


//=> 3. useNavigate
//=>    react-router-dom을 사용해야 사용가능함
//=>    url에 영향을 주며 필요한 부분만 로드함
//=>    useRef, useState등을 유지하면서 속도 저하없이 화면의 전환 효과를 줄 수 있다
//=>    url도 필요한 부분만 건드려서 로드함 / 클릭 시 바로 이동하게 하기 위한 간단한 동작 시 주로 사용한다

//=> Link : 
//=> useNavigate : 이동 후 추가적인 동작이 필요할 때 사용, 특정 이벤트가 실행되었을 때 이동하거나 추가적인 기능이 필요한 경우 사용
//                 필요한 내용을 모두 채워야 이동을 하거나 상세페이지 열기를 위해 상품의 정보를 추가로 로드할 때 활용한다


// 훅이란? 생명주기(클래스 컴포넌트에서 사용)와 마찬가지로 사용함-> 함수형 컴포넌트에서 사용하는 생명주기
//=> 생명주기: 1.render 함수
//            -return 되는 html 형식의 코드를 화면에 그려주는 함수
//            -화면 변경이 되어야할 시점에 자동으로 호출되는 함수
//=> 생명주기: 2.constructor 함수
//            -초기화 영역 작업
//            -처음에 한 번만 호출
//=> 생명주기: 3.getDerrivedStateFromProps 함수
//            -constructor 함수에서 전달 받은 props를 state로 변경할 때 사용
//            -constructor 함수 다음으로 호출 되는 생명주기 함수
//=> 생명주기: 4.componentDidMount 함수
//            -작성된 함수 중 가장 마지막으로 실행되는 함수
//            -render 함수가 코드를 화면에 그려 준 후에 실행된다
//=> 생명주기: 5.shouldComponentUpdate 함수
//            -Component의 변경 과정을 남기는 함수
//            -변경, props.state의 변경 시 사용한다

//=> 훅: 기존 존재하는 기능에 끼어들어서 같이 수행되는 형식=꼽사리 낀다~!~
//       모든 함수명 앞에 use로 시작한다
//       훅이 수행하는 기능에 따라서 이름을 설정하게 되어있다
//       useState : 대표적인 훅, 함수형 컴포넌트에서 동적인 컴포넌트를 사용하고 싶을 때 사용
// 함수형 컴포넌트는 props를 사용하는 정적인 컴포넌트, state는 동적인 컴포넌트이므로 동적인 것을 사용하고 싶을 때 useState 사용
// const [변수명,set함수명]=useState(초기값)
// *state값은 기본적으로 초기값이 있다

// function Counter(props){
//     const [count,setCount]=useState(0);
//     // 첫 번째 초기가 0이 된다
//     return(
//         <div>
//             <p>총 {count} 번 클릭</p>
//             <button onClick={{()=>setCount(count+1)}}>클릭</button>
//         </div>
//     );
// }


// useEffect(이펙트함수,의존성배열)
// -사이트 이펙트
// -보통 사이트이펙트는 부작용의미 : 개발자가 의도치 못한 코드가 실행되어 버그 발생 시 나타나는 이펙트를 의미
// -리액트에서 useEffect는 서버에서 데이터를 받아오거나 수동으로 연결노드 Dom을 변경하는 것이다.
// -클래스 컴포넌트의 생명주기 함수들 중에 componentDidMount와 componentDidUpdate와 componentWillUnmount의 기능을 한 번에 지정한 훅 명령이다.
// -의존성 배열은 생략 가능하며, 이펙트가 의존하고 있는 배열값으로 배열 안에 변수 중 하나라도 변경이 되면 이펙트 함수가 실행된다.
// -생략 시 컴포넌트가 업데이트 될 때마다 함수를 호출한다.

// function Counter(props){
//     const [count,setCount]=useState(0);
//     // 첫 번째 초기가 0이 된다
//     useEffect(()=>{
//         document.title=`총 ${count}번 클릭함`
//     })
//     //=> useEffect : 브라우저에서 제공한 API를 사용해서 document의 title을 업데이트한다.
//     //=> document의 title은 브라우저에서 페이지를 열었을 때 창에 표시되는 문자열이다. ->크롬의 탭에 있는 제목을 의미함.
//     return(
//         <div>
//             <p>총 {count} 번 클릭</p>
//             <button onClick={{()=>setCount(count+1)}}>클릭</button>
//         </div>
//     );
// }



import styled from "styled-components";
//=> 스타일 컴포넌트
import PostList from "../list/PostList";
//=> 글목록을 표시
import Button from "../ui/Button";
//=> 글작성 페이지로 이동
import data from "../../data.json";
//=> 임의설정 데이터(data.json)


const Wrapper=styled.div`
    padding:16px;
    width:calc(100% - 35px);
    display:flex;
    flex-direction:column;
    align-items:center;
    justify-content:center;
`;
const Container=styled.div`
    width:100%;
    max-width:720px;
    :not(:last-child){
        margin-bottom:16px;
    }
`;


function MainPage(props){
    const navigate=useNavigate();

    return(
        <Wrapper>
            <Container>
                <Button title="글 작성하기" onClick={()=>{
                    navigate('/post-write'); //누르면 넘어가게 하기
                }}/>
                <PostList posts={data} onClickItem={(item)=>{
                    navigate(`/post/${item.id}`);
                }}/>
            </Container>
        </Wrapper>
    );
}
//=>함수형 컴포넌트
export default MainPage;
