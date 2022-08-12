import React from "react";
import { Navigate } from "react-router-dom";
import { useAuthContext } from "../context/AuthContext";
import { useLogin } from "../hooks/useFetchUser";
import "../styles/pages/login.scss";

const state = {
  name: "sina baba ahmadi",
  email: "teacher@gmail.com",
};

const LoginPage = () => {
  const { user } = useAuthContext();
  const { login } = useLogin();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    login(state);
  };

  if (user.user) return <Navigate to="/" />;

  return (
    <main className="login-page">
      <div className="wrapper">
        <div className="right">
          <img className="logo" src="/images/logo.svg" alt="bad-teacher-logo" />
          <form onSubmit={handleSubmit}>
            <div className="form-control">
              <label className="label">
                <span>Email:</span>
                <input
                  type="email"
                  value={state.email}
                  name="email"
                  onChange={() => {}}
                  placeholder="example@gmail.com"
                />
              </label>
            </div>
            <div className="form-control">
              <label className="label">
                <span>Password:</span>
                <input
                  type="password"
                  value={123456}
                  name="password"
                  onChange={() => {}}
                  placeholder="your password"
                />
              </label>
            </div>
            <button>Log In</button>
          </form>
          <p className="credit">&copy; Bad Teacher</p>
        </div>
        <div className="left">
          <img src="/images/login.jpg" alt="login" />
        </div>
      </div>
    </main>
  );
};

export default LoginPage;
