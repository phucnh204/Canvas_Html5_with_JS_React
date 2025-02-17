const canvas = document.getElementById("myCanvas2");
const ctx = canvas.getContext("2d");

// Thiết lập kích thước canvas
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

// Các thông số của hình bình hành
let x = 100,
  y = 50; // Điểm bắt đầu
let width = 50,
  height = 100;
let maxWidth = 900;
let speed = 3;
let skewX = 100; // Độ nghiêng
let growing = true;
let gradientOffset = 0; // Dịch chuyển màu gradient

// Hàm vẽ hình bình hành nghiêng chéo xuống
function drawParallelogram() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  // Tạo gradient từ trên xuống dưới và dịch dần theo thời gian
  let gradient = ctx.createLinearGradient(
    x,
    y + gradientOffset,
    x + width + skewX,
    y + height + gradientOffset
  );
  gradient.addColorStop(0, "blue");
  gradient.addColorStop(1, "white");

  ctx.fillStyle = gradient;
  ctx.beginPath();
  ctx.moveTo(x, y); // Góc trên trái
  ctx.lineTo(x + skewX, y + height); // Góc dưới trái
  ctx.lineTo(x + width + skewX, y + height); // Góc dưới phải
  ctx.lineTo(x + width, y); // Góc trên phải
  ctx.closePath();
  ctx.fill();

  // Điều chỉnh kích thước và vị trí
  if (growing) {
    width += speed; // Tăng kích thước
    gradientOffset += 2; // Dịch màu xuống dưới

    if (width >= maxWidth) {
      growing = false;
    }
  } else {
    width = 50; // Reset lại khi đạt max
    x = 100; // Đưa về vị trí ban đầu
    y = 50;
    gradientOffset = 0; // Reset gradient
    growing = true;
  }

  // Gọi lại frame tiếp theo
  requestAnimationFrame(drawParallelogram);
}

// Bắt đầu vẽ
requestAnimationFrame(drawParallelogram);
