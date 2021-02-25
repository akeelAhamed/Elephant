<?php

namespace App\Exceptions;

use Exception;
use Illuminate\Foundation\Exceptions\Handler as ExceptionHandler;

class Handler extends ExceptionHandler
{
    /**
     * A list of the exception types that are not reported.
     *
     * @var array
     */
    protected $dontReport = [
        //
    ];

    /**
     * A list of the inputs that are never flashed for validation exceptions.
     *
     * @var array
     */
    protected $dontFlash = [
        'password',
        'password_confirmation',
    ];

    /**
     * Register the exception handling callbacks for the application.
     *
     * @return void
     */
    public function register()
    {
        $this->renderable(function (Exception $e, $request) {
            // && $request->wantsJson()
            if($request->is('api/*')){
                return $this->_apiResponse($e);
            }
        });
    }

    /**
     * Get api response
     *
     * @param object $exception
     * @return void
     */
    private function _apiResponse($exception)
    {
        if (method_exists($exception, 'getStatusCode')) {
            $statusCode = $exception->getStatusCode();
        } else {
            $statusCode = 500;
        }

        $response = [];

        switch ($statusCode) {
            case 401:
                $response['response'] = 'Unauthorized';
                break;
            case 403:
                $response['response'] = 'Forbidden';
                break;
            case 404:
                $response['response'] = 'Not Found';
                break;
            case 405:
                $response['response'] = 'Method Not Allowed';
                break;
            default:
                $response['response'] = ($statusCode == 500) ? 'Whoops, looks like something went wrong' : $exception->getresponse();
                break;
        }

        if (config('app.debug')) {
            $response['trace'] = $exception->getTrace();
            $response['code'] = $exception->getCode();
        }

        $response['status'] = false;

        return response()->json($response, $statusCode);
    }
}