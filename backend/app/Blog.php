<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Blog extends Model
{
    protected $primaryKey = 'blog_id';
    
    protected $fillable = [
        'title', 'description', 'user_id',
    ];

}
