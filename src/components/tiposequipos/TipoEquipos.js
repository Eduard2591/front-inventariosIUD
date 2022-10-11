import React, { useEffect } from 'react'
import { obtenerTiposEquipos } from '../../services/TipoEquipoServices'

export default function TipoEquipos() {

  const listTipoEquipos = async () => {
    const { data } = await obtenerTiposEquipos(false)
    console.log( data );
  }

  useEffect(() => {
    listTipoEquipos()
  }, [])

  return (
    <div>TipoEquipos</div>
  )
}
