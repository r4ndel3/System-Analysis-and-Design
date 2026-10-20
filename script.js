const button = document.getElementById('pindutan');
const titulo = document.getElementById('titulo');

button.addEventListener('click', function() {
    titulo.textContent = "Salamat sa Pagpindot!";
    titulo.style.color = "#28a745"; 
    document.body.style.backgroundColor = "#e2f0d9";
    alert("Gumana ang iyong JavaScript!");
});
