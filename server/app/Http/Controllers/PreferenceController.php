<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class PreferenceController extends Controller
{
    /**
     * Get locale
     *
     * @param Request $request
     * @param string $lang
     * @return void
     */
    public function locale(Request $request, $lang)
    {
        $lang = strtolower($lang);
        $public = public_path('lang');
        $available = array_map(
            'basename',
            glob($public.'/*', GLOB_ONLYDIR)
        );
        $mlang = include($public.DIRECTORY_SEPARATOR.$this->_dLang.DIRECTORY_SEPARATOR.'lang.php');
        
        $available = array_flip($available);
        if(isset($available[$lang])){
            $mlang = include($public.DIRECTORY_SEPARATOR.$lang.DIRECTORY_SEPARATOR.'lang.php');
            return $this->response($mlang, true);
        }

        return $this->response($mlang, true);
    }
}
