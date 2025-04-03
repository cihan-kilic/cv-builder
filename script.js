document.addEventListener("DOMContentLoaded", function () {
    const profilePicInput = document.getElementById("profilePicInput");
    const profilePic = document.getElementById("profile-pic");

    // Profil fotoğrafını değiştirme
    profilePicInput.addEventListener("change", function (event) {
        const file = event.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onload = function (e) {
                profilePic.src = e.target.result;
            };
            reader.readAsDataURL(file);
        }
    });

    // Profil resmine tıklayınca dosya seçme
    profilePic.addEventListener("click", function () {
        profilePicInput.click();
    });

    // LocalStorage ile bilgileri kaydetme
    const editableElements = document.querySelectorAll("[contenteditable='true']");
    
    // Verileri kaydetme
    editableElements.forEach(element => {
        element.addEventListener("input", function () {
            localStorage.setItem(element.id, element.innerText);
        });
    });

    // Sayfa açıldığında bilgileri geri yükleme
    editableElements.forEach(element => {
        const savedData = localStorage.getItem(element.id);
        if (savedData) {
            element.innerText = savedData;
        }
    });
});
