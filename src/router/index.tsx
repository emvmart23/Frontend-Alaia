import { useRoutes } from "react-router";
import appRouter from "./app";
import authRouter from "./auth";

export default function AppRouter() {
  return useRoutes([...appRouter, ...authRouter]);
}