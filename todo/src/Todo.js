
import React from 'react'
import './App.css'; // imported for toggle purpose

export function Todo(props) {
    // console.log(`this is props inside todo`, props)

    //On click toggle
    const onClickToggle = (event) => {
        event.preventDefault()
        props.handleComplete(props.item.id) 
    }



    return (
        <div>
            <h2
            className={props.item.completed ? 'complete' : ''}
            onClick={onClickToggle} 
                      
             >
             {props.item.todo} 
             </h2>
        </div>
    )
}
