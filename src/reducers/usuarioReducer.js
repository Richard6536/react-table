import { types } from "../types/types";

export const usuarioReducer = (state = {}, action) => {

    switch (action.type) {
        case types.usuarioListar:
            return {
                usList: action.payload
            }

        case types.logout:
            return {}

        default:
            return state;
    }
}