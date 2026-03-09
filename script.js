function showAsk() {
    document.getElementById("home").style.display = "none";
    document.getElementById("askSection").style.display = "block";
    document.getElementById("bibleSection").style.display = "none";
    document.getElementById("readerSection").style.display = "none";
}

function showBible() {
    document.getElementById("home").style.display = "none";
    document.getElementById("askSection").style.display = "none";
    document.getElementById("bibleSection").style.display = "block";
    document.getElementById("readerSection").style.display = "none";
}

function showReader() {
    document.getElementById("home").style.display = "none";
    document.getElementById("askSection").style.display = "none";
    document.getElementById("bibleSection").style.display = "none";
    document.getElementById("readerSection").style.display = "block";
    loadBooks();
}

function goHome() {
    document.getElementById("home").style.display = "block";
    document.getElementById("askSection").style.display = "none";
    document.getElementById("bibleSection").style.display = "none";
    document.getElementById("readerSection").style.display = "none";
}

const topics = [
    {
        keywords: ["lust", "temptation", "desire"],
        verse: "Matthew 5:28",
        text: "But I tell you that anyone who looks at a woman lustfully has already committed adultery with her in his heart.",
        explanation: "Jesus teaches that sin begins in the heart and mind, not just in actions. Lust treats people as objects rather than honoring them as God's creation.",
        guidance: "Guard your thoughts and what you watch. Focus on respecting others and building healthy relationships based on love, not lust."
    },
    {
        keywords: ["anger", "mad", "frustrated"],
        verse: "James 1:19-20",
        text: "My dear brothers and sisters, take note of this: Everyone should be quick to listen, slow to speak and slow to become angry, because human anger does not produce the righteousness that God desires.",
        explanation: "Anger itself isn't always wrong, but uncontrolled anger leads to words and actions we regret. God wants us to respond thoughtfully, not react emotionally.",
        guidance: "When you feel angry, pause and take deep breaths. Ask yourself: 'What would help this situation?' Respond with kindness when possible."
    },
    {
        keywords: ["fail", "failure", "hate myself", "disappointed", "mess up"],
        verse: "Romans 8:1",
        text: "Therefore, there is now no condemnation for those who are in Christ Jesus.",
        explanation: "Failure does not define your worth. God offers forgiveness and a fresh start. Even when you stumble, you are not condemned or rejected.",
        guidance: "Learn from your mistake, ask for forgiveness if needed, and focus on growing. Every person who ever did anything great failed many times first."
    },
    {
        keywords: ["forgive", "forgiveness", "hurt", "someone wronged me"],
        verse: "Ephesians 4:32",
        text: "Be kind and compassionate to one another, forgiving each other, just as in Christ God forgave you.",
        explanation: "Forgiveness is not about pretending something didn't hurt. It's about releasing the burden of anger and trusting God with justice.",
        guidance: "Forgiveness is a process. Start by praying for the person who hurt you, even if you don't feel it yet. This helps your own heart heal."
    },
    {
        keywords: ["jealous", "jealousy", "envy", "compare"],
        verse: "Proverbs 14:30",
        text: "A heart at peace gives life to the body, but envy rots the bones.",
        explanation: "Jealousy and comparison steal your joy and peace. They make you focus on what others have instead of being grateful for your own blessings.",
        guidance: "Practice gratitude daily. Write down three things you're thankful for. Celebrate others' success instead of comparing yourself to them."
    },
    {
        keywords: ["lonely", "alone", "isolated", "no friends"],
        verse: "Deuteronomy 31:6",
        text: "Be strong and courageous. Do not be afraid or terrified because of them, for the Lord your God goes with you; he will never leave you nor forsake you.",
        explanation: "Even when you feel alone, God promises to be with you. Loneliness is a feeling, but God's presence is a fact.",
        guidance: "Reach out to one person today, even just to say hello. Consider joining a church group or community where you can meet people."
    },
    {
        keywords: ["purpose", "meaning", "why am i here", "direction"],
        verse: "Jeremiah 29:11",
        text: "For I know the plans I have for you, declares the Lord, plans to prosper you and not to harm you, plans to give you hope and a future.",
        explanation: "God has a purpose for your life. Even when you don't know your direction, He does. Your existence is not an accident.",
        guidance: "Try different activities and see what you enjoy and what helps others. Your purpose often combines what you're good at, what you love, and how you can serve."
    }
];

