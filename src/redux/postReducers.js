import c from './../constants';


const post=(state,action)=>{
	switch(action.types){
		case c.UP_VOTE:
			if (action.id!==state.id){
				return state;
			}
			return Object.assign({},state,{upVotes:state.upVotes+1})
		case c.DOWN_VOTE:
			if (action.id!==state.id){
				return state;
			}
			return Object.assign({},state,{downVotes:state.downVotes+1})
		default:
			return state;
	}
}

const postList=(state,action)=>{
	switch(action.type){
		case c.ADD_POST:
			return Object.assign({},state,{[action.id]:action.newPost})
		case c.UP_VOTE:
			return state.keys.map(id=>{
				return post(state[id],action)
			})
		case c.DOWN_VOTE:
			return state.keys.map(id=>{
				return post(state[id],action)
			})
		default:
			return state;
	}
}

export default postList;