import React from "react";
import styled from "styled-components";

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
function CommentListItem(props){
    const {comment}=props;
    //=> 사용자가 작성한 댓글 내용이 보이는 영역
    //=> 글을 클릭할 필요 없음, 클릭이 없음

    return(
        <Wrapper>
            <ContentText>
                {comment.content}
                {/* => props로 받은 comment 객체 */}
            </ContentText>
        </Wrapper>
    );

}
export default CommentListItem;