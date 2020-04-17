
export const initialState = [{
    todo: '',
    completed: false,
    id:Math.random()
}]

export function reducer(state, action) {

    //Actions
    switch(action.type) {
        case 'ADD_TODO':
            return [  //confused about spreading here
                ...state,
                action.payload // this matches dispatched payload in app.js
            ]
        case 'COMPLETED_TODO':
            return state.map((item) =>{
                //ternary operator
                return item.id === action.payload ? {...item, completed: !item.completed}:item 
             }) 

        case 'CLEAR_COMPLETED_TODO':
            return state.filter((item) => !item.completed)
        
        default:
            return state    
    }
}

