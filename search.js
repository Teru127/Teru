// Get search query from URL
const params = new URLSearchParams(window.location.search);
const query = params.get("query");

// Display the search query
document.getElementById("search-query").textContent = `You searched for: "${query}"`;

// Mock data for search results
const mockResults = [
    { 
        title: "Chiếu Cẩm Nê", 
        link: "chieucamne.html", 
        snippet: "Learn about the traditional mat weaving craft of Chiếu Cẩm Nê.", 
        image: "chieucamne.jpg" 
    },
    { 
        title: "Đá Mỹ Nghệ Non Nước", 
        link: "damynghenonnuoc.html", 
        snippet: "Explore the stone carving techniques in Non Nước.", 
        image: "damynghe.jpg" 
    },
    { 
        title: "Nước Mắm Nam Ô", 
        link: "nuocmamnamo.html", 
        snippet: "Discover the traditional fish sauce production in Nam Ô.", 
        image: "nuocmam.jpg" 
    },
    { 
        title: "Bánh Tráng Túy Loan", 
        link: "banhtrangtuyloan.html", 
        snippet: "Taste the famous rice paper from Tuy Loan.", 
        image: "banhtrang.jpg" 
    },
    { 
        title: "Bánh Khô Mè", 
        link: "banhkhome.html", 
        snippet: "Enjoy the delicious Dried Sesame Cake from Da Nang.", 
        image: "banhkho.jpg" 
    }
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

        const image = document.createElement("img");
        image.src = result.image;
        image.classList.add("result-image");

        const content = document.createElement("div");
        content.classList.add("result-content");

        const title = document.createElement("a");
        title.href = result.link;
        title.classList.add("result-title");
        title.textContent = result.title;

        const snippet = document.createElement("p");
        snippet.classList.add("result-snippet");
        snippet.textContent = result.snippet;

        content.appendChild(title);
        content.appendChild(snippet);
        item.appendChild(image);
        item.appendChild(content);
        resultsContainer.appendChild(item);
    });
} else {
    resultsContainer.textContent = "No results found.";
}
