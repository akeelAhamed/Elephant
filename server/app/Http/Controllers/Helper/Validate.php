<?php

namespace App\Http\Controllers\Helper;

use Illuminate\Support\Facades\Validator;
use Illuminate\Validation\Rule;

class Validate
{
    /**
     * Http request
     *
     * @var $request \Illuminate\Http\Response
     */
    private $request;

    /**
     * Input custome attribute
     *
     * @var array
     */
    private $attribute= [];

    /**
     * Validator rules
     *
     * @var array
     */
    private $rules    = [];

    /**
     * Custome error message
     *
     * @var array
     */
    private $message  = [];

    /**
     * Validator error
     *
     * @var array
     */
    public $errors    = [];

    /**
     * Module has status
     *
     * @var boolean
     */
    public $hasStatus = false;

    /**
     * Supply only inputs insted of $request->all
     *
     * @var boolean
     */
    public $hasInput  = false;

    /**
     * Return error bags in array
     *
     * @var boolean
     */
    public $isArray   = true;

    /**
     * Application resources status
     *
     * @var array
     */
    protected $status = [null, 0, 1, 2, 3];

    /**
     * Constructor for validator
     *
     * @param object $request
     */
    public function __construct($request)
    {
        $this->request = $request;
    }

    /**
     * Main validate method for validation
     * 
     * @return bool Status
     */
    public function validation()
    {
        if($this->hasStatus){
            $this->rules["status"] = ['required', Rule::in($this->status)];
        }
        
        $validator = Validator::make(
            ($this->hasInput)?$this->request:$this->request->all(),
            $this->rules,
            $this->message,
            $this->attribute
        );
        
        if ($validator->fails()) {
            $this->errors = ($this->isArray)?$validator->getMessageBag()->all():$validator->getMessageBag();
            return false;
        }

        return true;
    }

    /**
     * Validate method for login user
     * 
     * @return bool status
     */
    public function login()
    {
        $this->rules = [
            'email'     => ['required', 'email', 'max:150'],
            'password'  => ['required', 'string', 'min:8'],
            'remember_me'=> ['boolean']
        ];
        return $this->validation();
    }
    
    /**
     * Validate method for register user
     * 
     * @param int $id User id
     * 
     * @return bool status
     */
    public function register($id=null)
    {
        $this->attribute = [
            'first' => 'first name',
            'last' => 'last name',
            'pan' => 'pan number',
        ];

        $this->rules = [
            'username'  => ['required', 'alpha_dash', 'max:30', 'unique:users'],
            'first'   => ['required', 'string', 'max:100'],
            'last'   => ['required', 'string', 'max:100'],
            'pan'   => ['required', 'alpha_num', 'min:10', 'max:10', 'unique:users'],
            'email'  => ['required', 'email', 'max:150', 'unique:users'],
            'mobile' => ['required', 'numeric', 'digits:10', 'unique:users'],
            'password' => ['required', 'min:8']
        ];
        if(!is_null($id)){
            $this->rules['pan']   = ['required', 'digits:10', Rule::unique('users', 'email')->where('id', '!'.$id)];
            $this->rules['email']   = ['required', 'email', 'max:150', Rule::unique('users', 'email')->where('id', '!'.$id)];
            $this->rules['mobile'] = ['required', 'numeric', 'digits:10', Rule::unique('users', 'mobile')->where('id', '!'.$id)];
            unset($this->rules['password']);
        }
        return $this->validation();
    }

    /**
     * Update my password
     *
     * @return bool
     */
    public function updatePassword()
    {
        $this->rules = [
            'old_password' => ['required', 'string'],
            'password' => ['required', 'string', 'min:8', 'confirmed'],
        ];
        return $this->validation();
    }

    /**
     * Validate method for new post
     * 
     * @return bool status
     */
    public function post()
    {
        $this->rules = [
            'text'    => ['present', 'max:5000'],
            'images'  => ['array', 'max: 5'],
            'images.*'  => ['image', 'mimes:jpg,jpeg,png,gif', 'max:10800'],
        ];
        return $this->validation();
    }
}