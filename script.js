// Function to handle modals
function setupModal(buttonId, modalId, closeId) {
    const btn = document.getElementById(buttonId);
    const modal = document.getElementById(modalId);
    const closeBtn = document.getElementById(closeId);

    if (btn && modal && closeBtn) {
        btn.onclick = function() {
            modal.style.display = 'flex';
        }

        closeBtn.onclick = function() {
            modal.style.display = 'none';
        }

        window.onclick = function(event) {
            if (event.target == modal) {
                modal.style.display = 'none';
            }
        }
    }
}

// Setup modals for the profile page
setupModal('loginBtn', 'loginModal', 'closeLogin');
setupModal('signupBtn', 'signupModal', 'closeSignup');