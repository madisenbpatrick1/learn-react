import { useState } from 'react';

export default function Counter() {
  const [number, setNumber] = useState(0);
// when it sees setNumber it will queue the counter 
// updating the state multiple times
// arrow functions queue the counter 
  return (
    <>
      <h1>{number}</h1>
      <button onClick={() => {
        setNumber(n => n + 1);
        setNumber(n => n + 1);
        setNumber(n => n + 1);
      }}>+3</button>
    </>
  )
}
