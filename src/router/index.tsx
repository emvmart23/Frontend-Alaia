
import { createBrowserRouter } from "react-router";
import appRouter from "./app";
import authRouter from "./auth";

const router = createBrowserRouter([...appRouter, ...authRouter]);

export default router;
