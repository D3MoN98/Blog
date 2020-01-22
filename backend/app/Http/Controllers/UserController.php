<?php

namespace App\Http\Controllers;

use App\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Validator;

class UserController extends Controller
{
    
    public function register(Request $request){

        $validator = Validator::make($request->all(),[ 
            'name' => 'required',
            'email' => 'required|email|unique:users,email',
            'password' => 'required',  
            'c_password' => 'required|same:password', 
        ]);   

        if ($validator->fails()) {          
            return response()->json($validator->errors(), 401);
        }
        
        $input = $request->all();  
        $input['password'] = bcrypt($input['password']);
        $user = User::create($input); 
        $token =  $user->createToken('AppName')->accessToken;
        return response()->json(['token' => $token], 200);
    }

    public function login(){ 
        if(Auth::attempt(['email' => request('email'), 'password' => request('password')])){ 
           $user = Auth::user();
           $token =  $user->createToken('AppName')->accessToken; 
            return response()->json(['token' => $token], 200); 
        } else{ 
            return response()->json(['Unauthorized user'], 401); 
        } 
    }

    public function get_user() {
        $user = Auth::user();
        return response()->json(['user' => $user], 200); 
    }

}
