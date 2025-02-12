const canvas = document.getElementById("myCanvas");
const context = canvas.getContext("2d");

// Kích thước canvas bằng với kích thước màn hình
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let x = canvas.width / 2;
let y = canvas.height / 2;
let radius = 1; // Bán kính ban đầu
let maxRadius = 100; // Bán kính tối đa
let speed = 0.5; // Tốc độ tăng
let growing = true; // Trạng thái phóng to hay thu nhỏ

function draw() {
  context.clearRect(0, 0, canvas.width, canvas.height); // Xóa canvas
  context.beginPath();
  context.arc(x, y, radius, 0, Math.PI * 2);
  context.fillStyle = "red";
  context.fill();
  context.closePath();

  // Điều chỉnh kích thước
  if (growing) {
    radius += speed;
    if (radius >= maxRadius) {
      growing = false;
      radius = 10;
    }
  } else {
    radius -= speed;
    if (radius <= 10) growing = true;
  }

  requestAnimationFrame(draw); // Lặp lại animation
}

draw();
