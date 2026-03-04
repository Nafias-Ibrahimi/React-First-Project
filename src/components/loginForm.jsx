
import React, { useState } from "react";


// import React from 'react'

function loginform() {

    const [email, setEmail] = useState("");
  const [password, setPassword] = useState(""); // اصلاح typo
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    setMessage(`Email: ${email}\nPassword: ${password}`);
  }
  return (
    <div>
      <h2>Login Form</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="email"
          placeholder="Enter your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <br />
        <input
          type="password"
          placeholder="Enter your password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <br />
        <button type="submit">Submit</button>
      </form>

      {message && <pre>{message}</pre>}
    </div>
  );
}

export default loginform