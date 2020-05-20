import React, {Component, createContext } from 'react';
const BatteryContext = createContext();

class Leaf extends Component{
    static contextType = BatteryContext;

    render() {
        const battery = this.context;
        return (
            <div>
                <h1>Battery: {battery}</h1>
            </div>
        );
    }
}

class Middle extends Component{
    render() {
        return (
            <Leaf/>
        );
    }
}
class App extends Component {
    state = {
        battery: 60
    }

    render() {
        return (
            <BatteryContext.Provider value={this.state.battery}>
                <Middle/>
                <button onClick={() => {this.setState({battery: this.state.battery += 1})}}>battery action</button>
            </BatteryContext.Provider>
        );
    }
}

export default App;