import React from 'react';
import PropTypes from 'prop-types';


function Post(props){
	
	const postLayout={
		border:'1px solid black',
		display:'flex',
		alignItems:'center',
		padding:'1rem'
	}
	const voteLayout={
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
		<div style={postLayout}>
			<div style={votes}>
				<div style={voteLayout}>
					<i onClick={()=>props.onUpdateVotes('up',props.id)} style={voteIcon} className="fas fa-arrow-alt-circle-up"></i>
					<p>{props.up}</p>
				</div>
				<div style={voteLayout}>
					<i onClick={()=>props.onUpdateVotes('down',props.id)} style={voteIcon} className="fas fa-arrow-alt-circle-down"></i>
					<p>{props.down}</p>
				</div>
			</div>
			<div>
				<h1>{props.title}</h1>
				<p style={{textAlign:'justify'}}>{props.content}</p>
				<p>Posted {props.time} ago</p>
			</div>
		</div>
		)
}

Post.propTypes={
	id:PropTypes.string.isRequired,
	title:PropTypes.string.isRequired,
	content:PropTypes.string.isRequired,
	up:PropTypes.number.isRequired,
	down:PropTypes.number.isRequired,
	score: PropTypes.number.isRequired,
	time: PropTypes.string.isRequired,
	onUpdateVotes: PropTypes.func.isRequired
}

export default Post