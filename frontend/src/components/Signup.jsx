import axios from "axios";
import React, { useCallback, useState } from "react";
import { Form, Link, redirect, useNavigate } from "react-router-dom";

const Signup = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    username: "",
    password: "",
    firstName: "",
    lastName: "",
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
      <h1>Sign Up</h1>
      <p>Enter yout information to create an account</p>
      <Form method="post" action="/signup">
        <label htmlFor="firstName">First Name</label>
        <input type="text" name="firstName" required onChange={handleChange} />
        <label htmlFor="lastName">Last Name</label>
        <input type="text" name="lastName" required onChange={handleChange} />
        <label htmlFor="username">Username</label>
        <input type="text" name="username" required onChange={handleChange} />
        <label htmlFor="password">Password</label>
        <input
          type="password"
          name="password"
          required
          onChange={handleChange}
        />
        <button>Sign Up</button>
        <p>
          Already have an account? <Link to={"/"}>Login</Link>
        </p>
      </Form>
    </>
  );
};

export default Signup;
