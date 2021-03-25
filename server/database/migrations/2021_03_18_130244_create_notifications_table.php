<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateNotificationsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('notifications', function (Blueprint $table) {
            $table->id();
            $table->bigInteger('user_id');//notifier_id
            $table->bigInteger('friend_id')->default(0);//recipient_id
            $table->bigInteger('post_id')->default(0);
            $table->bigInteger('reply_id')->default(0);
            $table->bigInteger('comment_id')->default(0);
            $table->bigInteger('story_id')->default(0);
            $table->string('type', 100)->nullable();
            $table->tinyInteger('seen')->default(0);
            $table->tinyInteger('click')->default(0);
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
        Schema::dropIfExists('notifications');
    }
}
