<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class UpdateUserTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::table('users', function(Blueprint $table){
            $table->string('username', 32)->after('id')->nullable()->unique();
            $table->string('avatar', 150)->after('password')->nullable();
            $table->string('cover', 150)->after('avatar')->nullable();
            $table->string('gender', 50)->after('cover')->nullable();
            $table->date('dob')->after('gender')->nullable();
            $table->tinyInteger('is_private')->default(0)->after('dob');
            $table->tinyInteger('is_verified')->default(0)->after('is_private');
            $table->string('utype', 50)->default(\App\Models\User::TYPES[1])->after('is_verified');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        //
    }
}
