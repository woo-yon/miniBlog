import React from "react";
import styled from "styled-components";

const Wrapper=styled.div`
width:calc(100% - 35px);
padding:16px;
display:flex;
flex-direction:column;
align-items:center;
justify-content:center;
border:1px solid gray;
border-radius:5px;
cursor:pointer;
background:pink;
:hover{
    background:lightgray;
}
`

// => div 태그에 추가 선택자 사용

const TitleText=styled.p`
    font-size:20px;
    font-weight:500;
`

//함수형 컴포넌트
function PostListItem(props){
    const {post,onClick}=props;
    return(
        <Wrapper onClick={onClick}>
            <TitleText>
                {post.title}
                {/* => props로 받은 post 객체에 들어있는 title 문자열을 표시 */}
            </TitleText>
        </Wrapper>
    );

}
export default PostListItem;