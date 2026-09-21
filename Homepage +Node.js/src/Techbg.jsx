import React, { useEffect, useRef } from 'react';

export const InteractiveTechBackground = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    let animationFrameId;

    const COLORS = {
      bgGradientStart: '#0a1128',
      bgGradientEnd: '#000411',
      neonCyan: 'rgb(236 75 31)', // Custom orange accent
      electricBlue: 'rgba(79, 172, 254, 0.45)',
      slateDot: 'rgba(141, 169, 196, 0.5)',   // Blue-gray small nodes
      slateLine: 'rgba(141, 169, 196, 0.12)',  // Background grid lines
      mouseLine: 'rgba(79, 172, 254, 0.25)'    // Dynamic line connecting mouse to blue dots
    };

    const mouse = {
      x: null,
      y: null,
      radius: 120 // Interaction area radius
    };

    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    const handleMouseMove = (e) => {
      mouse.x = e.clientX;
      mouse.y = e.clientY;
    };

    const handleMouseLeave = () => {
      mouse.x = null;
      mouse.y = null;
    };

    window.addEventListener('resize', handleResize);
    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mouseleave', handleMouseLeave);
    handleResize();

    const particles = [];
    const particleCount = Math.min(70, Math.floor((canvas.width * canvas.height) / 100));

    class Particle {
      constructor() {
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;
        this.vx = (Math.random() - 0.5) * 0.4;
        this.vy = (Math.random() - 0.5) * 0.4;
        this.baseVx = this.vx;
        this.baseVy = this.vy;

        const rand = Math.random();
        if (rand > 0.98) {
          this.type = 'large-glow'; // Orange
          this.radius = Math.random() * 8 + 12;
        } else if (rand > 0.77) {
          this.type = 'accent-cyan'; // Orange
          this.radius = Math.random() * 3 + 3;
        } else {
          this.type = 'standard-node'; // Blue-gray Small Dot
          this.radius = Math.random() * 2 + 2.5;
        }
      }

      update() {
        const isOrangeNode = this.type === 'large-glow' || this.type === 'accent-cyan';

        // 1. ONLY push orange nodes away on hover
        if (isOrangeNode && mouse.x !== null && mouse.y !== null) {
          const dx = mouse.x - this.x;
          const dy = mouse.y - this.y;
          const distance = Math.sqrt(dx * dx + dy * dy);

          if (distance < mouse.radius) {
            const force = (mouse.radius - distance) / mouse.radius;
            const forceX = (dx / distance) * force * 0.15;
            const forceY = (dy / distance) * force * 0.15;

            this.vx -= forceX;
            this.vy -= forceY;
          } else {
            this.vx += (this.baseVx - this.vx) * 0.05;
            this.vy += (this.baseVy - this.vy) * 0.05;
          }
        } else {
          // Blue small dots completely ignore physics interaction and drift smoothly
          this.vx += (this.baseVx - this.vx) * 0.05;
          this.vy += (this.baseVy - this.vy) * 0.05;
        }

        const speed = Math.sqrt(this.vx * this.vx + this.vy * this.vy);
        if (speed > 2) {
          this.vx = (this.vx / speed) * 2;
          this.vy = (this.vy / speed) * 2;
        }

        this.x += this.vx;
        this.y += this.vy;

        if (this.x < 0 || this.x > canvas.width) {
          this.baseVx *= -1;
          this.vx *= -1;
        }
        if (this.y < 0 || this.y > canvas.height) {
          this.baseVy *= -1;
          this.vy *= -1;
        }
      }

      draw() {
        ctx.beginPath();
        if (this.type === 'large-glow') {
          const gradient = ctx.createRadialGradient(this.x, this.y, 0, this.x, this.y, this.radius);
          gradient.addColorStop(0, COLORS.neonCyan);
          gradient.addColorStop(0.3, COLORS.electricBlue);
          gradient.addColorStop(1, 'rgba(0, 242, 254, 0)');
          ctx.fillStyle = gradient;
          ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
          ctx.fill();
        } else {
          ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
          ctx.fillStyle = this.type === 'accent-cyan' ? COLORS.neonCyan : COLORS.slateDot;
          ctx.fill();
        }
      }
    }

    for (let i = 0; i < particleCount; i++) {
      particles.push(new Particle());
    }

    const animate = () => {
      const bgGrad = ctx.createLinearGradient(0, 0, canvas.width, canvas.height);
      bgGrad.addColorStop(0, COLORS.bgGradientStart);
      bgGrad.addColorStop(1, COLORS.bgGradientEnd);
      ctx.fillStyle = bgGrad;
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      // Connect blue nodes to each other under baseline limit 80
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const p1 = particles[i];
          const p2 = particles[j];

          if (p1.type === 'standard-node' && p2.type === 'standard-node') {
            const dx = p1.x - p2.x;
            const dy = p1.y - p2.y;
            const dist = Math.sqrt(dx * dx + dy * dy);

            if (dist < 110) {
              ctx.beginPath();
              ctx.moveTo(p1.x, p1.y);
              ctx.lineTo(p2.x, p2.y);
              ctx.strokeStyle = COLORS.slateLine;
              ctx.lineWidth = 1;
              ctx.stroke();
            }
          }
        }

        // 2. NEW HOVER INTERACTION: Draw connecting nodes to small blue dots when mouse passes by
        if (mouse.x !== null && mouse.y !== null && particles[i].type === 'standard-node') {
          const mDx = particles[i].x - mouse.x;
          const mDy = particles[i].y - mouse.y;
          const mDist = Math.sqrt(mDx * mDx + mDy * mDy);

          if (mDist < mouse.radius) {
            ctx.beginPath();
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(mouse.x, mouse.y);
            ctx.strokeStyle = COLORS.mouseLine; // Draws connection line to mouse
            ctx.lineWidth = 0.8;
            ctx.stroke();
          }
        }
      }

      particles.forEach(p => {
        p.update();
        p.draw();
      });

      animationFrameId = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseleave', handleMouseLeave);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed top-0 left-0 w-screen h-screen -z-10 pointer-events-none"
    />
  );
};
