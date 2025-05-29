 document.addEventListener('DOMContentLoaded', function() {
            // Netflix "ta-dum" sound effect
            const netflixSound = document.getElementById('Netflix Intro.mp3');
            
            setTimeout(() => {
                netflixSound.play().catch(error => {
                    console.log("Audio playback failed:", error);
                });
            }, 3800);
            
            // Navigation for presentation slides
            const navButtons = document.querySelectorAll('.nav-button');
            const slides = document.querySelectorAll('.slide');
            const magicBg = document.querySelector('.magic-math-bg');
            const magicOverlay = document.querySelector('.magic-bg-overlay');
            
            navButtons.forEach(button => {
                button.addEventListener('click', function() {
                    // Remove active class from all buttons and slides
                    navButtons.forEach(btn => btn.classList.remove('active'));
                    slides.forEach(slide => slide.classList.remove('active'));
                    
                    // Add active class to clicked button
                    this.classList.add('active');
                    
                    // Show corresponding slide
                    const slideId = this.getAttribute('data-slide');
                    document.getElementById(slideId).classList.add('active');
                    
                    // Show/hide magic background based on slide
                    if (slideId === 'slide2') {
                        magicBg.style.opacity = '1';
                        magicOverlay.style.opacity = '1';
                    } else {
                        magicBg.style.opacity = '0';
                        magicOverlay.style.opacity = '0';
                    }
                });
            });
            
            // Add random movement to floating particles
            const floatingParticles = document.querySelectorAll('.floating-particle');
            floatingParticles.forEach(particle => {
                const tx = (Math.random() * 300 - 150) + 'px';
                const ty = (Math.random() * 300 - 150) + 'px';
                particle.style.setProperty('--tx', tx);
                particle.style.setProperty('--ty', ty);
                
                // Randomize animation duration between 10-20s
                const duration = 10 + Math.random() * 10;
                particle.style.animationDuration = duration + 's';
            });
            
            // Initially init magic background if not on slide2
            if (!document.getElementById('slide2').classList.contains('active')) {
                magicBg.style.opacity = '0';
                magicOverlay.style.opacity = '0';
            }
        });