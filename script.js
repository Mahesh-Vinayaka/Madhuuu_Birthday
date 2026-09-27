// ================================
// BACKGROUND MUSIC
// ================================

let backgroundMusic = new Audio("assets/music/bdmusic.mpeg");

backgroundMusic.loop = false;
backgroundMusic.volume = 0.5;

function startBackgroundMusic() {
    if (backgroundMusic.paused) {
        backgroundMusic.play().catch(() => {
            console.log("Music waiting for user interaction.");
        });
    }
}
function createFloatingHearts() {

    const heartsContainer = document.createElement("div");

    heartsContainer.className = "hearts";

    heartsContainer.innerHTML = `
        <span>♥</span>
        <span>♥</span>
        <span>♥</span>
        <span>♥</span>
        <span>♥</span>
        <span>♥</span>
        <span>♥</span>
        <span>♥</span>
        <span>♥</span>
        <span>♥</span>
    `;

    document.body.appendChild(heartsContainer);
}
let noCount = 0;

const noMessages = [
    "Hmmmm... wrong answer 😌💙 Please choose YES!",
    "Ayyooo Madhuuu 😭 Please choose YES!",
    "Please chooose YESSS... Kajal is waiting for you 👀💄",
    "Choose YESSS! Mascara offer is still available 😂💙",
    "Think carefullyyyy... YES = Ice Cream 🍦💗",
    "Madhuuuuu 😭 Why are you still pressing NO???",
    "Okay okayyy... PLEASE CHOOSE YESSS 🥺💙"
];

function startSurprise() {

    document.body.innerHTML = `
        <div class="warning-page">

            <div class="warning-card">

                <div class="warning-icon">💗</div>

                <p class="warning-small">
                    ⚠️ One tiny confirmation before entering...
                </p>

                <h1>
                    Waittt Kuttymaaaaa...
                </h1>

                <p class="question">
                    Are you really loving me? 🥺💙
                </p>

                <div class="answer-buttons">

                    <button class="yes-btn" onclick="chooseYes()">
                        YES 💙
                    </button>

                    <button class="no-btn" onclick="chooseNo()">
                        NO 😏
                    </button>

                </div>

                <p id="no-message"></p>

            </div>

        </div>
    `;
    createFloatingHearts();
}

function chooseYes() {

    document.body.innerHTML = `
        <div class="success-page">

            <div class="success-overlay"></div>

            <div class="success-card">

                <div class="success-heart">💙</div>

                <h1>I Knew Ittt! Babyyyyy💙</h1>

                <p>
                    10000000000000 kisses for youuuu ummahhhh 😘💗
                </p>

                <span>
                    Nowww... your real surprise begins ✨
                </span>

                <button onclick="goToNextPage()">
                    Continue 💌
                </button>

            </div>

        </div>
    `;
    createFloatingHearts();
}

function chooseNo() {

    const message = document.getElementById("no-message");

    if (noCount < noMessages.length) {
        message.textContent = noMessages[noCount];
    } else {
        message.textContent =
            "Okayyy enoughhh 😭 Please choose YES, Madhuuu! 💙";
    }

    noCount++;
}

