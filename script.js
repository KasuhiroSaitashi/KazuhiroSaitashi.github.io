function toggleMusic() {
    let button = document.getElementById("music-button");
    let audio = document.getElementById("bg-music");
    if (audio.paused) {
      audio.play();
      button.innerHTML = "||";
    } else {
      audio.pause();
      button.innerHTML = "/\\";
    }
  }
  
  document.addEventListener('mousemove', (e) => {
      const object = document.getElementById('cursor_shade');
      const mouseX = e.clientX;
      const mouseY = e.clientY;
  
      object.style.left = mouseX - (5*16) + 'px';
      object.style.top = mouseY - (5*16) + 'px';
  });
