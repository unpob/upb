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
                key.addEventListener('click', () => {
                    if (!activeInput) return;

                    const value = key.dataset.value;

                    if (value === 'clear') {
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
            });
        });
 
