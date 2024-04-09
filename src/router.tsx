import { createBrowserRouter } from "react-router-dom";
import { ADD, HOME, LIST, SIGNIN, SIGNUP } from "./pages";
import { WRAPPER } from "./components";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <HOME />,
    },
    {
        path: "/list",
        element: (
            <WRAPPER>
                <LIST />
            </WRAPPER>
        ),
    },
    {
        path: "/signin",
        element: <SIGNIN />,
    },
    {
        path: "/signup",
        element: <SIGNUP />,
    },
    {
        path: "/add",
        element: (
            <WRAPPER>
                < ADD />
            </WRAPPER>
        ),
    },
]) 