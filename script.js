// Name form handling
const nameForm = document.getElementById('nameForm');
const nameInput = document.getElementById('nameInput');
const nameContainer = document.getElementById('nameContainer');
const greetingContainer = document.getElementById('greetingContainer');
const nameGreeting = document.getElementById('nameGreeting');
const resetBtn = document.getElementById('resetBtn');
const greetingMessage = document.getElementById('greetingMessage');

// Personalized messages based on time
function getPersonalizedMessage(name) {
    const hour = new Date().getHours();
    const messages = [
        `Wishing you and your loved ones a wonderful holiday season filled with joy, laughter, and happiness! 🎄✨`,
        `May this Christmas bring you peace, happiness, and prosperity! 🎁🌟`,
        `Sending warm Christmas wishes to you and your family! May your hearts be filled with love! ❤️🎄`,
        `Hope your Christmas is filled with magical moments and wonderful memories! ✨🎅`,
        `May the spirit of Christmas fill your home with warmth and joy! 🕯️🎄`
    ];
    return messages[Math.floor(Math.random() * messages.length)];
}

// Add typing animation for message
function typeWriter(element, text, speed = 50) {
    let i = 0;
    element.textContent = '';
    
    function type() {
        if (i < text.length) {
            element.textContent += text.charAt(i);
            i++;
            setTimeout(type, speed);
        }
    }
    
    type();
}

nameForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const name = nameInput.value.trim();
    
    if (name) {
        // Create confetti explosion
        createConfettiExplosion();
        
        nameContainer.style.display = 'none';
        nameGreeting.textContent = `${name}! 🎉`;
        greetingContainer.style.display = 'block';
        
        // Animate greeting appearance
        setTimeout(() => {
            greetingContainer.style.animation = 'slideIn 0.8s ease-out';
            const message = getPersonalizedMessage(name);
            typeWriter(greetingMessage, message, 30);
        }, 100);
    }
});

resetBtn.addEventListener('click', () => {
    greetingContainer.style.display = 'none';
    nameContainer.style.display = 'block';
    nameInput.value = '';
    nameInput.focus();
});

// Confetti Explosion
function createConfettiExplosion() {
    const confettiContainer = document.getElementById('confettiContainer');
    const colors = ['#ff6b6b', '#4ecdc4', '#ffd93d', '#95e1d3', '#f38181', '#aa96da'];
    const confettiCount = 50;
    
    for (let i = 0; i < confettiCount; i++) {
        const confetti = document.createElement('div');
        confetti.className = 'confetti';
        confetti.style.left = Math.random() * 100 + '%';
        confetti.style.top = '-10px';
        confetti.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
        confetti.style.width = Math.random() * 10 + 5 + 'px';
        confetti.style.height = confetti.style.width;
        confetti.style.animationDuration = Math.random() * 3 + 2 + 's';
        confetti.style.animationDelay = Math.random() * 0.5 + 's';
        
        confettiContainer.appendChild(confetti);
        
        setTimeout(() => {
            confetti.remove();
        }, 5000);
    }
}

// Christmas Countdown
function updateCountdown() {
    const now = new Date();
    const currentYear = now.getFullYear();
    let christmas = new Date(currentYear, 11, 25); // December 25
    
    if (now > christmas) {
        christmas = new Date(currentYear + 1, 11, 25);
    }
    
    const diff = christmas - now;
    const days = Math.ceil(diff / (1000 * 60 * 60 * 24));
    
    const countdownNumber = document.getElementById('countdownNumber');
    if (countdownNumber) {
        countdownNumber.textContent = days;
    }
}

updateCountdown();
setInterval(updateCountdown, 1000 * 60 * 60); // Update every hour

// Starfield Generation
function createStarfield() {
    const starfield = document.getElementById('starfield');
    const starCount = 100;
    
    for (let i = 0; i < starCount; i++) {
        const star = document.createElement('div');
        star.className = 'star';
        star.style.left = Math.random() * 100 + '%';
        star.style.top = Math.random() * 100 + '%';
        star.style.animationDelay = Math.random() * 2 + 's';
        star.style.animationDuration = (Math.random() * 2 + 1) + 's';
        starfield.appendChild(star);
    }
}

