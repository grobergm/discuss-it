import postList from './postReducers';
import c from './../constants';

const initialState={
	'hjkhskhjskhksh':{
		title:'Sample Post',
		content:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer sagittis dui eget nisl aliquam feugiat. Integer sit amet erat aliquam, rhoncus nibh eget, tincidunt purus. Nullam varius tincidunt pulvinar',
		upVotes:0,
		downVotes:0
		}
	}



describe('Post Reducers',()=>{
	test('return initial state if unkown action type',()=>{
		expect(postList(initialState,{type:null})).toEqual(initialState);
	})
test('add new post to list',()=>{
	const action={
		type:'ADD_POST',
		id:'aassalsasdad',
		newPost:{
			title:'Sample2',
			content:'lorem lorem lorem',
			upVotes:0,
			downVotes:0}
		}
	const nextState=Object.assign({},initialState,{[action.id]:action.newPost});
		expect(postList(initialState,action)).toEqual(nextState);
	})

})
