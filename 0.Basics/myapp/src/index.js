// import react and reactDOM

import React from 'react';
import ReactDOM from 'react-dom';

// import ES2015 // require -> CommonJS

//  Create a react component

const App = () => {
    const buttonText = {text: 'click'};
    const labelText = "Enter Name:";
    return (
    <div>
        <label className="label" htmlFor ="name">
            {labelText}
        </label>
        <input id="name" type="text"/> 
    <button style={{backgroundColor: 'blue', color:'white'}}>{buttonText.text}</button>
    </div>
    );
};

// Take the react component and show it on the screen

ReactDOM.render(<App />, document.querySelector('#root'));