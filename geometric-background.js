// Geometric Background Animation System
class GeometricBackground {
    constructor() {
        this.container = document.getElementById('geometricBg');
        this.shapes = [];
        this.mouseX = 0;
        this.mouseY = 0;
        this.scrollY = 0;
        
        this.init();
        this.bindEvents();
    }
    
    init() {
        // Fewer diamonds since they're much larger
        this.generateShapes(8);
        
        // Start animation loop
        this.animate();
    }
    
    generateShapes(count) {
        const sizes = ['small', 'medium', 'large', 'xlarge'];
        const variants = ['', 'variant1', 'variant2', 'variant3'];
        const animations = ['drift', 'pulse']; // Only horizontal animations
        
        for (let i = 0; i < count; i++) {
            const shape = document.createElement('div');
            shape.className = 'geometric-shape';
            
            // Random properties for diamonds
            const size = sizes[Math.floor(Math.random() * sizes.length)];
            const variant = variants[Math.floor(Math.random() * variants.length)];
            const animation = animations[Math.floor(Math.random() * animations.length)];
            
            shape.classList.add(size);
            if (variant) shape.classList.add(variant);
            shape.classList.add(animation);
            
            // Random horizontal position, fixed vertical positions
            shape.style.left = (Math.random() * 120 - 10) + '%';
            shape.style.top = (Math.random() * 100) + '%'; // Keep on screen
            
            // No animation delay - start immediately
            shape.style.animationDelay = '0s';
            
            // Random z-index for layering
            shape.style.zIndex = Math.floor(Math.random() * 10) - 20;
            
            // Always maintain 45-degree rotation
            shape.style.transform = 'rotate(45deg)';
            
            this.container.appendChild(shape);
            this.shapes.push(shape);
        }
    }
    
    bindEvents() {
        // Mouse movement tracking
        document.addEventListener('mousemove', (e) => {
            this.mouseX = (e.clientX / window.innerWidth) * 2 - 1;
            this.mouseY = (e.clientY / window.innerHeight) * 2 - 1;
        });
        
        // Scroll tracking
        window.addEventListener('scroll', () => {
            this.scrollY = window.pageYOffset;
        });
    }
    
    animate() {
        // Update shapes based on mouse and scroll - HORIZONTAL ONLY, VERY SLOW
        this.shapes.forEach((shape, index) => {
            // Very subtle mouse influence - horizontal only
            const mouseInfluence = 0.003;
            const offsetX = this.mouseX * mouseInfluence * (index % 3 + 1) * 2;
            
            // Very subtle scroll influence - horizontal only
            const scrollInfluence = 0.00008;
            const scrollOffsetX = this.scrollY * scrollInfluence * (index % 3 + 1);
            
            // Apply transform - NO vertical movement, ALWAYS 45 degrees
            if (!shape.classList.contains('drift') && !shape.classList.contains('pulse')) {
                shape.style.transform = `translateX(${offsetX + scrollOffsetX}px) rotate(45deg)`;
            }
        });
        
        requestAnimationFrame(() => this.animate());
    }
}

// Initialize geometric background when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    new GeometricBackground();
});