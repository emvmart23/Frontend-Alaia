import { AppLayout } from "../components/layout/index";
import { Home, Contact, About} from "../pages/index";

const appRouter = [
    {
        path: '/',
        element: <AppLayout/>,
        children : [
            {
                path: "/",
                element: <Home/>,
            },
            {
                path: "about-us",
                element: <About/>
            },
            {
                path: "contact",
                element: <Contact/>
            },
            {
                path:"*",
                element: <div>404 Not Found</div>
            }
        ]
    }
]

export default appRouter;