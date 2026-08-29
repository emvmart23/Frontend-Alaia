import { Outlet } from "react-router";
import { AppLayout, ProfileLayout } from "../components/layout";
// import { ProtectedRoute } from "../components/auth/ProtectedRoute";
import { 
  Home, 
  Contact, 
  About, 
} from "../pages";

const appRouter = [
  {
    path: "/",
    element: <AppLayout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "about-us",
        element: <About />,
      },
      {
        path: "contact",
        element: <Contact />,
      },

      /* --- RUTAS PROTEGIDAS DEL PERFIL --- */
      {
        element: <Outlet />, // Verificación de autenticación
        children: [
          {
            path: "profile",
            element: <ProfileLayout />, // Layout de pestañas
            children: [
              {
                index: true, // Ruta por defecto: /profile
                element: <><h1>Max</h1></>,
              },
              {
                path: "orders", // /profile/orders
                element: <></>,
              },
              {
                path: "addresses", // /profile/addresses
                element: <></>,
              },
              {
                path: "favorites", // /profile/favorites
                element: <></>,
              },
            ],
          },
        ],
      },

      {
        path: "*",
        element: <div>404 Not Found</div>,
      },
    ],
  },
];

export default appRouter;