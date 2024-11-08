document.addEventListener('DOMContentLoaded', function() {
    const quotes = [
        "In any moment of decision, the best thing you can do is the right thing, the next best thing is the wrong thing, and the worst thing you can do is nothing.",
        "The best way to find yourself is to lose yourself in the service of others.",
        "Happiness is when what you think, what you say, and what you do are in harmony.",
        "An eye for an eye only ends up making the whole world blind.",
        "You must not lose faith in humanity. Humanity is an ocean; if a few drops of the ocean are dirty, the ocean does not become dirty.",
        "The difference between what we do and what we are capable of doing would suffice to solve most of the world's problems.",
        "The real ornament of woman is her character, her purity.",
        "A small body of determined spirits fired by an unquenchable faith in their mission can alter the course of history.",
        "Self-respect knows no considerations.",
        "Non-violence is the greatest force at the disposal of mankind. It is mightier than the mightiest weapon of destruction devised by the ingenuity of man.",
        "Anger is the enemy of non-violence and pride is a monster that swallows it up."
    ];

    const fortniteQuotes = [
        "Don’t get carried away, even the winners are dragged back to the lobby.",
        "Maturity is realising that 1 medkit is better than 10 bandages.",
        "Gliders help you at your highest, and leave you at your lowest.",
        "If your enemies can make edits, then bruh! It was never your build to begin with!",
        "You can change the skin from the outside, but it’s the same player inside.",
        "No matter how costly your skins are, everyone can get a victory Royale.",
        "They spectate only when you’re winning.",
        "Remember, not even the strongest shield can protect you from the storm.",
        "The smaller the circle the better the people",
        "The people with the scars are the strongest",
        "Everyone starts with different loot its just a matter of how you use yours",
        "How do you expect to get golden loot if you bushcamp all game",   
    ]

    const generateButton = document.querySelector('#generate-button');
    const fortniteGenerateButton = document.querySelector('#fortnite-generate-button');
    const clearButton = document.querySelector('.clear');
    const copyButton = document.querySelector('.copy');
    const quoteElement = document.querySelector('#quote');
    const popup = document.getElementById('popup');
    //const tooltip = copyButton.querySelector('.tooltip');

    generateButton.addEventListener('click', function() {
        const randomIndex = Math.floor(Math.random() * quotes.length);
        const randomQuote = quotes[randomIndex];
        quoteElement.textContent = randomQuote;
        console.log('Generated Quote:', randomQuote);
    });

    fortniteGenerateButton.addEventListener('click',function(){
        const randomIndex = Math.floor(Math.random() * fortniteQuotes.length);
        const randomQuote = fortniteQuotes[randomIndex];
        quoteElement.textContent = randomQuote;
        console.log('Generated Quote:', randomQuote);
     });
    
    clearButton.addEventListener('click', function() {
        quoteElement.textContent = "";
        console.log('Quote cleared.');
    });

    copyButton.addEventListener('click', function() {
        const quoteText = quoteElement.textContent;
        if (quoteText) {
            navigator.clipboard.writeText(quoteText)
                .then(() => {
                    console.log('Quote copied to clipboard:', quoteText);
                    // tooltip.textContent = "Copied!";
                    popup.classList.add('show');
                    setTimeout(() => {
                        popup.classList.remove('show');
                    }, 2000);
                    setTimeout(() => {
                        // tooltip.textContent = "Copy to clipboard";
                    }, 2000);
                })
                .catch(err => {
                    console.error('Failed to copy: ', err);
                });
        } else {
            console.log('No quote to copy.');
        }
    });
});