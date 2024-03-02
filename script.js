document.addEventListener('DOMContentLoaded', function() {

    fetch('quotes.json')
        .then(response => response.json())
        .then(quotes => {
          
            const totalQuotes = quotes.length;
            const today = new Date();
            const quoteIndex = today.getDate() % totalQuotes;
            const todaysQuote = quotes[quoteIndex];
            document.getElementById('quote').innerText = todaysQuote.text;
        })
        .catch(error => console.error('Error fetching quotes:', error));
});
