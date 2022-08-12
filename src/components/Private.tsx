import { Suspense } from "react";
import { Navigate } from "react-router-dom";
import { useAuthContext } from "../context/AuthContext";

const Private = ({ children }: { children: React.ReactNode }) => {
  const { user: auth } = useAuthContext();
  const user = auth.user 

  if (!user) return <Navigate to="/login" />;

  return <Suspense fallback="">{ children }</Suspense> ;
};

export default Private;
