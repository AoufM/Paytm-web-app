import React from 'react'
import SendMoney from '../components/SendMoney'
import axios from 'axios';
import { redirect } from 'react-router-dom';

const SendMoneyPage = () => {
  return (
    <div>
      
      <SendMoney/>

    </div>
  )
}

export default SendMoneyPage;

export const action = async ({ request }) => {
	const data = await request.formData();
	const amount = data.get("amount");


	const searchParams = new URL(request.url).searchParams;
	const id = searchParams.get("user");
  console.log(amount);
  console.log(id);
  console.log(request.url);

	const token = localStorage.getItem("Token");
	// const API = import.meta.env.VITE_BACKEND_API;

	
  
	try {
		const { data } = await axios.post(
			"http://localhost:3000/api/v1/accounts/transfer",
			// API + "accounts/transfer",
			{ to: id, amount },
			{
				headers: {
					Authorization: "Bearer " + token,
				},
			}
		);

		console.log(data);
		console.log(data.message);
		alert(data?.message);
		return redirect("/dashboard");
	} catch (error) {
		console.log(error.response.data.message);
		return error.response.data.message;
	}
};