createStarfield();

// Interactive Christmas Tree Ornaments
document.querySelectorAll('.ornament').forEach(ornament => {
    ornament.addEventListener('click', function() {
        this.style.transform = 'scale(1.5) rotate(360deg)';
        setTimeout(() => {
            this.style.transform = '';
        }, 500);
        
        // Create sparkle effect
        createSparkle(this.getBoundingClientRect().left, this.getBoundingClientRect().top);
    });
});

// Gift Box Interaction
document.querySelectorAll('.gift-box').forEach(gift => {
    gift.addEventListener('click', function() {
        this.classList.toggle('open');
        
        // Create burst effect when opened
        if (this.classList.contains('open')) {
            createGiftBurst(this.getBoundingClientRect().left + 30, this.getBoundingClientRect().top + 30);
        }
    });
});

function createGiftBurst(x, y) {
    for (let i = 0; i < 15; i++) {
        const sparkle = new Particle(x, y);
        sparkle.vx = (Math.random() - 0.5) * 4;
        sparkle.vy = (Math.random() - 0.5) * 4;
        sparkle.color = ['#ff6b6b', '#4ecdc4', '#ffd93d', '#aa96da'][Math.floor(Math.random() * 4)];
        particleSystem.push(sparkle);
    }
}

// Clickable Decorations
document.querySelectorAll('.clickable-dec').forEach(dec => {
    dec.addEventListener('click', function() {
        const emoji = this.getAttribute('data-emoji');
        createEmojiBurst(this.getBoundingClientRect().left, this.getBoundingClientRect().top, emoji);
    });
});

function createEmojiBurst(x, y, emoji) {
    for (let i = 0; i < 10; i++) {
        setTimeout(() => {
            const sparkle = new Particle(x, y);
            sparkle.vx = (Math.random() - 0.5) * 3;
            sparkle.vy = (Math.random() - 0.5) * 3;
            sparkle.type = 'sparkle';
            sparkle.color = '#ffd93d';
            particleSystem.push(sparkle);
        }, i * 50);
    }
}

// Snow Globe Shake
const snowGlobe = document.getElementById('snowGlobe');
snowGlobe.addEventListener('click', function() {
    this.classList.add('shake');
    createConfettiExplosion();
    
    setTimeout(() => {
        this.classList.remove('shake');
    }, 500);
});

// Music Toggle
const musicToggle = document.getElementById('musicToggle');
let musicPlaying = false;

musicToggle.addEventListener('click', function() {
    musicPlaying = !musicPlaying;
    this.classList.toggle('active');
    
    // Create visual feedback
    if (musicPlaying) {
        createMusicRipple(this.getBoundingClientRect().left + 30, this.getBoundingClientRect().top + 30);
    }
});

function createMusicRipple(x, y) {
    for (let i = 0; i < 5; i++) {
        setTimeout(() => {
            const ripple = new Particle(x, y);
            ripple.vx = (Math.random() - 0.5) * 2;
            ripple.vy = (Math.random() - 0.5) * 2;
            ripple.size = 3;
            ripple.color = '#4ecdc4';
            particleSystem.push(ripple);
        }, i * 100);
    }
}

// Sparkle creation helper
function createSparkle(x, y) {
    for (let i = 0; i < 5; i++) {
        particleSystem.push(new Particle(x, y));
    }
}

// Cursor effects with snowflakes and sparkles
const canvas = document.getElementById('cursorCanvas');
const ctx = canvas.getContext('2d');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let particles = [];
let mouseX = 0;
let mouseY = 0;

// Track mouse position
document.addEventListener('mousemove', (e) => {
    mouseX = e.clientX;
    mouseY = e.clientY;
    
    // Create particles at cursor position
    createParticles(mouseX, mouseY);
});

