import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import ProjectDetails from "../page/ProjectDetail";
import PageNotFound from "../page/PageNotFound";
import TerminalLayout from "../components/TerminalLayout";
export const router = createBrowserRouter([
    {
        element: <TerminalLayout />,
        children:[
                {
        path: "/",
        element: <App />
    },
    {
        path:'/project/:slug',
        element: <ProjectDetails />
    },
    {
    path: "*",
    element: <PageNotFound />
        }
        ]
    }
])