function goToNextPage() {

    document.body.innerHTML = `

        <div class="letter-page">

            <div class="letter-paper">

                <div class="letter-decoration top">♡ ✦ ♡</div>

                <h1>For Youuu 💙🦋</h1>

                <div class="letter-content">
                    <span id="typed-letter"></span>
                    <span class="typing-cursor">|</span>
                </div>

                <div class="letter-decoration bottom">♡ ✦ ♡</div>

                <button class="letter-next-btn" onclick="nextFromLetter()">
                    Continue 💌
                </button>

            </div>

        </div>

    `;

    createFloatingHearts();

    typeLetter();
}
const letterText = `Dearrrr Myy Thangamaaana Ponnuuu 💙🦋,

Its beeeeen 4 years, 1680 days, 55 months, 240 weeks, 40,320 hours, 2,419,200 minutes, 145,152,000 seconds and still counting, from where my life turns intoo colourfull,, a beautifulll innocent girl added beautifull colours to my lifeeee where my real love starts in my life ,,,, yeah it was youu!! it is youuu!!! & it will be alwayssss one and onlyyyy youuuu my babygirll!!!

Todayyyyy is my babyygirl's Birthdayyyyyyy

"Wishinggggg youuuuu a veryyyyyyy veryyyyyyyyyy happiestttttt birthdayyyyyyyy Myyyyyy Thangapulllaaaaaaa"

Life longggg ipdiyeeee santhosamaa happy ah sirichituuuuu iru daaaaa maaaaaa ,, i will alwayssss praysss for you to achieve yours goals,,,,

im promissing , i will be alwayssssssss withh youuuuu in everyyyy situation even when the whole world is against youuu myy kanmaniyeeee,,,,

Happpyyyyy Birthdayyyyy Diiiiiiiiiiiiii kuttymaaaaaaaaaaaaaa,

I Loveeeeeeeeeeeeeeeeeee Youuuuuuuuuuuuuuuuuuuu Diiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiii Myyy Thangamaanaaaa ponnuuuuu💙🦋,,`;

function typeLetter() {

    const textElement = document.getElementById("typed-letter");

    let index = 0;

    function type() {

        if (index < letterText.length) {

            textElement.textContent += letterText.charAt(index);

            index++;

            setTimeout(type, 35);

        } else {

            document.querySelector(".typing-cursor").style.display = "none";
        }
    }

    type();
}
function nextFromLetter() {
    document.body.innerHTML = `
        <div class="page4">

            <div class="page4-overlay"></div>

            <div class="page4-content">

                <p class="page4-small">✨ A Little More About Us ✨</p>

                <h1>Choose Your Surprise 💙</h1>

                <p class="page4-subtitle">
                    Three little doors... three beautiful moments 🦋
                </p>

                <div class="cards-container">

                    <div class="surprise-card" onclick="openLovePower()">
                        <div class="card-icon">💙</div>
                        <h2>Check Love Power</h2>
                        <p>Let's see how strong this love really is...</p>
                        <span>Open 💌</span>
                    </div>

                    <div class="surprise-card" onclick="openMemories()">
                        <div class="card-icon">🦋</div>
                        <h2>Our Cute Memories</h2>
                        <p>A little journey through our beautiful memories...</p>
                        <span>Open 📖</span>
                    </div>

                </div>

            </div>

        </div>
    `;

    createFloatingHearts();
}
function openLovePower() {
    showLoveQuiz();
}
function showLoveQuiz() {

    document.body.innerHTML = `
        <div class="love-quiz-page">

            <div class="love-quiz-overlay"></div>

            <div class="love-quiz-container">

                <p class="quiz-small">💙 A Little Love Test 💙</p>

                <h1>Check Love Power</h1>

                <p class="quiz-intro">
                    Let's see how well you know our little world... 🦋
                </p>

                <div class="quiz-progress">
                    <span id="question-number">Question 1 of 15</span>
                    <div class="progress-track">
                        <div id="progress-bar"></div>
                    </div>
                </div>

                <div id="quiz-box"></div>

                <button id="next-question-btn"
                        class="quiz-next-btn"
                        onclick="nextQuestion()">
                    Next 💙
                </button>

            </div>

        </div>
    `;

    createFloatingHearts();

    currentQuestion = 0;
    userAnswers = [];

    showQuestion();
}
const loveQuestions = [

    {
        question: "When Mahesh Texted you 1st time? 🤔",
        options: [
            "feb 22 2022",
            "feb 21 2022",
            "feb 24 2022",
            "feb 30 2022"
        ],
        answer: [1]
    },

    {
        question: "what mahesh ask u everytime?",
        options: [
            "hug",
            "liplock",
            "holding hands",
            "bike ride"
        ],
        answer: [1]
    },

    {
        question: "what hurts mahesh more ? 👀",
        options: [
            "fighting with him",
            "talking to other boys",
            "ni8 pesama porathu",
            "ithuvarai hurt pannathe ila"
        ],
        answer: [2]
    },

    {
        question: "What makes our conversations special in Moody times? 💬",
        options: [
            "fantasies",
            "Nudes",
            "watching videos",
            "All of the above 🔥"
        ],
        answer: [3]
    },

    {
        question: "Who is more Arivaaali? 🧐",
        options: [
            "Madhu",
            "Mahesh",
            "Both of us",
            "rendu perume ila😂"
        ],
        answer: [1]
    },

    {
        question: "What's the best part of spending time together? 🦋",
        options: [
            "Laughing together",
            "Talking about random things",
            "Creating memories",
            "Everything 💙"
        ],
        answer: [3]
    },

    {
        question: "Who always win a 'who loves more' competition? 🏆",
        options: [
            "Mahesh",
            "Madhu",
            "It's impossible to decide",
            "both"
        ],
        answer: [0]
    },

    {
        question: "What Mahesh wants from Madhu'? 👀",
        options: [
            "phone calls and chat",
            "Romance 24/7",
            "love and care for lifetime",
            "princess treatment"
        ],
        answer: [2]
    },

    {
        question: "Who has more egoo 😤",
        options: [
            "Mahesh",
            "Definitely Madhuu",
            "no one",
            "no answer"
        ],
        answer: [1]
    },

    {
        question: "Mahesh's upi pin number",
        options: [
            "2822",
            "2228",
            "8222",
            "2282"
        ],
        answer: [0]
    },

    {
        question: "What makes a normal day special for Mahesh? ✨",
        options: [
            "A simple conversation",
            "surprise Nude Snap",
            "A funny moment",
            "sending him money"
        ],
        answer: [1]
    },

    {
        question: "who is more romantic in bed? 🦋",
        options: [
            "Madhu",
            "Mahesh",
            "both🔥",
            "no answer"
        ],
        answer: [2]
    },

    {
        question: "Who is more beautifull ? 😏",
        options: [
            "not both",
            "Maheshhh",
            "Madhuuuu",
            "no answer"
        ],
        answer: [2]
    },

    {
        question: "Who is more handsomeee? ❤️‍🔥",
        options: [
            "Maheshhhh",
            "VIP OFFICIAL",
            "Maheshhhh Vinayakaaa",
            "option 3"
        ],
        answer: [0,1,2,3]
    },

    {
        question: "Final question... How powerful is our love? 💙",
        options: [
            "100%",
            "1000%",
            "Too much to calculate",
            "INFINITY ♾️"
        ],
        answer: [3]
    }

];let currentQuestion = 0;
let userAnswers = [];

