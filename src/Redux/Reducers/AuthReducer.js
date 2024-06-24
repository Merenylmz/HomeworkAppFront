
const initialState = {
    isAdmin: false,
    token: null,
    isAuth: false
};

const AuthReducer = (state = initialState, action) => {
    switch (action.type) {
        case "LOGIN":
            return {...state,
                isAdmin: action.payload.isAdmin,
                token: action.payload.token,
                isAuth: action.payload.isAuth
            }            
        case "LOGOUT": 
            return state = initialState;
        default:
            return state;
    }
};

export default AuthReducer;
