import React, { Component, Suspense, lazy } from 'react';
// import logo from './logo.svg';
import '../views/Index/App.css';
const About = lazy(() => {import('./about.jsx')})

class App extends Component{
    render() {
        return (
            <div>
                <Suspense fallback={() => <div>loading</div>}>
                    <About />
                </Suspense>
            </div>
        )
    }
}

export default App;
