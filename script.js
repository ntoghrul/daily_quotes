document.addEventListener('DOMContentLoaded', function() {
    // Fetch the quotes from the JSON file
    fetch('quotes.json')
        .then(response => response.json())
        .then(quotes => {
            // Get the total number of quotes
            const totalQuotes = quotes.length;

            // Get the current date
            const today = new Date();

            // Calculate the quote index based on the current day
            const quoteIndex = today.getDate() % totalQuotes;

            // Get the quote object using the calculated index
            const todaysQuote = quotes[quoteIndex];

            // Display the quote text
            document.getElementById('quote').innerText = todaysQuote.text;
        })
        .catch(error => console.error('Error fetching quotes:', error));
});
