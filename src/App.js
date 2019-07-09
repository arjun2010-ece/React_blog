import React, { Component } from 'react';
import PostList from './components/PostList';
class App extends Component {
  render() {
    return (
      <div>
        <h1>App</h1>
        <PostList />
      </div>
    )
  }
}
export default App;