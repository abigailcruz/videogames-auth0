import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import button from 'react-bootstrap/Button';

const LogoutButton = () => {
  const { logout } = useAuth0();
  return (
   <button class="btn btn-primary" onClick={() => logout()} >Cerrar Sesion</button>
  );
};

export default LogoutButton;