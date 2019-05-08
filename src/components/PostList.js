import React from 'react';
import Post from './Post';

function PostList(props){
		return(
			<div>
			{
				props.posts.map((post,index)=>{
					return (
					<Post
						title={post.title}
						content={post.content}
						key={index}
					 />
					)
				})
			}
			</div>
		)
};

export default PostList;