function answerQuestion() {
    let q = document.getElementById("question").value.toLowerCase();
    let resultDiv = document.getElementById("answerResult");
    let found = false;
    let output = "";
    
    for (let t of topics) {
        for (let k of t.keywords) {
            if (q.includes(k)) {
                output += `
                <div style="background:#f9f9f9; padding:15px; margin-bottom:15px; border-radius:8px;">
                    <h3 style="color:#2c3e50;">📖 Scripture</h3>
                    <p><strong>${t.verse}</strong></p>
                    <p><em>"${t.text}"</em></p>
                    
                    <h3 style="color:#2c3e50;">💭 Explanation</h3>
                    <p>${t.explanation}</p>
                    
                    <h3 style="color:#2c3e50;">🌟 Guidance</h3>
                    <p>${t.guidance}</p>
                </div>
                `;
                found = true;
                break;
            }
        }
    }
    
    if (!found) {
        output = `
        <div style="background:#f9f9f9; padding:20px; border-radius:8px;">
            <p>I don't have an answer for that specific question yet. Here are some topics I can help with:</p>
            <p>• Lust and temptation<br>• Anger<br>• Failure and self-hatred<br>• Forgiveness<br>• Jealousy<br>• Loneliness<br>• Purpose and direction</p>
            <p>Try asking about one of these topics, or check back soon as we add more!</p>
        </div>
        `;
    }
    
    resultDiv.innerHTML = output;
}

// Bible books for the reader
const bibleBooks = [
    "Genesis", "Exodus", "Leviticus", "Numbers", "Deuteronomy", "Joshua", "Judges", "Ruth",
    "1 Samuel", "2 Samuel", "1 Kings", "2 Kings", "1 Chronicles", "2 Chronicles", "Ezra", "Nehemiah",
    "Esther", "Job", "Psalm", "Proverbs", "Ecclesiastes", "Song of Solomon", "Isaiah", "Jeremiah",
    "Lamentations", "Ezekiel", "Daniel", "Hosea", "Joel", "Amos", "Obadiah", "Jonah", "Micah",
    "Nahum", "Habakkuk", "Zephaniah", "Haggai", "Zechariah", "Malachi",
    "Matthew", "Mark", "Luke", "John", "Acts", "Romans", "1 Corinthians", "2 Corinthians",
    "Galatians", "Ephesians", "Philippians", "Colossians", "1 Thessalonians", "2 Thessalonians",
    "1 Timothy", "2 Timothy", "Titus", "Philemon", "Hebrews", "James", "1 Peter", "2 Peter",
    "1 John", "2 John", "3 John", "Jude", "Revelation"
];

function loadBooks() {
    let output = "<h3>Select a Book:</h3><div style='display:grid; grid-template-columns:repeat(auto-fill, minmax(120px,1fr)); gap:10px;'>";
    
    for (let book of bibleBooks) {
        output += `<button onclick="loadChapters('${book}')" style="margin:2px; padding:8px;">${book}</button>`;
    }
    
    output += "</div>";
    document.getElementById("readerContent").innerHTML = output;
}

function loadChapters(book) {
    // For now, we'll show chapters 1-50 (most books have less than 50)
    let output = `<button onclick="loadBooks()" style="margin-bottom:15px;">← Back to Books</button>`;
    output += `<h3>${book} - Select Chapter:</h3><div style='display:grid; grid-template-columns:repeat(auto-fill, minmax(70px,1fr)); gap:5px;'>`;
    
    // Different books have different numbers of chapters
    let maxChapters = 50; // Default
    if (book === "Psalm") maxChapters = 150;
    if (book === "Genesis") maxChapters = 50;
    if (book === "Exodus") maxChapters = 40;
    if (book === "Isaiah") maxChapters = 66;
    if (book === "Matthew" || book === "Acts") maxChapters = 28;
    
    for (let i = 1; i <= maxChapters; i++) {
        output += `<button onclick="loadChapter('${book}', ${i})" style="margin:2px; padding:5px;">${i}</button>`;
    }
    
    output += "</div>";
    document.getElementById("readerContent").innerHTML = output;
}

