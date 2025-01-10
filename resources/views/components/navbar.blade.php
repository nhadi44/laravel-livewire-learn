@php
 $submenu = [
 	[
 		'title' => 'Customers',
 		'url' => 'master-data.customers',
 	],
 	[
 		'title' => 'Products',
 		'url' => 'master-data.products',
 	],
 ];
@endphp

<nav class="main-navbar">
	<div class="container">
		<ul>
			<x-nav-link
				:has-dropdown="false"
				:active="request()->routeIs('dashboard')"
				href="{{route('dashboard')}}"
				:text="'Dashboard'"
				:icon="'bi bi-speedometer2'"
			/>
			<x-nav-link
				:has-dropdown="true"
				:dropdown-menu="$submenu"
				:active="request()->routeIs('master-data.*')"
				:text="'Master Data'"
				:icon="'bi bi-box-fill'"
			/>
		</ul>
	</div>
</nav>
