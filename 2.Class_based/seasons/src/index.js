import React from 'react';
import ReactDOM from 'react-dom';
import SeasonDisplay from './SeasonDisplay'
import Spinner from './Spinner'

// class component
// must extend React.Component
// Must define a 'render' method
// State -> class do not need hooks
// State -> JS object with data relevant to some component
// Update State -> rerender almost instantanly
// State must be initialized when a component is created
// State can only be updated using the function setState!

class App extends React.Component {
    // Initializing state
    // constructor(props) {
    //     super(props);

    //     this.state = { lat: null, errorMessage: '' };
    // }

    state = {lat: null, errorMessage: ''};

    // componentDidMount -> setup
    componentDidMount() {
        window.navigator.geolocation.getCurrentPosition(
            position => this.setState({ lat: position.coords.latitude }), // do not use this.state.lat = 30
            err => this.setState({ errorMessage: err.message })
        );
        console.log("Component Mounted")
    }

    // componentDidUpdate -> setState
    componentDidUpdate() {
        console.log("Component Updatedf")
    }
    // componentDidUnmount

    renderContent(){
        if (this.state.errorMessage && !this.state.lat) {
            return <div>Error: {this.state.errorMessage}</div>
        }
        if (!this.state.errorMessage && this.state.lat) {
            return <SeasonDisplay lat={this.state.lat} />
        }
        return <Spinner message="Please accept location request" />
    }

    // React -> must define render
    render() {
        return(
            <div className="border red">
                {this.renderContent()}
            </div>
        )
    }


}

ReactDOM.render(<App />, document.querySelector('#root'));