function showQuestion() {

    const questionData = loveQuestions[currentQuestion];

    document.getElementById("question-number").textContent =
        `Question ${currentQuestion + 1} of ${loveQuestions.length}`;

    document.getElementById("progress-bar").style.width =
        `${((currentQuestion + 1) / loveQuestions.length) * 100}%`;

    const quizBox = document.getElementById("quiz-box");

    quizBox.innerHTML = `
        <div class="question-card">

            <h2>${questionData.question}</h2>

            <div class="options-container">

                ${questionData.options.map((option, index) => `
                    <button
                        class="quiz-option"
                        onclick="selectAnswer(${index})"
                        id="option-${index}">
                        <span class="option-letter">
                            ${String.fromCharCode(65 + index)}
                        </span>
                        ${option}
                    </button>
                `).join("")}

            </div>

        </div>
    `;

    document.getElementById("next-question-btn").textContent =
        currentQuestion === loveQuestions.length - 1
        ? "Finish Quiz 💙"
        : "Next 💙";
}


function selectAnswer(index) {

    userAnswers[currentQuestion] = index;

    const options = document.querySelectorAll(".quiz-option");

    options.forEach(option => {
        option.classList.remove("selected");
    });

    document
        .getElementById(`option-${index}`)
        .classList.add("selected");
}


