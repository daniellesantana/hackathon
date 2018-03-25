$(document).ready(function() {
  $('.carrossel').slick({
    dots: true,
    infinite: true,
    speed: 300,
    slidesToShow: 1,
    adaptiveHeight: true
  });



  var aba1 = document.getElementById('aba1');
  var aba2 = document.getElementById('aba2');
  var aba3 = document.getElementById('aba3');
  var aba1_conteudo = document.getElementById('aba1-conteudo');
  var aba2_conteudo = document.getElementById('aba2-conteudo');
  var aba3_conteudo = document.getElementById('aba3-conteudo');

  aba1.addEventListener('click', exibeAba1);
  aba2.addEventListener('click', exibeAba2);
  aba3.addEventListener('click', exibeAba3);

  function exibeAba1() {
    aba1.classList.add('selecionada');
    aba2.classList.remove('selecionada');
    aba3.classList.remove('selecionada');

    aba1_conteudo.classList.add('visivel');
    aba2_conteudo.classList.remove('visivel');
    aba3_conteudo.classList.remove('visivel');
  }

  function exibeAba2() {
    aba1.classList.remove('selecionada');
    aba2.classList.add('selecionada');
    aba3.classList.remove('selecionada');

    aba1_conteudo.classList.remove('visivel');
    aba2_conteudo.classList.add('visivel');
    aba3_conteudo.classList.remove('visivel');
  }

  function exibeAba3() {
    aba1.classList.remove('selecionada');
    aba2.classList.remove('selecionada');
    aba3.classList.add('selecionada');

    aba1_conteudo.classList.remove('visivel');
    aba2_conteudo.classList.remove('visivel');
    aba3_conteudo.classList.add('visivel');
  }
});
