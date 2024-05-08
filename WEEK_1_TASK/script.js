
const quotes = [
    { quote: "Be yourself; everyone else is already taken.", author: "Oscar Wilde" },
    { quote: "The only way to do great work is to love what you do.", author: "Steve Jobs" },
    { quote: "The best way to find yourself is to lose yourself in the service of others.", author: "Mahatma Gandhi"},
    { quote: "Arise, awake, and stop not until the goal is achieved.", author: "Swami Vivekanand"},
    { quote: "We are all born with a divine fire in us. Our efforts should be to give wings to this fire and fill the world with the glow of its goodness.", author: "Dr. APJ Adbul Kalam"},
    { quote: "Depth of friendship does not depend on length of acquaintance.", author: "Rabindranath Tagore"},
    { quote: "Education is for improving the lives of others and for leaving your community and world better than you found it.", author: "Sudha Murthy"}
];

const quoteDisplay = document.getElementById('quoteDisplay');
const randomBtn = document.getElementById('randomBtn');
const authorSearch = document.getElementById('authorSearch');

// Function to display a random quote
function displayRandomQuote() {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    const randomQuote = quotes[randomIndex];
    quoteDisplay.innerHTML = `<p>"${randomQuote.quote}"</p><p>- ${randomQuote.author}</p>`;
}

// Function to filter quotes by author name
function searchByAuthor() {
    const searchValue = authorSearch.value.trim().toLowerCase();
    const filteredQuotes = quotes.filter(quote => quote.author.toLowerCase().includes(searchValue));
    if (filteredQuotes.length > 0) {
        const randomIndex = Math.floor(Math.random() * filteredQuotes.length);
        const randomQuote = filteredQuotes[randomIndex];
        quoteDisplay.innerHTML = `<p>"${randomQuote.quote}"</p><p>- ${randomQuote.author}</p>`;
    } else {
        quoteDisplay.innerHTML = "<p>No quotes found for the author.</p>";
    }
}

// Event listener for the random quote button
randomBtn.addEventListener('click', displayRandomQuote);

// Event listener for the author search input
authorSearch.addEventListener('input', searchByAuthor);
