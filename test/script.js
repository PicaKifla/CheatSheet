// script.js
const searchInput = document.getElementById('search-input');
const searchButton = document.getElementById('search-button');
const searchResults = document.getElementById('search-results');

// Create a list of search results
const searchResultsList = [
    { title: 'politehnick skola subotica pocetna', link: 'https://www.politehnickasu.edu.rs/' },
    { title: 'politehnick skola subotica plan upisa', link: 'https://www.politehnickasu.edu.rs/plan-upisa/' },
    { title: 'politehnick skola subotica radovi', link: 'https://www.politehnickasu.edu.rs/nagradeni-radovi/' },
];

// Function to display search results
function displaySearchResults() {
    const searchQuery = searchInput.value.trim().toLowerCase();
    const filteredResults = searchResultsList.filter(result => result.title.toLowerCase().includes(searchQuery));

    // Create a list of search results
    const resultsList = document.createElement('ul');
    filteredResults.forEach(result => {
        const listItem = document.createElement('li');
        const link = document.createElement('a');
        link.href = result.link;
        link.textContent = result.title;
        listItem.appendChild(link);
        resultsList.appendChild(listItem);
    });

    // Display search results
    searchResults.innerHTML = '';
    searchResults.appendChild(resultsList);
    searchResults.style.display = 'block';
}

// Add event listener to search button
searchButton.addEventListener('click', displaySearchResults);

// Add event listener to search input
searchInput.addEventListener('input', displaySearchResults);