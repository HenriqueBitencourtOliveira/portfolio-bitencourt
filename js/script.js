document.getElementById('login').addEventListener('submit', function(e){
    e.preventDefault();

    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    if (username === 'brasiliahenrique@gmail.com' && password === '123456') {
        window.location.href = 'cv.html';
    }else{
        alert("Usuario invalido")
    }
})