function nextQuestion() {

    if (userAnswers[currentQuestion] === undefined) {

        const quizBox = document.getElementById("quiz-box");

        quizBox.classList.remove("shake");

        void quizBox.offsetWidth;

        quizBox.classList.add("shake");

        return;
    }

    if (currentQuestion < loveQuestions.length - 1) {

        currentQuestion++;

        showQuestion();

    } else {

        showScore();

    }
}function showScore() {

    let score = 0;

    loveQuestions.forEach((question, index) => {

        if (question.answer.includes(userAnswers[index])) {
    score++;
}
    });

    document.body.innerHTML = `
        <div class="love-score-page">

            <div class="love-quiz-overlay"></div>

            <div class="score-card">

                <div class="score-icon">💙</div>

                <p class="quiz-small">✨ Quiz Completed ✨</p>

                <h1>Your Love Score</h1>

                <div class="score-number">
                    ${score}
                    <span>/ ${loveQuestions.length}</span>
                </div>

                <p class="score-message">
                    ${getScoreMessage(score)}
                </p>

                <div class="score-divider">♡ ✦ ♡</div>

                <p class="ready-text">
                    Buttt... the real test is still waiting 👀
                </p>

                <button class="love-percentage-btn"
                        onclick="showLoveMeter()">
                    Check Love Percentage 💙
                </button>

            </div>

        </div>
    `;

    createFloatingHearts();
}


function getScoreMessage(score) {

    if (score === 15) {
        return "Perfecttt! You know everythinggg! 🥹💙";
    }

    if (score >= 12) {
        return "Awww... someone knows this little world pretty well! 🦋";
    }

    if (score >= 8) {
        return "Not bad at all... but there's still more to discover! 😌💙";
    }

    return "Hmmmm... looks like we need a few more memories together! 😂💙";
}
function openMemories() {
    alert("Our Cute Memories page coming next 🦋");
}
function showLoveMeter() {
    document.body.innerHTML = `
        <div class="love-meter-page">
            <div class="love-meter-overlay"></div>

            <div class="love-meter-container">

                <p class="meter-small">💙 THE FINAL LOVE TEST 💙</p>

                <h1 id="meter-title">
                    Calculating Our Love...
                </h1>

                <p id="meter-status">
                    Starting the love measurement... 🦋
                </p>

                <!-- HEART ANIMATION -->
                <div class="heart-animation">

                    <svg
                        class="heart-svg"
                        viewBox="0 0 200 180"
                        xmlns="http://www.w3.org/2000/svg"
                    >

                        <defs>

                            <!-- Heart shape -->
                            <clipPath id="heartClip">
                                <path
                                    d="
                                    M100 165
                                    C90 155 20 105 20 55
                                    C20 15 70 5 100 40
                                    C130 5 180 15 180 55
                                    C180 105 110 155 100 165
                                    Z
                                    "
                                />
                            </clipPath>

                            <!-- Blue glow -->
                            <filter id="blueGlow">
                                <feGaussianBlur
                                    stdDeviation="5"
                                    result="blur"
                                />
                                <feMerge>
                                    <feMergeNode in="blur"/>
                                    <feMergeNode in="SourceGraphic"/>
                                </feMerge>
                            </filter>

                        </defs>

                        <!-- Empty heart -->
                        <path
                            class="heart-outline"
                            d="
                            M100 165
                            C90 155 20 105 20 55
                            C20 15 70 5 100 40
                            C130 5 180 15 180 55
                            C180 105 110 155 100 165
                            Z
                            "
                        />

                        <!-- Blue filling -->
                        <g clip-path="url(#heartClip)">

                            <rect
                                id="heart-fill"
                                x="0"
                                y="180"
                                width="200"
                                height="180"
                                class="heart-fill"
                            />

                            <!-- Waves -->
                            <path
                                id="wave1"
                                class="heart-wave wave-one"
                                d="
                                M0 120
                                Q25 105 50 120
                                T100 120
                                T150 120
                                T200 120
                                V180
                                H0
                                Z
                                "
                            />

                            <path
                                id="wave2"
                                class="heart-wave wave-two"
                                d="
                                M0 130
                                Q25 115 50 130
                                T100 130
                                T150 130
                                T200 130
                                V180
                                H0
                                Z
                                "
                            />

                        </g>

                        <!-- Heart highlight -->
                        <path
                            class="heart-highlight"
                            d="
                            M65 48
                            C48 35 35 45 35 60
                            "
                        />

                    </svg>

                    <div
                        id="percentage-number"
                        class="percentage-number"
                    >
                        0%
                    </div>

                </div>

                <!-- Small loading dots -->
                <div class="loading-dots">
                    <span></span>
                    <span></span>
                    <span></span>
                </div>

                <div
                    id="infinity-result"
                    class="infinity-result"
                >

                    <div class="infinity-symbol">∞</div>

                    <h2>LOVE = INFINITY</h2>

                    <p>
                        Some things simply cannot be measured... 💙
                    </p>

                    <button onclick="nextFromLetter()">
                        Back to Surprises 💌
                    </button>

                </div>

            </div>
        </div>
    `;

    createFloatingHearts();

    animateLoveMeter();
}


