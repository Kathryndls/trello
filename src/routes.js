import { Route, Routes as RoutesWrapper, Navigate } from "react-router-dom"
import HomePage from "./pages/home.page"
import LoginPage from "./pages/login.page"
import SignupPage from "./pages/signup.page"


export const Routes = ({currentUser}) => {
   if (currentUser) {
      return (
         <RoutesWrapper>
            <Route exact path="/" element={<HomePage />} />
            <Route
               path="*"
               element={<Navigate to={'/'} />}
            />
         </RoutesWrapper>
      )
   } else {
      return (
         <RoutesWrapper>
            <Route exact path="/login" element={<LoginPage />} />
            <Route exact path="/signup" element={<SignupPage />} />
            <Route
               path="*"
               element={<Navigate to={'/login'} />}
            />
         </RoutesWrapper>
      )
   }
}