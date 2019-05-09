import React from 'react';
import PropTypes from 'prop-types'

function Post(props){
	const flex={
		display:'flex',
		alignItems:'center'
	}
	const votes={
		display:'flex',
		flexDirection:'column',
		justifyContent:'center'
	}
	const voteIcon={
		margin:'0.25rem',
		fontSize:'1.5rem'
	}
	return(
		<div style={flex}>
			<div style={votes}>
				<div style={flex}>
					<i style={voteIcon} className="fas fa-arrow-alt-circle-up"></i>
					<p>{props.upVotes}</p>
				</div>
				<div style={flex}>
					<i style={voteIcon} className="fas fa-arrow-alt-circle-down"></i>
					<p>{props.downVotes}</p>
				</div>
			</div>
			<div>
				<h1>{props.title}</h1>
				<p style={{textAlign:'justify'}}>{props.content}</p>
			</div>
		</div>
		)
}

Post.propTypes={
	title:PropTypes.string.isRequired,
	content:PropTypes.string.isRequired,
	upVotes:PropTypes.number.isRequired,
	downVotes:PropTypes.number.isRequired
}

export default Post