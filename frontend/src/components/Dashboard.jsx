import React from "react";

const Dashboard = ({ userList }) => {
  return (
    <>
      <div className="font-semibold text-2xl text-center py-5 flex justify-start ">
        Users
      </div>
      <input type="text" placeholder="Search Users..." className="bg-black text-white outline-none shadow-lg rounded-md py-5 my-3 px-4 w-full focus:outline-teal-600"/>

      <div className="listOfUsers">

      {userList.length === 0 && (
				<h2 className="font-sans font-semibold text-lg mx-auto">
					No users found ☹️
				</h2>
			)}

{userList.length !== 0 && (
				<ul className="flex flex-col gap-4 mt-2">
					{userList?.map((user, index) => (
						<li key={index} className="font-sans bg-black py-4 px-2 rounded-md shadow-lg flex justify-between md:px-4">
            <div className="flex gap-4 items-center">
              <div className="bg-slate-50 text-lg text-black font-bold rounded-full w-10 h-10 flex justify-center items-center">
                {user.username[0].toUpperCase()}
              </div>
              <p className="text-white font-semibold text-base md:text-lg xl:text-xl">
                {user.username}
              </p>
            </div>
            <button
              className="bg-white text-sm text-black py-1 px-2 rounded-md shadow-lg font-bold transition-all hover:bg-teal-500 xl:text-base"
            >
              Send Money 💳
            </button>
          </li>
					))}
				</ul>
			)}

      </div>
    </>
  );
};

export default Dashboard;
