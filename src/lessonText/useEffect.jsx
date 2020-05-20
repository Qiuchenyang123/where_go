import React, {Component, useState, useEffect} from 'react';

function App() {
    const [count, setCount] = useState(0);
    const [count1, setCount1] = useState(0);
    const [count2, setCount2] = useState(0);
/*    useEffect(() => {
        // setCount(count + 1);
        console.log('count: ' + count)
    });
    useEffect(() => {
        // setCount1(count1 + 1);
        console.log('count1: ' + count1)
    }, []);*/
    useEffect(() => {
        // setCount2(count2 + 1);
        console.log('count2: ' + count2)
    }, [count2]);
    return (
        <div>
            <h1>Count: {count}</h1>
            <h1>Count1: {count1}</h1>
            <h1>Count2: {count2}</h1>
            <button onClick={() => {setCount(count + 1);}}>change Count</button>
            <button onClick={() => {setCount1(count1 + 1);}}>change Count1</button>
            <button onClick={() => {setCount2(count2 + 1);}}>change Count2</button>
        </div>
    )
}
export default App;