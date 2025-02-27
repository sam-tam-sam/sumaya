// ECG Wave Implementation
const canvas = document.getElementById('ecg');
const ctx = canvas.getContext('2d');
let time = 0;

function resizeCanvas() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
}

function createHeartbeat(t) {
    t = t % 1.5;
    return (
        Math.exp(-Math.pow((t - 0.2) * 10, 2)) * 0.7 +
        Math.exp(-Math.pow((t - 0.4) * 5, 2)) * 0.5 +
        Math.exp(-Math.pow((t - 0.1) * 8, 2)) * 0.3
    );
}

function drawWave() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    
    ctx.beginPath();
    ctx.moveTo(0, canvas.height/2);
    
    for(let x = 0; x < canvas.width; x++) {
        const t = time - x * 0.002;
        const y = createHeartbeat(t) * 100;
        ctx.lineTo(x, canvas.height/2 - y);
    }
    
    ctx.strokeStyle = '#ff3366';
    ctx.lineWidth = 2;
    ctx.stroke();
    
    time += 0.02;
    requestAnimationFrame(drawWave);
}

// Initialize ECG Wave
resizeCanvas();
window.addEventListener('resize', resizeCanvas);
drawWave();

// Original Scripts
const sounds = {
    magic: new Howl({ 
        src: ['magic-sound.mp3'],
        html5: true,
        volume: 0.5,
        onplayerror: function() {
            this.once('unlock', () => this.play());
        }
    }),
    heart: new Howl({ 
        src: ['heartbeat.mp3'],
        loop: true,
        volume: 0.4,
        html5: true
    }),
    music: new Howl({
        src: ['romantic-music.mp3'],
        volume: 0.3,
        loop: true,
        html5: true
    })
};

