import React from 'react';
import Post from './Post';
import PropTypes from 'prop-types';

function PostList(props){
	
	return(
		<div>
			{
				props.posts.map(post=>{
					return (
					<Post
						id={post.id}
						title={post.title}
						content={post.content}
						up={post.up}
						down={post.down}
						score={post.score}
						onUpdateVotes={props.onUpdateVotes}
						time={post.time}
						key={post.id}
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