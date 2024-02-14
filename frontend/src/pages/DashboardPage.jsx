import React from "react";
import Dashboard from "../components/Dashboard";
import axios from "axios";
import { useLoaderData, useNavigate } from "react-router-dom";

const DashboardPage = () => {
  const loaderData = useLoaderData();
  const navigate= useNavigate();
  const userName = loaderData.username;
  const balance = loaderData.balance;
  const usersList = loaderData.userArr;
  
  const handleUserInfoClick = () => {
    navigate('/userinfo');
  };

  return (
   
    <div className="w-11/12 mx-auto">
  <div className="flex justify-between items-center h-16">
    <h1 className="text-3xl font-sans font-semibold">Mini Bank</h1>
  
    <p className="text-xl font-sans flex items-center">
      Hello, {userName} 
      <span className="bg-slate-50 text-xl text-black font-bold rounded-full w-10 h-10 flex justify-center items-center ml-3 hover:cursor-pointer hover:bg-teal-500"  onClick={handleUserInfoClick}>
        {userName.charAt(0)}
      </span>
    </p>
  
  </div>
  <div className="w-full opacity-10 bg-slate-100 h-0.5"></div>
  <div className="font-semibold text-2xl text-center py-6 flex justify-start ">
    Your Balance  ${balance}
  </div>
  <Dashboard userList={usersList}/>
</div>
  );
};

export default DashboardPage;

export const loader = async () => {
  const token = localStorage.getItem("Token");
  try {
    const { data } = await axios.get(
      "http://localhost:3000/api/v1/accounts/balance",
      {
        headers: {
          Authorization: "Bearer " + token,
          "Content-Type": "application/json",
        },
      }
    );
    return data;
  } catch (e) {
    return e.response.data.message;
  }
};
