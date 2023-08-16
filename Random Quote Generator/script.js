const quotesArr = ["The way to get started is to quit talking and begin doing.", 
                "Your time is limited, so don't waste it living someone else's life. Don't be trapped by dogma – which is living with the results of other people's thinking.",
                "The future belongs to those who believe in the beauty of their dreams.",
                "If you look at what you have in life, you'll always have more. If you look at what you don't have in life, you'll never have enough.",
                "If you set your goals ridiculously high and it's a failure, you will fail above everyone else's success.",
                "You may say I'm a dreamer, but I'm not the only one. I hope someday you'll join us. And the world will live as one.",
                "You must be the change you wish to see in the world.",
                "Spread love everywhere you go. Let no one ever come to you without leaving happier.",
                "The only thing we have to fear is fear itself.",
                "Darkness cannot drive out darkness: only light can do that. Hate cannot drive out hate: only love can do that.",
                "Do one thing every day that scares you."
];

const btn = document.querySelector('.app button');

function newQuote(index) {
    const text = document.getElementById("quote");
    text.innerHTML = quotesArr[index];
}

btn.addEventListener("click", () => {
    newQuote(Math.floor(Math.random()*quotesArr.length));
});