import SecureLS from "secure-ls";
import Axios from "axios";
import { combineReducers } from "redux";
import { AUTH_LOGIN, PREF_LANG, PREF_THEME, IS_LOADED } from "../action/types";
import Auth from "../../_services/Auth";
import Preference from "../../_services/Preference";

window.window._axios = Axios;
//window._axios.defaults.baseURL = 'http://ambaji.legalkarlo.com/stock/server/public/app';
window._axios.defaults.baseURL = 'http://localhost/stock-analayis/elephant/server/public/app';
window._axios.defaults.headers.common['Content-Type'] = 'application/json';
window._axios.defaults.headers.common['X-Auth-Token'] = 'eDhrtu744$6kmjoplp-kcvnyjy';
window._ls = new SecureLS({isCompression: false, encryptionSecret: 'eDhrtu744$6kmjoplp-kcvnyjy'});
const auth = Auth.isLoggedIn(true);

const initialState = {
    auth: {
        login : auth !== '',
        data  : auth
    },
    preference: {
        isLoaded: false,
        dark : Preference.getTheme(),
        lang : Preference.getLang(),
        mobile : window.innerWidth <= 768
    }
}

export const reducerLogin = (state = initialState, action) => {
    switch (action.type) {
        case AUTH_LOGIN:
            (action.data !== null)?Auth.login(action.data):Auth.logout();
            state = {
                ...state,
                login: action.data !== null,
                data : action.data
            }
        break;
    
        default: state = state.auth === undefined?state:state.auth;
    }

    return state;
}

export const reducerPref = (state = initialState, action) => {
    switch (action.type) {
        case PREF_THEME:
            state = {
                ...state,
                dark: action.data
            }
            break;

        case PREF_LANG:
            state = {
                ...state,
                lang: action.data
            }
            break;

        case IS_LOADED:
            state = {
                ...state,
                isLoaded: action.data
            }
            break;
    
        default: state = state.preference === undefined?state:state.preference;
    }
    return state;
}

const reducer = combineReducers({
    _auth: reducerLogin,
    _pref: reducerPref
});

export default reducer;