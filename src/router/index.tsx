import { useRoutes } from "react-router";
import appRoutes from "./app";


export default function AppRoutes() {
  return (
    <>
        {useRoutes([...appRoutes])}
    </>
  )
}
