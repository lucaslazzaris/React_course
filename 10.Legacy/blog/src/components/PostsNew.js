import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { Field, reduxForm } from 'redux-form';
import { createPost } from '../actions';

class PostsNew extends Component {
  renderTitleField = ({ label, input, meta }) => {
    return (
      <div className="field">
        <label>{label}</label>
        <input {...input} type="text" />
        <div className="text-help">{meta.touched ? meta.error : ''}</div>
      </div>
    );
  };

  onSubmit = (values) => {
    this.props.createPost(values);
  };

  render() {
    const { handleSubmit } = this.props;
    return (
      <form
        onSubmit={handleSubmit(this.onSubmit)}
        id="PostsNewForm"
        className="ui form"
      >
        <Field
          label="Title"
          name="title"
          component={this.renderTitleField}
        ></Field>
        <Field
          label="Categories"
          name="categories"
          component={this.renderTitleField}
        ></Field>
        <Field
          label="Post Content"
          name="content"
          component={this.renderTitleField}
        ></Field>
        <button type="submit" className="ui primary button">
          Submit
        </button>
        <Link className="ui button red" to="/">
          Cancel
        </Link>
      </form>
    );
  }
}

const validate = (values) => {
  const errors = {};

  if (!values.title) {
    errors.title = 'Enter a title!';
  }
  if (!values.categories) {
    errors.categories = 'Enter a category!';
  }
  if (!values.content) {
    errors.content = 'Enter some content please!';
  }

  return errors;
};

const formWrapped = reduxForm({
  form: 'PostsNewForm',
  validate,
})(PostsNew);

export default connect(null, { createPost })(formWrapped);
