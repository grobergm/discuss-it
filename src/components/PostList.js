import React, { Component } from 'react';
import NewPost from './NewPost';
import Post from './Post';

class PostList extends Component{
	constructor(props){
		super(props);
		this.state={
			posts:[],
			currentPost:
				{
					title:'',
					author:'',
					content:'',
					upVotes:'',
					downVotes:''
				}
		}
	}

	render(){
		return(
			<div>
			  <NewPost />
			</div>
		)
	}
};

export default PostList;