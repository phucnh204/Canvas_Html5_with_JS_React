import { useEffect, useRef } from "react";

const AnimatedCircle = () => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const context = canvas.getContext("2d");
    if (!context) return;

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    let x = canvas.width / 2;
    let y = canvas.height / 2;
    let radius = 1;
    let maxRadius = 150;
    let speed = 2;
    let growing = true;

    function draw() {
      context.clearRect(0, 0, canvas.width, canvas.height);
      context.beginPath();
      context.arc(x, y, radius, 0, Math.PI * 2);
      context.fillStyle = "red";
      context.fill();
      context.closePath();

      if (growing) {
        radius += speed;
        if (radius >= maxRadius) {
          growing = false;
          radius = 1;
        }
      } else {
        growing = true;
      }

      requestAnimationFrame(draw);
    }

    draw();
  }, []);

  return (
    <canvas ref={canvasRef} className="absolute top-0 left-0 w-full h-full" />
  );
};

export default AnimatedCircle;
