import { Button, FormControl, IconButton, InputAdornment, InputLabel, makeStyles, OutlinedInput, Paper, TextField } from '@material-ui/core';
import MenuItem from '@material-ui/core/MenuItem';
import { useForm } from '../hook/useForm';

import React, { useState } from 'react'
import { crearUsuario } from '../actions/usuarios';
import { Visibility, VisibilityOff } from '@material-ui/icons';
import Swal from 'sweetalert2';

const useStyles = makeStyles(theme => ({
    pageContent: {
        margin: theme.spacing(5),
        padding: theme.spacing(3)
    }
}))


export const CrearUsuario = () => {

    const [valuesImp, setValuesImp] = useState({
        amount: '',
        password: '',
        weight: '',
        weightRange: '',
        showPassword: false,
      });

      //*********************PASSWORD
      const handleChange = (prop) => (event) => {
        setValuesImp({ ...valuesImp, [prop]: event.target.value });
      };
    
      const handleClickShowPassword = () => {
        setValuesImp({ ...valuesImp, showPassword: !valuesImp.showPassword });
      };
    
      const handleMouseDownPassword = (event) => {
        event.preventDefault();
      };
    //*********************PASSWORD

    const classes = useStyles();

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

            const newUser = {
                userId: new Date().getTime(),
                userName: nombreUsuario,
                "jobTitleName":"Developer",
                firstName: nombre,
                lastName: apellido,
                "preferredFullName":"Romin Irani",
                "employeeCode":"E1",
                "region":"CA",
                "phoneNumber":"408-1234567",
                emailAddress: correo
            };
            
            /*
            dispatch({
                type: 'add',
                payload: newUser
            });*/

            const usersData = JSON.parse(localStorage.getItem('todos'));
            const newData = [ newUser, ...usersData ];
            localStorage.setItem('todos', JSON.stringify( newData ))

            Swal.fire({
                icon: 'success',
                title: 'USUARIO CREADO',
                showConfirmButton: false,
                timer: 1500
              })

        }
        else{
            Swal.fire({
                icon: 'error',
                title: 'LOS CAMPOS SON OBLIGATORIOS.',
                text: 'Complete los campos para crear un usuario'
              })
        }

    }

    const validForm = () => {

        if(nombreUsuario === '')
            return false;
        else if(nombre === '')
            return false;
        else if(apellido === '')
            return false;
        else if(correo === '')
            return false;

        return true;
    }
    
    return (
        <div className="animate__animated animate__fadeIn">
            <Paper className={ classes.pageContent }>
                
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
                        <FormControl className={(classes.margin, classes.textField)} variant="outlined" fullWidth>
                            <InputLabel htmlFor="outlined-adornment-password">Contraseña</InputLabel>
                            <OutlinedInput
                                name="password" 
                                id="outlined-adornment-password"
                                type={valuesImp.showPassword ? 'text' : 'password'}
                                value={valuesImp.password}
                                onChange={handleChange('password')}
                                endAdornment={
                                <InputAdornment position="end">
                                    <IconButton
                                    aria-label="toggle password visibility"
                                    onClick={handleClickShowPassword}
                                    onMouseDown={handleMouseDownPassword}
                                    edge="end"
                                    >
                                    {valuesImp.showPassword ? <Visibility /> : <VisibilityOff />}
                                    </IconButton>
                                </InputAdornment>
                                }
                                labelWidth={70}
                            />
                        </FormControl>
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
                <div className="form-row mt-3">
                    
                    <div className="col text-center">
                        <Button variant="contained" color="primary" onClick={ handleSubmit }>
                        Crear Usuario
                        </Button>
                    </div>
                </div>

            </Paper>
        </div>
    )
}
