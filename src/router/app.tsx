import { AppLayout } from "../components/layout/index";

const appRouter = [
    {
        path: '/',
        element: <AppLayout/>,
        children : [
            {
                path: "/",
                element: <div>Inicio</div>
            },
            {
                path: "about-us",
                element: <div>Nosotros</div>
            },
            {
                path: "contact",
                element: <div>Contacto</div>
            },
            {
                path:"*",
                element: <div>404 Not Found</div>
            }
        ]
    }
]

export default appRouter;