import React, { useState } from "react";
// => 리액트 문법
import { useNavigate } from 'react-router-dom';
// => 리액트 라우터 덤 사용
import styled from "styled-components";
// => 스타일 컴포넌트 사용

// => CommentList 컴포넌트, Button 컴포넌트, TextInput 컴포넌트
// => 임의설정 데이터(data.json)

const Wrapper=styled.div`
padding:6px;
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


function PostWritePage(props){
    const navigate=useNavigate();
    const [title,setTitle]=useState('');
    //=> 글의 제목을 위한 state
    const [content,setContent]=useState('');
    //=> 글의 내용을 위한 state
    //=> title과 content를 함께 묶어주지 않은 이유: 실제로 사용하는 부분은 textInput으로 동일하나, 제목과 내용은 각자 입력을 받아야 되니까 두 개로 나눴음
    return(
        <Wrapper>
            <Container>
                <TextInput height={30} value={title} onChange={(event)=>{
                    setTitle(event.target.value);
                }}></TextInput>
                <TextInput height={500} value={content} onChange={(event)=>{
                    setContent(event.target.value);
                }}></TextInput>
                <Button title='글 작성하기' onClick={
                    ()=>{
                        navigate('/')
                        //title을 누르면 서버의 div 형식으로 들어가야 하지만 우리는 그게 안 되니까 메인으로 돌아가게 만들었음
                    }
                }/>
            </Container>
        </Wrapper>
    );
}
// => 함수형 컴포넌트
export default PostWritePage;