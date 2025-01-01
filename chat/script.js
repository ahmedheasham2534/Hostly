// Get the modal and buttons
const modal = document.getElementById('registerModal');
const closeModal = document.getElementById('closeModal');
const form = document.getElementById('registerForm');
const successMessage = document.getElementById('successMessage');
const Btn = document.getElementById('landBtn')

// Function to open the modal (to be called from the landing page button using its ID)
function openRegisterModal() {
  modal.style.display = 'flex';
}

// Close modal when the close button is clicked
closeModal.addEventListener('click', () => {
  modal.style.display = 'none';
  successMessage.style.display = 'none';
});

// Handle form submission
form.addEventListener('submit', (e) => {
  e.preventDefault();
  successMessage.style.display = 'block'; // Show success message
  setTimeout(() => {
    successMessage.style.display = 'none'; // Hide success message after 3 seconds
    modal.style.display = 'none'; // Close modal
  }, 3000);
});
