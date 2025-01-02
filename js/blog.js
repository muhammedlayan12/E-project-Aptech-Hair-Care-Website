
//show hide comppany detail
const toggleButtons = document.querySelectorAll('.toggle-details');

toggleButtons.forEach(button => {
  button.addEventListener('click', () => {
    const details = button.closest('.company-card').querySelector('.company-details');
    const isVisible = details.style.display === 'block';

    if (isVisible) {
      details.style.display = 'none';
      button.textContent = 'Show Details';
    } else {
      details.style.display = 'block';
      button.textContent = 'Hide Details';
    }
  });
});
