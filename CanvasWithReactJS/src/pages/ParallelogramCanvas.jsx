// import { useEffect, useRef, useState } from 'react';

// const ParallelogramCanvas = () => {
//   const canvasRef = useRef<HTMLCanvasElement>(null);
//   const [growing, setGrowing] = useState(true);
//   const [width, setWidth] = useState(50);
//   const [gradientOffset, setGradientOffset] = useState(0);
//   const [colorIndex, setColorIndex] = useState(0);
// console.log('====================================');
// console.log(gradientOffset);
// console.log('====================================');
//   // Các thông số của hình bình hành
//   const maxWidth = window.innerWidth * 0.8; // 80% màn hình
//   const speed = 3;
//   const skewX = 150; // Độ nghiêng
//   const angle = 20 * (Math.PI / 180); // Góc xoay (20 độ)
  
//   // Danh sách màu gradient
//   const colors = ['red', 'violet', 'blue', 'green', 'purple', 'orange'];

//   useEffect(() => {
//     const canvas = canvasRef.current;
//     if (!canvas) return;
    
//     const ctx = canvas.getContext('2d');
//     if (!ctx) return;

//     const drawParallelogram = () => {
//       ctx.clearRect(0, 0, canvas.width, canvas.height);

//       // Lưu trạng thái gốc của canvas
//       ctx.save();

//       // Dịch chuyển đến vị trí vẽ để xoay
//       ctx.translate(100, 50); // Vị trí góc trên trái của hình
//       ctx.rotate(angle); // Xoay theo góc mong muốn

//       // Tạo gradient dịch dần theo thời gian
//       const gradient = ctx.createLinearGradient(0, 0, width + skewX, 100);
//       gradient.addColorStop(0, colors[colorIndex]); // Màu bắt đầu
//       gradient.addColorStop(1, 'white'); // Màu trắng ở cuối

//       ctx.fillStyle = gradient;
//       ctx.beginPath();
//       ctx.moveTo(0, 0); // Góc trên trái
//       ctx.lineTo(skewX, 100); // Góc dưới trái
//       ctx.lineTo(width + skewX, 100); // Góc dưới phải
//       ctx.lineTo(width, 0); // Góc trên phải
//       ctx.closePath();
//       ctx.fill();

//       // Phục hồi trạng thái gốc của canvas
//       ctx.restore();

//       // Điều chỉnh kích thước và vị trí
//       if (growing) {
//         setWidth((prevWidth) => prevWidth + speed); // Tăng kích thước
//         setGradientOffset((prevOffset) => prevOffset + 2); // Dịch màu xuống dưới

//         if (width >= maxWidth) {
//           setGrowing(false);

//           // Đổi màu khi đạt maxWidth
//           setColorIndex((prevIndex) => (prevIndex + 1) % colors.length);
//         }
//       } else {
//         setWidth(50); // Reset lại khi đạt max
//         setGradientOffset(0); // Reset gradient
//         setGrowing(true);
//       }

//       // Gọi lại frame tiếp theo
//       requestAnimationFrame(drawParallelogram);
//     };

//     // Bắt đầu vẽ
//     requestAnimationFrame(drawParallelogram);
//   }, [width, growing, colorIndex, maxWidth]);

//   return <canvas ref={canvasRef} width={window.innerWidth} height={window.innerHeight}></canvas>;
// };

// export default ParallelogramCanvas;
