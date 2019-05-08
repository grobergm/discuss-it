import React, { Component } from 'react';
import NewPost from './components/NewPost';
import PostList from './components/PostList';

class App extends Component{
  constructor(){
    super();
    this.state={
      posts:[],
      newPostFormOpen:false
    }
    this.handleAddNewPost=this.handleAddNewPost.bind(this);
  }

  handleAddNewPost(newPost){
    const newPosts=this.state.posts.slice();
    newPosts.unshift(newPost);
    this.setState({posts:newPosts})
  }

  render(){
    return (
      <div>
        <h1> Discuss-It! </h1>
        <NewPost 
          isOpen={this.state.newPostFormOpen}
          onAddNewPost={this.handleAddNewPost} />
        <PostList posts={this.state.posts} />
      </div>
    );
  }
  
}

export default App;
