import { useEffect, useRef } from 'react';

const ParallelogramCanvas = () => {
  const canvasRef = useRef(null);
  const widthRef = useRef(50);
  const growingRef = useRef(true);
  const colorIndexRef = useRef(0);
  const animationRef = useRef(null);

  // Các thông số của hình bình hành
  const maxWidth = window.innerWidth * 0.8; // 80% màn hình
  const speed = 3;
  const skewX = 150; // Độ nghiêng
  const angle = 20 * (Math.PI / 180); // Góc xoay (20 độ)

  // Danh sách màu gradient
  const colors = ['red', 'violet', 'blue', 'green', 'purple', 'orange'];

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const drawParallelogram = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Lưu trạng thái gốc của canvas
      ctx.save();
      ctx.translate(100, 50);
      ctx.rotate(angle);

      // Tạo gradient
      const gradient = ctx.createLinearGradient(0, 0, widthRef.current + skewX, 100);
      gradient.addColorStop(0, colors[colorIndexRef.current]);
      gradient.addColorStop(1, 'white');

      ctx.fillStyle = gradient;
      ctx.beginPath();
      ctx.moveTo(0, 0);
      ctx.lineTo(skewX, 100);
      ctx.lineTo(widthRef.current + skewX, 100);
      ctx.lineTo(widthRef.current, 0);
      ctx.closePath();
      ctx.fill();

      // Phục hồi trạng thái gốc của canvas
      ctx.restore();

      // Điều chỉnh kích thước và vị trí
      if (growingRef.current) {
        widthRef.current += speed;

        if (widthRef.current >= maxWidth) {
          growingRef.current = false;
          colorIndexRef.current = (colorIndexRef.current + 1) % colors.length;
        }
      } else {
        widthRef.current = 50;
        growingRef.current = true;
      }

      // Tiếp tục vẽ frame tiếp theo
      animationRef.current = requestAnimationFrame(drawParallelogram);
    };

    animationRef.current = requestAnimationFrame(drawParallelogram);

    return () => {
      if (animationRef.current) cancelAnimationFrame(animationRef.current);
    };
  }, []);

  return <canvas ref={canvasRef} width={window.innerWidth} height={window.innerHeight}></canvas>;
};

export default ParallelogramCanvas;
