

import './App.css'
import { useDispatch, useSelector } from 'react-redux'
import { decrement, increment } from './features/counterSlice';

function App() {
    const {count} = useSelector(state => state.counter)
    const dispatch = useDispatch();
  return (
    <>
      <h2>Counter : {count}</h2>
      <button type="button" onClick={()=> dispatch(increment())}>Increment</button>
      <button type="button" onClick={()=> dispatch(decrement())}>Decrement</button>
    </>
  )
}

export default App
