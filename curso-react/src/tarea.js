import './tarea.css';

export function TarjetaTarea({listo}) {
    return (
        <div className = 'tarjetaEstilos'>
            <h1 className = 'tituloEstilos'> Mi primera tarea </h1>
            <span className = {listo ? 'bg-verde' : 'bg-rojo'}>
                {listo ? "Tarea realizada" : "Tarea pendiente"} 
            </span>
        </div>
    )
};