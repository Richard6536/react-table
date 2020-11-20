import React from 'react'
import { Link } from 'react-router-dom'

export const TableDataContent = ( {us, handleDelete } ) => {

    return ( 
        <tr>
           <td className="text-center"> { us.Nombre } </td>
           <td className="text-center"> { us.Apellido } </td>
           <td className="text-center"> { us.NombreUsuario } </td>
           <td className="text-center">
               <Link to={`./edit/${ us.Id }`} className="btn btn-success mr-2 animate__animated animate__flipInX"><i className="fas fa-edit"></i></Link>
               <button className="btn btn-danger animate__animated animate__flipInX"
                    onClick={ () => handleDelete( us.Id ) }><i className="fas fa-trash-alt"></i></button>
           </td>
       </tr>)
}