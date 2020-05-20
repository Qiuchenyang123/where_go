import React, {Component, PureComponent} from 'react';

class Foo extends Component{
    constructor(props) {
        super(props)
    }

    runRender() {
        console.log('render has run')
    }

    shouldComponentUpdate(nextProps, nextState, nextContext) {
        if (nextProps.name === this.props.name) {
            return false
        }
        return true
    }

    render() {
        this.runRender();

        return (
            <div>
                123
            </div>
        );
    }
}

class PureFoo extends PureComponent{
    runRender() {
        console.log('Pure render has run')
    }

    render() {
        this.runRender();

        return (
            <div>
                <h1>pureFoo——this.props.name.name:{this.props.name.name}</h1>

            </div>
        )
    }
}

class App extends Component {
    state = {
        name: 'abc',
        count: 1,
        deepName: {
            name: 'bcd'
        }
    };
    runRender() {
        console.log('Parent render has run')
    }
    render() {
        this.runRender();

        return (
            <div>
                <h1>memo</h1>
                {/*<Foo/>*/}
                {/*<Foo name={this.state.deepName}/>*/}
                <PureFoo name={this.state.deepName}/>
                <button onClick={() => {this.setState({count: this.state.count += 1})}}>count add</button>
                <button onClick={() => {this.setState({name: this.state.name += 1})}}>name change</button>
                <button onClick={() => {this.setState({deepName: {name: this.state.deepName.name += 1}})}}>deep name change</button>
            </div>
        );
    }
}

export default App;