const openModalButtons = document.querySelectorAll('[data-modal-target]')
const closeModalButtons = document.querySelectorAll('[data-close-button]')
const overlay = document.getElementById('overlay')
const searchBar = document.getElementById('search-bar');
const searchButton = document.getElementById('search-button');

// searchBar.addEventListener('input', (e) => {
//   const searchText = searchBar.value.trim();
//   const foundMatches = [];

//   document.body.innerHTML.replace(new RegExp(searchText, 'gi'), (match) => {
//     foundMatches.push(match);
//     return `<mark>${match}</mark>`;
//   });

//   document.body.innerHTML = document.body.innerHTML;

//   if (foundMatches.length > 0) {
//     const firstMatch = foundMatches[0];
//     const matchElement = document.body.querySelector(`:contains(${firstMatch})`);
//     matchElement.scrollIntoView();
//   }
// });

searchButton.addEventListener('click', (e) => {
if (document.activeElement === searchBar) {
    // If the search bar is active, trigger the same action as pressing Enter
    searchBar.dispatchEvent(new KeyboardEvent('keydown', { bubbles: true, cancelable: true, keyCode: 13 }));
} else {
    // If the search bar is not active, focus on the search bar
    searchBar.focus();
}
});



openModalButtons.forEach(button => {
    button.addEventListener('click', () => {
        const modal = document.querySelector(button.dataset.modalTarget)
        openModal(modal)
    })
})

closeModalButtons.forEach(button => {
    button.addEventListener('click', () => {
        const modal = button.closest('.modal')
        closeModal(modal)
    })
})

overlay.addEventListener('click', () => {
    const activeModals = document.querySelectorAll('.modal.active')
    activeModals.forEach(modal => {
        modal.classList.remove('active')
    })
    overlay.classList.remove('active')
})


function openModal(modal) {
    if (modal == null) return
    modal.classList.add('active')
    overlay.classList.add('active')
}

function closeModal(modal) {
    if (modal == null) return
    modal.classList.remove('active')
    overlay.classList.remove('active')
}
function setTheme() {
    if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
        document.body.classList.add('dark-theme');
    } else {
        document.body.classList.remove('dark-theme');
    }
}

  setTheme(); // Initial setup
  window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', setTheme); // Listen for changes