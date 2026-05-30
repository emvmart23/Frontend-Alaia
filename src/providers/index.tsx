import type React from "react"
import { BrowserRouter } from "react-router"

interface Props {
    children: React.ReactNode
}

export default function Providers({ children }: Props) {
  return (
    <BrowserRouter>
        {children}
    </BrowserRouter>
  )
}
