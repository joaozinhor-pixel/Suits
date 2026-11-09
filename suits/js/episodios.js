const abas=document.getElementById('abas'),corpo=document.querySelector('#tabela tbody');
function mostrar(n){
  abas.querySelectorAll('button').forEach(b=>b.setAttribute('aria-pressed',String(+b.dataset.n===n)));
  corpo.innerHTML='';
  TODOS.filter(e=>e.temp===n).forEach(e=>{
    const tr=document.createElement('tr');
    tr.innerHTML='<td>'+e.n+'</td><td>'+e.ep+'</td><td>'+e.titulo+'</td><td>'+fmtData(e.data)+'</td><td>'+fmt(e.vi)+' mi</td><td>'+e.dir+'</td>';
    corpo.appendChild(tr);
  });
}
TEMPORADAS.forEach(t=>{
  const b=document.createElement('button');
  b.dataset.n=t.n;b.textContent='Temporada '+t.n;
  b.onclick=()=>mostrar(t.n);abas.appendChild(b);
});
mostrar(1);
