import React, { useState } from 'react';
import './App.css';
const App = () => {
  const [count,setCount] = useState(0);
  return (
    <div className='main'>
      <div className='plus' onClick={()=>setCount(count+1)}>+</div>
      <div className='ans'>{count}</div>
      <div className='minus' onClick={()=> count>0 ? setCount(count-1):0}>-</div>
    </div>
  );
}

export default App;