// Create particles (snowflakes and sparkles)
function createParticles(x, y) {
    const particleCount = 3;
    
    for (let i = 0; i < particleCount; i++) {
        particles.push({
            x: x,
            y: y,
            vx: (Math.random() - 0.5) * 2,
            vy: (Math.random() - 0.5) * 2,
            life: 1,
            decay: Math.random() * 0.02 + 0.01,
            size: Math.random() * 4 + 2,
            color: Math.random() > 0.5 ? '#ff6b6b' : '#4ecdc4',
            type: Math.random() > 0.5 ? 'snowflake' : 'sparkle'
        });
    }
}

// Particle class for better organization
class Particle {
    constructor(x, y) {
        this.x = x;
        this.y = y;
        this.vx = (Math.random() - 0.5) * 2;
        this.vy = (Math.random() - 0.5) * 2;
        this.life = 1;
        this.decay = Math.random() * 0.02 + 0.01;
        this.size = Math.random() * 4 + 2;
        this.color = Math.random() > 0.5 ? '#ff6b6b' : '#4ecdc4';
        this.type = Math.random() > 0.5 ? 'snowflake' : 'sparkle';
        this.rotation = Math.random() * Math.PI * 2;
        this.rotationSpeed = (Math.random() - 0.5) * 0.1;
    }
    
    update() {
        this.x += this.vx;
        this.y += this.vy;
        this.life -= this.decay;
        this.rotation += this.rotationSpeed;
        this.vy += 0.05; // Gravity effect
    }
    
    draw() {
        ctx.save();
        ctx.globalAlpha = this.life;
        ctx.translate(this.x, this.y);
        ctx.rotate(this.rotation);
        
        if (this.type === 'snowflake') {
            // Draw snowflake
            ctx.strokeStyle = this.color;
            ctx.lineWidth = 1;
            ctx.beginPath();
            for (let i = 0; i < 6; i++) {
                ctx.moveTo(0, 0);
                ctx.lineTo(0, this.size);
                ctx.moveTo(0, 0);
                ctx.lineTo(-this.size * 0.5, -this.size * 0.5);
                ctx.rotate(Math.PI / 3);
            }
            ctx.stroke();
        } else {
            // Draw sparkle
            ctx.fillStyle = this.color;
            ctx.beginPath();
            ctx.arc(0, 0, this.size, 0, Math.PI * 2);
            ctx.fill();
            
            // Add cross lines for sparkle effect
            ctx.strokeStyle = this.color;
            ctx.lineWidth = 1;
            ctx.beginPath();
            ctx.moveTo(-this.size * 1.5, 0);
            ctx.lineTo(this.size * 1.5, 0);
            ctx.moveTo(0, -this.size * 1.5);
            ctx.lineTo(0, this.size * 1.5);
            ctx.stroke();
        }
        
        ctx.restore();
    }
    
    isDead() {
        return this.life <= 0;
    }
}

// Improved particle system
let particleSystem = [];

document.addEventListener('mousemove', (e) => {
    mouseX = e.clientX;
    mouseY = e.clientY;
    
    // Create new particles
    for (let i = 0; i < 2; i++) {
        particleSystem.push(new Particle(mouseX, mouseY));
    }
});

// Animation loop
function animate() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    
    // Update and draw particles
    for (let i = particleSystem.length - 1; i >= 0; i--) {
        const particle = particleSystem[i];
        particle.update();
        particle.draw();
        
        if (particle.isDead()) {
            particleSystem.splice(i, 1);
        }
    }
    
    requestAnimationFrame(animate);
}

// Handle window resize
window.addEventListener('resize', () => {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
});

// Start animation
animate();

// Add click effect
document.addEventListener('click', (e) => {
    // Create burst of particles on click
    for (let i = 0; i < 10; i++) {
        particleSystem.push(new Particle(e.clientX, e.clientY));
    }
});

// Add some initial sparkles
setInterval(() => {
    if (particleSystem.length < 50) {
        particleSystem.push(new Particle(
            Math.random() * canvas.width,
            Math.random() * canvas.height
        ));
    }
}, 500);

