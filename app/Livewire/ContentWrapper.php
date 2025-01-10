<?php

namespace App\Livewire;

use Livewire\Attributes\Layout;
use Livewire\Component;

class ContentWrapper extends Component
{
    #[Layout('layouts.default')]
    public function render()
    {
        return view('livewire.content-wrapper');
    }
}
