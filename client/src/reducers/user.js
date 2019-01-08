export default function(state={}, action) {
    switch(action.type) {
        case 'DO_LOGIN' : 
            return {
                ...state,
                login : action.payload
            }
        
        case 'AUTH_USER':
            return {
                ...state,
                login : action.payload
            }

        default : 
            return state;
    }
}