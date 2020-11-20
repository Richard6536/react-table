import React, { useEffect } from 'react'
import TextField from '@material-ui/core/TextField';
import { useForm } from '../hook/useForm';
import '../styles/create.css';
import { editarUsuario } from '../actions/usuarios';
import { useParams } from 'react-router-dom';

export const Edit = () => {

    const { id } = useParams();

    const [formvalues, setValues, validationInput, setAllInputError, handleInputChange] = useForm();
    const {nombreUsuario="", nombre="", apellido="", rol="", correo="", password=""} = formvalues;
    const [nombreUsuarioValidation, nombreValidation, apellidoValidation, rolValidation, correoValidation, passwordValidation] = validationInput;

    useEffect(() => {
        editarUsuario(id).then(usr => {
            const {NombreUsuario, Nombre, Apellido, RolEnSistema, Email} = JSON.parse(usr);
            setValues({nombreUsuario: NombreUsuario, nombre: Nombre, apellido: Apellido, rol: RolEnSistema, correo: Email});
        });
    }, []);

    const handleSubmit = ( e ) => {
        e.preventDefault();
    
        const valid = validForm();
        if(valid){

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
                        EDITAR USUARIO
                    </div>
                    <div className="card-body">

                        <div className="form-row">

                            <div className="col">
                                <TextField 
                                    error={ nombreUsuarioValidation.name === 'nombreUsuario' && nombreUsuarioValidation.error } 
                                    helperText={ nombreUsuarioValidation.name === 'nombreUsuario' && nombreUsuarioValidation.helperText } 
                                    id="outlined-basic" label="Nombre de Usuario" variant="outlined" value={ nombreUsuario }
                                    fullWidth  name="nombreUsuario" autoComplete="off" onChange={ handleInputChange } />
                            </div>

                            <div className="col">
                            <TextField 
                                error={ nombreValidation.name === 'nombre' && nombreValidation.error } 
                                helperText={ nombreValidation.name === 'nombre' && nombreValidation.helperText } 
                                id="outlined-basic" label="Nombre" variant="outlined" value={ nombre }
                                fullWidth name="nombre" autoComplete="off" onChange={ handleInputChange }/>
                            </div>

                            <div className="col">
                            <TextField
                                error={ apellidoValidation.name === 'apellido' && apellidoValidation.error } 
                                helperText={ apellidoValidation.name === 'apellido' && apellidoValidation.helperText } 
                                id="outlined-basic" label="Apellido" variant="outlined" value={ apellido } 
                                fullWidth name="apellido" autoComplete="off" onChange={ handleInputChange }/>
                            </div>
                        </div>

                        <div className="form-row mt-3">

                            <div className="col">
                            <TextField 
                                error={ rolValidation.name === 'rol' && rolValidation.error } 
                                helperText={ rolValidation.name === 'rol' && rolValidation.helperText } 
                                id="outlined-basic" label="Rol" variant="outlined" value={ rol } 
                                fullWidth name="rol" autoComplete="off" onChange={ handleInputChange } />
                            </div>

                            <div className="col">
                            <TextField 
                                error={ correoValidation.name === 'correo' && correoValidation.error } 
                                helperText={ correoValidation.name === 'correo' && correoValidation.helperText } 
                                id="outlined-basic" label="Correo" variant="outlined" value={ correo } 
                                fullWidth name="correo" autoComplete="off" onChange={ handleInputChange } />
                            </div>

                            <div className="col">
                            <TextField 
                                error={ passwordValidation.name === 'password' && passwordValidation.error } 
                                helperText={ passwordValidation.name === 'password' && passwordValidation.helperText } 
                                id="outlined-basic" label="Contraseña" variant="outlined" 
                                fullWidth name="password" autoComplete="off" onChange={ handleInputChange } />
                            </div>

                        </div>
                    </div>
                    <div className="card-footer text-center">
                    <button type="submit" className="btn btn-primary animate__animated animate__flipInX">EDITAR USUARIO</button>
                    </div>
                    
                </div>
            </form>
        </div>
    )
}
