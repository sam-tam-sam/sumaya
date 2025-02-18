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
    // ... (جميع الرسائل كما هي)
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