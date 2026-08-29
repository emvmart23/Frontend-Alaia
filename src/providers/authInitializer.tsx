import { useEffect, useState } from "react";
import { useAppDispatch } from "../store/store";
import { setCredentials, logout } from "../store/slices/auth";
import api from "../services/api";

interface RefreshResponse {
  accessToken: string;
}

interface Props {
  children: React.ReactNode;
}

export default function AuthInitializer({ children }: Props) {
  const dispatch = useAppDispatch();
  const [isChecking, setIsChecking] = useState(true);

  useEffect(() => {
    const controller = new AbortController();
    async function restoreSession() {
      try {
        const { data } = await api.post<RefreshResponse>("/auth/refresh");
        console.log('render')
        dispatch(setCredentials({ accessToken: data.accessToken }));
      } catch {
        dispatch(logout());
      } finally {
        setIsChecking(false);
      }
    }

    restoreSession();
    return () => controller.abort(); 
  }, [dispatch]);

  if (isChecking) {
    return;
  }

  return <>{children}</>;
}