import { createBrowserRouter } from "react-router-dom"
import Dashboard from "@/pages/Dashboard"
import NotFoundPage from "@/pages/NotFoundPage"

const router = createBrowserRouter([
    {
        path: "/",
        element: <Dashboard />
    },
    {
        path: "*",
        element: <NotFoundPage />
    },
]);

export default router