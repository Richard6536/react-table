
export const obtenerUsuarios = async() => {
     
    const url = `http://localhost:53021/api/React/ListaUsuarios`;
    const resp = await fetch( url );

    if(resp.ok){

        return resp.json();
    }
}

export const eliminarUsuario = async( id ) => {
    
    const url = `http://localhost:53021/api/React/EliminarUsuario/${encodeURI(id)}`;
    const resp = await fetch( url, { method: 'POST' } );

    if(resp.ok){
        return resp.json();
    }
    else{
        return 'ERROR';
    }
}

export const crearUsuario = async( NombreUsuario, Nombre, Apellido, Rol, Correo, Password ) => {

    const url = `http://localhost:53021/api/React/CrearUsuario`;

    const resp = await fetch( url, { method: 'POST',
        headers: {'Accept': 'application/json; charset=utf-8',
                    'Content-Type': 'application/json;charset=UTF-8'},
        mode: 'cors',
        body: JSON.stringify({ 'NombreUsuario': NombreUsuario, 'Nombre': Nombre,
        'Apellido': Apellido, 'Correo': Correo, 'Password': Password, 'Rol': Rol }) 
    });
    console.log(resp)
    if(resp.ok){
        return resp.json();
    }
    else{
        return 'ERROR';
    }
}

export const editarUsuario = async( id ) => {
    
    const url = `http://localhost:53021/api/React/EditarUsuario/${encodeURI(id)}`;
    const resp = await fetch( url );

    if(resp.ok){
        return resp.json();
    }
    else{
        return 'ERROR';
    }
}