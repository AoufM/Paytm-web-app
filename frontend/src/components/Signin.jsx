import React, { useCallback, useState } from "react";
import { Form, Link, useNavigate } from "react-router-dom";


const Signin = () => {
  
  const [formData, setFormData] = useState({
    username: "",
    password: "",
  });

  const handleChange = useCallback((e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  }, []);
  return (
    <>
      <h1>Sign In</h1>
      <p>Enter your credentials to access your account</p>
      <Form action="/" method="post" >
        <label htmlFor="username">Username</label>
        <input type="text" name="username" required onChange={handleChange} />
        <label htmlFor="password">Password</label>
        <input
          type="password"
          name="password"
          required
          onChange={handleChange}
        />
        <button>Sign In</button>
        <p>
          Don't have an account? <Link to={"/signup"}>Sign Up</Link>
        </p>
      </Form>
    </>
  );
};

export default Signin;
