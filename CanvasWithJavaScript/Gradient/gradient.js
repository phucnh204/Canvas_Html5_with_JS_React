const canvas = document.getElementById("myCanvas2");
const ctx = canvas.getContext("2d");

// Thiết lập kích thước canvas
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

// Các thông số của hình bình hành
let x = 100,
  y = 50;
let width = 50,
  height = 100;
maxWidth = window.innerWidth * 0.8; // 80% màn hình
let speed = 3;
let skewX = 150; // Độ nghiêng
let angle = 20 * (Math.PI / 180); // Góc xoay (20 độ)
let growing = true;
let gradientOffset = 0; // Dịch chuyển màu gradient

// Danh sách màu gradient
const colors = ["red", "violet", "blue", "green", "purple", "orange"];
let colorIndex = 0;

function drawParallelogram() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  // Lưu trạng thái gốc của canvas
  ctx.save();

  // Dịch chuyển đến vị trí vẽ để xoay
  ctx.translate(x, y);
  ctx.rotate(angle); // Xoay theo góc mong muốn

  // Tạo gradient dịch dần theo thời gian
  let gradient = ctx.createLinearGradient(0, 0, width + skewX, height);
  gradient.addColorStop(0, colors[colorIndex]); // Màu bắt đầu
  gradient.addColorStop(1, "white"); // Màu trắng ở cuối

  ctx.fillStyle = gradient;
  ctx.beginPath();
  ctx.moveTo(0, 0); // Góc trên trái
  ctx.lineTo(skewX, height); // Góc dưới trái
  ctx.lineTo(width + skewX, height); // Góc dưới phải
  ctx.lineTo(width, 0); // Góc trên phải
  ctx.closePath();
  ctx.fill();

  // Phục hồi trạng thái gốc của canvas
  ctx.restore();

  // Điều chỉnh kích thước và vị trí
  if (growing) {
    width += speed; // Tăng kích thước
    gradientOffset += 2; // Dịch màu xuống dưới

    if (width >= maxWidth) {
      growing = false;

      // Đổi màu khi đạt maxWidth
      colorIndex = (colorIndex + 1) % colors.length;
    }
  } else {
    width = 50; // Reset lại khi đạt max
    gradientOffset = 0; // Reset gradient
    growing = true;
  }

  // Gọi lại frame tiếp theo
  requestAnimationFrame(drawParallelogram);
}

// Bắt đầu vẽ
requestAnimationFrame(drawParallelogram);
