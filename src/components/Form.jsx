import React, { useState } from 'react'

function Form() {
    const [user , setUser]=useState({email :"" , passwd: ""});



  return (
    <div>
        <input type='email' onChange={e => setUser({...user ,email:e.target.value })} placeholder='email'/>
        <input  type="password" onChange={e => setUser({...user ,passwd:e.target.value })} placeholder='passwrd'/>
    </div>
  )
}

export default Form