<?php

namespace App\Livewire\Auth;

use Livewire\Attributes\Layout;
use Livewire\Attributes\Title;
use Livewire\Attributes\Validate;
use Livewire\Component;

class Login extends Component
{
    #[Validate(['required'])]
    public $username = '';
    #[Validate(['required'])]
    public $password = '';


    public function signinProcess()
    {
        $this->validate([
            'username' => 'required',
            'password' => 'required',
        ], [
            'username.required' => 'Please fill the username',
            'password.required' => 'Please fill the password',
        ]);

        $credentials = [
            'username' => $this->username,
            'password' => $this->password,
        ];

        if (auth()->attempt($credentials)) {
//            modified for multiple roles
//            $user = auth()->user();
//            dd($user);
//            switch ($user->role) { // modified for multiple roles}
//            return redirect()->route('dashboard');
            $this->redirectRoute('dashboard');
        } else {
            dd('Login failed');
        }
    }

    #[Title('Sign In')]
    #[Layout('layouts.auth')]
    public function render()
    {
        return view('livewire.auth.login');
    }
}
