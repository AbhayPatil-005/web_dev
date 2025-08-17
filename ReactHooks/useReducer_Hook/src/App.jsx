import { useState, useReducer } from 'react'

const todoReducer=(state, action)=>{
  switch(action.type){
    case "ADD_TODO": return[...state,{id:Date.now(), text: action.payload}];
    case "REMOVE_TODO": return state.filter((todo)=>todo.id!==action.payload);
    default : return state
  }
}


function App() {
  const [todo, dispatch] = useReducer( todoReducer,[])
  const [input, setInput] = useState("")
  
  const todoAddHandler=()=>{
    dispatch({type:'ADD_TODO',payload: input});
    setInput("");
  }
  const todoRemoveHandler=(id)=>{
    dispatch({type:"REMOVE_TODO", payload:id});
  }

  return (
    <div>
      <h1>TODO APP</h1>
      
      <input style={{borderRadius:"50px",border:"1px soild black",padding:"10px" }}value={input} onChange={(e)=>setInput(e.target.value)} />
      <button style={{
        margin:"10px",
        borderRadius:"50px",
        border:"none",
        backgroundColor:'lightpink',
        padding:"10px"}}
        onClick={todoAddHandler}>➕ Add</button>
      <ul>
        {todo.map((todo)=>(<li key={todo.id}>
          {
            todo.text
          }
          <button 
          style={{
            margin:"10px",
            borderRadius:"50px",
            border:"2px solid red",
            padding:"10px",
            }}
          onClick={() => todoRemoveHandler(todo.id)}>❌</button>
          </li>))}
        
      </ul>
    </div>
  )
}

export default App
