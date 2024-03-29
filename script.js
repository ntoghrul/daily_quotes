document.addEventListener('DOMContentLoaded', function() {

    const quotes = [
        {"id": 1, "text": "Always remember that you're unique, just like everyone else"},
        {"id": 2, "text": "The road to success is always under construction"},
        {"id": 3, "text": "If at first you don't succeed, then skydiving definitely isn't for you."},
        {"id": 4, "text": "Work until your bank account looks like a phone number. Preferably one that doesn't start with zero"},
        {"id": 5, "text": "Follow your heart, but take your brain with you. It’s easy to get lost without it"},
        {"id": 6, "text": "You miss 100% of the shots you don’t take. And statistically, a bunch of the ones you do"},
        {"id": 7, "text": "A diamond is merely a lump of coal that did well under pressure. So, if you’re not a diamond yet, congratulations on being a future diamond"},
        {"id": 8, "text": "They say good things come to those who wait. They forgot to mention that it’s the stuff left by those who got there first"},
        {"id": 9, "text": "If you think nobody cares if you're alive, try missing a couple of payments"},
        {"id": 10, "text": "Remember, if plan A fails, there are 25 more letters in the alphabet"},
        {"id": 11, "text": "Age is of no importance unless you’re a cheese or a wine. The older, the better"},
        {"id": 12, "text": "Money can't buy happiness, but it's much more comfortable to cry in a Mercedes than on a bicycle"},
        {"id": 13, "text": "The only place where success comes before work is in the dictionary"},
        {"id": 14, "text": "If procrastination was an Olympic sport, you'd have a solid shot at a medal"},
        {"id": 15, "text": "I asked God for a bike, but I know God doesn't work that way. So I stole a bike and asked for forgiveness"},
        {"id": 16, "text": "People say nothing is impossible, but I do nothing every day"},
        {"id": 17, "text": "I'd agree with you, but then we'd both be wrong"},
        {"id": 18, "text": "Be like a duck, calm on the surface but always paddling like the dickens underneath. Just don’t quack under pressure"},
        {"id": 19, "text": "It's okay if you don't like me. Not everyone has good taste"},
        {"id": 20, "text": "Exercise? I thought you said extra fries"}
    ];

    const totalQuotes = quotes.length;

    const today = new Date();

    const quoteIndex = (today.getDate() - 1) % totalQuotes; 

    const todaysQuote = quotes[quoteIndex];

    document.getElementById('quote').innerText = todaysQuote.text;
});
