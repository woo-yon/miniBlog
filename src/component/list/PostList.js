import React from "react";
import styled from "styled-components";
import PostListItem from "./PostListItem";

const Wrapper=styled.div`
display: flex;
flex-direction: column;
align-items: flex-start;
justify-content: center;
:not(:last-child){
    margin-bottom:16px
}
`
// :not(:last-children){
//     margin-bottom:16px
// }
// => 이 div가 마지막 아이가 아니면 이라는 뜻 +태그의 선택자 추가



function PostList(props){
    const {posts,onClickItem}=props;
    //=> PostList 컴포넌트의 props로 받은 posts 안에는 post 객체를 넘겨 받음
    //=> posts의 배열값으로 인식 map함수를 활용해서 post 객체에 포함되는 PostListItem 컴포넌트를 읽어옴

    return(
        <Wrapper>
            {posts.map((post,index)=>{
                //=> 이 형식을 사용하는 이유: map으로 사용 글의 갯수만큼 PostListItem 컴포넌트를 만들기 위해 사용

                return (
                    <PostListItem key={post.id} post={post} onClick={
                        ()=>{
                            onClickItem(post);
                        }
                    }></PostListItem>
                )
            })}
        </Wrapper>
    );
}
export default PostList;