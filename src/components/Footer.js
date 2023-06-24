import React from "react";
import { useAuth0 } from "@auth0/auth0-react";

function Footer() {
  const {user, isAuthenticated} = useAuth0();
  return (
    isAuthenticated && (
    <footer className="main-footer">
      <strong>
        Copyright © 2023 <a href="#">PRECLOUD (JESIEL & JHOJAIRA)</a>.
      </strong>
     
    </footer>
    )
  );
}

export default Footer;
