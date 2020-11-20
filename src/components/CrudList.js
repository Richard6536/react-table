import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { eliminarUsuario, obtenerUsuarios } from '../actions/usuarios';
import { TableDataContent } from './TableDataContent';
import '../styles/crudList.css';
import Swal from 'sweetalert2'

export const CrudList = () => {
   
    const [dataUsuarios, setDataUsuarios] = useState([]);
    
    useEffect(() => {
        obtenerUsuarios().then(imgs => {
            const myObject = JSON.parse(imgs);
            setDataUsuarios(myObject);
        });
    }, []);

    const handleDelete = ( id ) => { 
        
        const { Nombre, Apellido } = dataUsuarios.find((user) => {
            return user.Id === id;
          });

        Swal.fire({
            title: `¿Eliminar al Usuario ${ Nombre }  ${ Apellido }?`,
            text: "No podrás revertirlo.",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#d33',
            cancelButtonColor: '#3085d6',
            confirmButtonText: 'Sí, eliminarlo',
            cancelButtonText: 'Cancelar'
          }).then((result) => {
            
            if (result.isConfirmed) {

                eliminarUsuario( id ).then(resultData => {
                    if(resultData === 'ERROR'){
                        Swal.fire(
                            'Error',
                            'El Usuario no puede ser eliminado.',
                            'error')
                    }
                    else{
                        setDataUsuarios(dataUsuarios.filter( todo => todo.Id !== id));

                        Swal.fire(
                            'Eliminado',
                            'El Usuario ha sido eliminado de la Base de Datos.',
                            'success')
                    }

                });
            }
          })
    }
    
    return (
        <>
            <Link to="/create" className="btn btn-dark mb-2 animate__animated animate__flipInX">Crear Usuario</Link>
            <table className="table animate__animated animate__fadeIn">
                <thead className="thead-dark">
                    <tr>
                        <th className="text-center" scope="col">Nombre</th>
                        <th className="text-center" scope="col">Apellido</th>
                        <th className="text-center" scope="col">Nombre Usuario</th>
                        <th className="text-center" scope="col">Detalles</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        dataUsuarios.map( us => {
                            return <TableDataContent key={ us.Id } us = { us } handleDelete = { handleDelete } />
                        })
                    }
                </tbody>
            </table>
        </>
    )
}
