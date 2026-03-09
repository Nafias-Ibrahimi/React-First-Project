import React, { useMemo } from 'react';

function Memor({ num }) {
  const fib = useMemo(() => {
    const calefib = n => (n <= 1 ? n : calefib(n - 1) + calefib(n - 2));
    return calefib(num);
  }, [num]);

  return <p>Fibonacci: {fib}</p>;
}

export default Memor;
