   document.addEventListener('DOMContentLoaded', () => {
            let activeInput = null;
            const keyboardContainer = document.querySelector('.keyboard-container');
            const keys = document.querySelectorAll('.key');

            // Show keyboard and focus input on click
            document.querySelectorAll('input, textarea').forEach(input => {
                input.addEventListener('click', (e) => {
                    e.preventDefault();
                    document.querySelectorAll('input, textarea').forEach(el => {
                       el.style.color = '';
                     el.style.boxShadow = ''; // Reset inline style
                    });
                    activeInput = input;
                    keyboardContainer.classList.add('active');
                    activeInput.style.color = '#f62f5e';
                        activeInput.style.boxShadow = 'inset 1px 1px 2px #BABECC,inset -1px -1px 2px #ffffff73'; // Ensure input stays focused
                if (/Mobi|Android/i.test(navigator.userAgent)) {
                        setTimeout(() => activeInput.blur(), 0);
                    }
                });
            });

            // Handle key clicks
               keys.forEach(key => {
        let holdTimer;
        const holdDuration = 500; // 1 second for hold

        // Hold event listeners only for 'clear' key
        if (key.dataset.value === 'clear') {
            key.addEventListener('mousedown', (e) => {
                if (!activeInput) return;
                // e.stopPropagation(); // Avoid if it breaks click
                holdTimer = setTimeout(() => {
                    activeInput.value = '';
                    activeInput.dispatchEvent(new Event('input'));
                }, holdDuration);
            });
            key.addEventListener('mouseup', () => clearTimeout(holdTimer));
            key.addEventListener('mouseleave', () => clearTimeout(holdTimer));
            key.addEventListener('touchstart', (e) => {
                if (!activeInput) return;
                // Move preventDefault to specific cases if needed
                holdTimer = setTimeout(() => {
                    activeInput.value = '';
                    activeInput.dispatchEvent(new Event('input'));
                }, holdDuration);
            });
            key.addEventListener('touchend', (e) => clearTimeout(holdTimer));
            key.addEventListener('touchcancel', () => clearTimeout(holdTimer));
        }

        // Click event for all keys
        key.addEventListener('click', (e) => {
            if (!activeInput) return;

            const value = key.dataset.value;

            if (value === 'clear') {
                activeInput.value = activeInput.value.slice(0, -1); // Single click deletes one character
            } else if (value === 'close') {
                keyboardContainer.classList.remove('active');
                activeInput.blur();
                activeInput.style.color = '';
            } else {
                activeInput.value += value;
            }
            activeInput.dispatchEvent(new Event('input'));
            activeInput.style.boxShadow = 'inset 1px 1px 2px #BABECC,inset -1px -1px 2px #ffffff73';
        });
    });
});
