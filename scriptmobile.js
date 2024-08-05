const products2 = [
    { name: "청인 상쾌장 프리미엄", image: "product1.jpg", keywords: ["keyword1", "keyword2"] }, // Replace with actual image source
    { name: "청인 쾌장-F", image: "product2.jpg", keywords: ["keyword1", "keyword4"] },
    { name: "청인 쾌장", image: "product3.jpg", keywords: ["keyword1", "keyword3"] } // Replace with actual image source
    // Add more products as needed
];
const products = {
    default: [
        {
            group: "Default Group",
            items: [
                { name: "청인 상쾌장 프리미엄", image: "product1.jpg", description: "곤약만난 12,900g 상쾌한 하루를 위한 안성맞춤", link: "https://example.com/product1", keywords: ["쾌장", "상쾌장", "글루코만난"] },
                { name: "청인 쾌장-F", image: "product2.jpg", description: "차전자피 식이섬유로 ~~", link: "https://example.com/product2" , keywords: ["쾌장-F", "식이섬유"] }
            ]
        }
    ],
    route1: [
        {
            group: "작은 용량",
            items: [
                { name: "Product A", image: "productA.jpg", description: "Description for Product A", link: "https://example.com/productA" },
                { name: "Product B", image: "productA.jpg", description: "Description for Product B", link: "https://example.com/productB" }
            ]
        },
        {
            group: "오리지널 청인",
            items: [
                { name: "Product C", image: "productA.jpg", description: "Description for Product C", link: "https://example.com/productC" },
                { name: "Product D", image: "productA.jpg", description: "Description for Product D", link: "https://example.com/productD" },
                { name: "Product E", image: "productA.jpg", description: "Description for Product E", link: "https://example.com/productE" }
            ]
        },        {
            group: "프리미엄 한방초",
            items: [
                { name: "Product F", image: "productA.jpg", description: "Description for Product F", link: "https://example.com/productF" },
                { name: "Product G", image: "productA.jpg", description: "Description for Product G", link: "https://example.com/productG" }
            ]
        }
    ],
    route2: [
        {
            group: "식이섬유 Group",
            items: [
                { name: "Product C", image: "productA.jpg", description: "Description for Product C", link: "https://example.com/productC" },
                { name: "Product D", image: "productA.jpg", description: "Description for Product D", link: "https://example.com/productD" }
            ]
        },
        {
            group: "Cheap Products",
            items: [
                { name: "Product C", image: "productA.jpg", description: "Description for Product C", link: "https://example.com/productC" },
                { name: "Product D", image: "productA.jpg", description: "Description for Product D", link: "https://example.com/productD" },
                { name: "Product E", image: "productA.jpg", description: "Description for Product E", link: "https://example.com/productE" }
            ]
        }
    ]
    // Add more routes and products as needed
};


const questions = [
    {
        question: "어떤 제품을 찾으십니까?",
        answers: ["성인용 유산균", "어린이용 유산균", "반려동물용 유산균", "발효 음료"]
    },
    {
        question: "어떤 고민이 있으십니까?",
        answers: ["쾌변이 아쉬워요", "장이 불편해요", "기력이 고민이에요", "혈당이 고민이에요"]
    },
    {
        question: "어떤 유산균을 찾으십니까?",
        answers: ["청인을 체험해볼 수 있는 유산균", "발효 한방초 중심의 유산균", "프리/포스트바이오틱스와 유산균", "할인 제품"]
    }
];

const searchInput = document.getElementById('search-input');
const searchResults = document.getElementById('search-results');
const interfaceContainer = document.getElementById('interface-container');

searchInput.addEventListener('input', function() {
    const query = this.value.toLowerCase();
    if (query !== '') {
        const filteredProducts = products2.filter(product => {
            return product.name.toLowerCase().includes(query) || product.keywords.some(keyword => keyword.toLowerCase().includes(query));
        });
        
        if (filteredProducts.length > 0) {
            showResults(filteredProducts);
        } else {
            searchResults.style.display = 'none';
            interfaceContainer.style.maxHeight = 'none';
            interfaceContainer.style.paddingBottom = '20px';
        }
    } else {
        searchResults.style.display = 'none';
        interfaceContainer.style.maxHeight = 'none';
        interfaceContainer.style.paddingBottom = '20px';
    }
});

