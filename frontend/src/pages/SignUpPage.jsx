import React from "react";
import Signup from "../components/Signup";
import { redirect } from "react-router-dom";
import axios from "axios";

const SignUpPage = () => {
  return (
    
      <Signup />
    
  );
};

export default SignUpPage;
export const action = async ({ request }) => {
  const data = await request.formData();
  const authData = {
    firstName: data.get("firstName"),
    lastName: data.get("lastName"),
    username: data.get("username"),
    password: data.get("password"),
  };
  try {
    const { data } = await axios.post(
      "http://localhost:3000/api/v1/user/signup",
      authData
    );
    localStorage.clear();
    localStorage.setItem("Token", data.token);
    return redirect("/dashboard");
  } catch (e) {
    return e.response.data.message;
  }
};
