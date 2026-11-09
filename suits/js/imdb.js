const links=document.getElementById('links');
for(let n=1;n<=9;n++){
  const b=document.createElement('button');
  b.textContent='Temporada '+n;
  b.onclick=()=>window.open('https://www.imdb.com/title/tt1632701/episodes?season='+n,'_blank','noopener');
  links.appendChild(b);
}
