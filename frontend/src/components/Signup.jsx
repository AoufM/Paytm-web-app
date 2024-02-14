import React, { useCallback, useState } from "react";
import { Form, Link } from "react-router-dom";

const Signup = () => {
  // const navigate = useNavigate();
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

  const inputClass =
    "w-full py-1.5 px-2 rounded outline-none text-lg text-slate-700 focus:outline-teal-600 -outline-offset-2";
  const btnClass =
    "mt-4 bg-slate-100 font-bold w-full text-black rounded-md py-2 transition-all transform hover:bg-teal-500 active:translate-y-0.5 shadow-none";

  return (
    <div className="signUpForm bg-black mx-auto mt-24 rounded-lg border-white shadow-lg shadow-stone-900">
      <h1
        className="p-6 font-bold font-sans text-4xl"
        align="center"
      >
        Sign Up
      </h1>
      <p className="place-self-center text-lg font-sans font-semibold text-stone-400 pb-5">
        Enter your information to create an account
      </p>
      <Form
        method="post"
        action="/signup"
        className="font-semibold w-11/12 font-sans text-left flex flex-col gap-4 mx-auto"
      >
        <label
          htmlFor="firstName"
          className="w-full"
        >
          First Name
        </label>
        <input
          type="text"
          name="firstName"
          required
          onChange={handleChange}
          className={`${inputClass}`}
        />
        <label
          htmlFor="lastName"
          className="w-full"
        >
          Last Name
        </label>
        <input
          type="text"
          name="lastName"
          required
          onChange={handleChange}
          className={`${inputClass}`}
        />
        <label
          htmlFor="username"
          className="w-full"
        >
          Username
        </label>
        <input
          type="text"
          name="username"
          required
          onChange={handleChange}
          className={`${inputClass}`}
        />
        <label
          htmlFor="password"
          className="w-full"
        >
          Password
        </label>
        <input
          type="password"
          name="password"
          required
          onChange={handleChange}
          className={`${inputClass}`}
        />
        <button className={`${btnClass}`}>Sign Up</button>
        <p className="mt-1 place-self-center mb-6">
          Already have an account?{" "}
          <Link
            to={"/"}
            className="underline underline-offset-2 hover:text-teal-500"
          >
            Login
          </Link>
        </p>
      </Form>
    </div>
  );
};

export default Signup;
