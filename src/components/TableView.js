import { Button, InputAdornment, makeStyles, Paper, TableBody, TableCell, TableRow, Toolbar } from '@material-ui/core';
import { Search } from '@material-ui/icons';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import useTable from '../hook/useTable';
import Input from './controls/Input';

import DeleteIcon from '@material-ui/icons/Delete';
import Swal from 'sweetalert2';

const useStyles = makeStyles(theme => ({
    pageContent: {
        margin: theme.spacing(5),
        padding: theme.spacing(3)
    },
    searchInput: {
        width: '75%'
    }
}))

//Estado de inicio
//DATOS LOCALES PARA LA TABLA
const init = () => {
    return JSON.parse(localStorage.getItem('todos'))
     || [
        {
        "userId":"1",
        "userName":"Rominxx",
        "jobTitleName":"Developer",
        "firstName":"Romin",
        "lastName":"Irani",
        "preferredFullName":"Romin Irani",
        "employeeCode":"E1",
        "region":"CA",
        "phoneNumber":"408-1234567",
        "emailAddress":"romin.k.irani@gmail.com"
        },
        {
        "userId":"2",
        "userName":"NeilSnow",
        "jobTitleName":"Developer",
        "firstName":"Neil",
        "lastName":"Snowden",
        "preferredFullName":"Neil Irani",
        "employeeCode":"E2",
        "region":"CA",
        "phoneNumber":"408-1111111",
        "emailAddress":"neilrirani@gmail.com"
        },
        {
        "userId":"3",
        "userName":"TomHnk",
        "jobTitleName":"Program Directory",
        "firstName":"Tom",
        "lastName":"Hanks",
        "preferredFullName":"Tom Hanks",
        "employeeCode":"E3",
        "region":"CA",
        "phoneNumber":"408-2222222",
        "emailAddress":"tomhanks@gmail.com"
        },
        {
        "userId":"4",
        "userName":"Rmancilla",
        "jobTitleName":"Program Directory",
        "firstName":"Richard",
        "lastName":"Mancilla",
        "preferredFullName":"Tom Hanks",
        "employeeCode":"E3",
        "region":"CA",
        "phoneNumber":"656-2345436",
        "emailAddress":"richardmancilla@gmail.com"
        },
        {
        "userId":"5",
        "userName":"Felipin",
        "jobTitleName":"Program Directory",
        "firstName":"Felipe",
        "lastName":"Olivares",
        "preferredFullName":"Tom Hanks",
        "employeeCode":"E3",
        "region":"CA",
        "phoneNumber":"545-121414",
        "emailAddress":"felipeolivares@gmail.com"
        },
        {
        "userId":"6",
        "userName":"Oscarin",
        "jobTitleName":"Program Directory",
        "firstName":"Oscar",
        "lastName":"Cumian",
        "preferredFullName":"Tom Hanks",
        "employeeCode":"E3",
        "region":"CA",
        "phoneNumber":"545-235255325",
        "emailAddress":"oscarcumian@gmail.com"
        },
        {
        "userId":"7",
        "userName":"IrsHernan",
        "jobTitleName":"Program Directory",
        "firstName":"Iris",
        "lastName":"Hernandez",
        "preferredFullName":"Tom Hanks",
        "employeeCode":"E3",
        "region":"CA",
        "phoneNumber":"343-564646",
        "emailAddress":"irishernandez@gmail.com"
        },
        {
        "userId":"8",
        "userName":"FelipinMancilla",
        "jobTitleName":"Program Directory",
        "firstName":"Felipe",
        "lastName":"Mancilla",
        "preferredFullName":"Tom Hanks",
        "employeeCode":"E3",
        "region":"CA",
        "phoneNumber":"342-354355",
        "emailAddress":"felipemancilla@gmail.com"
        },
        {
        "userId":"9",
        "userName":"Seba",
        "jobTitleName":"Program Directory",
        "firstName":"Sebastian",
        "lastName":"Cardenas",
        "preferredFullName":"Tom Hanks",
        "employeeCode":"E3",
        "region":"CA",
        "phoneNumber":"334-5435355",
        "emailAddress":"sebastiancardenas@gmail.com"
        },
        {
        "userId":"10",
        "userName":"Mari",
        "jobTitleName":"Program Directory",
        "firstName":"Maria",
        "lastName":"Fica",
        "preferredFullName":"Tom Hanks",
        "employeeCode":"E3",
        "region":"CA",
        "phoneNumber":"334-234234",
        "emailAddress":"mariafica@gmail.com"
        },
        {
        "userId":"11",
        "userName":"Rafa",
        "jobTitleName":"Program Directory",
        "firstName":"Rafael",
        "lastName":"Aravena",
        "preferredFullName":"Tom Hanks",
        "employeeCode":"E3",
        "region":"CA",
        "phoneNumber":"878-67848",
        "emailAddress":"rafaelaravena@gmail.com"
        },
        {
        "userId":"12",
        "userName":"Marty",
        "jobTitleName":"Program Directory",
        "firstName":"Marta",
        "lastName":"Rupallan",
        "preferredFullName":"Tom Hanks",
        "employeeCode":"E3",
        "region":"CA",
        "phoneNumber":"424-346646",
        "emailAddress":"martarupallan@gmail.com"
        },
        {
        "userId":"13",
        "userName":"Pao",
        "jobTitleName":"Program Directory",
        "firstName":"Paola",
        "lastName":"Cruz",
        "preferredFullName":"Tom Hanks",
        "employeeCode":"E3",
        "region":"CA",
        "phoneNumber":"464-3463464",
        "emailAddress":"paolacruz@gmail.com"
        },
        {
        "userId":"14",
        "userName":"RafaOl",
        "jobTitleName":"Program Directory",
        "firstName":"Rafael",
        "lastName":"Olivares",
        "preferredFullName":"Tom Hanks",
        "employeeCode":"E3",
        "region":"CA",
        "phoneNumber":"324-6757567",
        "emailAddress":"rafaelolivares@gmail.com"
        },
        {
        "userId":"15",
        "userName":"Sebatello",
        "jobTitleName":"Program Directory",
        "firstName":"Sebastian",
        "lastName":"Tello",
        "preferredFullName":"Tom Hanks",
        "employeeCode":"E3",
        "region":"CA",
        "phoneNumber":"099-1112122",
        "emailAddress":"sebastiantello@gmail.com"
        }]; //Si localStorage es null, retorna vacío.
}


