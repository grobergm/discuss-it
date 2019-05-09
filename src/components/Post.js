import React from 'react';
import PropTypes from 'prop-types';
import Moment from 'moment';


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

	function displayTimeOpen(timeOpen){
		return timeOpen.from(new Moment(),true);
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
				<p style={{textAlign:'justify'}}>{props.content}</p>
				<p>Posted {displayTimeOpen(props.time)} ago</p>
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
	time: PropTypes.instanceOf(Moment).isRequired,
	onUpdateVotes: PropTypes.func.isRequired
}

export default Post