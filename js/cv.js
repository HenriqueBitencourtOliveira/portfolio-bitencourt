setTimeout(function() {
    document.querySelector('.loading-screen').style.display = 'none';
    document.querySelector('.content').style.display = 'block';
    
    const myTxt = document.querySelector('.myTxt');
    typeWriter(myTxt);
}, 2000);

function typeWriter(el) {
    const mainText = el.innerHTML.split('');
    el.innerHTML = '';
    mainText.forEach(function(letter, i) {
        setTimeout(function() {
            el.innerHTML += letter;
        }, 60 * i);
    });
}



document.getElementById('exit').addEventListener('click', function() {
    window.location.href = 'index.html';
});