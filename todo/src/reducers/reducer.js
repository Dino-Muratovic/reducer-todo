


export const initialState = {
    item: 'Learn about reducers',
    completed: false,
    id: 3892987589
  }

const reducer = (state, action) => {
    //Switch statement
    //if or else if blocks become cases
    switch(action.type){
        
       case "Add new Todo":
           return {
               ...state,
               id:state.id++               
           }
       case "Clear Todos":
           return {
           ...state, 
           completed: false           
           }

       case "Toggle todo" :
           return {
               ...state, 
               completed: !state.completed
           }   
           
       default:
           return state;    
    }   
}

export default reducer;