async function animateLoveMeter() {

    const fill = document.getElementById("heart-fill");
    const wave1 = document.getElementById("wave1");
    const wave2 = document.getElementById("wave2");

    const number =
        document.getElementById("percentage-number");

    const status =
        document.getElementById("meter-status");

    const heart =
        document.querySelector(".heart-svg");

    const infinity =
        document.getElementById("infinity-result");

    infinity.style.display = "none";

    /*
        These are intentionally not smooth 0 → 100 values.

        The animation pauses at certain numbers,
        giving the feeling that the system is
        actually calculating.
    */

    const stages = [
        { value: 3, delay: 900 },
        { value: 7, delay: 1100 },
        { value: 12, delay: 1300 },

        { value: 18, delay: 900 },
        { value: 18, delay: 1200 },

        { value: 27, delay: 1000 },
        { value: 35, delay: 4500 },

        { value: 42, delay: 900 },
        { value: 50, delay: 5000 },

        { value: 58, delay: 1000 },
        { value: 66, delay: 3800 },

        { value: 72, delay: 1600 },
        { value: 79, delay: 4000 },

        { value: 86, delay: 5000 },
        { value: 91, delay: 6000 },

        { value: 95, delay: 7000 },
        { value: 98, delay: 10000 },

        { value: 100, delay: 2000 }
    ];


    for (const stage of stages) {

        const value = stage.value;

        /*
            Fill the heart.

            SVG coordinates:
            bottom = 180
            top = 0

            So percentage determines
            how high the blue liquid rises.
        */

        const fillHeight = 180 * (value / 100);

        const fillY = 180 - fillHeight;

        fill.animate(
            [
                {
                    y: fill.getAttribute("y")
                },
                {
                    y: fillY
                }
            ],
            {
                duration: 800,
                easing: "ease-out",
                fill: "forwards"
            }
        );

        fill.setAttribute("y", fillY);


        /*
            Move the waves together with
            the liquid level.
        */

        const waveY = 120 - (value * 0.95);

        wave1.style.transform =
            `translateY(${waveY}px)`;

        wave2.style.transform =
            `translateY(${waveY + 8}px)`;


        /*
            Number animation
        */

        number.textContent = value + "%";


        /*
            Different messages during calculation
        */

        if (value < 15) {

            status.textContent =
                "Hmmmm... calculating... 🦋";

        } else if (value < 30) {

            status.textContent =
                "Something is definitely happening... 💙";

        } else if (value < 50) {

            status.textContent =
                "Love level increasing... ✨";

        } else if (value === 50) {

            status.textContent =
                "50%... Waittt, this is stronger than expected 👀";

        } else if (value < 70) {

            status.textContent =
                "The heart is getting full... 💙";

        } else if (value < 90) {

            status.textContent =
                "Warning... love level is unusually high 😳";

        } else if (value < 100) {

            status.textContent =
                "Almost full... something is happening... 🥹";

        } else {

            status.textContent =
                "Maximum measurable love reached...";
        }


        /*
            Heart pulse
        */

        heart.classList.remove("heart-pulse");

        void heart.offsetWidth;

        heart.classList.add("heart-pulse");


        /*
            Wait before next stage
        */

        await new Promise(resolve =>
            setTimeout(resolve, stage.delay)
        );
    }


    /*
        100% reached.
        Give the heart a moment.
    */

    await new Promise(resolve =>
        setTimeout(resolve, 1200)
    );


    /*
        Final transformation
    */

    number.classList.add("percentage-fade");

    heart.classList.add("final-heart");


    status.textContent =
        "ERROR: Love level cannot be measured! 🥹💙";


    await new Promise(resolve =>
        setTimeout(resolve, 1200)
    );


    /*
        Replace 100% with infinity
    */

    number.textContent = "∞%";

    number.classList.remove("percentage-fade");

    number.classList.add("infinity-animation");


    /*
        Final message
    */

    setTimeout(() => {

        infinity.style.display = "block";

    }, 800);
}
function openMemories() {

    document.body.innerHTML = `

        <div class="memories-page">

            <div class="memories-overlay"></div>

            <!-- Decorative floating elements -->
            <div class="memory-decor decor-one">♡</div>
            <div class="memory-decor decor-two">🦋</div>
            <div class="memory-decor decor-three">✦</div>
            <div class="memory-decor decor-four">♡</div>
            <div class="memory-decor decor-five">🦋</div>

            <div class="memories-container">

                <div class="memories-heading">

                    <p class="memory-small">
                        ✦ A LITTLE JOURNEY THROUGH US ✦
                    </p>

                    <h1>
                        Our Cute Memories
                    </h1>

                    <p class="memory-subtitle">
                        30 little moments... one beautiful story 🦋
                    </p>

                </div>


                <!-- MEMORY FRAME -->

                <div class="memory-stage">

                    <button
                        class="memory-arrow left-arrow"
                        onclick="previousMemory()"
                        aria-label="Previous memory"
                    >
                        ‹
                    </button>


                    <div class="memory-polaroid">

                        <div class="memory-photo-frame">

                            <img
                                id="memory-image"
                                src="assets/memories/m1.jpg"
                                alt="Memory 1"
                            >

                            <div class="photo-shine"></div>

                        </div>


                        <div class="memory-caption-area">

                            <div class="caption-decoration">
                                ♡ ✦ ♡
                            </div>

                            <p
                                id="memory-caption"
                                class="memory-caption"
                            >
                                This is where our little story begins... 💙
                            </p>

                        </div>

                    </div>


                    <button
                        class="memory-arrow right-arrow"
                        onclick="nextMemory()"
                        aria-label="Next memory"
                    >
                        ›
                    </button>

                </div>


                <!-- PROGRESS -->

                <div class="memory-progress">

                    <span id="memory-current">
                        01
                    </span>

                    <div class="memory-progress-line">
                        <div
                            id="memory-progress-fill"
                        ></div>
                    </div>

                    <span>
                        30
                    </span>

                </div>


                <div class="memory-counter">
                    Memory <span id="memory-number">01</span> of 30
                </div>


                <!-- DOTS -->

                <div
                    class="memory-dots"
                    id="memory-dots"
                ></div>


                <p class="memory-hint">
                    ✨ Every picture holds a little piece of us ✨
                </p>

            </div>

        </div>
    `;

    createFloatingHearts();

    createMemoryDots();

    currentMemory = 0;

    showMemory(currentMemory);
}
let currentMemory = 0;


