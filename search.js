// Get search query from URL
const params = new URLSearchParams(window.location.search);
const query = params.get("query");

// Display the search query
document.getElementById("search-query").textContent = `You searched for: "${query}"`;

// Mock data for search results
const mockResults = [
    { title: "History of Da Nang", link: "history.html", snippet: "Explore the rich history of Da Nang, a city with deep cultural roots." },
    { title: "Ancient Artifacts in Da Nang", link: "artifacts.html", snippet: "Discover ancient artifacts that tell the story of Da Nang's past." },
    { title: "Festivals in Da Nang", link: "festivals.html", snippet: "Join vibrant festivals celebrated annually in Da Nang." }
];

// Function to filter mock results based on the query
function performSearch(query) {
    return mockResults.filter(result =>
        result.title.toLowerCase().includes(query.toLowerCase())
    );
}

// Render search results
const resultsContainer = document.getElementById("search-results");
const results = performSearch(query);

if (results.length > 0) {
    results.forEach(result => {
        const item = document.createElement("div");
        item.classList.add("result-item");

        const title = document.createElement("a");
        title.href = result.link;
        title.classList.add("result-title");
        title.textContent = result.title;

        const snippet = document.createElement("p");
        snippet.classList.add("result-snippet");
        snippet.textContent = result.snippet;

        item.appendChild(title);
        item.appendChild(snippet);
        resultsContainer.appendChild(item);
    });
} else {
    resultsContainer.textContent = "No results found.";
}
