import { createBrowserRouter } from "react-router-dom";
import Layout from "../Layouts/Layout.base";
import Home from "../Apps/principal/Home";
import authRoutes from "../Apps/auth/services/routes.auth";
import ChoosePokemon from "../Apps/principal/ChoosePokemon";
import {MyPokemons} from "../Apps/principal/MyPokemons.jsx";
import {PokeStats} from "../components/PokeStats.jsx";
import One from "../Apps/example/One";
const router = createBrowserRouter([
    {
        path: "/",
        Component: Layout,
        children: [
            {
                path: "/",
                Component: Home
            },
            ...Array.from(authRoutes),
            {
                path: "/choose",
                Component: ChoosePokemon
            },
            {
                path:'/my-pokemons',
                Component: MyPokemons
            },
            {
                path:'/pokemon/:id/details',
                Component: PokeStats
            },
            {
                path: '/test',
                Component: One
            }
        ]
    }
])

export default router;