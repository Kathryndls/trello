import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import AuthService from "../api/authorization";

const LoginPage = () => {
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
         <h1>Login (log - foo, pass - 123qwerty)</h1>
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
            className="form-btn"
            type="submit"
         >
         Log in
         </button>
      </form>
   </div>
   );
};

export default LoginPage;