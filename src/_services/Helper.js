import React from "react";
import each from "lodash/each";
import has from "lodash/has";
import Alert from '@material-ui/lab/Alert';
import AlertTitle from '@material-ui/lab/AlertTitle';

export default class Helper extends React.Component{

    constructor(){
        super();
        this.var = {
            disabled: false,
            errors  : []
        }
    }

    /**
     * Generate url
     * 
     * @param {string} page 
     */
    url(page=''){
        return window.location.origin+'/'+page;
    }

    /**
     * Handle on change form event
     * 
     * @param object event 
     */
    onChange(event){
        const {name, value} = event.target;
        let name2 = name.split('.');
        if(name2.length === 2){
            if(name2[1].toLowerCase() === 'phone' && value.length > 10){
                return false;
            }
            return this.setState({
                [name2[0]]:{
                ...this.state[name2[0]],
                [name2[1]]: value
                }
            })
        }
        if(name.toLowerCase() === 'phone' && value.length > 10){
            return false;
        }
        return this.setState({[name]: value});
    }
    
    /**
     * Handle on submit form event
     * 
     * @param object event 
     */
    onSubmit(event, data={}, callback=null){
        event.preventDefault();
        console.log(event.target.dataset);
        if(has(event.target.dataset, 'action') && has(event.target.dataset, 'method')){
            return this.api(data, callback, event.target.dataset.action,event.target.dataset.method);
        }
    }

    api(data={}, callback=null, action="/", method="post"){
        window._axios({
            method: method,
            url: action,
            data: data
        }).then((response) => {
            if(typeof callback === "function"){
                return callback(response.data);
            }
        }, (error) => {
            if(typeof callback === "function"){
                //return callback(error.response);
            }
            console.log(error.response);
        });
    }

    /**
     * Return pre page, eg: spinner/notfound
     */
    prePage(){
        if(this.pageContent === null){
            return (
                <div className='center'>
                loading...
                </div>
            )
        }else if(this.pageContent === true){
            return (
                <p>Not found</p>
            )
        }
    }

    /**
     * Set error state
     * 
     * @param {array|object} errors 
     */
    setError(errors=[]){
        let error = [];
        
        this.var.errors = error;
    }

    /**
     * Get error message
     */
    getNotification(data=[], variant="error"){
        if(data.length !== 0){
            let errors = [];
            each(data, (val, i) => {
                errors.push(<li key={i}>{val}</li>);
            })
            return(
                <Alert
                    severity={variant}
                >
                    <AlertTitle>{(variant === "error")?"Error":"Notification"}</AlertTitle>
                    <ul>{errors}</ul>
                </Alert>
            )
        }
    }
  
    /**
     * Redirect to url
     * 
     * @param {string} page 
     */
    redirect(page=''){
        return this.props.history.push('/'+page);
    }

    /**
     * Go to back page
     * @param {object} e 
     */
    back(e=null){
        e===null||e.preventDefault();
        window.history.go(-1);
        return false;
    }
}