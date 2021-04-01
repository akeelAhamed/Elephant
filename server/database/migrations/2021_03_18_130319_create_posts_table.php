<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreatePostsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('posts', function (Blueprint $table) {
            $table->id();
            $table->bigInteger('user_id');
            $table->bigInteger('friend_id')->default(0);
            $table->string('postType', 100)->nullable();
            $table->text('postText')->nullable();
            $table->tinyInteger('postFile')->nullable();
            $table->text('postSticker')->nullable();
            $table->bigInteger('shared_from')->default(0);
            $table->bigInteger('parent_id')->default(0);
            $table->integer('postLike')->default(0);
            $table->integer('postComment')->default(0);
            $table->bigInteger('postShare')->default(0);
            $table->tinyInteger('comments_status')->default(1);
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
        Schema::dropIfExists('posts');
    }
}
