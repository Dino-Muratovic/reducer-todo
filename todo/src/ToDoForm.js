import React, { useState } from 'react'

export function TodoForm (props) {
    const [form, setForm] = useState('')


    //On form submit EVENT HANDLER
    const onFormSubmit = (event) => {
                //prevent the page from reloading
                event.preventDefault();
                //invoke the function addTodo from app.js and pass in form
                props.addTodo(form)
                //After submitting clear 
                setForm('')
    }


     // on input change event handler here
    const onInputChange = (event) => {
        setForm(event.target.value)
    }

   return(

    <form onSubmit={onFormSubmit}>
        <input 
            name='todo'
            placeholder='Add Todo'
            value={form}
            onChange={onInputChange}
        />
        <button type='submit'>Add Todo</button>
    </form>
   )
}



