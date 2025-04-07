// Profil resmi yükleme
document.getElementById('profilePicInput').addEventListener('change', function () {
    const file = this.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = function (e) {
        document.getElementById('profile-pic').src = e.target.result;
      };
      reader.readAsDataURL(file);
    }
  });
  
  // Tüm contenteditable alanlara odaklandığında stil ekleme
  document.querySelectorAll('[contenteditable="true"]').forEach(element => {
    element.addEventListener('focus', () => {
      element.style.outline = '2px solid #0077cc';
      element.style.backgroundColor = '#f0f8ff';
    });
    element.addEventListener('blur', () => {
      element.style.outline = 'none';
      element.style.backgroundColor = 'transparent';
    });
  });
  