import React from 'react'
import Signin from '../components/Signin'
import axios from 'axios';
import { redirect } from 'react-router-dom';

const SignInPage = () => {
  return (
    <>
     <Signin/> 
    </>
  )
}

export default SignInPage;

export const action = async ({ request }) => {
  const data = await request.formData();
  const authData = {
    username: data.get("username"),
    password: data.get("password"),
  };
  if(authData.username==='' || authData.password===''){
    return alert('Please provide proper inputs')
  }
  try {
    const { data } = await axios.post(
      "http://localhost:3000/api/v1/user/signin",
      authData
    );
    localStorage.clear();
    localStorage.setItem("Token", data.token);
    return redirect("/dashboard");
  } catch (e) {
    return alert(e.response.data.message);
  }
};
