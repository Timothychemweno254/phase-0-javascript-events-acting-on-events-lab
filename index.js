function moveDodgerLeft() {
    const dodger = document.getElementById('dodger');
    const left = parseInt(window.getComputedStyle(dodger).left, 10);
    dodger.style.left = `${left - 4}px`;
  }
  
  function moveDodgerRight() {
    const dodger = document.getElementById('dodger');
    const left = parseInt(window.getComputedStyle(dodger).left, 10);
    dodger.style.left = `${left + 4}px`;
  }
  
  document.addEventListener('keydown', function(e) {
    if (e.key === 'ArrowLeft') {
      moveDodgerLeft();
    } else if (e.key === 'ArrowRight') {
      moveDodgerRight();
    }
  });
  