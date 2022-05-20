import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import AuthService from "../../api/authorization";
import "./Login.css"

const Login = () => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
  
    const navigate = useNavigate();
  
    const handleLogin = async (e) => {
      e.preventDefault();
      try {
        await AuthService.login(username, password).then(
          () => {
            navigate("/test");
            window.location.reload();
          },
          (error) => {
            console.log(error);
          }
        );
      } catch (err) {
        console.log(err);
      }
    };
  
    return (
      <div>
        <form
          className="form-wrapper"
          onSubmit={handleLogin}
        >
          <h3>Login</h3>
          <input
            className="form-input"
            type="text"
            placeholder="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <input
            className="form-input"
            type="password"
            placeholder="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button
            className="form-input"
            type="submit"
          >
            Log in
          </button>
        </form>
      </div>
    );
  };
  
  export default Login;