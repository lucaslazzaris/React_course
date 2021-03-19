import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import Modal from '../../Modal';
import history from '../../history';
import { fetchStream, deleteStream } from '../../actions';

class StreamDelete extends React.Component {
  componentDidMount() {
    this.props.fetchStream(this.props.match.params.id);
  }

  dismiss() {
    history.push('/');
  }

  // React.Fragment or <> </>
  renderActions() {
    return (
      <React.Fragment>
        <Link to='/' className='ui button'>
          Cancel
        </Link>
        <button
          onClick={() => {
            this.props.deleteStream(this.props.match.params.id);
          }}
          className='ui button negative'
        >
          Delete
        </button>
      </React.Fragment>
    );
  }

  renderContent() {
    if (!this.props.stream) {
      return 'Are you sure you want to delete this stream?';
    }

    return `Are you sure you want to delete this stream with title: ${this.props.stream.title}?`;
  }

  render() {
    return (
      <Modal
        title='Delete Stream'
        content={this.renderContent()}
        actions={this.renderActions()}
        onDismiss={this.dismiss}
      />
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  return { stream: state.streams[ownProps.match.params.id] };
};

export default connect(mapStateToProps, { deleteStream, fetchStream })(
  StreamDelete
);
