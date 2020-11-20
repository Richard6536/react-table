import { useState } from "react"

//Hook para Input. Recibe un valor y actu
export const useForm = ( initialState = {} ) => {
    
    const initValidationInput = [
        { helperText: '', error: false, name:'nombreUsuario' },
        { helperText: '', error: false, name:'nombre' },
        { helperText: '', error: false, name:'apellido' },
        { helperText: '', error: false, name:'rol' },
        { helperText: '', error: false, name:'correo' },
        { helperText: '', error: false, name:'password' },
    ];

    const [values, setValues] = useState(initialState);
    const [validationInput, setvalidationInput] = useState(initValidationInput);
    const reset = () => {
        setValues( initialState );
    }

    const cambiarColorInput = (target) => {
        const [val] = validationInput.filter( (inp) => inp.name === target.name );
        if(target.value === '' && val.error === false){

            val.helperText = 'Este campo es requerido';
            val.error = !val.error;
        }
        else if(target.value !== '' && val.error !== false){

            val.helperText = '';
            val.error = !val.error;
        }
    }
    
    const setAllInputError = () => {

        validationInput.map((vi) => {
            vi.error = true;
            vi.helperText = 'Este campo es requerido';
        });

        setvalidationInput(validationInput);

    }

    const handleInputChange = ({ target }) => {

        cambiarColorInput( target );

        setValues({
            ...values,
            [ target.name ]: target.value
        });
    }

    return [values, setValues, validationInput, setAllInputError, handleInputChange, reset];

}