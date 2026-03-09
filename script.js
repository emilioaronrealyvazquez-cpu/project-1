function showAsk() {
    document.getElementById("home").style.display = "none";
    document.getElementById("askSection").style.display = "block";
    document.getElementById("bibleSection").style.display = "none";
}

function showBible() {
    document.getElementById("home").style.display = "none";
    document.getElementById("askSection").style.display = "none";
    document.getElementById("bibleSection").style.display = "block";
}

function goHome() {
    document.getElementById("home").style.display = "block";
    document.getElementById("askSection").style.display = "none";
    document.getElementById("bibleSection").style.display = "none";
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
        text: "My dear brothers and sisters, take note of this: Everyone should be quick to listen, slow to speak and slow to become anger, because human anger does not produce the righteousness that God desires.",
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

const bible = [
    {book: "Genesis", chapter: 1, verse: 1, text: "In the beginning God created the heavens and the earth."},
    {book: "Genesis", chapter: 1, verse: 27, text: "So God created mankind in his own image, in the image of God he created them; male and female he created them."},
    {book: "Exodus", chapter: 20, verse: 12, text: "Honor your father and your mother, so that you may live long in the land the Lord your God is giving you."},
    {book: "Psalm", chapter: 23, verse: 1, text: "The Lord is my shepherd, I lack nothing."},
    {book: "Psalm", chapter: 23, verse: 4, text: "Even though I walk through the darkest valley, I will fear no evil, for you are with me; your rod and your staff, they comfort me."},
    {book: "Proverbs", chapter: 3, verse: 5, text: "Trust in the Lord with all your heart and lean not on your own understanding."},
    {book: "Proverbs", chapter: 3, verse: 6, text: "In all your ways acknowledge him, and he will make your paths straight."},
    {book: "Isaiah", chapter: 40, verse: 31, text: "But those who hope in the Lord will renew their strength. They will soar on wings like eagles; they will run and not grow weary, they will walk and not be faint."},
    {book: "Matthew", chapter: 5, verse: 14, text: "You are the light of the world. A town built on a hill cannot be hidden."},
    {book: "Matthew", chapter: 11, verse: 28, text: "Come to me, all you who are weary and burdened, and I will give you rest."},
    {book: "John", chapter: 3, verse: 16, text: "For God so loved the world that he gave his one and only Son, that whoever believes in him shall not perish but have eternal life."},
    {book: "John", chapter: 14, verse: 6, text: "Jesus answered, 'I am the way and the truth and the life. No one comes to the Father except through me.'"},
    {book: "Romans", chapter: 8, verse: 28, text: "And we know that in all things God works for the good of those who love him, who have been called according to his purpose."},
    {book: "Romans", chapter: 12, verse: 2, text: "Do not conform to the pattern of this world, but be transformed by the renewing of your mind."},
    {book: "Philippians", chapter: 4, verse: 13, text: "I can do all this through him who gives me strength."},
    {book: "Philippians", chapter: 4, verse: 6, text: "Do not be anxious about anything, but in every situation, by prayer and petition, with thanksgiving, present your requests to God."}
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
