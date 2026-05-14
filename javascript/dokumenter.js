const modal = document.getElementById('modal');
const openModal = document.getElementById('open-modal');
const closeModal = document.getElementById('close-modal');
const categories = document.querySelectorAll('.category');

openModal.addEventListener('click', () => {
  modal.classList.remove('hidden');
});

closeModal.addEventListener('click', () => {
  modal.classList.add('hidden');
});

modal.addEventListener('click', (event) => {
  if (event.target === modal) {
    modal.classList.add('hidden');
  }
});

categories.forEach((category) => {
  category.addEventListener('click', () => {

    categories.forEach((button) => {
      button.classList.remove('category--active');
    });

    category.classList.add('category--active');
  });
});
