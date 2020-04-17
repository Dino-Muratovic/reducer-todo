import React, { useReducer } from 'react';
import './App.css';
import { initialState, reducer} from './reducers/reducer';
import { TodoForm } from './ToDoForm';
import { TodoList } from './TodoList';

function App() {
  const [state, dispatch] = useReducer(reducer, initialState)
  // console.log(state)

  
  
  //Event handlers here
  const addTodo = (input) => {
    const newTodo = {
      todo: input,
      completed: false,
      id: Math.random()
    }

    dispatch({type: 'ADD_TODO', payload: newTodo}) // payload here matches action.payload in reducer 
  }

  const handleComplete = (id) => {
    dispatch({type:'COMPLETED_TODO', payload: id})
  }


  const clearCompleted = () => {
    dispatch({type: 'CLEAR_COMPLETED_TODO'})
  }



  //On button click
  const onButtonClick = (event) =>{
    event.preventDefault()
    clearCompleted() // we call clear completed function here
  }


  return (
    <div className="App">
        <h1>To Do!</h1>
        <TodoForm addTodo={addTodo} />
        <TodoList state={state} handleComplete={handleComplete} />
        <button onClick={onButtonClick}>Clear</button>
    </div>
  );
}

export default App;


