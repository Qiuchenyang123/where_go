import React, { Component, useState } from 'react';
// 在 hooks 中用 useState 来代替 state 和 setState
function App(props) {
    const [count, setCount] = useState(0);
    // let defaultName = '';
    const [name, setName] = useState(() => {
        return props.name || '123321'
    });
    const [array, setArray] = useState([]);
    function arrayFn() {
        const arr = array.slice(0);
        arr.push(123);
        setArray(arr);
        if (array.length < 7) {
            console.log(array);
            arrayFn()
        }
    }
    return (
        <div>
            <button onClick={() => {setCount(count +1)}}>count({count})</button>
            <button onClick={() => {setName(name +1)}}>name({name})</button>
            <button onClick={() => {arrayFn()}}>array({array.toString()})</button>
        </div>
    )
}
export default App;
