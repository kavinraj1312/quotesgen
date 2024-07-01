
    const quote=document.querySelector('.quote');
    const author=document.querySelector('.author');
    const button=document.querySelector('.btn');
    const category=document.querySelector('.category');
    const arr=[
        {
          "quote": "A stockbroker urged me to buy a stock that would triple its value every year. I told him, 'At my age, I don't even buy green bananas.'",
          "author": "Claude Pepper",
          "category": "funny"
        },
        {
          "quote": "I am not afraid of death, I just don't want to be there when it happens.",
          "author": "Woody Allen",
          "category": "funny"
        },
        {
          "quote": "The best way to teach your kids about taxes is by eating 30% of their ice cream.",
          "author": "Bill Murray",
          "category": "funny"
        },
        {
          "quote": "Behind every great man is a woman rolling her eyes.",
          "author": "Jim Carrey",
          "category": "funny"
        },
        {
          "quote": "I don't need a hair stylist, my pillow gives me a new hairstyle every morning.",
          "author": "Unknown",
          "category": "funny"
        },
        {
          "quote": "The road to success is dotted with many tempting parking spaces.",
          "author": "Will Rogers",
          "category": "funny"
        },
        {
          "quote": "If at first you don't succeed, then skydiving definitely isn't for you.",
          "author": "Steven Wright",
          "category": "funny"
        },
        {
          "quote": "If you think you are too small to make a difference, try sleeping with a mosquito.",
          "author": "Dalai Lama",
          "category": "inspirational"
        },
        {
          "quote": "The only way to do great work is to love what you do.",
          "author": "Steve Jobs",
          "category": "inspirational"
        },
        {
          "quote": "Success is not final, failure is not fatal: It is the courage to continue that counts.",
          "author": "Winston Churchill",
          "category": "inspirational"
        },
        {
          "quote": "Don't watch the clock; do what it does. Keep going.",
          "author": "Sam Levenson",
          "category": "inspirational"
        },
        {
          "quote": "It does not matter how slowly you go as long as you do not stop.",
          "author": "Confucius",
          "category": "inspirational"
        },
        {
          "quote": "You are never too old to set another goal or to dream a new dream.",
          "author": "C.S. Lewis",
          "category": "inspirational"
        },
        {
          "quote": "Believe you can and you're halfway there.",
          "author": "Theodore Roosevelt",
          "category": "inspirational"
        },
        {
          "quote": "It always seems impossible until it's done.",
          "author": "Nelson Mandela",
          "category": "inspirational"
        },
        {
          "quote": "The best revenge is massive success.",
          "author": "Frank Sinatra",
          "category": "motivational"
        },
        {
          "quote": "Opportunities don't happen. You create them.",
          "author": "Chris Grosser",
          "category": "motivational"
        },
        {
          "quote": "I find that the harder I work, the more luck I seem to have.",
          "author": "Thomas Jefferson",
          "category": "motivational"
        },
        {
          "quote": "Success usually comes to those who are too busy to be looking for it.",
          "author": "Henry David Thoreau",
          "category": "motivational"
        },
        {
          "quote": "The only limit to our realization of tomorrow will be our doubts of today.",
          "author": "Franklin D. Roosevelt",
          "category": "motivational"
        },
        {
          "quote": "You miss 100% of the shots you don’t take.",
          "author": "Wayne Gretzky",
          "category": "motivational"
        },
        {
          "quote": "Don’t let yesterday take up too much of today.",
          "author": "Will Rogers",
          "category": "motivational"
        },
        {
          "quote": "The way to get started is to quit talking and begin doing.",
          "author": "Walt Disney",
          "category": "motivational"
        },
        {
          "quote": "Life is what happens when you're busy making other plans.",
          "author": "John Lennon",
          "category": "life"
        },
        {
          "quote": "Get busy living or get busy dying.",
          "author": "Stephen King",
          "category": "life"
        },
        {
          "quote": "You only live once, but if you do it right, once is enough.",
          "author": "Mae West",
          "category": "life"
        },
        {
          "quote": "The purpose of our lives is to be happy.",
          "author": "Dalai Lama",
          "category": "life"
        },
        {
          "quote": "Life is what happens to us while we are making other plans.",
          "author": "Allen Saunders",
          "category": "life"
        },
        {
          "quote": "In the end, it's not the years in your life that count. It's the life in your years.",
          "author": "Abraham Lincoln",
          "category": "life"
        },
        {
          "quote": "The big lesson in life is never be scared of anyone or anything.",
          "author": "Frank Sinatra",
          "category": "life"
        },
        {
          "quote": "Life is like riding a bicycle. To keep your balance, you must keep moving.",
          "author": "Albert Einstein",
          "category": "life"
        },
        {
          "quote": "The only impossible journey is the one you never begin.",
          "author": "Tony Robbins",
          "category": "life"
        },
        {
          "quote": "Life is 10% what happens to us and 90% how we react to it.",
          "author": "Charles R. Swindoll",
          "category": "life"
        },
        {
          "quote": "It is our choices that show what we truly are, far more than our abilities.",
          "author": "J.K. Rowling",
          "category": "wisdom"
        },
        {
          "quote": "In three words I can sum up everything I've learned about life: it goes on.",
          "author": "Robert Frost",
          "category": "wisdom"
        },
        {
          "quote": "The only true wisdom is in knowing you know nothing.",
          "author": "Socrates",
          "category": "wisdom"
        },
        {
          "quote": "The only way to do great work is to love what you do.",
          "author": "Steve Jobs",
          "category": "wisdom"
        },
        {
          "quote": "Wisdom is not a product of schooling but of the lifelong attempt to acquire it.",
          "author": "Albert Einstein",
          "category": "wisdom"
        },
        {
          "quote": "The only limit to our realization of tomorrow will be our doubts of today.",
          "author": "Franklin D. Roosevelt",
          "category": "wisdom"
        },
        {
          "quote": "The unexamined life is not worth living.",
          "author": "Socrates",
          "category": "wisdom"
        },
        {
          "quote": "It is not what you do for your children, but what you have taught them to do for themselves, that will make them successful human beings.",
          "author": "Ann Landers",
          "category": "wisdom"
        },
        {
          "quote": "The true sign of intelligence is not knowledge but imagination.",
          "author": "Albert Einstein",
          "category": "wisdom"
        },
        {
          "quote": "Knowing others is intelligence; knowing yourself is true wisdom. Mastering others is strength; mastering yourself is true power.",
          "author": "Lao Tzu",
          "category": "wisdom"
        },
        {
          "quote": "A wise man can learn more from a foolish question than a fool can learn from a wise answer.",
          "author": "Bruce Lee",
          "category": "wisdom"
        },
        {
          "quote": "The fool doth think he is wise, but the wise man knows himself to be a fool.",
          "author": "William Shakespeare",
          "category": "wisdom"
        }
      ]
      
    const QuotesShow=(e)=>{
        const rand=Math.floor(Math.random()*arr.length);
        quote.innerHTML=arr[rand].quote;
        author.innerHTML=arr[rand].author;
        category.innerHTML=arr[rand].category;

    }

    button.addEventListener("click",QuotesShow)












    const axios = require('axios');

