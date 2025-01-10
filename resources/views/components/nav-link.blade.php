@props(['hasDropdown' => false, 'text' => '', 'dropdownMenu' => [], 'active' => false, 'icon' => ''])

@php
 $text = $text ? $text : 'Navbar Link';
 $icon = $icon ? $icon : 'bi bi-grid-fill';
@endphp

@if ($hasDropdown)
	<li class="menu-item has-sub {{ $active ? 'active' : '' }}">
		<a wire:navigate {{ $attributes->merge(['class' => 'menu-link d-flex align-items-center gap-2']) }}>
			<i class="{{ $icon }}" style="margin-top: -6px"></i>
			<span class="d-block sub-nav-link-text">{{ $text }}</span>
		</a>
		<div class="submenu">
			<!-- Wrap to submenu-group-wrapper if you want 3-level submenu. Otherwise remove it. -->
			<div class="submenu-group-wrapper">
				<ul class="submenu-group">
					@foreach ($dropdownMenu as $submenu)
						<li class="submenu-item {{ request()->routeIs($submenu['url']) ? 'active' : '' }}">
							<a wire:navigate href="{{ route($submenu['url']) }}" class="submenu-link">
								{{ $submenu['title'] }}
							</a>
						</li>
					@endforeach
				</ul>
			</div>
		</div>
	</li>
@else
	<li class="menu-item {{ $active ? 'active' : '' }}">
		<a wire:navigate {{ $attributes->merge(['class' => 'menu-link d-flex align-items-center gap-2']) }}>
			<i class="{{ $icon }}" style="margin-top: -6px"></i>
			<span class="d-block sub-nav-link-text">{{ $text }}</span>
		</a>
	</li>
@endif
