import { createContext, ReactNode, useCallback, useContext, useEffect,  useState } from "react";
import { IAuth, IUser } from "../types";

const initState: IAuth = {
  user: null,
  authIsReady: true,
};

const useUser = () => {
  const [user, setUser] = useState(initState);

  const login = useCallback(
    (u: IUser) => setUser({ ...initState, user: u }),
    []
  );
  const logout = useCallback(
    () => setUser({ ...initState, user: null }),
    []
  );

  //check if auth is ready?
  useEffect(() => {
    const token = localStorage.getItem("adminUser");

    const authIsReady = (auth: IUser | null) => setUser({ authIsReady: true, user: auth });

    if (token) {
      authIsReady(JSON.parse(token));
    } else {
      authIsReady(null);
    }
  }, []);

  return { user, login, logout };
};
type UseUser = ReturnType<typeof useUser>;

const AuthContext = createContext({} as UseUser);
export const useAuthContext = () => useContext(AuthContext);

export const AuthProvider = ({ children }: { children: ReactNode }) => (
  <AuthContext.Provider value={useUser()}>{children}</AuthContext.Provider>
);
