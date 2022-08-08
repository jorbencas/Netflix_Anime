import React, { useState } from "react";
import "./Auth.css";
import "font-awesome/css/font-awesome.min.css";
import { useLocation, Link } from "react-router-dom";
import Communication from "services";

const Auth = () => {
  const location = useLocation();
  const [mode] = useState(location.pathname);
  const [showPasswd, setShowPasswd] = useState(false);
  const [form, setForm] = useState({
    username: "",
    email: undefined,
    passwd: "",
  });

  const sendCredentials = () => {
    let action = mode === "/signin" ? "Login" : "Register";
    form["action"] = action;
    console.log(form);
    // Communication.getMethod(1, `User`,form)
    // .then((res) => {
    //   console.log(res);
    // })
    // .catch(() => {
    //   // dispatch({
    //   //     type: 'ERROR_USERS',
    //   //     payload: null
    //   // })
    // });
  };

  const renderSignUp = (option) => {
    if (option === "first") {
      return (
        <input
          type="text"
          value={form.email}
          required
          placeholder="Correo Electronico"
        />
      );
    } else {
      return (
        <>
          <Link href="/signin"> Iniciar sessión </Link>
          <div className="input-group">
            <input
              type="button"
              onClick={() => {
                sendCredentials();
              }}
              className="submit"
              value="Registara-se"
            />
          </div>
        </>
      );
    }
  };

  const renderSignIn = (option) => {
    if (option === "second") {
      return (
        <>
          <Link href="/signup"> Registrar-se </Link>
          <div className="input-group">
            <input
              type="button"
              onClick={() => {
                sendCredentials();
              }}
              className="submit"
              value="Iniciar sessión"
            />
          </div>
        </>
      );
    }
  };

  return (
    <div className="wrap">
      <div className="contenedor-formulario">
        <h1>Bienvenido</h1>
        <div className="formulario">
          <input
            type="text"
            value={form.username}
            placeholder="Usuario"
            required
            pattern="[A-Za-z0-9]{4,12}"
            title="Usuario debe tener de 4 a 20 caracteres"
          />
          {mode && mode === "/signin"
            ? renderSignIn("first")
            : renderSignUp("first")}
          <div className="concret">
            <input
              type={showPasswd ? "type" : "password"}
              value={form.passwd}
              placeholder="Contraseña"
              autocomplate="true"
              required
            />
            <i
              className={showPasswd ? "fa fa-eye" : "fa fa-eye-slash"}
              onClick={() => setShowPasswd(!showPasswd)}
            ></i>
          </div>
          {mode && mode === "/signin"
            ? renderSignIn("second")
            : renderSignUp("second")}
        </div>
      </div>
    </div>
  );
};

export default Auth;
