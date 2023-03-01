import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

import { Saludar, TarjetaUsuario } from './saludar';
import { Boton } from './boton';
import { TarjetaTarea } from './tarea';

const root = ReactDOM.createRoot(document.getElementById('root'));
const manejoCambio = (evento) => {
  console.log(evento.target.value + '...');
  console.log("Escribiendo");
};
const envio = (evento) => {
  evento.preventDefault();
  alert("Enviado");
};

root.render (
  /*
  <>
    <Saludar titulo = "Hola Mundo" nombre = "Ricardo"></Saludar>
    <Saludar titulo = "Hola React" nombre = "Uriel"></Saludar>
    <Saludar titulo = "Hola JavaScript"></Saludar>
    <Saludar titulo = "Hola JSX"></Saludar>
    <Saludar titulo = "Hola HTML"></Saludar>
  </>
  */

  <>
    <TarjetaTarea listo = {false}></TarjetaTarea>

    <p> Se abre la consola del navegador para poder ver la funcion del boton y del texto de entrada </p>
    <Boton texto = "Saludar" nombre = "Ricardo"></Boton>
    <input id = "123" onChange = {manejoCambio}></input>

    <form onSubmit = {envio}>
      <h2> Registro de usuario </h2>
      <button> Enviar </button>
    </form>

    <TarjetaUsuario 
      nombre = "Ricardo Gloria" 
      cantidad = {3000} 
      puntos = {[99, 35, 22]}
      casado = {true} 
      direccion = {{calle: 'San Mateo 200B', ciudad: 'Dolores'}}
    >
    </TarjetaUsuario>

    <TarjetaUsuario 
      nombre = "Uriel Prado" 
      cantidad = {1000} 
      puntos = {[28, 10]}
      casado = {false} 
      direccion = {{calle: 'Vigo 7', ciudad: 'Dolores'}}
    >
    </TarjetaUsuario>
  </>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

  <React.StrictMode>
    <App />
  </React.StrictMode>