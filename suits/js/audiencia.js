const medias=TEMPORADAS.map(t=>media(t.eps.map(e=>e[2])));
const maxM=Math.max(...medias),barras=document.getElementById('barras');
medias.forEach((m,i)=>{
  const d=document.createElement('div');
  d.className='barra';
  d.innerHTML='<span class="rot">Temp. '+(i+1)+'</span><div class="fundo"><div class="preenche" style="width:'+(m/maxM*100)+'%">'+fmt(m)+' mi</div></div>';
  barras.appendChild(d);
});
const maxV=Math.max(...TODOS.map(e=>e.vi)),mini=document.getElementById('mini');
const CORES=['#c9a227','#e2c15a'];
TODOS.forEach(e=>{
  const b=document.createElement('div');
  b.style.height=(e.vi/maxV*100)+'%';
  b.style.background=CORES[e.temp%2];
  b.title='T'+e.temp+'E'+e.ep+' '+e.titulo+': '+fmt(e.vi)+' mi';
  mini.appendChild(b);
});
function lista(id,arr){
  document.getElementById(id).innerHTML=arr.map(e=>'<li>'+e.titulo+' (T'+e.temp+'E'+e.ep+'): '+fmt(e.vi)+' mi</li>').join('');
}
const ordem=[...TODOS].sort((a,b)=>b.vi-a.vi);
lista('top',ordem.slice(0,5));
lista('baixo',ordem.slice(-5).reverse());