/* =========================================
   30 MEMORY DATA
========================================= */

const memories = [

    {
        image: "assets/memories/m1.jpeg",
        caption: "The only moon that made my life brighter, This is where our little story begins... 💙"
    },

    {
        image: "assets/memories/m2.jpeg",
        caption: "Once uponn a timeeeeeee... 🦋"
    },

    {
        image: "assets/memories/m3.jpeg",
        caption: "The bravest and best desicion I have done.. ✨"
    },

    {
        image: "assets/memories/m4.jpeg",
        caption: "ore oru vaarthai, enga kondu vanthu niruthiruka paathiya... 💙"
    },

    {
        image: "assets/memories/m5.jpeg",
        caption: "one and only your lifetime Frauddddd....😁 "
    },

    {
        image: "assets/memories/m6.jpeg",
        caption: "indru..netru..naalaii,,Foreverrr. 🦋"
    },

    {
        image: "assets/memories/m7.jpeg",
        caption: "Read, smile and happy...."
    },

    {
        image: "assets/memories/m8.jpeg",
        caption: "olungaa read pannu diiiii.... ✨"
    },

    {
        image: "assets/memories/m9.jpeg",
        caption: "cringeee pro maxxx but cuteee....😂♡"
    },

    {
        image: "assets/memories/m10.jpeg",
        caption: "I loving her from her school days.... 🦋"
    },

    {
        image: "assets/memories/m11.jpeg",
        caption: " ithulaaa enna diiii irukuuuu, itha poi nallaa irukunu...."
    },

    {
        image: "assets/memories/m12.jpeg",
        caption: "The 1st and Best pic of all time....💙🤍"
    },

    {
        image: "assets/memories/m13.jpeg",
        caption: "My heartbeattt comess from youuuuu 🥹"
    },

    {
        image: "assets/memories/m14.jpeg",
        caption: "En neeelothiiiiiiii🤍💙"
    },

    {
        image: "assets/memories/m15.jpeg",
        caption: "holding with the safest handd... 🦋"
    },

    {
        image: "assets/memories/m16.jpeg",
        caption: "The Iceee I alwayssss wish forrr ♡"
    },

    {
        image: "assets/memories/m17.jpeg",
        caption: "No egoo,, i can live in her feet..💙✨"
    },

    {
        image: "assets/memories/m18.jpeg",
        caption: "That look where my eyes never closes....😍💙"
    },

    {
        image: "assets/memories/m19.jpeg",
        caption: "cutieeee,, nalla vela conductor erakii vidala....😂🦋"
    },

    {
        image: "assets/memories/m20.jpeg",
        caption: "kadalaa maavu faceee packkkk....😂 ♡"
    },

    {
        image: "assets/memories/m21.jpeg",
        caption: "1st raillove payanammmm....💙"
    },

    {
        image: "assets/memories/m22.jpeg",
        caption: "Safesttt Placeee in the Earth....🫂🫶🫂"
    },

    {
        image: "assets/memories/m23.jpeg",
        caption: "Maamaa Machannnn....❤️‍🔥"
    },

    {
        image: "assets/memories/m24.jpeg",
        caption: "Kaadhallll Kirukkalllll....💙"
    },

    {
        image: "assets/memories/m25.jpeg",
        caption: "Megangalll vekkapatta tharunam.... ♡"
    },

    {
        image: "assets/memories/m26.jpeg",
        caption: "Ennaaa Oru Thairiyammmmm....😌"
    },

    {
        image: "assets/memories/m27.jpeg",
        caption: "Favvvv selfieeee of Maheshhhhh ....😍🤍"
    },

    {
        image: "assets/memories/m28.jpeg",
        caption: "Favvvvvv selfieeee of Madhuuuuuu....💙"
    },

    {
        image: "assets/memories/m29.jpeg",
        caption: "Possessiveness Proooo Maxxxxxxx....♡"
    },

    {
        image: "assets/memories/m30.jpeg",
        caption: "1st theater dateeee ,,will continueee foreverrr🥹💙"
    }

];


