import React from 'react';
import PropTypes from 'prop-types'

function Post(props){
	return(
		<div>
			<h1>{props.title}</h1>
			<p>{props.content}</p>
		</div>
		)
}

Post.propTypes={
	title:PropTypes.string.isRequired,
	content:PropTypes.string.isRequired
}

export default Post