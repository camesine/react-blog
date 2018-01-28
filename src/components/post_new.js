import React, { Component } from 'react'
import { connect } from 'react-redux'
import { reduxForm, Field } from 'redux-form'
import { bindActionCreators } from 'redux'
import { Link } from 'react-router-dom'
import { fetchCreatePost } from '../actions/posts_actions'

class PostNew extends Component {
  
  renderField(field) {

    const { meta: { touched, error } } = field
    const className = `form-group ${touched && error ? "has-danger" : ""}`
    
    return (
      <div className={className}>
        <label>{field.label}</label>
        <input className="form-control" type="text" {...field.input} />
        <div className="text-help">
          {touched ? error : ""}
        </div>
      </div>
    )
  }
   
  onSubmit(values) {
    fetchCreatePost(values)
    .then(() => this.props.history.push('/'))
  }

  render() {

    const { handleSubmit } = this.props

    return <form onSubmit={handleSubmit(this.onSubmit.bind(this))}>
      <Field
        label="Title"
        name="title"
        component={this.renderField}
      />
      <Field
        label="Categories"
        name="categories"
        component={this.renderField}
      />
      <Field
        label="Content"
        name="content"
        component={this.renderField}
      />

      <input type="submit" value="Submit" className="btn btn-primary mt-4" />
      <Link to="/" className="btn btn-danger" >Cancel</Link>
    
    </form>
  }
}

function validate(values) {

  const errors = {}  

  if (!values.title) {
    errors.title = "Enter a title"
  }

  if (!values.categories) {
    errors.categories = "Enter a category"
  }

  if (!values.content) {
    errors.content = "Enter a content"
  }
  
  return errors
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ fetchCreatePost }, dispatch)
}

export default reduxForm({ validate, form: "PostsNewForm" })(connect(null, mapDispatchToProps)(PostNew))
