document.addEventListener("DOMContentLoaded", function () {
    const updateButton = document.getElementById("updateCv");

    function updateCV() {
        document.getElementById("cvName").innerText = document.getElementById("input-name").value || "[Ad Soyad]";
        document.getElementById("cvTitle").innerText = document.getElementById("input-title").value || "[Meslek]";
        document.getElementById("cvEmail").innerText = document.getElementById("input-email").value || "[E-Posta]";
        document.getElementById("cvPhone").innerText = document.getElementById("input-phone").value || "[Telefon]";
        document.getElementById("cvLinkedin").href = document.getElementById("input-linkedin").value || "#";
        document.getElementById("cvGithub").href = document.getElementById("input-github").value || "#";
        document.getElementById("cvAbout").innerText = document.getElementById("input-about").value || "[Kendinizi Tanıtın]";
    }

    updateButton.addEventListener("click", updateCV);
});
