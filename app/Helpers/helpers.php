<?php

namespace App\Helpers;

use Livewire\Component;
use Livewire\Livewire;

class Helpers extends Component
{
    public function SweetAlert()
    {
//        dd('testing');
        return $this->dispatch('swal:alert', [
            'icon' => 'success',
            'title' => 'Berhasil!',
            'text' => 'Aksi berhasil dilakukan.',
        ]);
    }
}
