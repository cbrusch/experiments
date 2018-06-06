import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Button from './components/Button';
import BriefModel from './data-models/Brief';
import Brief from './components/Brief';

class App extends Component {
//first, make a constructor (constructors can take two arguments, props and ???)
// ??? isn't something I have to worry about now
    constructor(props) {
    //initialize super on the constructor
        super(props);
    //initialize state
        this.state = {
        //generate
            brief: new BriefModel()
        }
    }

//create a class in Brief.js

//create a class method
    newBrief = (eventhandler) => {
        eventhandler.preventDefault();
        //generate a new brief and set state
        this.setState({ // pass in an object
            brief: new BriefModel() // store new brief model in an object with key of brief
        });
    }

    render() {
        return (
            //<!-- render button component and pass it a prop by creating a new HTML prop -->
            <div>
                {/* testing a comment */}
                <Brief brief={this.state.brief}/>
                <Button onClick={this.newBrief}>Get a New Brief</Button>
            </div>
        );
    }
}

export default App;
