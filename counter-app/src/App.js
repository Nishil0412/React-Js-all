import React, { useState } from 'react'

function Counterapp() {
    const [count , setCount] = useState(0);
  return (
   
    <div className="container my-4">
        <div className="card text-center my-4">
            <div className="card body">
                <h1><b>Counter App</b></h1>
                    <div className="my-4">
                        <h2 className="my-4">{count}</h2>
                         <button className="btn btn-success mx-3 " onClick={() => setCount(count+1)}>Increment</button>
                         <button className="btn btn-danger mx-3" onClick={() => setCount(count-1)}>Decrement</button>
                    </div>
            </div>
        
        </div>
        
    </div>
  )
}
export default Counterapp