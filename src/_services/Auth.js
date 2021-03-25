import has from "lodash/has";

export default class Auth{

    /**
     * Auth storage key
     */
    static AUTH = '__AUTHTOKEN';

    /**
     * 
     * @param {object} data 
     */
    static updateAuth(data){
        window._ls.set(this.AUTH, data);
    }

    /**
     * Is logged in
     * 
     * @param {boolean} ret
     */
    static isLoggedIn(ret=false){
        let user = window._ls.get(this.AUTH);
        user = user === ""?"":has(user, "_token")?user:"";
        return !ret?user === "":user;
    }

    /**
     * Do login
     * 
     * @param {string} token 
     * @param {string} token 
     */
    static login(token, after=null){
        after = after === null?'dashboard':after;
        this.updateAuth(token);
        return (after === null)||(window.location.href = after);
    }

    /**
     * Logout user
     */
    static logout(){
        window._ls.remove(this.AUTH);
        window.location.href = '/';
    }
}