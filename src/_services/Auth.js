export default class Auth{

    /**
     * Auth storage key
     */
    static AUTH = '__AUTHTOKEN';

    /**
     * Is logged in
     * 
     * @param {boolean} ret
     */
    static isLoggedIn(ret=false){
        let user = window._ls.get(this.AUTH);
        return !ret?user === "":user;
    }

    /**
     * Do login
     * 
     * @param {string} token 
     * @param {string} token 
     */
    static login(token, after=""){
        after = after===""?'dashboard':after;
        window._ls.set(this.AUTH, token);
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