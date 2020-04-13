import React, { useState, useReducer} from 'react';
import reducer, { initialState} from './reducers/reducer';
import TodoList from './TodoList';





const ToDoForm = () => {
//    
const [todo, settodo] = useState('');  

const [state, dispatch] = useReducer(reducer, initialState);
// console.log(`this is state object`, state);
// console.log(`this is dispatch function`, dispatch);

//Handle changes
const handleChanges = e => {
    settodo(e.target.value);
  };

  return (
    <div className="form">    
        <form>
                <input
                    type="text"
                    name="todo"
                    onChange={handleChanges}
                    value={todo}
                />  
                <TodoList/>

                <div>
                     <p>{state.item}</p>
                     <button onClick={() =>{dispatch({type: 'Add new Todo'})}}>Add</button> 
                     <button onClick={() =>{dispatch({type: 'Clear Todos'})}}>Clear</button>  
                </div>         
         </form> 
    </div>
  );
}



export default ToDoForm;
