import React, { Component, lazy, Suspense } from 'react';
const About = lazy(() => import('./about'));


class App extends Component {
    state = {
        error: false
    };
    static getDerivedStateFromError() {
        return {
            error: true
        }
    }
    render() {
        if (this.state.error) {
            return (
                <div>error</div>
            )
        }
        return (
            <div>
                <Suspense fallback={<div>loading</div>}>
                    <About/>
                </Suspense>
            </div>
        );
    }
}

export default App;