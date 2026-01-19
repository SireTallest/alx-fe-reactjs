import {useState} from 'react';
const Counter = ()=>{
    const [count, setCount] = useState(0);
    return(
        
        <div>
            <p>Current Count: {count}</p>
            <button onClick={() => setCount(count + 1)}>count: {count}</button>
            <button onClick={() => setCount(count - 1)}>count: {count}</button>
            <button onClick={() => setCount(0)}>Reset Count</button>
        </div>
        
    );
}

export default Counter;