import { NavLink } from "react-router-dom";
import AuthService from "../../api/authorization";
import React from "react";
import "./Header.css"

export const Header = ({currentUser, setCurrentUser}) => {
   const logout = () => {
      AuthService.logout();
      setCurrentUser(false);
   }

   if (currentUser) {
      return (
         <div className="header__wrapper">
            <div className="navbar">
               <NavLink
                  to={'/'}
                  className="header_btn"
                  style={{margin: '0 20px'}}
               >Home</NavLink>
               <div 
                  onClick={logout}
                  className="header_btn"
                  style={{margin: '0 20px', cursor: 'pointer'}}
               >Logout </div>
            </div>
         </div>
         )
   }

   return (
      <div className="header__wrapper">
         <div className="navbar">
            {currentUser 
            && 
               <NavLink 
                  to={'/'}
                  className="header_btn"
                  style={{margin: '0 20px'}}
               >Home</NavLink>}

            <NavLink 
               to={'/login'}
               className="header_btn"
               style={{margin: '0 20px'}}
            >LogIn</NavLink>

            <NavLink 
               to={'/signup'}
               className="header_btn"
               style={{margin: '0 20px'}}
            >SignUp</NavLink>
         </div>
      </div>
   )
}
