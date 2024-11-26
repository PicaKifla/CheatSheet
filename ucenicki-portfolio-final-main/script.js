const openModalButtons = document.querySelectorAll('[data-modal-target]')
const closeModalButtons = document.querySelectorAll('[data-close-button]')
const overlay = document.getElementById('overlay')
const searchButton = document.getElementById('search-button');
const searchBar = document.getElementById('search-bar');
const searchInput = document.getElementById('search-bar');
const container = document.getElementById('container');
const searchResults = document.getElementById('search-results');
const wㅤaㅤtㅤeㅤrㅤmㅤaㅤrㅤk = document.querySelector('.wㅤaㅤtㅤeㅤrㅤmㅤaㅤrㅤk');

function showWㅤaㅤtㅤeㅤrㅤmㅤaㅤrㅤk() {
  // wㅤaㅤtㅤeㅤrㅤmㅤaㅤrㅤk.classList.add('show');
}

setTimeout(showWㅤaㅤtㅤeㅤrㅤmㅤaㅤrㅤk, 3000);



document.addEventListener('keydown', (event) => {
  if (event.key === 'Escape') {
    searchResults.style.display = 'none';
  }
});
document.addEventListener('click', (event) => {
  if (!searchBar.contains(event.target) && !searchResults.contains(event.target)) {
    searchResults.style.display = 'none';
  }
});

const searchResultsList = [
    { title: 'Početna', link: 'index.html' },
    { title: 'Proces Rada', link: 'procesrada.html' },
    { title: 'O Smeru', link: 'osmeru.html' },
    { title: 'Učenici', link: 'ucenici.html' },
    { title: 'Kontakt', link: 'kontakt.html' },
];


function displaySearchResults() {
    const searchQuery = searchInput.value.trim().toLowerCase();
    const filteredResults = searchResultsList.filter(result => result.title.toLowerCase().includes(searchQuery));

    const resultsList = document.createElement('ul');
    filteredResults.forEach(result => {
        const listItem = document.createElement('li');
        const link = document.createElement('a');
        link.href = result.link;
        link.textContent = result.title;
        listItem.appendChild(link);
        resultsList.appendChild(listItem);
    });

    searchResults.innerHTML = '';
    searchResults.appendChild(resultsList);
    searchResults.style.display = 'block';
}

searchButton.addEventListener('click', displaySearchResults);

searchInput.addEventListener('input', displaySearchResults);

searchInput.addEventListener('input', function() {
  const searchTerm = searchInput.value.trim().toLowerCase();
  const matches = [];

  container.childNodes.forEach(function(node) {
    if (node.nodeType === 3) {
      const text = node.textContent.toLowerCase();
      const index = text.indexOf(searchTerm);

      if (index !== -1) {
        matches.push({
          node: node,
          index: index,
          length: searchTerm.length
        });
      }
    }
  });

  matches.forEach(function(match) {
    const highlight = document.createElement('span');
    highlight.className = 'highlight';
    const text = match.node.textContent.substring(match.index, match.index + match.length);
    highlight.textContent = text;
    match.node.parentNode.replaceChild(highlight, match.node);
  });
});

searchInput.addEventListener('focus', function() {
  const highlights = container.querySelectorAll('.highlight');
  highlights.forEach(function(highlight) {
    const text = highlight.textContent;
    const textNode = document.createTextNode(text);
    highlight.parentNode.replaceChild(textNode, highlight);
  });
});



searchButton.addEventListener('click', (k) => {
if (document.activeElement === searchBar) {
    searchBar.dispatchEvent(new KeyboardEvent('keydown', { bubbles: true, cancelable: true, keyCode: 13 }));
} else {
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

  const element = document.querySelector('#search-results');
const elementsBehind = element.querySelectorAll('~ *');

elementsBehind.forEach((element) => {
  element.style.webkitBackdropFilter = 'blur(6.2px)';
});
