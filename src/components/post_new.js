import React, { Component } from 'react'
import { reduxForm, Field } from 'redux-form'

class PostNew extends Component {
  
  renderField(field) {
    return <div>
      <label>{field.label}</label>
      <input className="form-control" type="text"
        {...field.input}
      />
      {field.meta.error}
    </div>
  }
  
  onSubmit(values) {
    console.log(values)
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

    </form>
  }
}

function validate(values) {

  const errors = {}  

  if (!values.title || values.title.length < 3) {
    errors.title = "Enter a title"
  }

  if (!values.categories) {
    errors.title = "Enter a category"
  }

  if (!values.content) {
    errors.title = "Enter a content"
  }
  
  return errors
}

export default reduxForm({ validate, form: "PostsNewForm" })(PostNew)
