const Pacientes = ({ paciente, setPaciente, eliminarPaciente }) => {

    const { nombre, propietario, email, fecha, sintomas, id } = paciente;

    const handleDelete = () => {
        const respuesta = confirm('¿Deseas Eliminar este paciente?');
        if (respuesta) {
            eliminarPaciente(id)
        }
    };
    
    return (
        <div className='mx-5 mb-10 bg-white shadow-md px-5 py-10 rounded-xl'>
            <p className=' font-bold mb-3 text-gray-700 uppercase'>
                Nombre: {''}
                <span className='font-normal normal-case'>{nombre}</span>
            </p>

            <p className=' font-bold mb-3 text-gray-700 uppercase'>
                Nombre del propietario: {''}
                <span className='font-normal normal-case'>{propietario}</span>
            </p>

            <p className=' font-bold mb-3 text-gray-700 uppercase'>
                E-mail: {''}
                <span className='font-normal normal-case'>{email}</span>
            </p>

            <p className=' font-bold mb-3 text-gray-700 uppercase'>
                Fecha de alta: {''}
                <span className='font-normal normal-case'>{fecha}</span>
            </p>

            <p className=' font-bold mb-3 text-gray-700 uppercase'>
                Sintomas: {''}
                <span className='font-normal normal-case'>{sintomas}</span>
            </p>

            <div className="md:flex mx-5 w-1/2 ">
                <button type="button"
                className="py-1 px-10 border-2 border-green-400  bg-white text-green-400 font-bold hover:bg-green-400 hover:text-white rounded-md mr-5 transition-all w-1/2"
                onClick={() => setPaciente(paciente)}>
                    Editar
                </button>
                <button type="button"
                className="py-1 px-10 border-2 border-red-400  bg-white text-red-400 font-bold hover:bg-red-400 hover:text-white rounded-md  transition-all w-1/2"
                onClick={handleDelete}>
                    Eliminar
                </button>
            </div>
        </div>
    )
}

export default Pacientes
