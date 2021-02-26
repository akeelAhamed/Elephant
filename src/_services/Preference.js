import has from "lodash/has";
import LANG, { DEFAULT } from "../_lang";

export default class Preference{

    /**
     * Language storage key
     */
    static LANG = '__LANG';

    /**
     * Theme storage key
     */
    static THEME = '__THEME';

    /**
     * Set user language
     * 
     * @param {string} lang
     */
    static setLang(lang){
        lang = (has(LANG, lang))?lang:DEFAULT;
        //window._ls.set(this.LANG, lang);
        console.log(window._ls.set(this.LANG, lang));
        return lang
    }

    /**
     * Get language
     * 
     */
    static getLang(){
        let lang = window._ls.get(this.LANG);
        if(lang === ""){
            lang = this.setLang(DEFAULT);
        }else{
            lang = has(LANG, lang)?lang:this.setLang(DEFAULT);
        }
        return lang;
    }

    /**
     * Toggle theme
     */
    static setTheme(){
        return !this.getTheme()?window._ls.set(this.THEME, 'dark'):window._ls.remove(this.THEME);
    }

    /**
     * Get whether theme is dark
     */
    static getTheme(){
        let theme = window._ls.get(this.THEME);
        return theme !== "";
    }
}