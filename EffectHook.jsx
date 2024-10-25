import React, { useEffect, useState } from 'react'

export default function EffectHook() {
    const [count, setCount] =useState(0);
    useEffect(()=> {
         document.title=`you clicked  ${count} times`
    }
)
  return (
    <div>
              <p>You Clicked {count} times</p>
        <button onClick={() => setCount(count +1)}>Click Me</button>
    </div>
  )
}
