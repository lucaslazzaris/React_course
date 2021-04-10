import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { fetchPost, deletePost } from '../actions';

class PostShow extends Component {
  componentDidMount() {
    this.props.fetchPost(this.props.match.params.id);
  }

  onDeleteClick = () => {
    const { id } = this.props.match.params;

    this.props.deletePost(id);
  };

  render() {
    if (!this.props.post) {
      return null;
    }
    return (
      <div>
        <Link to="/" className="ui button primary">
          Home
        </Link>
        <button onClick={this.onDeleteClick} className="button ui red">
          Delete Post
        </button>
        <h3>{this.props.post.title}</h3>
        <h6>Categories {this.props.post.categories}</h6>
        <p>{this.props.post.content}</p>
      </div>
    );
  }
}

const mapStateToProps = ({ posts }, ownProps) => {
  return { post: posts[ownProps.match.params.id] };
};

export default connect(mapStateToProps, { fetchPost, deletePost })(PostShow);
