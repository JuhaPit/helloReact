import React, { Component } from 'react';
import './App.css';

class Count extends Component {
    
    constructor(props) {
    super(props);
    this.incrementCounter = this.incrementCounter.bind(this);
    this.state = { 
            count: 0
        }
    }
    
    incrementCounter(event) {
        this.setState ({
            count: this.state.count + 1
        });
 }
    
    render() {
    return (
      <div>
        <p>Painiketta klikattu {this.state.count} kertaa</p>
        <br/>
        <button  onClick={this.incrementCounter}>Klikkaa</button>
      </div>
    );
        
    }
    
}

export default Count;