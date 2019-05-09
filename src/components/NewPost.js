import React from 'react';
import PropTypes from "prop-types";
import {v4} from "uuid"

function NewPost(props){

	let _title=null;
	let _content=null;

	function handleNewPostSubmission(event){
		event.preventDefault();
		props.onAddNewPost({id:v4(),title:_title.value, content:_content.value,up:0,down:0})
		_title.value='';
		_content.value='';
	}

	const formStyle={
		display:'flex',
		flexDirection:'column',
		transition:'transform 0.5s',
		position:'relative'
	}

	const topBar={
		backgroundColor:'lightgray',
		display:'flex',
		alignItems:'center',
		paddingLeft:'1rem',
		position:'relative',
		zIndex:'1'
	}

	const openCloseIcon={
		backgroundColor:props.isOpen?'red':'green',
		fontSize:'1.5rem',
		width:'2rem',
		padding:'0.25rem',
		marginLeft:'auto'
	}


	return(
		<div style={{overflow:'hidden'}}>
			<div style={topBar} onClick={props.onOpenNewPostForm}>
				<p>{props.isOpen ? '':'Add New Post'}</p>
				<div style={openCloseIcon}>
					<i style={{transition:'transform 0.5s', padding:'auto auto'}} className={`fas fa-times ${!props.isOpen ? 'open-new-post' :''}`}></i>
				</div>
			</div>
			<form className={!props.isOpen ? 'slide-up':''} style={formStyle} onSubmit={handleNewPostSubmission}>
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
