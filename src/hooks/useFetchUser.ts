import { useNavigate } from "react-router-dom";
import { useAuthContext } from "../context/AuthContext";

export const useLogin = () => {
  const { login } = useAuthContext();
  localStorage.setItem(
    "adminUser",
    JSON.stringify({
      name: "sina baba ahmadi",
      email: "bad-teacher@gmail.com",
    })
  );
  return { login };
};

export const useLogout = () => {
  const { logout } = useAuthContext();
  const navigate = useNavigate();

  const logoutUser = () => {
    localStorage.removeItem("adminUser");
    logout();
    navigate("/login");
  };

  return { logoutUser };
};
