<div>
    <div class="row vh-100">
        <div class="col-lg-5 col-12">
            <div id="auth-left">
                <div class="auth-logo">
                    <a href="index.html">
                        <img src="{{ asset('assets/compiled/svg/logo.svg') }}"
                             alt="Logo" />
                    </a>
                </div>
                <h1 class="auth-title">Log in.</h1>
                <p class="auth-subtitle mb-5">Log in with your data that you entered during registration.</p>

                <form wire:submit="signinProcess">
                    <div class="form-group position-relative has-icon-left mb-4">
                        <input type="text" name="username" id="username"
                               class="form-control form-control-xl {{ $errors->has('username') ? 'is-invalid' : '' }}"
                               placeholder="Username" wire:model="username" autofocus />
                        <div class="form-control-icon">
                            <i class="bi bi-person"></i>
                        </div>

                        @error('username')
                        <span class="invalid-feedback">{{ $message }}</span>
                        @enderror
                    </div>
                    <div class="form-group position-relative has-icon-left mb-4">
                        <input type="password" name="password" id="password"
                               class="form-control form-control-xl {{ $errors->has('password') ? 'is-invalid' : '' }}"
                               placeholder="Password" wire:model="password" />
                        <div class="form-control-icon">
                            <i class="bi bi-shield-lock"></i>
                        </div>

                        @error('password')
                        <span class="invalid-feedback">{{ $message }}</span>
                        @enderror
                    </div>
                    <button class="btn btn-primary btn-block btn-lg shadow-lg mt-5" wire:loading.attr="disabled">
                        <span wire:loading>Signing in...</span>
                        <span wire:loading.remove>Sign in</span>
                    </button>
                </form>
            </div>
        </div>
        <div class="col-lg-7 d-none d-lg-block">
            <div id="auth-right"></div>
        </div>
    </div>

    @script
    <script>
        const username = document.getElementById('username');
        const password = document.getElementById('password');

        username.addEventListener('keyup', function(e) {
            const isInvalid = username.classList.contains('is-invalid');
            const value = e.target.value;

            if (isInvalid) {
                if (value.length > 0) {
                    username.classList.remove('is-invalid');
                }
            }
        });

        password.addEventListener('keyup', function(e) {
            const isInvalid = password.classList.contains('is-invalid');
            const value = e.target.value;

            if (isInvalid) {
                if (value.length > 0) {
                    password.classList.remove('is-invalid');
                }
            }
        });
    </script>
    @endscript
</div>
