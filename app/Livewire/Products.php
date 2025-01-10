<?php

namespace App\Livewire;

use Livewire\Attributes\Layout;
use Livewire\Attributes\Title;
use Livewire\Component;

class Products extends Component
{
    #[Title('Products')]
    #[Layout('layouts.default')]
    public function render()
    {
        return view('livewire.products');
    }
}
