<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\{User};

class SearchController extends Controller
{
    /**
     * All search base method
     *
     * @param Request $request
     * @param string $type
     * @return void
     */
    public function index(Request $request, $type)
    {
        if ($this->request->has('payload') && \method_exists($this, $type)) {
            $this->user = $this->getUser($request);
            return $this->{$type}();
        }

        return $this->response();
    }

    /**
     * Search friends
     *
     * @return void
     */
    public function friends()
    {
        $rows = User::where('id', '!=', $this->user->id)
            ->whereRaw('(
                username LIKE "%'.$this->request->payload.'%" OR 
                fname LIKE "%'.$this->request->payload.'%" OR 
                lname LIKE "%'.$this->request->payload.'%" OR 
                email LIKE "%'.$this->request->payload.'%" OR 
                email LIKE "%'.$this->request->payload.'%" 
            )')
            ->paginate($this->paginate);
        return $this->response($rows, count($rows) > 0);
    }
}
