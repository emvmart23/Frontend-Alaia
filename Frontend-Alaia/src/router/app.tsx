const appRoutes = [
    {
        path: '/',
        element: <div>Home</div>,
        children : [
            {
                path: "about-us",
                element: <div>Sobre nosotros</div>
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

export default appRoutes;