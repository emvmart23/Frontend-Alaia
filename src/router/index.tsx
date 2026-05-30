import { useRoutes } from "react-router";
import appRouter from "./app";

export default function AppRouter() {
  return (
    <>
        {useRoutes([...appRouter])}
    </>
  )
}
