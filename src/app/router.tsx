import { createBrowserRouter } from "react-router-dom"
import Dashboard from "@/pages/Dashboard/Dashboard"
import NotFoundPage from "@/pages/NotFoundPage/NotFoundPage"
import Transactions from "@/pages/Transactions/Transactions";

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
    }
]);

export default router