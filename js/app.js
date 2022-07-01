var prevBtn = document.getElementById('prev');
var nextBtn = document.getElementById('next');
var tanya = document.getElementById('tanya-img');
var john = document.getElementById('john-img');
var infoTanya = document.getElementById('info-tanya');
var infoJohn = document.getElementById('info-john');

prevBtn.addEventListener('click', prev);
nextBtn.addEventListener('click', next);

function prev() {
    tanya.classList.add('active-img');
    john.classList.remove('active-img');
    infoTanya.classList.add('active');
    infoJohn.classList.remove('active');
}
function next() {
    tanya.classList.remove('active-img');
    john.classList.add('active-img');
    infoTanya.classList.remove('active');
    infoJohn.classList.add('active');
}