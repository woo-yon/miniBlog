//함수형식(function)으로 만들기
import React from "react";
import styled from "styled-components";
// 외부에서 연결하는 방법 말고 내부에서 css 만드는 방법(styled)
// 백틱 사용법으로 스타일 지정할 수 있음

// 1.
// const 삽입할 태그형식명(변수)=styled.태그명`
//     const가 들어갔으니까 형식명!!이 된다
//     css 속성명:속성값;
//     color(속성명):${위쪽에서 지정된 다른 형식의 변수명};
//     color:${변수명=>조건?참:거짓}; if연산자 삼항연산자 떠올리기
//     color:${a=>dark? "black":"yellow"}; 다크가 맞으면 블랙색상, 아니면 옐로색상
// `;
// 이런 문법을 사용할 수 있게 하는 라이브러리가 styled의 components이다.

// const Title=styled.h1`
// font-size:40px;
// color:purple;
// text-align:center;
// `

// function Button(){
//     return(
//         <div>
//             <Title>내용</Title>
//             {/* 위에서 만들어준 변수를 태그형식으로 넣어주기 */}
//         </div>
//     );
// }





//2.
// const But=styled.button`
// color:${props=>props.dark?"pink":"red"};
// background:${props=>props.dark?"black":"skyblue"};
// border:1px solid black;
// `;
// 버튼 태그니까 button으로 입력해줌
//=> button 태그에 스타일 지정하기



//240108 수업
const But=styled.button`
padding:8px 16px;
font-size:17px;
border:1px solid gray;
border-radius:8px;
cursor:pointer;
`


function Button(props){ //43번이라서 그래서 (props) 입력
    //하위 컴포넌트=> 상위 컴포넌트의 props 값을 할당 받아서 사용할 때의 정의 방법
    // const {props 변수명 삽입, props 변수명 삽입 (여러 개 지정 시 반점 찍고 입력)}=props;
    const {title,onClick}=props;
    
    return(
        // <div>
        //     <But>기본</But>
        //     <But dark>변경</But>
        //     {/* dark가 매개변수가 된다=props */}
        // </div>
        <div>
            <But onClick={onClick}>{title||"button"}</But>
            {/* Button 컴포넌트에서 props로 title이 버튼의 내용으로 표시되게 함
            onClick은 But의 onClick에 넣어 이벤트를 상위 컴포넌트에서 받을 수 있도록 함
            표기법 중 조건과 관련있는 문장을 바로 삽입하는 것(삼항연산자)=조건부랜더링
            - 조건에 따라서 보여지는 화면이 다를 때 표기하는 방법
            - 회원 일 때의 화면과 비회원 일 때의 화면 차이를 예로 들 수 있음  */}


            {/* function User(props){
                return <h1>회원입니다.</h1>
            }
            function Guest(props){
                return <h1>비회원입니다.</h1>
            }
            function PageV(props){
                const isLogIn=props.isLogIn;
                if(isLogIn){
                    return <User/>
                }
                return <Guest/>
            } */}

            {/* 인라인 조건 표기법(위의 긴 코드를 줄이는 방법)
            1.인라인 if
            {title 논리연산자(&&(and),||(or)) 결과값}
            && :앞도 참, 뒤도 참일 때 참값
            || :앞도 거짓, 뒤도 거짓일 때 거짓값
            =>if가 실제로 삽입되는 것인 아님
            =>결과가 정해져 있는 논리연산에서 굳이 불필요한 연산을 하지 않도록 하기 위해 사용함
            =>true && ex -> ex
                조건문이 참이면 ex가 결과값
            =>false && ex -> false
                조건문이 거짓이면 false가 결과값
            ||(or연산자) : 항상 참일 때 사용함 */}

            {/* 2.인라인 if else
            {조건문?참:거짓} => 삼항연산자 표기로 작성 */}





        </div>
    );
}
export default Button;