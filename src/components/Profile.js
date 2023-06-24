import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import JSONPretty from 'react-json-pretty';
import 'react-json-pretty/themes/monikai.css';
import '../index.css';

const Profile = () => {
    const {user, isAuthenticated} = useAuth0();
    return(
      
      
      isAuthenticated && (
        <div class="card">
      <div class="bg uwu"></div>
      <div class="bg"></div>
      <div class="content">
            <div class="img">
              <img  src={user.picture}></img>
            </div>
            <div>
                  <h1 class="name">{user.name}</h1>
            </div>
            <div class="p">
                 SOFTWARE DEVELOPER
                  <p>
                        {user.email}
                  </p>
            </div>
      </div>
</div>
        /* <div>
            <img src={user.picture} alt={user.name} />
            <h2>{user.name}</h2>
            <p>{user.email}</p>

            <JSONPretty data={user} />
        </div> */
      )
    );
};

export default Profile;