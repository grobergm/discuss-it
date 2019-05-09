import React, { Component } from 'react';
import NewPost from './components/NewPost';
import PostList from './components/PostList';

class App extends Component{
  constructor(){
    super();
    this.state={
      posts:[{id:'alsdjsaodijsaod',title:"Test Post", content:'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',up:100, down:10, score:90}],
      newPostFormOpen:false
    }
    this.handleAddNewPost=this.handleAddNewPost.bind(this);
    this.handleOpenNewPostForm=this.handleOpenNewPostForm.bind(this);
    this.handleUpdateVotes=this.handleUpdateVotes.bind(this);
  }

  handleOpenNewPostForm(){
    this.state.newPostFormOpen ? this.setState({newPostFormOpen:false}) : this.setState({newPostFormOpen:true});
  }

  handleAddNewPost(newPost){
    const newPosts=this.state.posts.slice();
    newPosts.unshift(newPost);
    this.setState({posts:newPosts})
  }

  sortPosts(posts){
    return posts.sort((postA,postB)=>{
     return postB.score-postA.score
    });
  }
  handleUpdateVotes(vote,id){
    let newPosts=this.state.posts.slice();
    const selectIndex=newPosts.findIndex(post=>{
      return post.id===id;
    });
    newPosts[selectIndex][vote]++;
    newPosts[selectIndex].score=newPosts[selectIndex].up-newPosts[selectIndex].down;
    let sortedPosts=this.sortPosts(newPosts);
    this.setState({posts:sortedPosts});
  }

  render(){
    const layout={
      margin:'0 25%'
    }
    return (
      <div style={layout}>
        <h1> Discuss-It! </h1>
        <NewPost 
          isOpen={this.state.newPostFormOpen}
          onOpenNewPostForm={this.handleOpenNewPostForm}
          onAddNewPost={this.handleAddNewPost} />
        <PostList 
          posts={this.state.posts}
          onUpdateVotes={this.handleUpdateVotes} />
      </div>
    );
  }
  
}

export default App;
