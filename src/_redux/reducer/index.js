import SecureLS from "secure-ls";
import Axios from "axios";
import { combineReducers } from "redux";
import { AUTH_LOGIN, PREF_LANG, PREF_THEME } from "../action/types";
import Auth from "../../_services/Auth";
import Preference from "../../_services/Preference";

window.window._axios = Axios;
window._axios.defaults.baseURL = 'http://ambaji.legalkarlo.com/stock/server/public/app';
window._axios.defaults.headers.common['Content-Type'] = 'application/json';
window._axios.defaults.headers.common['Authorization'] = 'eDhrtu744$6kmjoplp-kcvnyjy';

window._ls = new SecureLS({isCompression: false, encryptionSecret: 'eDhrtu744$6kmjoplp-kcvnyjy'});

const auth = Auth.isLoggedIn(true);

const initialState = {
    auth: {
        login : auth !== '',
        data  : auth
    },
    preference: {
        dark : Preference.getTheme(),
        lang : Preference.getLang(),
        mobile : window.innerWidth <= 768
    }
}

export const reducerLogin = (state = initialState, action) => {
    switch (action.type) {
        case AUTH_LOGIN:
            (action.data !== null)?Auth.login(action.data):Auth.logout();
            return {
                ...state,
                // and update the copy with the new value
                auth: {
                    ...state.auth,
                    login: action.data !== null,
                    data : action.data
                }
            }
    
        default: return state;
    }
}

export const reducerPref = (state = initialState, action) => {
    switch (action.type) {
        case PREF_THEME:
            return {
                ...state,
                // and update the copy with the new value
                preference: {
                    ...state.preference,
                    dark: action.data
                }
            }

        case PREF_LANG:
            return {
                ...state,
                // and update the copy with the new value
                preference: {
                    ...state.preference,
                    lang: action.data
                }
            }
    
        default: return state;
    }
}

const reducer = combineReducers({
    _auth: reducerLogin,
    _pref: reducerPref
});

export default reducer;