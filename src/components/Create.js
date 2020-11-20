import React, { useEffect, useState } from 'react'
import TextField from '@material-ui/core/TextField';
import MenuItem from '@material-ui/core/MenuItem';
import { useForm } from '../hook/useForm';
import '../styles/create.css';
import { crearUsuario } from '../actions/usuarios';

export const Create = () => {

    const roles = [
        {
          value: '2',
          label: 'Administrador',
        }
      ];


    const [usRol, setUsRol] = useState(2);

    const [{nombreUsuario="", nombre="", apellido="", rol="0", correo="", password=""}, setValues, 
        [nombreUsuarioValidation, nombreValidation, apellidoValidation, rolValidation, correoValidation, passwordValidation],
        setAllInputError, handleInputChange] = useForm();

    const handleSubmit = ( e ) => {
        e.preventDefault();
    
        const valid = validForm();
        if(valid){
            crearUsuario(nombreUsuario, nombre, apellido, rol, correo, password).then(result => {
                
            });
        }
    }

    const validForm = () => {

        if(nombreUsuario === '')
            return false;
        else if(nombre === '')
            return false;
        else if(apellido === '')
            return false;
        else if(rol === '')
            return false;
        else if(correo === '')
            return false;
        else if(password === '')
            return false;

        return true;
    }

    return (
        <div className="animate__animated animate__fadeIn">
            <form onSubmit={ handleSubmit }>
                <div className="card">
                    <div className="card-header text-white bg-dark mb-3">
                        CREAR USUARIO
                    </div>
                    <div className="card-body">

                        <div className="form-row">

                            <div className="col">
                                <TextField 
                                    error={ nombreUsuarioValidation.name === 'nombreUsuario' && nombreUsuarioValidation.error } 
                                    helperText={ nombreUsuarioValidation.name === 'nombreUsuario' && nombreUsuarioValidation.helperText } 
                                    label="Nombre de Usuario" variant="outlined"
                                    fullWidth  name="nombreUsuario" autoComplete="off" onChange={ handleInputChange } />
                            </div>

                            <div className="col">
                            <TextField 
                                error={ nombreValidation.name === 'nombre' && nombreValidation.error } 
                                helperText={ nombreValidation.name === 'nombre' && nombreValidation.helperText } 
                                label="Nombre" variant="outlined"
                                fullWidth name="nombre" autoComplete="off" onChange={ handleInputChange }/>
                            </div>

                            <div className="col">
                            <TextField
                                error={ apellidoValidation.name === 'apellido' && apellidoValidation.error } 
                                helperText={ apellidoValidation.name === 'apellido' && apellidoValidation.helperText } 
                                label="Apellido" variant="outlined" 
                                fullWidth name="apellido" autoComplete="off" onChange={ handleInputChange }/>
                            </div>
                        </div>

                        <div className="form-row mt-3">

                            <div className="col">
                            <TextField 
                                error={ correoValidation.name === 'correo' && correoValidation.error } 
                                helperText={ correoValidation.name === 'correo' && correoValidation.helperText } 
                                label="Correo" variant="outlined" 
                                fullWidth name="correo" autoComplete="off" onChange={ handleInputChange } />
                            </div>

                            <div className="col">
                            <TextField 
                                error={ passwordValidation.name === 'password' && passwordValidation.error } 
                                helperText={ passwordValidation.name === 'password' && passwordValidation.helperText } 
                                label="Contraseña" variant="outlined"  type="Password"
                                fullWidth name="password" autoComplete="off" onChange={ handleInputChange } />
                            </div>
                            <div className="col">
                            <TextField
                                error={ rolValidation.name === 'rol' && rolValidation.error } 
                                helperText={ rolValidation.name === 'rol' && rolValidation.helperText } 
                                select
                                fullWidth
                                label="Rol del Sistema"
                                value={ usRol }
                                name="rol"
                                onChange={ handleInputChange }
                                helperText="Selecciona un Rol"
                                variant="outlined"
                                >
                                {roles.map((option) => (
                                    <MenuItem key={option.value} value={option.value}>
                                    {option.label}
                                    </MenuItem>
                                ))}
                            </TextField>
                            </div>

                        </div>
                    </div>
                    <div className="card-footer text-center">
                    <button type="submit" className="btn btn-primary animate__animated animate__flipInX">CREAR USUARIO</button>
                    </div>
                    
                </div>
            </form>

            <div className="card mt-3">
            <div className="card-header text-white bg-dark mb-3">
                DATOS USUARIO (TEST)
            </div>
            <div className="card-body">
                <div className="row ml-2">
                    <div className="mr-5">
                        <label>Nombre Usuario: </label><br/>
                        <label>Nombre Completo: </label><br/>
                        <label>Nombre: </label><br/>
                        <label>Apellido: </label><br/>
                        <label>Rol: </label><br/>
                        <label>Correo: </label><br/>
                        <label>Contraseña: </label>
                    </div>
                    <div>
                        <label> { nombreUsuario } </label><br/>
                        <label> { nombre } { apellido } </label><br/>
                        <label> { nombre } </label><br/>
                        <label> { apellido } </label><br/>
                        <label> { rol } </label><br/>
                        <label> { correo } </label><br/>
                        <label> { password } </label>
                    </div>
                </div>
            </div>
            </div>
        </div>
    )
}
