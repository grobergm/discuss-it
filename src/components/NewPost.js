import React from 'react';
import PropTypes from "prop-types";


function NewPost(props){

	let _title=null;
	let _content=null;

	function handleNewPostSubmission(event){
		event.preventDefault();
		props.onAddNewPost({title:_title.value, content:_content.value})
		_title.value='';
		_content.value='';
	}

	;
	const formStyle={
		display:'flex',
		flexDirection:'column',
	}
	return(
		<div>
			<form style={formStyle} onSubmit={handleNewPostSubmission}>
				<input
					type='text'
					id='title'
					placeholder='Title of Post'
					ref={(input)=>{_title=input;}} />
				<textarea
					id='content'
					placeholder='Content of Post' 
					ref={(textarea)=>{_content=textarea;}} />
				<button type='submit'>Add Post</button>
			</form>
		</div>
		)
};

NewPost.propTypes = {
	isOpen: PropTypes.bool.isRequired,
	onAddNewPost: PropTypes.func.isRequired
}

export default NewPost;
