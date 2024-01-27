import React from "react";
import Dashboard from "../components/Dashboard";
import axios from "axios";
import { useLoaderData } from "react-router-dom";

const DashboardPage = () => {
 const loaderData= useLoaderData();
 console.log(loaderData);
  return (
    <>
      <Dashboard  />
    </>
  );
};

export default DashboardPage;

export const loader = async () => {
  const token = localStorage.getItem("Token");
  console.log(token);
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
