import React, {Component, useContext, createContext} from 'react';
const CountContext = createContext();

function Leaf() {
    const count = useContext(CountContext);
    return (
        <h1>Count: {count}</h1>
    )
}

function Middle() {
    return (
        <Leaf/>
    )
}

class App extends Component {
    state = {
        count: 0
    };
    render() {
        let { count } = this.state;
        return (
            <CountContext.Provider value={count}>
                <Middle/>
                <button onClick={() => {this.setState({count: count +=1})}}>count++</button>
            </CountContext.Provider>
        );
    }
}

export default App;