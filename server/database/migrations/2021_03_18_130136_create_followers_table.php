<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateFollowersTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('followers', function (Blueprint $table) {
            $table->id();
            $table->bigInteger('user_id');//follower_id
            $table->bigInteger('friend_id');//following_id
            $table->tinyInteger('is_typing')->default(0);
            $table->tinyInteger('active')->default(0);
            $table->tinyInteger('notify')->default(0);
            $table->status($table);
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('followers');
    }
}