/* =========================================
   CREATE DOTS
========================================= */

function createMemoryDots() {

    const dotsContainer =
        document.getElementById("memory-dots");

    dotsContainer.innerHTML = "";

    memories.forEach((memory, index) => {

        const dot =
            document.createElement("span");

        dot.className = "memory-dot";

        if (index === 0) {
            dot.classList.add("active");
        }

        dot.onclick = () => {

            currentMemory = index;

            showMemory(currentMemory);

        };

        dotsContainer.appendChild(dot);
    });
}


/* =========================================
   SHOW MEMORY
========================================= */

function showMemory(index) {

    const image =
        document.getElementById("memory-image");

    const caption =
        document.getElementById("memory-caption");

    const number =
        document.getElementById("memory-number");

    const current =
        document.getElementById("memory-current");

    const progress =
        document.getElementById("memory-progress-fill");

    const dots =
        document.querySelectorAll(".memory-dot");


    /*
        Exit animation
    */

    image.classList.remove("memory-image-enter");
    caption.classList.remove("caption-enter");

    void image.offsetWidth;


    /*
        Update image
    */

    image.src = memories[index].image;

    image.alt =
        `Memory ${index + 1}`;


    caption.textContent =
        memories[index].caption;


    const displayNumber =
        String(index + 1).padStart(2, "0");


    number.textContent =
        displayNumber;

    current.textContent =
        displayNumber;


    /*
        Progress
    */

    const percentage =
        ((index + 1) / memories.length) * 100;

    progress.style.width =
        percentage + "%";


    /*
        Active dot
    */

    dots.forEach(dot =>
        dot.classList.remove("active")
    );

    if (dots[index]) {
        dots[index].classList.add("active");
    }


    /*
        Enter animation
    */

    setTimeout(() => {

        image.classList.add("memory-image-enter");

        caption.classList.add("caption-enter");

    }, 30);


    /*
        Disable arrows at edges
    */

    const leftArrow =
        document.querySelector(".left-arrow");

    const rightArrow =
        document.querySelector(".right-arrow");


    leftArrow.classList.toggle(
        "disabled",
        index === 0
    );


    rightArrow.classList.toggle(
        "disabled",
        index === memories.length - 1
    );
}