// Define the API endpoint
const url = "https://api.api-ninjas.com/v1/quotes";

// Define the API key (replace 'your_api_key_here' with your actual API key)
const apiKey = 'iZuD0vJuVwUXzpTRww6eAg==7I4Zmx0xLApBeCLE';

// Set up the request headers including the API key
const options = {
    headers: {
        'X-Api-Key': apiKey
    }
};

let q_data = []; // Initialize as an empty array to store quotes data

// Make the GET request to the API
axios.get(url, options)
    .then((res) => {
        // Log the response data (quotes)
        q_data = res.data;
        console.log(q_data); // Verify the data received from the API
    })
    .catch((err) => {
        // Log any errors
        console.error('Error:', err);
    });

// Wait for the DOM to fully load before accessing elements
document.addEventListener("DOMContentLoaded", () => {
    const quote = document.getElementById('quote');
    const author = document.getElementById('author');
    const category = document.getElementById('category');
    const button = document.getElementById('btn');

    const QuotesShow = () => {
        // Check if q_data is populated with at least one quote
        if (q_data.length > 0) {
            quote.textContent = q_data[0].quote;
            author.textContent = q_data[0].author;
            category.textContent = q_data[0].category;
        } else {
            console.error('No quotes data available.'); // Handle case where no data is available
        }
    };

    // Attach click event listener to the button
    button.addEventListener("click", QuotesShow);
});