function loadChapter(book, chapter) {
    // Sample verses for demonstration
    // In a real app, you'd load this from a JSON file
    let output = `<button onclick="loadChapters('${book}')" style="margin-bottom:15px;">← Back to Chapters</button>`;
    output += `<h3>${book} ${chapter}</h3><div style='text-align:left;'>`;
    
    // Add sample verses (in reality, you'd have all verses here)
    if (book === "Psalm" && chapter === 23) {
        output += `
            <p><strong>1</strong> The Lord is my shepherd; I shall not want.</p>
            <p><strong>2</strong> He maketh me to lie down in green pastures: he leadeth me beside the still waters.</p>
            <p><strong>3</strong> He restoreth my soul: he leadeth me in the paths of righteousness for his name's sake.</p>
            <p><strong>4</strong> Yea, though I walk through the valley of the shadow of death, I will fear no evil: for thou art with me; thy rod and thy staff they comfort me.</p>
            <p><strong>5</strong> Thou preparest a table before me in the presence of mine enemies: thou anointest my head with oil; my cup runneth over.</p>
            <p><strong>6</strong> Surely goodness and mercy shall follow me all the days of my life: and I will dwell in the house of the Lord for ever.</p>
        `;
    } else if (book === "John" && chapter === 3) {
        output += `
            <p><strong>16</strong> For God so loved the world, that he gave his only begotten Son, that whosoever believeth in him should not perish, but have everlasting life.</p>
            <p><strong>17</strong> For God sent not his Son into the world to condemn the world; but that the world through him might be saved.</p>
        `;
    } else {
        output += `<p><em>Sample verses for ${book} ${chapter}. In the full version, all verses would appear here.</em></p>`;
        // Add a few sample verses
        for (let i = 1; i <= 3; i++) {
            output += `<p><strong>${i}</strong> Sample verse text for ${book} ${chapter}:${i}...</p>`;
        }
    }
    
    output += "</div>";
    document.getElementById("readerContent").innerHTML = output;
}

// Search Bible function (expanded)
const bible = [
    {book: "Genesis", chapter: 1, verse: 1, text: "In the beginning God created the heaven and the earth."},
    {book: "Genesis", chapter: 1, verse: 27, text: "So God created man in his own image, in the image of God created he him; male and female created he them."},
    {book: "Exodus", chapter: 20, verse: 12, text: "Honour thy father and thy mother: that thy days may be long upon the land which the Lord thy God giveth thee."},
    {book: "Psalm", chapter: 23, verse: 1, text: "The Lord is my shepherd; I shall not want."},
    {book: "Psalm", chapter: 23, verse: 4, text: "Yea, though I walk through the valley of the shadow of death, I will fear no evil: for thou art with me; thy rod and thy staff they comfort me."},
    {book: "Proverbs", chapter: 3, verse: 5, text: "Trust in the Lord with all thine heart; and lean not unto thine own understanding."},
    {book: "Proverbs", chapter: 3, verse: 6, text: "In all thy ways acknowledge him, and he shall direct thy paths."},
    {book: "Isaiah", chapter: 40, verse: 31, text: "But they that wait upon the Lord shall renew their strength; they shall mount up with wings as eagles; they shall run, and not be weary; and they shall walk, and not faint."},
    {book: "Matthew", chapter: 5, verse: 14, text: "Ye are the light of the world. A city that is set on an hill cannot be hid."},
    {book: "Matthew", chapter: 11, verse: 28, text: "Come unto me, all ye that labour and are heavy laden, and I will give you rest."},
    {book: "John", chapter: 3, verse: 16, text: "For God so loved the world, that he gave his only begotten Son, that whosoever believeth in him should not perish, but have everlasting life."},
    {book: "John", chapter: 14, verse: 6, text: "Jesus saith unto him, I am the way, the truth, and the life: no man cometh unto the Father, but by me."},
    {book: "Romans", chapter: 8, verse: 28, text: "And we know that all things work together for good to them that love God, to them who are the called according to his purpose."},
    {book: "Romans", chapter: 12, verse: 2, text: "And be not conformed to this world: but be ye transformed by the renewing of your mind, that ye may prove what is that good, and acceptable, and perfect, will of God."},
    {book: "Philippians", chapter: 4, verse: 13, text: "I can do all things through Christ which strengtheneth me."},
    {book: "Philippians", chapter: 4, verse: 6, text: "Be careful for nothing; but in every thing by prayer and supplication with thanksgiving let your requests be made known unto God."},
    {book: "1 John", chapter: 4, verse: 8, text: "He that loveth not knoweth not God; for God is love."}
];

function searchBible() {
    let word = document.getElementById("bibleSearch").value.toLowerCase();
    let resultDiv = document.getElementById("bibleResult");
    let output = "";
    let count = 0;
    
    for (let v of bible) {
        if (v.text.toLowerCase().includes(word) || v.book.toLowerCase().includes(word)) {
            output += `
            <div style="background:#f9f9f9; padding:10px; margin-bottom:10px; border-radius:5px;">
                <p><strong>${v.book} ${v.chapter}:${v.verse}</strong><br>
                ${v.text}</p>
            </div>
            `;
            count++;
        }
    }
    
    if (count === 0) {
        output = "<p>No verses found. Try a different word like 'love', 'faith', or 'pray'.</p>";
    } else {
        output = `<p>Found ${count} verses:</p>` + output;
    }
    
    resultDiv.innerHTML = output;
}
