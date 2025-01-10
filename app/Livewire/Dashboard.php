<?php

namespace App\Livewire;

use JetBrains\PhpStorm\NoReturn;
use Livewire\Attributes\Layout;
use Livewire\Attributes\On;
use Livewire\Attributes\Title;
use Livewire\Component;

class Dashboard extends Component
{
    protected $listeners = ['renderVarA'];

    public function renderVarA()
    {
        $this->dispatch('loadDashboard');
    }

    #[Title('Dashboard')]
    #[Layout('layouts.default')]
    public function render()
    {
        return view('livewire.dashboard');
    }
}
