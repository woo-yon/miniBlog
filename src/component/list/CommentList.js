import React from "react";
import styled from "styled-components";
import CommentListItem from "./CommentListItem";

const Wrapper=styled.div`
width:calc(100% - 35px);
padding:8px 16px;
display:flex;
flex-decoration:column;
align-items:center;
justify-contents:center;
border:1px solid gray;
border-radius:5px;
cursor:pointer;
background:pink;
:hover{
    background:lightgray;
}
`

// => div 태그에 추가 선택자 사용

const ContentText=styled.p`
    font-size:16px;
    white-space:pre-wrap;
`
//white-space:pre-wrap; => 줄바꿈:공백값 /원본 텍스트를 그대로 표현하나 줄바꿈 인식하기

//함수형 컴포넌트
function CommentList(props){
    const {comments}=props;

    return(
        <Wrapper>
            {posts.map((comment,index)=>{
                //=> 이 형식을 사용하는 이유: map으로 사용 글의 갯수만큼 PostListItem 컴포넌트를 만들기 위해 사용

                return (
                    <CommentListItem key={comment.id} comment={comment}></CommentListItem>
                )
            })}
        </Wrapper>
    );

}
export default CommentList;