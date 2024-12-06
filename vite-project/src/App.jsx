import './App.css'
import { useReducer } from 'react'
import { userReducer, init } from './UserReducer'
import externalData from './Data'
import { countReducer, initialState } from './CountReducer'

function App() {
  const [state, dispatch] = useReducer(userReducer, externalData, init)
  return (
    <>
      <div>
        <input type="text"
          value={state.name}
          onChange={(e) => dispatch({type:'SET_NAME', payload: e.target.value})}
        />

        <input type="number"
          value={state.year}
          onChange={(e) => dispatch({type:'SET_YEAR', payload: e.target.value}) } 
        />

        {state.warning && <p style={{color:'red'}}>{state.warning}</p>}
        <p>name: {state.name}</p>
        <p>year: {state.year}</p>

        <button onClick={() => dispatch({type:'RESET', payload: externalData})}>Reset</button>
      </div>
    </>
  )

  // mata를 통한 추가 정보 전송
  // const [state, dispatch] = useReducer(countReducer, initialState);
  // const handleClick = (type, value, event) => {
  //   const {clientX: x, clientY: y} = event;
  //   dispatch({type, payload:{value}, meta:{x,y}});
  // }

  // return (
  //   <>
  //     <p>count: {state.count}</p>
  //     <button onClick={(e) => handleClick('INC', 1, e)}>+1</button>
  //     <button onClick={(e) => handleClick('DEC', 1, e)}>-1</button>
  //     <button onClick={(e) => handleClick('INC', 2, e)}>+2</button>
  //     <button onClick={(e) => handleClick('DEC', 2, e)}>-2</button>
  //   </>
  // );

}

export default App