function showResults(filteredProducts) {
    searchResults.innerHTML = '';
    const productsContainer = document.createElement('div');
    productsContainer.className = 'products-container';
    filteredProducts.slice(0, 2).forEach(product => {
        const productDiv = document.createElement('div');
        productDiv.className = 'product';
        productDiv.innerHTML = `
            <img src="${product.image}" alt="${product.name}" class="product-image2" onclick="window.location.href='https://example1.com'">
            <p class="product-name2">${product.name}</p>
        `;
        productsContainer.appendChild(productDiv);
    });
    searchResults.appendChild(productsContainer);
    
    const actionsDiv = document.createElement('div');
    actionsDiv.className = 'actions';
    actionsDiv.innerHTML = `
        <button class="more-info" onclick="window.location.href='https://example1.com'">... 더 알아보기</button>
        <button class="close-results" onclick="closeResults()">X</button>
    `;
    searchResults.appendChild(actionsDiv);

    searchResults.style.display = 'block';
    interfaceContainer.style.maxHeight = '200vh'; // Adjust as needed to fit content
    interfaceContainer.style.paddingBottom = '40px'; // Add space for the results
}

function closeResults() {
    searchResults.style.display = 'none';
    interfaceContainer.style.maxHeight = 'none';
    interfaceContainer.style.paddingBottom = '20px';
}

document.addEventListener('DOMContentLoaded', function() {
    const whiteLine = document.getElementById('white-line');

    function isElementInViewport(el) {
        const rect = el.getBoundingClientRect();
        return (
            rect.top >= 0 &&
            rect.left >= 0 &&
            rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
            rect.right <= (window.innerWidth || document.documentElement.clientWidth)
        );
    }

    function onScroll() {
        if (isElementInViewport(whiteLine)) {
            whiteLine.classList.add('visible');
            // Remove the event listener once the animation is triggered
            window.removeEventListener('scroll', onScroll);
        }
    }

    // Initial check in case the element is already in the viewport
    onScroll();

    // Listen for scroll events
    window.addEventListener('scroll', onScroll);
    
});

let currentQuestionIndex = 0;
let selectedAnswers = [];

const productList = document.getElementById('product-list');
const questionText = document.getElementById('question-text');
const answerContainer = document.getElementById('answer-container');
const progressBar = document.getElementById('progress');
const goBackButton = document.getElementById('go-back-button');
const recommendationBoxes = document.getElementById('recommendation-boxes');

searchInput.addEventListener('input', function() {
    const query = this.value.toLowerCase();
    productList.innerHTML = '';

    if (query !== '') {
        const filteredProducts = products2.filter(product => {
            return product.keywords.some(keyword => keyword.toLowerCase().includes(query));
        });
        
        if (filteredProducts.length > 0) {
            searchResults.style.display = 'block';
            filteredProducts.forEach(product => {
                const li = document.createElement('li');
                li.textContent = product.name;
                li.onclick = () => {
                    window.location.href = product.link;
                };
                productList.appendChild(li);
            });
        } else {
            searchResults.style.display = 'none';
        }
    } else {
        searchResults.style.display = 'none';
    }
});

document.addEventListener('click', function(event) {
    if (!searchInput.contains(event.target) && !searchResults.contains(event.target)) {
        searchResults.style.display = 'none';
    }
});

window.addEventListener('scroll', function() {
    const blackRectangle = document.getElementById('black-rectangle');
    if (blackRectangle) {
        if (window.scrollY > 100) { // Adjust the value to trigger the animation earlier or later
            blackRectangle.classList.add('visible');
        } else {
            blackRectangle.classList.remove('visible');
        }
    }
});

function loadQuestion(index) {
    const currentQuestion = questions[index];
    questionText.textContent = currentQuestion.question;
    answerContainer.innerHTML = '';

    currentQuestion.answers.forEach(answer => {
        const button = document.createElement('button');
        button.textContent = answer;
        button.onclick = () => {
            if (progressBar.style.width === '100%') return; // Block click if progress is complete

            selectedAnswers[index] = answer;
            if (shouldTerminateEarly(selectedAnswers)) {
                forceProgressBarComplete();
                showRecommendation();
            } else {
                if (currentQuestionIndex < questions.length - 1) {
                    currentQuestionIndex++;
                    loadQuestion(currentQuestionIndex);
                    updateProgressBar();
                } else {
                    showRecommendation();
                    updateProgressBar(true); // Ensure progress bar is complete
                }
            }
            toggleGoBackButton();
        };
        answerContainer.appendChild(button);
    });

    toggleGoBackButton();
}

document.addEventListener('DOMContentLoaded', function() {
    loadQuestion(currentQuestionIndex);
    updateProgressBar();
});

function goBack() {
    if (currentQuestionIndex > 0) {
        currentQuestionIndex--;
        loadQuestion(currentQuestionIndex);
        updateProgressBar();
        goBackButton.textContent = "뒤로 가기";
        goBackButton.onclick = goBack;
    }
}

