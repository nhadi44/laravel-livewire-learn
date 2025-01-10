<?php

namespace App\Livewire;

use JetBrains\PhpStorm\NoReturn;
use Livewire\Attributes\Layout;
use Livewire\Attributes\Title;
use Livewire\Attributes\Validate;
use Livewire\Component;
use App\Helpers\Helpers;

class Customers extends Component
{
    public function swal(string $title, string $icon, string $text): void
    {
        $this->dispatch('swal:alert', [
            'icon' => $icon,
            'title' => $title,
            'text' => $text,
        ]);
    }

    #[Validate('required')]
    public $customerName = '';

    #[Validate('required')]
    public $customerAddress = '';

    #[NoReturn]
    public function save_customer()
    {
        $this->validate([
            'customerName' => 'required',
            'customerAddress' => 'required',
        ], [
            'customerName.required' => 'The customer name field is required.',
            'customerAddress.required' => 'The customer address field is required.',
        ]);

        $this->swal('Berhasil', 'success', 'Data berhasil disimpan');

    }


    #[Title('Customers')]
    #[Layout('layouts.default')]
    public function render()
    {
        return view('livewire.customers');
    }
}
