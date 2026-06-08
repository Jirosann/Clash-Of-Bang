document.addEventListener('DOMContentLoaded', () => {

    /* --- Carousel Logic (Home Page) --- */
    const track = document.querySelector('.carousel-track');
    const slides = document.querySelectorAll('.carousel-slide');
    const nextBtn = document.querySelector('.carousel-next');
    const prevBtn = document.querySelector('.carousel-prev');

    if (track && slides.length > 0) {
        let currentIndex = 0;

        const updateCarousel = () => {
            const slideWidth = slides[0].clientWidth;
            track.style.transform = `translateX(-${currentIndex * slideWidth}px)`;
        };

        if (nextBtn && prevBtn) {
            nextBtn.addEventListener('click', () => {
                if (currentIndex < slides.length - 1) {
                    currentIndex++;
                } else {
                    currentIndex = 0; // Loop back
                }
                updateCarousel();
            });

            prevBtn.addEventListener('click', () => {
                if (currentIndex > 0) {
                    currentIndex--;
                } else {
                    currentIndex = slides.length - 1; // Loop back to end
                }
                updateCarousel();
            });
        }
        
        // Ensure carousel responds correctly to resize
        window.addEventListener('resize', updateCarousel);
    }

    /* --- Form Validation (Register Page) --- */
    const registerForm = document.getElementById('registerForm');

    if (registerForm) {
        registerForm.addEventListener('submit', (e) => {
            e.preventDefault(); // Prevent submission by default
            
            let isValid = true;

            // Common helper to show/hide error
            const setError = (elementId, message) => {
                const formGroup = document.getElementById(elementId).parentElement;
                formGroup.classList.add('invalid');
                const errorEl = formGroup.querySelector('.error-message');
                if (errorEl) errorEl.textContent = message;
                isValid = false;
            };

            const clearError = (elementId) => {
                const el = document.getElementById(elementId);
                // Handle radio group structure (parent of parent)
                let formGroup = el.closest('.form-group');
                if (formGroup) {
                    formGroup.classList.remove('invalid');
                }
            };

            // 1. Validating Name (Length check, cannot be empty)
            const name = document.getElementById('name');
            clearError('name');
            if (name.value.trim().length === 0) {
                setError('name', 'Name is required.');
            } else if (name.value.trim().length < 3) {
                setError('name', 'Name must be at least 3 characters long.');
            }

            // 2. Validating Email (Must contain '@' and '.', not using Regex)
            const email = document.getElementById('email');
            clearError('email');
            const emailVal = email.value.trim();
            if (emailVal.length === 0) {
                setError('email', 'Email is required.');
            } else {
                const atIndex = emailVal.indexOf('@');
                const dotIndex = emailVal.lastIndexOf('.');
                
                // Conditions for custom email check:
                // - Has '@'
                // - Has '.' after the '@'
                // - Has at least one character before '@'
                // - Has characters between '@' and '.'
                // - Has characters after '.'
                if (atIndex < 1 || dotIndex <= atIndex + 1 || dotIndex === emailVal.length - 1) {
                    setError('email', 'Please enter a valid email address.');
                }
            }

            // 3. Validating Radio Buttons (Gender - Must be selected)
            const genderMale = document.getElementById('genderMale');
            const genderFemale = document.getElementById('genderFemale');
            // Assuming both radios have ID 'genderMale' parent form-group
            clearError('genderMale'); 
            if (!genderMale.checked && !genderFemale.checked) {
                setError('genderMale', 'Please select your gender.');
            }

            // 4. Validating Age (Must be a number between 13 and 100)
            const age = document.getElementById('age');
            clearError('age');
            const ageVal = parseInt(age.value, 10);
            if (age.value.trim().length === 0) {
                setError('age', 'Age is required.');
            } else if (isNaN(ageVal) || ageVal < 13 || ageVal > 99) {
                setError('age', 'Age must be a number between 13 and 99.');
            }

            // 5. Validating Select / Dropdown (Favorite Troop)
            const troop = document.getElementById('troop');
            clearError('troop');
            if (troop.value === "" || troop.value === "none") {
                setError('troop', 'Please select your favorite troop.');
            }

            // 6. Validating Textarea (Reason)
            const reason = document.getElementById('reason');
            clearError('reason');
            if (reason.value.trim().length < 15) {
                setError('reason', 'Reason must be at least 15 characters long.');
            }

            // If everything is valid, submit
            if (isValid) {
                alert('Success! Welcome to Clash of BaNG!');
                registerForm.reset(); // clear form
            }
        });
    }

});
