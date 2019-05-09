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
    this.handleUpdateVotes=this.handleUpdateVotes.bind(this);
  }

  componentDidMount(){
    this.postTimeUpdater=setInterval(()=>this.updatePostWithElapsedTime(),5000)
  }

  componenWillUnmount(){
    clearInterval(this.postTimeUpdater);
  }

  updatePostWithElapsedTime(){
    let newPosts=this.state.posts.slice();
    newPosts.forEach(post=>post.timeSinceCreated=(post.time).fromNow(true));
    this.setState({posts:newPosts});
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
