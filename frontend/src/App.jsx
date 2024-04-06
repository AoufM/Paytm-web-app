import { createBrowserRouter, RouterProvider } from "react-router-dom";
import SignInPage from "./pages/SignInPage";
import SignUpPage from "./pages/SignUpPage";
import DashboardPage from "./pages/DashboardPage";
import { action as SignUpAction } from "./pages/SignUpPage";
import { action as SendAction } from "./pages/SendMoneyPage";
import { action as SignInAction } from "./pages/SignInPage";
import { loader as DashboardLoader } from "./pages/DashboardPage";
import "./App.css";
import UserInfo from "./pages/UserInfo";
import SendMoneyPage from "./pages/SendMoneyPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <SignInPage />,
    action: SignInAction,
  },
  {
    path: "/signup",
    element: <SignUpPage />,
    action: SignUpAction,
  },
  {
    path: "/dashboard",
    element: <DashboardPage />,
    loader: DashboardLoader,
  },
  {
    path: "/userinfo",
    element: <UserInfo />,
  },
  {
    path: "/send",
    element: <SendMoneyPage />,
    action: SendAction,
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
