import React from 'react';
import Post from './Post';
import PropTypes from 'prop-types';

function PostList(props){
	return(
		<div>
			{
				props.posts.map((post,index)=>{
					return (
					<Post
						id={post.id}
						title={post.title}
						content={post.content}
						upVotes={post.upVotes}
						downVotes={post.downVotes}
						key={index}
					 />
					)
				})
			}
		</div>
	)
};

PostList.propTypes={
	posts: PropTypes.array
}

export default PostList;