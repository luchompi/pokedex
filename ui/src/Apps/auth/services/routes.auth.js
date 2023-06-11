import Login from "../Login";
import Register from "../Register";

const authRoutes = [
    {
        path: "/auth/login",
        Component: Login,
        exact: true,
    },
]

export default authRoutes;