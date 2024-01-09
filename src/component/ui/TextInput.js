//=> 사용자가 텍스트를 입력할 수 있게 해주는 컴포넌트임.
//함수형식으로 만들기
import React from "react";
import styled from "styled-components";

// 여러 줄의 텍스트가 입력 되는 것 : TextArea
// const TextArea=styled.textarea`
// width:calc(100% - 35px);
// height:500px;
// padding:20px;
// font-size:18px;
// line-height:22px;
// `;

// 유동값의 높이값 설정
// => 상위 컴포넌트에서 지정한 props 값으로 스타일을 다르게 인식 시키기
//props=매개변수
const TextArea=styled.textarea`
width:calc(100% - 35px);
${
    (props)=>props.height && `height:${props.height}px;`
}
padding:20px;
font-size:18px;
line-height:22px;
`;
// 백틱 안에 자바스크립트 공식을 넣을 땐 ${} 삽입하고






function TextInput(props){
    const {height,value,onChange}=props;
    //=> TextInput 컴포넌트의 props로 value(입력값 표기), onChange(변경된 값 상위 컴포넌트로 전달) 지정
    return(
        <div>
            <TextArea height={height} value={value} onChange={onChange}></TextArea>
        </div>
    );
}
export default TextInput;