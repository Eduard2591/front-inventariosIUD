import { axiosConfig } from "../configuration/axiosConfig"

//obtener todos los equipos

const obtenerTiposEquipos = ( estado = true) => {
    return axiosConfig.get('tipoequipos?estado='+estado, {
        headers: {
            'Content-type': 'application/json'
        }
    })
}

// crear tipo de quipo
const crearTipoEquipo = (data) =>{
    return axiosConfig.post('tipoequipos', data, {
        headers: {
            'Content-type': 'application/json'
        }
    })
}

// editar tipo de quipo por ID
const editarTipoEquipoPorID = (tipoId, data) =>{
    return axiosConfig.put ('tipoequipos/'+tipoId, data, {
        headers: {
            'Content-type': 'application/json'
        }
    })
}

// Borrar tipo de quipo por ID
const borrarTipoEquipoPorID = (tipoId) =>{
    return axiosConfig.delete ('tipoequipos/'+tipoId, {}, {
        headers: {
            'Content-type': 'application/json'
        }
    })
}

// consulta tipo de quipo por ID
const obternerTipoEquipoPorID = (tipoId) =>{
    return axiosConfig.get ('tipoequipos/'+tipoId, {
        headers: {
            'Content-type': 'application/json'
        }
    })
}

export {
    obtenerTiposEquipos,
    crearTipoEquipo,
    editarTipoEquipoPorID,
    borrarTipoEquipoPorID,
    obternerTipoEquipoPorID

}