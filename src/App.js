import { useState, useEffect } from "react";
import {Routes} from './routes';
import AuthService from "./api/authorization";
import Login from "./components/autorisation/Login";
import Register from "./components/autorisation/Register";
import { Header } from "./components/header/Header";
import { Modal } from "./components/modal/Modal";
import getStatuses from "./api/statuses.api";

function App() {
  const [currentUser, setCurrentUser] = useState(undefined);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const user = AuthService.getCurrentUser();

    if (user) {
      setCurrentUser(user);
    }

    getStatuses.get()
  }, []);

  const logOut = () => {
    AuthService.logout();
  };
  
  return (
    <>
      <Header currentUser={currentUser} setCurrentUser={setCurrentUser} />
      <Routes currentUser={currentUser} />

      <Modal isVisible={isVisible} onHide={setIsVisible} />
    </>
  );
}

export default App;
