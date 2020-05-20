import React, {Component, useState, useEffect, useContext, memo, useRef} from 'react';
import {ArrowRightOutlined, CloseOutlined} from '@ant-design/icons'
import {Checkbox} from 'antd'
function Control(props) {
    const inputRef = useRef();
    function handleAddClick() {
        const content = inputRef.current.value;
        props.addTodo(content)
    }
    return (
        <div className={`controlItem`}>
            <input ref={inputRef} className={`addInput`} type="text"/>
            <button onClick={handleAddClick} className={`addBtn`}><ArrowRightOutlined /></button>
        </div>
    )
}
function TodoItem(props) {
    const { todo, toggleTodo, removeTodo } = props;
    return (
        <li className={`listItem`}>
            {/*<Checkbox className={`listCheckbox`} defaultChecked={todo.completed} onChange={toggleTodo}/>*/}
            <input className={`listCheckbox`} type="checkbox" defaultChecked={todo.completed} onChange={toggleTodo}/>
            <span className={`todoItemTxt`}>{todo.content}</span>
            <CloseOutlined className={`todoItemRemove`} onClick={removeTodo}/>
        </li>
    )
}
function Todos(props) {
    const { todos, toggleTodo, removeTodo } = props;
    return (
        <ul className={`todoList`}>
            {todos.map((todo, index) => {
                return (<TodoItem
                    todo={todo}
                    key={index}
                    toggleTodo={toggleTodo.bind(this, todo.id)}
                    removeTodo={removeTodo.bind(this, todo.id)}
                />)
            })}
        </ul>
    )
}

function TodoList() {
    const [todos, setTodos] = useState([]);

    function removeTodo(id) {
        const newState = todos.filter((item) => item.id !== id);
        setTodos(newState)
    }

    function addTodo(content) {
        const newState = todos.slice(0);
        newState.push({
            id: new Date().getTime(),
            content,
            completed: false
        });
        setTodos(newState)
    }

    function toggleTodo(id) {
        const newState = todos.map(item => {
            if (item.id === id) {
                item.completed = !item.completed
            }
            return item
        });
        setTodos(newState)
    }

    useEffect(() => {
        let localTodos = localStorage.getItem('MY_TODOS');
        if (localTodos) {
            localTodos = JSON.parse(localTodos) || [];
        } else {
            localTodos = []
        }
        setTodos(localTodos)
    }, []);
    useEffect(() => {
        localStorage.setItem('MY_TODOS', JSON.stringify(todos))
    }, [todos]);

    return (
        <div className={`myTodoListCtn`}>
            <h1>todos</h1>
            <Control addTodo={addTodo}/>
            <Todos todos={todos} toggleTodo={toggleTodo} removeTodo={removeTodo}/>
        </div>
    )
}

class App extends Component {
    render() {
        return (
            <div>
                <TodoList/>
            </div>
        );
    }
}

export default App;