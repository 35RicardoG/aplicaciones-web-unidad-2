import PropTypes from 'prop-types';

export function Boton({texto, nombre = "Usuario"}) {
    console.log(texto, nombre);

    return (
        <button onClick = {function() {
            console.log("Hola mundo");
        }}> {texto} - {nombre} </button>
    )
};

Boton.propTypes = {
    text: PropTypes.string.isRequired
};