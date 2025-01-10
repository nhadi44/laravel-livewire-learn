<div class="row">
	<div class="card col-md-5">
		<div class="card-body">
			<h5 class="card-title text-primary">Add new customer</h5>

			<form wire:submit.prevent="save_customer">
				<div class="row mb-3">
					<div class="col-md-12 mb-2">
						<label for="customer_name" class="form-label">Name</label>
						<input
							type="text"
							class="form-control"
							name="customer_name"
							id="customer_name"
							placeholder="e.g Jhon Doe"
							wire:model="customerName"
						/>

						@error('customerName')
							<small class="text-danger">{{ $message }}</small>
						@enderror
					</div>
					<div class="col-md-12 mb-2">
						<label for="customer_address" class="form-label">Address</label>
						<input
							type="text"
							class="form-control"
							name="customer_address"
							id="customer_address"
							placeholder="e.g Jakarta"
							wire:model="customerAddress"
						/>

						@error('customerAddress')
							<small class="text-danger">{{ $message }}</small>
						@enderror
					</div>
				</div>

				<button class="btn btn-primary w-100" wire:loading.attr="disabled">
					<span wire:loading>Loading...</span>
					<span wire:loading.remove>Save</span>
				</button>
			</form>
		</div>
	</div>
</div>
