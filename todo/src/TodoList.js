


import React from 'react'
import { Todo } from './Todo';

export function TodoList(props) {
  //   console.log(`this is props inside ToDoList`, props)

    return (
        <div className="Body">
            {props.state.map((item) => {
              // console.log(`this is item`, item)
              // pass down the handleComplete and the entire todo object
                return <Todo item={item} key={item.id} handleComplete={props.handleComplete} />
            })}
        </div>
    )
}