// 3D Ornament Interaction
document.querySelectorAll('.ornament-3d').forEach(ornament => {
    ornament.addEventListener('click', function() {
        const colors = ['#ff6b6b', '#4ecdc4', '#ffd93d', '#aa96da'];
        const randomColor = colors[Math.floor(Math.random() * colors.length)];
        
        // Create color burst
        for (let i = 0; i < 20; i++) {
            const rect = this.getBoundingClientRect();
            const sparkle = new Particle(
                rect.left + rect.width / 2,
                rect.top + rect.height / 2
            );
            sparkle.vx = (Math.random() - 0.5) * 5;
            sparkle.vy = (Math.random() - 0.5) * 5;
            sparkle.color = randomColor;
            particleSystem.push(sparkle);
        }
    });
});

// Keyboard interactions
document.addEventListener('keydown', (e) => {
    if (e.key === 'Enter' && document.activeElement !== nameInput) {
        // Create random sparkles on Enter key
        for (let i = 0; i < 10; i++) {
            particleSystem.push(new Particle(
                Math.random() * canvas.width,
                Math.random() * canvas.height
            ));
        }
    }
    
    if (e.key === ' ') {
        e.preventDefault();
        // Spacebar creates burst at center
        createConfettiExplosion();
    }
});

// Double-click to create special effect
let lastClickTime = 0;
document.addEventListener('dblclick', (e) => {
    const currentTime = new Date().getTime();
    if (currentTime - lastClickTime < 300) {
        // Create mega burst
        for (let i = 0; i < 30; i++) {
            const sparkle = new Particle(e.clientX, e.clientY);
            sparkle.vx = (Math.random() - 0.5) * 8;
            sparkle.vy = (Math.random() - 0.5) * 8;
            sparkle.size = Math.random() * 6 + 3;
            sparkle.color = ['#ff6b6b', '#4ecdc4', '#ffd93d', '#aa96da', '#95e1d3'][Math.floor(Math.random() * 5)];
            particleSystem.push(sparkle);
        }
    }
    lastClickTime = currentTime;
});

// Auto-create sparkles periodically
setInterval(() => {
    if (greetingContainer.style.display !== 'none') {
        // Create random sparkles on the greeting page
        for (let i = 0; i < 3; i++) {
            particleSystem.push(new Particle(
                Math.random() * canvas.width,
                Math.random() * canvas.height
            ));
        }
    }
}, 2000);

// Share Button Functionality
const shareBtn = document.getElementById('shareBtn');
shareBtn.addEventListener('click', async () => {
    const name = nameGreeting.textContent.replace('! 🎉', '');
    const shareText = `🎄 Merry Christmas ${name}! 🎄\n\nWishing you a wonderful holiday season filled with joy and happiness! ✨\n\nCheck out this amazing Christmas greeting!`;
    
    if (navigator.share) {
        try {
            await navigator.share({
                title: 'Merry Christmas! 🎄',
                text: shareText,
                url: window.location.href
            });
        } catch (err) {
            console.log('Error sharing:', err);
            copyToClipboard(shareText);
        }
    } else {
        copyToClipboard(shareText);
    }
    
    // Visual feedback
    shareBtn.textContent = '✓ Copied!';
    shareBtn.style.background = 'linear-gradient(135deg, #4ecdc4 0%, #44a08d 100%)';
    
    setTimeout(() => {
        shareBtn.textContent = 'Share This Greeting';
        shareBtn.style.background = '';
    }, 2000);
});

function copyToClipboard(text) {
    const textarea = document.createElement('textarea');
    textarea.value = text;
    textarea.style.position = 'fixed';
    textarea.style.opacity = '0';
    document.body.appendChild(textarea);
    textarea.select();
    document.execCommand('copy');
    document.body.removeChild(textarea);
}


// Enhanced Santa Sleigh - make it reappear periodically
setInterval(() => {
    const sleigh = document.getElementById('santaSleigh');
    if (sleigh) {
        sleigh.style.animation = 'none';
        setTimeout(() => {
            sleigh.style.animation = 'flyAcross 20s linear infinite';
        }, 10);
    }
}, 20000);
