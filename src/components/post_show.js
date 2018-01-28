import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { fetchOnePost } from '../actions/posts_actions'
import { connect } from 'react-redux'
import { fetchDeletePost } from '../actions/posts_actions'

class PostShow extends Component {

  componentDidMount() {
    const { id } = this.props.match.params
    this.props.fetchOnePost(id)
  }

  onDeleteClick() {
    const { id } = this.props.match.params;
    this.props.fetchDeletePost(id).then(() => this.props.history.push("/"))
  }

  render() {
    const { selectPost } = this.props;

    if (!selectPost) {
      return <div>Loading...</div>;
    }

    return (
      <div>
        <Link to="/">Back To Index</Link>
        <button
          className="btn btn-danger pull-xs-right"
          onClick={this.onDeleteClick.bind(this)}
        >
          Delete Post
        </button>
        <h3>{selectPost.title}</h3>
        <h6>Categories: {selectPost.categories}</h6>
        <p>{selectPost.content}</p>
      </div>
    )

  }
}

function mapStateToProps({ posts: { selectPost } }) {
  return { selectPost }
}

export default connect(mapStateToProps, { fetchOnePost, fetchDeletePost })(PostShow)
