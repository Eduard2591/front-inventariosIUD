import React from 'react'
import notfound from './notfound.jpg'

export default function NotFound() {
  return (
    <div>
        <h2>Pagina no Encontrada</h2>
        <img 
            className='figure img img-fluid d-block'
            alt=''
            src={notfound}
        />
    </div>
  )
}