const loveMessages = [
    "أنتِ شعاع النور في ظلام حياتي 🌟",
"حبك كالماء للوردة.. لا أستطيع العيش بدونه 🌹",
"قلبي ينتمي لك منذ اللحظة الأولى 💞",
"أنتِ الحب الذي طالما حلمت به 🌙",
"وجودك في حياتي أجمل معجزة ✨",
"كل نبضة قلبي تهمس باسمك 💓",
"أنتِ أغلى ما أملك في هذه الحياة 🥰",
"في عينيكِ أجد عالمي بأسره 🌍",
"أحبك بحجم السماء واتساع البحر 💙",
"دفء صوتكِ يجعل كل شيء أفضل 🔥",
"معكِ أشعر أنني أعيش الحلم الجميل ✨",
"كل لحظة بجانبك هي كنز ثمين 💎",
"أنتِ روحي التي تضيء ظلامي 💡",
"سحر عينيكِ يأسرني بلا مقاومة 🔥",
"كل لحظة معك هي نعيم لا ينتهي 🌿",
"قلبي ملك لكِ منذ البداية 💖",
"أنتِ أجمل صدفة منحها لي القدر 🎁",
"مهما ابتعدتِ، يبقى حبك يسكن أعماقي 🏡",
"في وجودكِ، يصبح العالم أجمل 🌺",
"كل كلمات الحب لا تكفي لوصف مشاعري تجاهك 📖",
"أنتِ نجم يضيء سمائي في ليالي العتمة 🌠",
"بدونكِ، كل شيء يبدو بلا معنى ❄️",
"ضحكتكِ موسيقى تعزف في قلبي 🎶",
"لو كان لي أمنية، ستكون أن أبقى معكِ للأبد ⏳",
"كل ثانية بجانبكِ تساوي عمرًا من السعادة 💕",
"أحبك أكثر مما تتصورين وأكثر مما أستطيع التعبير 🥰",
"أنتِ قصة حب أعيشها بكل تفاصيلها 📖",
"لا شيء يضاهي شعوري وأنا معكِ 🤗",
"في عينيكِ وجدت وطني الذي أنتمي إليه 🏡",
"حبكِ مثل نسيم الصباح، ينعش روحي 🌿",
"أنتِ زهرة عمري التي لا تذبل أبدًا 🌹",
"أعيش لأراكِ سعيدة دائمًا 😊",
"حبكِ يشبه ضوء القمر، هادئ وجميل 🌙",
"أنتِ سر سعادتي وأجمل ما في حياتي 💞",
"عناقكِ هو المكان الذي أجد فيه الأمان 🤗",
"أنتِ أغلى هدية منحني إياها القدر 🎁",
"قلبي يخفق باسمك في كل لحظة 💓",
"لو كان لي أن أختار مجددًا، لاخترتكِ أنتِ دائمًا 💍",
"أنتِ حلمي الذي تحقق بعد طول انتظار ✨",
"لا أحتاج شيئًا سوى أن أكون بجانبكِ ❤️",
"أنتِ البداية التي تمنيت ألا تنتهي أبدًا 💫",
"لا شيء أجمل من الاستيقاظ على صوتكِ العذب 🎶",
"أحبكِ بلا شروط، بلا قيود، بلا نهاية 🕊️",
"ابتسامتكِ تسرق مني كل همومي 😊",
"في عينيكِ أرى عالمي المثالي 🌏",
"كل الطرق تؤدي إليكِ، فأنتِ وجهتي الوحيدة 🚀",
"أنتِ الروح التي تسكن أعماقي 🏡",
"لو كان الحب كلمات، لنفدت كل الحروف ❤️",
"أنتِ لحن هادئ في ضجيج حياتي 🎵",
"لم أكن أعرف أن الحب يمكن أن يكون بهذا الجمال حتى عرفتكِ ✨",
"قلبكِ موطني، أينما كنتِ أكون بخير 🏡",
"كلما نظرت إليكِ، شعرت أنني أنظر إلى أجمل شيء في الوجود 💖",
"أحبكِ ليس فقط لما أنتِ عليه، بل لما أصبحت عليه بوجودكِ 💕",
"أنتِ الأمان في عالم مليء بالفوضى 🏡",
"أحبكِ بعدد نجوم السماء ✨",
"في حبكِ وجدت راحتي وسكينتي 🕊️",
"أنتِ النبض الذي يحييني 💗",
"معكِ، كل يوم هو بداية جديدة للحب ❤️",
"كلما تلاقت أعيننا، همست روحي بحبكِ 💕",
"أنتِ الشمس التي تضيء عتمة أيامي ☀️",
"لا أحتاج للعالم، فأنتِ عالمي كله 🌍",
"أنتِ الإجابة لكل تساؤلاتي 💡",
"قلبكِ هو مكاني المفضل في هذا العالم 🏡",
"لا يمكنني تخيل حياتي بدونكِ ❤️",
"كل لحظة تمر وأنتِ بجانبي، أشكر الله عليكِ 🙏",
"أحبكِ كما أنتِ، بكل تفاصيلكِ وجنونكِ 💕",
"حبي لكِ يزداد مع كل يوم يمر ⏳",
"لو كان الحب بحيرة، لكنتِ أعمق نقطة فيها 🌊",
"أنتِ الضوء الذي يرشدني في دروب الحياة ✨",
"كلما شعرت بالضياع، أجد نفسي في عينيكِ 💖",
"أنتِ أجمل صدفة جعلت لحياتي معنى 🥰",
"أنتِ نبضي الذي لا يتوقف أبدًا 💓",
"كلما همستِ باسمي، شعرت أنني أملك الكون كله 🌎",
"أنتِ الحب الذي لا يمكن أن يتكرر في العمر 💞",
"معكِ، تصبح الحياة أكثر جمالًا وإشراقًا ☀️",
"أنتِ قصيدتي التي لن تنتهي أبياتها ✍️",
"كل شيء فيكِ يبعث السعادة في قلبي 😊",
"لو كانت العيون تتحدث، لقالت لكِ ألف كلمة حب 💖",
"أنتِ بسمة أيامي وسر فرحتي 😊",
"لو أن الحب كلمات، لكتبت اسمكِ في كل صفحة 📖",
"وجودكِ بجانبي يجعل كل شيء يبدو أجمل 🌸",
"أنتِ بداية كل شيء جميل في حياتي ❤️",
"أحبكِ أكثر من كل الكلمات التي قيلت عن الحب 💕",
"أنتِ أغنيتي المفضلة التي لا أملّ سماعها 🎶",
"قلبي يختصر العالم كله باسمكِ 💓",
"أنتِ كالقمر، تضيئين حياتي في أحلك اللحظات 🌙",
"كل لحظة أقضيها معكِ هي لحظة لا تُنسى ✨",
"في عالم مليء بالفوضى، أنتِ هدوئي وسلامي 🕊️",
"عيناكِ تحملان ألف قصة حب لا تنتهي 💖",
"أنتِ نجمتي التي لا تغيب عن سمائي 🌟",
"لا شيء يضاهي سحر وجودكِ في حياتي 💫",
"لو كان الحب وسيلة نقل، لاخترتكِ لتكوني وجهتي دائمًا 🚆",
"أنتِ روحي التي أعيش من أجلها 💞",
"معكِ، أشعر أن كل شيء على ما يرام 😊",
"أنتِ الهدية الأجمل التي أرسلها لي القدر 🎁",
"قلبكِ هو المكان الذي أجد فيه راحتي 🏡",
"أنتِ أغنية الفرح في حياتي 🎶",
"لو كان الحب وطنًا، لكنتِ موطني الأبدي 🏡",
"أنتِ زهرة لا تذبل أبدًا في بستان عمري 🌹",
"كل نظرة منكِ تجعل قلبي يخفق بقوة 💓",
"أنتِ الأمل الذي ينير حياتي حتى في أحلك الأيام 🌟",
"مهما تغير العالم من حولي، سيبقى حبكِ ثابتًا في قلبي ❤️",
"لا شيء يضاهي شعوري حين أكون معكِ 💕",
];

