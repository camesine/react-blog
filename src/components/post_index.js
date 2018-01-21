import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { fetchPost } from '../actions/posts_actions'

class PostsIndex extends Component {

  componentDidMount() {
    this.props.fetchPost()
  }

  renderPosts() {
    return this.props.posts
      .map(post => <li className='list-group-item' key={post.id}>{post.title}</li>)
  }

  render() {
    return (
      <div>
        <div className="text-md-right">
          <Link to="/posts/new" className="btn btn-default"> Add a Post </Link>
        </div>
        <h3> POSTS </h3>
        <ul className='list-group'>
          { this.renderPosts() }
        </ul>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return { posts: state.posts }
}

export default connect(mapStateToProps, { fetchPost })(PostsIndex)
