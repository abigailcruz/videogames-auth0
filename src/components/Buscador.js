import React, { useState } from "react";
import axios from "axios";
import { useAuth0 } from "@auth0/auth0-react";

const Buscador = ({ onBuscar }) => {
  const [nombre, setNombre] = useState("");
  const { getIdTokenClaims } = useAuth0();

  const handleInputChange = (event) => {
    setNombre(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const tokenGlobal = await obtenerInformacion();
      const url = `https://et1awybnrd.execute-api.us-east-1.amazonaws.com/dev/videogame/${nombre}`;

      const response = await axios.get(url, {
        headers: {
          Authorization: `Bearer ${tokenGlobal}`,
        },
      });

      const data = response.data;
      onBuscar(data);
    } catch (error) {
      console.error("Error al buscar los datos:", error);
    }
  };

  const obtenerInformacion = async () => {
    try {
      const claims = await getIdTokenClaims();

      if (claims && claims.__raw) {
        const tokenGlobal = claims.__raw;
        return tokenGlobal;
      } else {
        console.error(
          "Los claims del token de acceso son nulos o no están definidos."
        );
      }
    } catch (error) {
      console.error(
        "Error al obtener los claims del token de acceso:",
        error
      );
    }
  };

  return (
    <div>
      <form className="form-inline my-2 my-lg-0 d-flex">
        <input
          className="form-control mr-sm-2"
          type="text"
          placeholder="Buscar por nombre..."
          aria-label="Search"
          value={nombre}
          onChange={handleInputChange}
        />
        <button
          className="btn btn-outline-success my-2 my-sm-0"
          type="button"
          onClick={handleSubmit}
        >
          Buscar
        </button>
      </form>
    </div>
  );
};

export default Buscador;
