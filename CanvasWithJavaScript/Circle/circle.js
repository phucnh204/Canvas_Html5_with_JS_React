const canvas = document.getElementById("myCanvas");
const context = canvas.getContext("2d");

// Thiết lập kích thước canvas
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let x = canvas.width / 2;
let y = canvas.height / 2;
let radius = 1; // Bán kính ban đầu
let maxRadius = 100; // Bán kính tối đa
let speed = 1; // Tốc độ tăng
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
      radius = 1;
    }
  } else {
    growing = true;
  }

  requestAnimationFrame(draw);

  // Cập nhật kích thước mỗi giây
  // setInterval(() => {
  //   if (growing) {
  //     radius += 1;
  //     if (radius >= maxRadius) growing = false;
  //   } else {
  //     radius -= 1;
  //     if (radius <= initialRadius) growing = true;
  //   }
  //   draw();
  // }, 1000);
}

draw();
