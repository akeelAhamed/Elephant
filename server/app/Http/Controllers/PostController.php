<?php

namespace App\Http\Controllers;

use App\Models\{Post, Files};
use Carbon\Carbon;
use Illuminate\Http\Request;

class PostController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $posts = Post::with(['files', 'user' => function ($query)
        {
            $query->select(['id', 'username', 'fname', 'lname', 'avatar']);
        }])->where('user_id', $this->request->user()->id)->orderBy('id', 'DESC')->paginate();
        return $this->response($posts, count($posts) > 0);
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        if ($this->validate->post()) {
            $user = $request->user();
            $insert = Post::create([
                'user_id'  => $user->id,
                'postType' => 'post',
                'postText' => $request->text,
                'postFile' => $request->hasFile('images')?1:0,
            ]);
            $post = Post::find($insert->id);
            $post->user = $user;
            if ($request->hasFile('images')) {
                $files = [];
                $id = $post->id;
                foreach ($request->file('images') as $file) {
                    $files[] = [
                        'post_id' => $id,
                        'file'    => $this->uploadFile($file),
                        'created_at' => Carbon::now()->toDateTimeString()
                    ];
                }
                Files::insert($files);
                $post->files = Files::where('post_id', $id)->get();
            }

            return $this->response($post, true);
        }
        
        return $this->response($this->validate->errors);
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\Post  $post
     * @return \Illuminate\Http\Response
     */
    public function show(Post $post)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\Post  $post
     * @return \Illuminate\Http\Response
     */
    public function edit(Post $post)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\Post  $post
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, Post $post)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\Post  $post
     * @return \Illuminate\Http\Response
     */
    public function destroy(Post $post)
    {
        //
    }
}
