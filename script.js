const searchForm = document.getElementById("search-form");
const searchQueryInput = document.getElementById("search-query");
const searchResults = document.getElementById("search-results");

searchForm.addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent default form submission

    const searchQuery = searchQueryInput.value;

    // Check for any script tag in the search query
    if (searchQuery.toLowerCase().includes('<script>')) {
        alert('Truth lies in the images!'); // Trigger alert if script tag is found
    }

    // Update search results (actual logic can go here)
    searchResults.innerHTML = `<h2>Search Results for "${searchQuery}"</h2>`;

    // Simulate fetching search results (replace with actual logic)
    setTimeout(() => {
        searchResults.innerHTML += `<p>Here are some results for "${searchQuery}"...</p>`;
    }, 1000);
});
