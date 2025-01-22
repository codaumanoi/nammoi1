document.getElementById('ban-phao-hoa').addEventListener('click', function() {
  document.getElementById('end').style.animationPlayState = 'running';
});
const matKhau = "h2so";
const matKhau2 = "h2so4";
const matKhau3 = "H2SO";
const phaoHoa = document.getElementById("phao-hoa");
const matKhauInput = document.getElementById("mat-khau");
const xacNhanButton = document.getElementById("xac-nhan");
xacNhanButton.addEventListener("click", () => {
  if (matKhauInput.value === matKhau || matKhau2 === "h2so4" || matKhau3 === "H2SO") {
    matKhauInput.style.background = "#3e8e41";
    matKhauInput.style.color = "#fff";
  } else {
    matKhauInput.style.background = "#ff0000";
    matKhauInput.style.color = "#fff";
  }
});
xacNhanButton.addEventListener("click", () => {
  if (matKhauInput.value === matKhau || matKhau2 === "h2so4" || matKhau3 === "H2SO") {
const banPhaoHoaButton = document.getElementById('ban-phao-hoa');
// Tạo dòng chữ "Chúc mừng năm mới"
const chucMungNamMoiText = document.createElement('div');
chucMungNamMoiText.textContent = 'Chúc mừng năm mới!';
chucMungNamMoiText.style.position = 'absolute';
chucMungNamMoiText.style.top = '40%';
chucMungNamMoiText.style.left = '35%';
chucMungNamMoiText.style.transform = 'translate(-50%, -50%)';
chucMungNamMoiText.style.fontSize = '77px';
chucMungNamMoiText.style.color = 'red';
chucMungNamMoiText.style.fontWeight = 'bold';
chucMungNamMoiText.style.display = 'none';
document.body.appendChild(chucMungNamMoiText);
// Sự kiện click nút bắn pháo hoa
banPhaoHoaButton.addEventListener('click', () => {
  matKhauInput.style.display = 'none';
  xacNhanButton.style.display = 'none';
    // Lặp lại hiệu ứng pháo hoa
    setInterval(() => {
      for (let i = 0; i < 5; i++) {
        const x = Math.random() * canvas.width; // Vị trí ngẫu nhiên trên trục X
        const y = canvas.height; // Bắt đầu từ dưới đất
        const vy = -Math.random() * 10 - 5; // Tốc độ bay lên ngẫu nhiên
        const color = `hsl(${Math.random() * 360}, 100%, 50%)`; // Màu ngẫu nhiên
        phaoHoaArray.push(new PhaoHoa(x, y, vy, color)); // Thêm pháo hoa mới vào mảng
      }
    }, 2000);
    setTimeout(function() {
      window.location.href = "test.html";
    }, 17000);
    
    setTimeout(function() {
      window.location.href = "test2.html";
    }, 20000);
  
      // Hiển thị dòng chữ "Chúc mừng năm mới"
  chucMungNamMoiText.style.display = 'block';
  chucMungNamMoiText.style.opacity = 0;
  chucMungNamMoiText.style.transform = 'scale(0)';
  chucMungNamMoiText.style.transition = 'all 0.5s ease-in-out';

  // Hiệu ứng xuất hiện
  setTimeout(() => {
    chucMungNamMoiText.style.opacity = 1;
    chucMungNamMoiText.style.transform = 'scale(1)';
  }, 0);

  // Xóa dòng chữ "Chúc mừng năm mới" sau 2 giây
  setTimeout(() => {
    chucMungNamMoiText.style.opacity = 0;
    chucMungNamMoiText.style.transform = 'scale(0)';
  }, 2000);

  // Xóa dòng chữ "Chúc mừng năm mới" sau 2.5 giây
  setTimeout(() => {
    chucMungNamMoiText.style.display = 'none';
  }, 2500);

  // Hiển thị lời chúc ngay vị trí của ChucMungNamMoiText
  const loiChucText1 = document.getElementById('loi-chuc');
  loiChucText1.style.display = 'block';
  loiChucText1.style.opacity = 0;
  loiChucText1.style.transform = 'scale(0)';
  loiChucText1.style.transition = 'all 0.5s ease-in-out';
  loiChucText1.style.top = chucMungNamMoiText.style.top;
  loiChucText1.style.left = chucMungNamMoiText.style.left;

  // Hiệu ứng xuất hiện sau 2 giây
  setTimeout(() => {
    loiChucText1.style.opacity = 1;
    loiChucText1.style.transform = 'scale(1)';
  }, 2000);

  // Xóa lời chúc sau 2 giây
  setTimeout(() => {
    loiChucText1.style.opacity = 0;
    loiChucText1.style.transform = 'scale(0)';
  }, 4000);

  // Xóa lời chúc sau 2.5 giây
  setTimeout(() => {
    loiChucText1.style.display = 'none';
  }, 4500);
   // Hiển thị lời chúc ngay vị trí của ChucMungNamMoiText
   const loiChucText2 = document.getElementById('loi-chuc-2');
   loiChucText2.style.display = 'block';
   loiChucText2.style.opacity = 0;
   loiChucText2.style.transform = 'scale(0)';
   loiChucText2.style.transition = 'all 0.5s ease-in-out';
   loiChucText2.style.top = chucMungNamMoiText.style.top;
   loiChucText2.style.left = chucMungNamMoiText.style.left;
 
   // Hiệu ứng xuất hiện sau 2 giây
   setTimeout(() => {
     loiChucText2.style.opacity = 1;
     loiChucText2.style.transform = 'scale(1)';
   }, 4000);
 
   // Xóa lời chúc sau 2 giây
   setTimeout(() => {
     loiChucText2.style.opacity = 0;
     loiChucText2.style.transform = 'scale(0)';
   }, 6000);
 
   // Xóa lời chúc sau 2.5 giây
   setTimeout(() => {
     loiChucText2.style.display = 'none';
   }, 6500);

   // Hiển thị lời chúc ngay vị trí của ChucMungNamMoiText
  const loiChucText3 = document.getElementById('loi-chuc-3');
  loiChucText3.style.display = 'block';
  loiChucText3.style.opacity = 0;
  loiChucText3.style.transform = 'scale(0)';
  loiChucText3.style.transition = 'all 0.5s ease-in-out';
  loiChucText3.style.top = chucMungNamMoiText.style.top;
  loiChucText3.style.left = chucMungNamMoiText.style.left;

  // Hiệu ứng xuất hiện sau 2 giây
  setTimeout(() => {
    loiChucText3.style.opacity = 1;
    loiChucText3.style.transform = 'scale(1)';
  }, 6000);

  // Xóa lời chúc sau 2 giây
  setTimeout(() => {
    loiChucText3.style.opacity = 0;
    loiChucText3.style.transform = 'scale(0)';
  }, 8000);

  // Xóa lời chúc sau 2.5 giây
  setTimeout(() => {
    loiChucText3.style.display = 'none';
  }, 8500);
  // Hiển thị lời chúc ngay vị trí của ChucMungNamMoiText
  const loiChucText4 = document.getElementById('loi-chuc-4');
  loiChucText4.style.display = 'block';
  loiChucText4.style.opacity = 0;
  loiChucText4.style.transform = 'scale(0)';
  loiChucText4.style.transition = 'all 0.5s ease-in-out';
  loiChucText4.style.top = chucMungNamMoiText.style.top;
  loiChucText4.style.left = chucMungNamMoiText.style.left;

  // Hiệu ứng xuất hiện sau 2 giây
  setTimeout(() => {
    loiChucText4.style.opacity = 1;
    loiChucText4.style.transform = 'scale(1)';
  }, 8000);

  // Xóa lời chúc sau 2 giây
  setTimeout(() => {
    loiChucText4.style.opacity = 0;
    loiChucText4.style.transform = 'scale(0)';
  }, 10000);

  // Xóa lời chúc sau 2.5 giây
  setTimeout(() => {
    loiChucText4.style.display = 'none';
  }, 10500);

  // Hiển thị lời chúc ngay vị trí của ChucMungNamMoiText
  const loiChucText5 = document.getElementById('loi-chuc-5');
  loiChucText5.style.display = 'block';
  loiChucText5.style.opacity = 0;
  loiChucText5.style.transform = 'scale(0)';
  loiChucText5.style.transition = 'all 0.5s ease-in-out';
  loiChucText5.style.top = chucMungNamMoiText.style.top;
  loiChucText5.style.left = chucMungNamMoiText.style.left;

  // Hiệu ứng xuất hiện sau 2 giây
  setTimeout(() => {
    loiChucText5.style.opacity = 1;
    loiChucText5.style.transform = 'scale(1)';
  }, 10000);

  // Xóa lời chúc sau 2 giây
  setTimeout(() => {
    loiChucText5.style.opacity = 0;
    loiChucText5.style.transform = 'scale(0)';
  }, 12000);

  // Xóa lời chúc sau 2.5 giây
  setTimeout(() => {
    loiChucText5.style.display = 'none';
  }, 12500);
  // Hiển thị lời chúc ngay vị trí của ChucMungNamMoiText
  const loiChucText6 = document.getElementById('loi-chuc-6');
  loiChucText6.style.display = 'block';
  loiChucText6.style.opacity = 0;
  loiChucText6.style.transform = 'scale(0)';
  loiChucText6.style.transition = 'all 0.5s ease-in-out';
  loiChucText6.style.top = chucMungNamMoiText.style.top;
  loiChucText6.style.left = chucMungNamMoiText.style.left;
  // Hiệu ứng xuất hiện sau 2 giây
  setTimeout(() => {
    loiChucText6.style.opacity = 1;
    loiChucText6.style.transform = 'scale(1)';
  }, 14000);

  // Xóa lời chúc sau 2 giây
  setTimeout(() => {
    loiChucText6.style.opacity = 0;
    loiChucText6.style.transform = 'scale(0)';
  }, 16000);

  // Ẩn nút mờ dần sau khi ấn
  banPhaoHoaButton.style.opacity = 0;
  setTimeout(() => {
    banPhaoHoaButton.style.display = 'none';
  }, 500);
})
const canvas = document.getElementById('phao-hoa');
const ctx = canvas.getContext('2d');
const explosionSound = document.getElementById('explosion-sound');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

class PhaoHoa {
  constructor(x, y, vy, color) {
    this.x = x;
    this.y = y;
    this.vy = vy; // Tốc độ bay lên
    this.color = color;
    this.r = 2; // Bán kính ban đầu
    this.exploded = false; // Trạng thái nổ
    this.particles = []; // Các hạt pháo hoa sau khi nổ
    this.smokeParticles = []; // Các hạt khói sau khi nổ
  }

  update() {
    if (!this.exploded) {
      // Bay lên
      this.y += this.vy;
      this.vy += 0.05; // Trọng lực kéo xuống

      // Khi đạt độ cao nhất định, pháo hoa nổ
      if (this.vy >= 0) {
        this.explode();
      }
    } else {
      // Cập nhật các hạt pháo hoa sau khi nổ
      for (let i = this.particles.length - 1; i >= 0; i--) {
        this.particles[i].update();
        if (this.particles[i].r <= 0) {
          this.particles.splice(i, 1);
        }
      }

      // Cập nhật các hạt khói
      for (let i = this.smokeParticles.length - 1; i >= 0; i--) {
        this.smokeParticles[i].update();
        if (this.smokeParticles[i].r <= 0) {
          this.smokeParticles.splice(i, 1);
        }
      }
    }
  }

  explode() {
    this.exploded = true;
    explosionSound.currentTime = 0.4; // Đặt lại thời gian âm thanh
    explosionSound.play(); // Phát âm thanh nổ

    // Tạo các hạt pháo hoa
    for (let i = 0; i < 100; i++) {
      const angle = Math.random() * Math.PI * 2;
      const speed = Math.random() * 5 + 2;
      const vx = Math.cos(angle) * speed;
      const vy = Math.sin(angle) * speed;
      this.particles.push(new Particle(this.x, this.y, vx, vy, this.color));
    }

    // Tạo các hạt khói
    for (let i = 0; i < 20; i++) {
      const angle = Math.random() * Math.PI * 2;
      const speed = Math.random() * 2 + 1;
      const vx = Math.cos(angle) * speed;
      const vy = Math.sin(angle) * speed;
      this.smokeParticles.push(new Smoke(this.x, this.y, vx, vy));
    }
  }

  draw() {
    if (!this.exploded) {
      // Vẽ pháo hoa đang bay lên
      ctx.beginPath();
      ctx.arc(this.x, this.y, this.r, 0, Math.PI * 2);
      ctx.fillStyle = this.color;
      ctx.fill();
    } else
          // Vẽ các hạt pháo hoa sau khi nổ
          this.particles.forEach(particle => particle.draw());

          // Vẽ các hạt khói
          this.smokeParticles.forEach(smoke => smoke.draw());
        }
      }
    
    class Particle {
      constructor(x, y, vx, vy, color) {
        this.x = x;
        this.y = y;
        this.vx = vx;
        this.vy = vy;
        this.color = color;
        this.r = Math.random() * 3 + 1;
        this.gravity = 0.1; // Trọng lực
      }
    
      update() {
        this.x += this.vx;
        this.y += this.vy;
        this.vy += this.gravity; // Áp dụng trọng lực
        this.r -= 0.05; // Giảm kích thước hạt pháo hoa
      }
    
      draw() {
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.r, 0, Math.PI * 2);
        ctx.fillStyle = this.color;
        ctx.fill();
      }
    }
    
    class Smoke {
      constructor(x, y, vx, vy) {
        this.x = x;
        this.y = y;
        this.vx = vx;
        this.vy = vy;
        this.r = Math.random() * 10 + 5; // Bán kính khói
        this.opacity = 1; // Độ trong suốt
      }
    
      update() {
        this.x += this.vx;
        this.y += this.vy;
        this.r -= 0.1; // Giảm kích thước khói
        this.opacity -= 0.02; // Giảm độ trong suốt
      }
    
      draw() {
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.r, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(169, 169, 169, ${this.opacity})`; // Màu khói
        ctx.fill();
      }
    }
    
    let phaoHoaArray = [];
    
    // Sự kiện click nút bắn pháo hoa
    banPhaoHoaButton.addEventListener('click', () => {
      const x = Math.random() * canvas.width; // Vị trí ngẫu nhiên trên trục X
      const y = canvas.height; // Bắt đầu từ dưới đất
      const vy = -Math.random() * 10 - 5; // Tốc độ bay lên ngẫu nhiên
      const color = `hsl(${Math.random() * 360}, 100%, 50%)`; // Màu ngẫu nhiên
      phaoHoaArray.push(new PhaoHoa(x, y, vy, color)); // Thêm pháo hoa mới vào mảng
    });
    
    function animate() {
      ctx.fillStyle = 'rgba(0, 0, 0, 0.1)'; // Tạo hiệu ứng mờ dần
      ctx.fillRect(0, 0, canvas.width, canvas.height);
    
      for (let i = phaoHoaArray.length - 1; i >= 0; i--) {
        phaoHoaArray[i].update();
        phaoHoaArray[i].draw();
    
        // Xóa pháo hoa khỏi mảng nếu đã nổ xong và không còn hạt nào
        if (phaoHoaArray[i].exploded && phaoHoaArray[i].particles.length === 0 && phaoHoaArray[i].smokeParticles.length === 0) {
          phaoHoaArray.splice(i, 1);
        }
      }
    
      requestAnimationFrame(animate);
    }
    
    animate();
    backgroundMusic.play();
  } else {
    alert("Mật khẩu không đúng!");
    backgroundMusic.pause();
  }
});