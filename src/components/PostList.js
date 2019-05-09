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
						up={post.up}
						down={post.down}
						onUpdateVotes={props.onUpdateVotes}
						key={index}
					 />
					)
				})
			}
		</div>
	)
};

PostList.propTypes={
	posts: PropTypes.array.isRequired,
	onUpdateVotes: PropTypes.func.isRequired
}

export default PostList;