function updateProgressBar(complete = false) {
    const progressPercentage = complete ? 100 : ((currentQuestionIndex) / questions.length) * 100;
    progressBar.style.width = progressPercentage + '%';
    if (complete) {
        goBackButton.textContent = "처음으로";
        goBackButton.style.backgroundColor = "rgb(211, 20, 35)"
        goBackButton.style.color = "rgb(250, 250, 250)"
        goBackButton.onclick = resetQuestionnaire;
        disableAnswerButtons();
    }
}

function forceProgressBarComplete() {
    progressBar.style.width = '100%';
    goBackButton.textContent = "처음으로";
    goBackButton.style.backgroundColor = "rgb(211, 20, 35)"
    goBackButton.style.color = "rgb(250, 250, 250)"
    goBackButton.onclick = resetQuestionnaire;
    disableAnswerButtons();
}

function toggleGoBackButton() {
    if (currentQuestionIndex > 0 || progressBar.style.width === '100%') {
        goBackButton.style.display = 'block';
    } else {
        goBackButton.style.display = 'none';
    }
}

function resetQuestionnaire() {
    currentQuestionIndex = 0;
    selectedAnswers = [];
    loadQuestion(currentQuestionIndex);
    updateProgressBar();
    goBackButton.textContent = "뒤로 가기";
    goBackButton.style.backgroundColor = "rgb(250,250,250)";
    goBackButton.style.color = "rgb(0, 0, 0)";
    goBackButton.onclick = goBack;
    enableAnswerButtons();

    // Collapse the recommendation section and questionnaire
    const recommendationSection = document.getElementById('product-recommendation');
    recommendationSection.classList.remove('expanded');
    document.getElementById('questionnaire').classList.remove('expanded');
}

function disableAnswerButtons() {
    const buttons = answerContainer.querySelectorAll('button');
    buttons.forEach(button => button.disabled = true);
}

function enableAnswerButtons() {
    const buttons = answerContainer.querySelectorAll('button');
    buttons.forEach(button => button.disabled = false);
}

function shouldTerminateEarly(answers) {
    const conditions = [
        ["어린이용 유산균"],
        ["반려동물용 유산균"],
        ["발효 음료"],
        ["성인용 유산균", "쾌변이 아쉬워요"],
        ["성인용 유산균", "기력이 고민이에요"],
        ["성인용 유산균", "혈당이 고민이에요"]
    ];

    return conditions.some(condition => {
        return condition.every((value, index) => answers[index] === value);
    });
}

function getRecommendationRoute(answers) {
    if (answers.includes("쾌변이 아쉬워요")) return "route1";
    if (answers.includes("어린이용 유산균")) return "route2";
    // Add more conditions for different routes
    return "default";
}


function showRecommendation() {
    const recommendationSection = document.getElementById('product-recommendation');
    const recommendationBoxes = document.getElementById('recommendation-boxes');
    const route = getRecommendationRoute(selectedAnswers);
    const selectedGroups = products[route] || products.default;

    recommendationBoxes.innerHTML = '';

    selectedGroups.forEach(group => {
        const groupDiv = document.createElement('div');
        groupDiv.className = 'group';

        const groupTitle = document.createElement('div');
        groupTitle.className = 'group-title';
        groupTitle.innerHTML = `
            <p>${group.group}</p>
            <div class="horizontal-line"></div>
        `;

        groupDiv.appendChild(groupTitle);

        group.items.forEach((product, index) => {
            const box = document.createElement('a'); // Use 'a' instead of 'div'
            box.className = 'box';
            box.href = product.link; // Add link to the box
            box.target = '_blank'; // Open link in a new tab
            box.innerHTML = `
                <img src="${product.image}" alt="${product.name}" class="product-image">
                <p class="product-name">${product.name}</p>
                <p>${product.description}</p>
            `;
            groupDiv.appendChild(box);
        });

        recommendationBoxes.appendChild(groupDiv);
    });

    recommendationSection.classList.add('expanded');
    recommendationSection.scrollIntoView({ behavior: 'smooth' });
    forceProgressBarComplete(); // Ensure progress bar is set to 100% when showing recommendation
}

function scrollToQuestionnaire() {
    const questionnaireSection = document.getElementById('questionnaire-section');
    questionnaireSection.scrollIntoView({ behavior: 'smooth' });
}

// Initialize the first question
loadQuestion(currentQuestionIndex);
updateProgressBar();

function scrollToTop() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
}

document.addEventListener('DOMContentLoaded', function() {
    const animatedElements = document.querySelectorAll('.info-image, .info-text, .info-text2');

    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('show');
            } else {
                entry.target.classList.remove('show');
            }
        });
    }, {
        threshold: 0.1
    });

    animatedElements.forEach(element => {
        element.classList.add('animated');
        observer.observe(element);
    });
});