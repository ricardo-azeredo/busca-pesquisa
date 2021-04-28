function aulaSearch() {
  var filter, ul, li, a, i, txtValue;
  let input = document.getElementById('busca');
  filter= input.value.toUpperCase();
  ul = document.getElementById('buscaAula');
  li = ul.getElementsByTagName('li');

  for(i=0; i< li.length; i++){
    a= li[i].getElementsByTagName('a')[0];
    txtValue = a.textContent || a.innerText;
    (txtValue.toUpperCase().indexOf(filter) > -1) ?
      li[i].style.display ="" :
      li[i].style.display = "none";     
  }
}