let audioEnabled = false;

const enableAudio = () => {
    if (!audioEnabled) {
        Howler.autoUnlock = true;
        Howler.ctx.resume().then(() => {
            if (!sounds.music.playing()) sounds.music.play();
            if (!sounds.heart.playing()) sounds.heart.play();
            audioEnabled = true;
            document.getElementById('audio-alert').style.display = 'none';
        });
    }
};

const audioAlert = document.createElement('div');
audioAlert.id = 'audio-alert';
audioAlert.textContent = 'الرجاء النقر أو اللمس لتشغيل الصوت';
document.body.appendChild(audioAlert);

document.addEventListener('click', enableAudio);
document.addEventListener('touchstart', enableAudio);

const createHearts = (x, y) => {
    const colors = ['#ff3366', '#ff6699', '#ff0066'];
    for (let i = 0; i < 8; i++) {
        const heart = document.createElement('div');
        heart.className = 'particle';
        heart.style.color = colors[Math.floor(Math.random() * colors.length)];
        heart.style.left = `${x + (Math.random() - 0.5) * 150}px`;
        heart.style.top = `${y + (Math.random() - 0.5) * 150}px`;
        heart.style.transform = `
            scale(${0.5 + Math.random() * 0.8}) 
            rotate(${Math.random() * 360}deg)
        `;
        heart.textContent = Math.random() > 0.3 ? '❤️' : '💖';
        document.body.appendChild(heart);
        heart.addEventListener('animationend', () => heart.remove());
    }
};

document.getElementById('secret-button').addEventListener('click', (e) => {
    e.stopPropagation();
    if (!audioEnabled) enableAudio();
    
    if (sounds.magic.playing()) sounds.magic.stop();
    sounds.magic.play();
    
    createHearts(e.clientX, e.clientY);
    
    const messageElement = document.getElementById('main-message');
    messageElement.style.opacity = 0;
    setTimeout(() => {
        messageElement.textContent = loveMessages[Math.floor(Math.random() * loveMessages.length)];
        messageElement.style.opacity = 1;
    }, 300);
});

setInterval(() => {
    if(audioEnabled) {
        document.querySelector('.heart').style.animation = 'none';
        setTimeout(() => {
            document.querySelector('.heart').style.animation = 'pulse 1s infinite';
        }, 50);
    }
}, 1000);
