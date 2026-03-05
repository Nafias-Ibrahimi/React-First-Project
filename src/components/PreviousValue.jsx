import React, { useEffect, useRef, useState } from 'react'

function PreviousValue() {
  const [count, setCount] = useState(0);
  const prevCount = useRef(count);

  useEffect(() => {
    prevCount.current = count;
  }, [count]);

  return (
    <div>
      <p><strong>Current:</strong> {count}</p>
      <p><strong>Previous:</strong> {prevCount.current}</p>
      <button onClick={() => setCount(count + 1)}>Increase</button>
      <button onClick={() => setCount(count - 1)}>Derease</button>
     
    </div>
  )
}

export default PreviousValue;
