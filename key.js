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

           keys.forEach(key => {
    let holdTimer;
    const holdDuration = 500; // Time in milliseconds to consider it a hold

    key.addEventListener('mousedown', () => {
        if (!activeInput) return;

        const value = key.dataset.value;

        if (value === 'clear') {
            // Start timer on mousedown
            holdTimer = setTimeout(() => {
                activeInput.value = ''; // Clear entire input when held
                activeInput.dispatchEvent(new Event('input'));
            }, holdDuration);
        }
    });

    key.addEventListener('click', () => {
        if (!activeInput) return;

        const value = key.dataset.value;

        if (value === 'clear') {
            // Single click removes last character
            activeInput.value = activeInput.value.slice(0, -1);
        } else if (value === 'close') {
            keyboardContainer.classList.remove('active');
            activeInput.blur(); // Remove focus when closing
            activeInput.style.color = '';
        } else {
            activeInput.value += value;
        }
        activeInput.dispatchEvent(new Event('input'));
        activeInput.style.boxShadow = 'inset 1px 1px 2px #BABECC,inset -1px -1px 2px #ffffff73'; // Ensure input stays focused
    });

    // Clear timer if mouse is released before hold duration
    key.addEventListener('mouseup', () => {
        clearTimeout(holdTimer);
    });

    // Also clear timer if mouse leaves button
    key.addEventListener('mouseleave', () => {
        clearTimeout(holdTimer);
    });
});
        });
 
