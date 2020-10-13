import React, { Component } from 'react';

class Stateful extends Component {
    constructor(props) {
        super(props);
        this.state = {
            hello: 'Hola munds'
        }
    }
    render() {
        return {
            <h1>{this.state.hello}</h1>
        }
    }
};

export default Stateful;
