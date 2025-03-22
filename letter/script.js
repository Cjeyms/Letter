function openLetter() {
    document.getElementById('envelope').style.display = 'none';
    document.getElementById('letterContent').style.display = 'block';
    document.getElementById('logo').style.display = 'none';
    document.getElementById('clickText').style.display = 'none';
    document.getElementById('gif').style.display = 'none';
  }

  function closeLetter() {
    document.getElementById('letterContent').style.display = 'none';
    document.getElementById('envelope').style.display = 'block';
    document.getElementById('logo').style.display = 'block';
    document.getElementById('clickText').style.display = 'block';
    document.getElementById('gif').style.display = 'block';
  }