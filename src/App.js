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
    this.handleOpenNewPostForm=this.handleOpenNewPostForm.bind(this);
  }

  handleOpenNewPostForm(){
    this.state.newPostFormOpen ? this.setState({newPostFormOpen:false}) : this.setState({newPostFormOpen:true});
  }

  handleAddNewPost(newPost){
    const newPosts=this.state.posts.slice();
    newPosts.unshift(newPost);
    this.setState({posts:newPosts})
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
        <PostList posts={this.state.posts} />
      </div>
    );
  }
  
}

export default App;
