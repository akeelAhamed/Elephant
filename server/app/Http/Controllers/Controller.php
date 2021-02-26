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


    /* END OF GLOBAL SETTINGS */
    
    /**
     * Global validator object
     *
     * @var Validate
     */
    public $validate;

    public function __construct(Request $request)
    {
        $this->validate = new Validate($request);
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
        $message = is_array($message)?$message:[$message];
        $return = ['status' => $status, 'data'=>$message];
        return response()->json($return, $code);
    }
}
