<?php

namespace App\Http\Controllers;

use Illuminate\Foundation\Auth\Access\AuthorizesRequests;
use Illuminate\Foundation\Bus\DispatchesJobs;
use Illuminate\Foundation\Validation\ValidatesRequests;
use Illuminate\Routing\Controller as BaseController;
use App\Http\Controllers\Helper\Validate;
use Illuminate\Http\Request;

class Controller extends BaseController
{
    use AuthorizesRequests, DispatchesJobs, ValidatesRequests;

    /**
     * Default language
     *
     * @var string
     */
    public $_dLang = 'en';

    /**
     * Default paginate limit
     *
     * @var int
     */
    public $paginate = 50;
    
    /**
     * Global Request object
     *
     * @var Request
     */
    public $request;

    /**
     * Global validator object
     *
     * @var Validate
     */
    public $validate;

    /**
     * Global user
     *
     * @var null|object
     */
    public $user = null;

    public function __construct(Request $request)
    {
        $this->request = $request;
        $this->validate = new Validate($request);
    }

    /**
     * Get loggedin user 
     *
     * @param Request $request
     * @return void
     */
    public function getUser(Request $request)
    {
        $this->user = $this->user == null?$request->user():$this->user;
        return $this->user;
    }

    /**
     * Upload file to server
     * 
     * @param object $file File name in request
     * @param string $path Move path
     * @param string $name Rename to
     * 
     */
    public function uploadFile($file, $path='post', $name=''){
        $name = $name == ''?$file->getClientOriginalName():$name;
        $name = preg_replace('/[^A-Za-z0-9\-]/', '-', $name);
        $name = \str_replace(' ', '_', $name);
        $name = 'MED_'.\time().$name.'.'.$file->getClientOriginalExtension();
        $file->move($path, $name);
        $file = $path.'/'.$name;
        return asset($file);
    }

    /**
     * Send response as json and endpoint to ajax
     *
     * @param mixed   $message
     * @param boolean $status
     * @return object
     */
    public function response($message=['Something went wrong'], bool $status = false, int $code = 200):object
    {
        $message = $status || is_array($message)?$message:[$message];
        $return = ['status' => $status, 'data'=>$message];
        return response()->json($return, $code);
    }
}
