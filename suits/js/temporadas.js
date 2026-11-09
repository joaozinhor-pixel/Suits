const IMDB='https://www.imdb.com/title/tt1632701/';
const corpo=document.querySelector('#tabela tbody');
TEMPORADAS.forEach(t=>{
  const m=media(t.eps.map(e=>e[2]));
  const tr=document.createElement('tr');
  tr.innerHTML='<td>'+t.n+'ª</td><td>'+t.eps.length+'</td><td>'+fmtData(t.eps[0][1])+' a '+fmtData(t.eps[t.eps.length-1][1])+'</td><td>'+fmt(m)+' mi</td><td><a href="'+IMDB+'episodes?season='+t.n+'" target="_blank" rel="noopener">Ver no IMDb</a></td>';
  corpo.appendChild(tr);
});
