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
					<i onClick={()=>props.onUpdateVotes('up',props.id)} style={voteIcon} className="fas fa-arrow-alt-circle-up"></i>
					<p>{props.up}</p>
				</div>
				<div style={flex}>
					<i onClick={()=>props.onUpdateVotes('down',props.id)} style={voteIcon} className="fas fa-arrow-alt-circle-down"></i>
					<p>{props.down}</p>
				</div>
			</div>
			<div>
				<h1>{props.title}</h1>
				<p>{props.id}</p>
				<p style={{textAlign:'justify'}}>{props.content}</p>
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
	onUpdateVotes: PropTypes.func.isRequired
}

export default Post