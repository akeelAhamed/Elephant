import SecureLS from "secure-ls";
import Axios from "axios";
import { combineReducers } from "redux";
import { AUTH_LOGIN, PREF_LANG, PREF_THEME } from "../action/types";
import Auth from "../../_services/Auth";
import Preference from "../../_services/Preference";
import Helper from "../../_services/Helper";
import has from "lodash/has";

window.window._axios = Axios;
//window._axios.defaults.baseURL = 'http://ambaji.legalkarlo.com/stock/server/public/app';
window._axios.defaults.baseURL = 'http://localhost/stock-analayis/elephant/server/public/app';
window._axios.defaults.headers.common['Content-Type'] = 'application/json';
window._axios.defaults.headers.common['X-Auth-Token'] = 'eDhrtu744$6kmjoplp-kcvnyjy';
window._ls = new SecureLS({isCompression: false, encryptionSecret: 'eDhrtu744$6kmjoplp-kcvnyjy'});
const auth = Auth.isLoggedIn(true);

if(auth !== ""){
    window._axios.defaults.headers.common['Authorization'] = auth._token;
    const helper = new Helper();
    helper.api('/user', function(response) {
        if(has(response, 'message')){
            Auth.logout();
        }
    }, auth);
}

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

console.log(initialState);

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