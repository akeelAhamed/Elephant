<?php

namespace App\Providers;

use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;
use Illuminate\Support\ServiceProvider;

class AppServiceProvider extends ServiceProvider
{
    /**
     * Register any application services.
     *
     * @return void
     */
    public function register()
    {
        
    }

    /**
     * Bootstrap any application services.
     *
     * @return void
     */
    public function boot()
    {
        Schema::defaultStringLength(190);

        // Status blueprint

        Blueprint::macro('status', function(Blueprint $table, $status=1){
            $table->text('option')->nullable();
            $table->tinyInteger('status')->default($status);
            $table->integer('time')->default(0);
        });
    }
}