/* =========================================
   NEXT
========================================= */

function nextMemory() {

    if (currentMemory < memories.length - 1) {

        currentMemory++;

        showMemory(currentMemory);

    } else {

        // Do nothing on Memory 30
        // The ending is already displayed beside it.

    }
}

/* =========================================
   PREVIOUS
========================================= */

function previousMemory() {

    if (currentMemory > 0) {

        currentMemory--;

        showMemory(currentMemory);

    }
}


/* =========================================
   FINAL MEMORY SCREEN
========================================= */

function showMemory(index) {

    const image = document.getElementById("memory-image");
    const caption = document.getElementById("memory-caption");
    const number = document.getElementById("memory-number");
    const current = document.getElementById("memory-current");
    const progress = document.getElementById("memory-progress-fill");
    const dots = document.querySelectorAll(".memory-dot");
    const stage = document.querySelector(".memory-stage");

    image.classList.remove("memory-image-enter");
    caption.classList.remove("caption-enter");

    void image.offsetWidth;

    image.src = memories[index].image;
    image.alt = `Memory ${index + 1}`;
    caption.textContent = memories[index].caption;

    const displayNumber = String(index + 1).padStart(2, "0");

    number.textContent = displayNumber;
    current.textContent = displayNumber;

    const percentage =
        ((index + 1) / memories.length) * 100;

    progress.style.width = percentage + "%";

    dots.forEach(dot =>
        dot.classList.remove("active")
    );

    if (dots[index]) {
        dots[index].classList.add("active");
    }

    setTimeout(() => {
        image.classList.add("memory-image-enter");
        caption.classList.add("caption-enter");
    }, 30);


    /* ================================
       MEMORY 30 → SIDE ENDING
       ================================ */

    const oldEnding =
        document.querySelector(".memory-side-ending");

    if (oldEnding) {
        oldEnding.remove();
    }

    if (index === memories.length - 1) {

        stage.classList.add("memory-final-stage");

        const ending = document.createElement("div");

        ending.className = "memory-side-ending";

        ending.innerHTML = `

            <div class="side-ending-butterfly">
                🦋
            </div>

            <div class="side-ending-hearts">
                ♡ ✦ ♡
            </div>

            <h2>
                Our Story<br>
                Continues...
            </h2>

            <p>
                30 memories captured here,
                but countless more are waiting
                to be created. 💙
            </p>

            <span>
                And this is only one chapter... ✨
            </span>

            <button
                class="side-back-button"
                onclick="nextFromLetter()"
            >
                Back to Surprises 💌
            </button>
        `;

        stage.appendChild(ending);

    } else {

        stage.classList.remove("memory-final-stage");

    }


    /* ================================
       ARROWS
       ================================ */

    const leftArrow =
        document.querySelector(".left-arrow");

    const rightArrow =
        document.querySelector(".right-arrow");

    leftArrow.classList.toggle(
        "disabled",
        index === 0
    );

    rightArrow.classList.toggle(
        "disabled",
        index === memories.length - 1
    );
}

/* =========================================
   RESTART MEMORIES
========================================= */

function openMemoriesAgain() {

    openMemories();

}
function startMusicAndSurprise() {

    startBackgroundMusic();

    startSurprise();

}