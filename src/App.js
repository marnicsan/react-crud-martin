import React, { Component } from 'react';
import logo from './logo.svg';
import {PostList} from './components/PostList'
import './App.css';

class App extends Component {
  constructor(props){
    super(props);
    this.state={
      posts: []
    };
    //handlers
    this.handleDelete=this.handleDelete.bind(this);
  }

  componentDidMount(){
    fetch('http://react-demo-api.herokuapp.com/posts')//me va a devolver info pero en texto plano
    .then(res => res.json()) // transforma la info recibida en json
    .then(results => {
      console.log(results)
      this.setState({
        posts: results
      })
    })
  }



  render() {
    const {posts}=this.state; //busca si state tiene una propiedad que se llama posts y lo guarda en esta variable
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <PostList posts={posts} deletePost={this.handleDelete}/>
      </div>
    );
  }

  handleDelete(id){
    fetch(`http://react-demo-api.herokuapp.com/posts/${id}`,{
      method:'DELETE'
    })
    .then(results=>results.json())
    .then(results => {
      this.setState({
        posts: this.state.posts.filter(key => key!==id)
      })
    })
  }
}

export default App;
