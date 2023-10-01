let elementosDuvida = document.querySelectorAll('.duvida')

elementosDuvida.forEach(function(duvida){
    duvida.addEventListener('click', function(){
        duvida.classList.toggle('ativa')
    })
})



  // Função para rolar suavemente para a seção alvo
  function scrollToSection(event) {
    event.preventDefault();
    const targetId = event.target.getAttribute("href").substring(1); // Pega o ID da seção alvo
    const targetSection = document.getElementById(targetId); // Obtém a seção alvo
    if (targetSection) {
      window.scrollTo({
        top: targetSection.offsetTop,
        behavior: "smooth",
      });
    }
  }

  const scrollLinks = document.querySelectorAll("[data-scroll]");
  scrollLinks.forEach((link) => {
    link.addEventListener("click", scrollToSection);
  });

