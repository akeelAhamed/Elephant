<?php

namespace App\Http\Middleware;

use App\Http\Controllers\Controller;
use Closure;
use Illuminate\Http\Request;

class Rest
{
    /**
     * Handle an incoming request.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \Closure  $next
     * @return mixed
     */
    public function handle(Request $request, Closure $next)
    {
        $key = $request->header('authorization');
        $origin = $request->header('origin');
        $response = new Controller($request);
        //$key !== null && $origin !== null
        if(true){
            return $next($request);
        }
        return $response->response('Access denied');
    }
}
