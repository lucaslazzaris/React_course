import React from 'react';

class SearchBar extends React.Component {

    state = { term: ''};
    
    // this.func = this.func.bind(this)

    // MUST BE AN ARROW FUNCTION!!!
    onFormSubmit = event => {
        event.preventDefault();
        this.props.onSubmit(this.state.term);
    }

    render() {
        return (
            <div className="ui segment">
                <form className="ui form" onSubmit={this.onFormSubmit}>
                    <div className="field">
                        <label htmlFor="query">Image Search</label>
                        <input type="text"
                            id="query"
                            value={this.state.term} 
                            onChange={e => this.setState({term: e.target.value})}/>
                    </div>
                </form>
            </div>
        )
    }
}

export default SearchBar;

// unsplash.com/developers