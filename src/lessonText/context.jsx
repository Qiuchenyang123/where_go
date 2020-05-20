import React, { Component, createContext } from 'react';
import '../views/Index/App.css';
const BatteryContext = createContext();
const OnlineContext = createContext();

class Leaf extends Component{
    render() {
        return (
            <BatteryContext.Consumer>
                {battery => <OnlineContext.Consumer>
                    {online => <h1>Battery: {battery}; Online: {online.toString()}</h1>}
                </OnlineContext.Consumer>}
            </BatteryContext.Consumer>
        )
    }
}
class Middle extends Component{
    render() {
        return (
            <Leaf/>
        )
    }
}

class App extends Component{
    state = {
        battery: 60,
        online: true
    };

    render() {
        return (
            <BatteryContext.Provider value={this.state.battery}>
                <OnlineContext.Provider value={this.state.online}>
                    <h1>Context</h1>
                    <Middle/>
                    <button onClick={() => {this.setState({battery: this.state.battery += 1})}}>Battery Add</button>
                    <button onClick={() => {this.setState({online: !this.state.online})}}>Online Toggle</button>
                </OnlineContext.Provider>
            </BatteryContext.Provider>
        )
    }
}

export default App;
