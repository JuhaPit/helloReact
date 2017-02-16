import React, { Component } from 'react';
import './App.css';

class App extends Component {

    constructor(props) {
        super(props);
        this.inputChanged = this.inputChanged.bind(this);
        this.state = {
            
            name: ''
        }
    }
    
    componentDidMount(){
        
        this.setState ({
            name: 'Juha'
        });
    }
    
    inputChanged(event) {
        this.setState({
            name: event.target.value
        });
    }

    
    
  render() {
    return (
    <div>
    <h1>Hei {this.state.name}</h1>
      <form>
        <input type="text" onChange={this.inputChanged} />
      </form>
    </div>
    );
  }
}

export default App;
