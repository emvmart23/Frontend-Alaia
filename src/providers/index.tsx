import type React from "react";
import { store } from "../store/store";
import { Provider } from "react-redux";
import AuthInitializer from "./authInitializer";
import { Toaster } from "sonner";

interface Props {
  children: React.ReactNode;
}

export default function Providers({ children }: Props) {
  return (
    <Provider store={store}>
      <AuthInitializer>
        {children}
        <Toaster />
      </AuthInitializer>
    </Provider>
  );
}
