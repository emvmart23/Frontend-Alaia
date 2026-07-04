import { AuthLayout } from "../components/layout";
import { SignIn, SignUp } from "../pages";

const authRouter = [
  {
    path: "/auth",
    element: <AuthLayout />,
    children: [
      {
        path: "sign-in",
        element: <SignIn />,
      },
      {
        path: "sign-up",
        element: < SignUp />,
      }
    ],
  },
];

export default authRouter;