export function Saludar({titulo, nombre = "Usuario"}) {
    console.log(titulo, nombre);

    const usuario = {
        nombre: "Ricardo",
        apellido: "Gloria"
    };
  
    return (
        <div>
            <h1> {usuario.nombre} </h1>
            <h2> {titulo}, dice {nombre} </h2>
        </div>
    )
};

export function TarjetaUsuario({nombre, cantidad, puntos, casado, direccion}) {
    console.log(nombre, cantidad, puntos, casado, direccion);

    return (
        <div>
            <h1> {nombre} </h1>
            <p> 💸 {cantidad} </p>
            <p> {casado ? "Casado" : "Soltero"} </p>
            <ul>
                <li> Calle: {direccion.calle} </li>
                <li> Ciudad: {direccion.ciudad} </li>
            </ul>
        </div>
    )
}