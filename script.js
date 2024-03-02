document.addEventListener('DOMContentLoaded', function() {
    // Fetch the quotes from the JSON file
    fetch('quotes.json')
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        })
        .then(quotes => {
            console.log('Quotes:', quotes); // Log fetched quotes
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
