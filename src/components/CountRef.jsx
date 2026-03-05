import React, { useEffect, useRef, useState } from 'react'

function CountRef() {
    const renderCounter=useRef(0);
    useEffect(() =>{
    renderCounter.current +=1;
    });

  return <p>Renered {renderCounter} times</p>

  
}

export default CountRef