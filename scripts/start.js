const startBtn = document.getElementById('startBtn');

startBtn.addEventListener('click', (e) =>{
    e.preventDefault();
    window.location.href = '/notes';
});