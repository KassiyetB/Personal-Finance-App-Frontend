import { createBrowserRouter } from "react-router-dom"
import Dashboard from "@/pages/Dashboard/Dashboard"
import NotFoundPage from "@/pages/NotFoundPage/NotFoundPage"
import Transactions from "@/pages/Transactions/Transactions";
import LogInForm from "@/features/auth/components/LogInForm";
import SignUpForm from "@/features/auth/components/SignUpForm";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Dashboard />
    },
    {
        path: "*",
        element: <NotFoundPage />
    },
    {
        path: "/transactions",
        element: <Transactions />
    },
    {
        path: "/auth/login",
        element: <LogInForm />,
    },
    {
        path: "/auth/signup",
        element: <SignUpForm />,
    },
]);

export default router