//HEAD DE LA TABLA
const headCells = [
    { id: 'userName', label: 'Nombre de Usuario' },
    { id: 'firstName', label: 'Nombre' },
    { id: 'lastName', label: 'Apellido' },
    { id: 'emailAddress', label: 'Email' },
    { id: '', label: '' }

]

export const TableView = () => {

    const classes = useStyles();

    //useReducer para los datos locales
    //const [ usersData, dispatch ] = useReducer(userReducer, [], init);

    const [pageSearch, setPageSearch] = useState(false)
    
    //USESTATE DE LOS DATOS DE LA TABLA
    const [employees, setEmployees] = useState(init);
    
    //USESTATE PARA EL FILTRO (SE ENVIA COMO PROP AL USETABLE)
    const [filterFn, setFilterFn] = useState({ fn: items => { return [items, {searching: false}]; }});

    //PROPS DEL USETABLE. PROPS: TableData, Headers, Filtro (OPCIONAL)
    const { TblContainer, TblHead, TblPagination, recordsAfterPagingAndSorting, setPage } = useTable(employees, headCells, filterFn);
    
    useEffect( () => {
        //setPage(0);
        localStorage.setItem('todos', JSON.stringify( employees ))
    }, [ employees ]);

    useEffect( () => {
        setPage(0);
    }, [ pageSearch ]);

    //FUNCION PARA FILTRAR
    const handleSearch = ( e ) => {

        let target = e.target;
        if(target.value === ''){
            setPageSearch(false);
        }
        else
        {
            setPageSearch(true);
        }

        setFilterFn({
            fn:items => {

                if(target.value === ''){
                    const arr = [items, {searching: false}];
                    return arr;
                }
                else{
             
                    const filt1 = items.filter(x => x.userName.toLowerCase().includes(target.value));
                    const filt2 = items.filter(x => x.firstName.toLowerCase().includes(target.value));
                    const filt3 = items.filter(x => x.lastName.toLowerCase().includes(target.value));
                    const filt4 = items.filter(x => x.emailAddress.toLowerCase().includes(target.value));
                    
                    var filter1 = filt1.concat(filt2.filter((item) => filt1.indexOf(item) < 0));
                    var filter2 = filter1.concat(filt3.filter((item) => filter1.indexOf(item) < 0));
                    var filter3 = filter2.concat(filt4.filter((item) => filter2.indexOf(item) < 0));

                    const arr = [filter3, {searching: true}];

                    return arr;
                }

            }
        });
    }

    const handleDelete = ( id ) => {

        const e = employees.filter( todo => todo.userId !== id);
        setEmployees(e);

        Swal.fire({
            icon: 'success',
            title: 'Eliminado',
            showConfirmButton: false,
            timer: 1500
          })
    }

    //TABLA
    //EL INPUT SEARCH ESTÁ SIENDO IMPORTADO DESDE INPUT.JS
    return (
        <div className="animate__animated animate__fadeIn">

            <Paper className={ classes.pageContent }>
                <Toolbar>
                        <Input
                            label="Buscar Usuarios"
                            id="inpSearch"
                            className={classes.searchInput}
                            InputProps={{
                                startAdornment: (<InputAdornment position="start">
                                    <Search />
                                </InputAdornment>)
                            }}
                            onChange={handleSearch}
                        />

                        <Button className="ml-5" component={Link} to="/crearUsuario" variant="outlined" color="primary">
                            Crear Usuario
                        </Button>

                    </Toolbar>
                <TblContainer>
                    <TblHead />
                    <TableBody>
                        {
                            recordsAfterPagingAndSorting().map(item => (
                                <TableRow key={ item.userId } >
                                    <TableCell> { item.userName } </TableCell>
                                    <TableCell> { item.firstName } </TableCell>
                                    <TableCell> { item.lastName } </TableCell>
                                    <TableCell> { item.emailAddress } </TableCell>
                                    <TableCell> 
                                        <Button
                                            variant="contained"
                                            color="secondary"
                                            className={classes.button}
                                            startIcon={<DeleteIcon />}
                                            onClick={ () => handleDelete( item.userId ) }>
                                            Eliminar
                                        </Button>
                                    </TableCell>
                                </TableRow>
                            ))
                        }
                    </TableBody>
                </TblContainer>
                <TblPagination />

            </Paper>
        </div>

    )
}
